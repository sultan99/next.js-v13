import type { NextRequest } from 'next/server'

import Negotiator from 'negotiator'
import linguiConfig from './lingui.config.js'
import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'


const YEAR = 365 * 24 * 60 * 60
const locales = linguiConfig.locales
const defaultLocale = linguiConfig.sourceLocale

const getPreferredLocale = (request: NextRequest) => {
  const acceptLanguage = request.headers.get('accept-language') || ''
  const headers: Negotiator.Headers = { 'accept-language': acceptLanguage}
  const languages = new Negotiator({headers}).languages()
  return match(languages, locales, defaultLocale)
}

const setLocaleCookie = (locale?: string) => (localeNext: string, response: NextResponse) => {
  if (locale === localeNext) return
  response.cookies.set({
    name: 'NEXT_LOCALE',
    value: localeNext,
    maxAge: YEAR,
  })
}

export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname.replace(/^\/+/, '')
  const localeUrl = locales.find(locale => pathname.startsWith(`${locale}`))
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  const setCookie = setLocaleCookie(localeCookie)
  
  if (localeUrl) {
    const response = NextResponse.next()
    setCookie(localeUrl, response)
    return response
  }
  
  const locale = localeCookie || getPreferredLocale(request)
  const url = new URL(`/${locale}/${pathname}`, request.url)
  const response = NextResponse.redirect(url)
  setCookie(locale, response)
  return response
}

export const config = {
  matcher: '/((?!api|static|_next|.*\\..*).*)'
}
