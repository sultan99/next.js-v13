import type {Locale} from '@/types/i18n'
import type {ReactNode} from 'react'

import './globals.css'
import Providers from './providers'
import {messages as enMessages} from '@/locales/en/messages'
import {messages as ruMessages} from '@/locales/ru/messages'


type PageProps = {
  params: {lang: Locale}
  children?: ReactNode
}

const messages = {
  en: enMessages,
  ru: ruMessages
}

const Layout = ({params: {lang}, children}: PageProps) => (
  <html lang={lang}>
    <head />
    <body>
      <Providers locale={lang} messages={messages[lang]}>
        {children}
      </Providers>
    </body>
  </html>
)

export default Layout
