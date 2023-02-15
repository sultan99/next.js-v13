'use client'
import type {ReactNode} from 'react'
import type {Locale, Messages} from '@/types/i18n'

import {I18nProvider} from '@lingui/react'
import {en, ru} from 'make-plural/plurals'
import {i18n} from '@lingui/core'
import {useEffect} from 'react'


type Props = {
  locale: Locale
  messages: Messages
  children: ReactNode
}

const pluralsList = {en ,ru}

const isServer = (): boolean => typeof window === `undefined`

const setLocale = (locale: Locale, messages: Messages) => {
  if (i18n.locale === locale) return 
  i18n.load(locale, messages)
  i18n.loadLocaleData(locale, {plurals: pluralsList[locale]})
  i18n.activate(locale)
}

const Providers = ({locale, messages, children}: Props) => {
  useEffect(() => {
    setLocale(locale, messages)
  }, [locale, messages])

  if (isServer() || i18n.locale === undefined) {
    setLocale(locale, messages)
  }
  
  return (
    <I18nProvider i18n={i18n}>
      {children}
    </I18nProvider>
  )
}

export default Providers
