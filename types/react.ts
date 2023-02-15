import type { FC as RFC, ReactNode } from 'react'

type Params = {
  lang: string
}

type PageProps = {
  params: Params
  children?: ReactNode
}

export type FC<P = {}> = RFC<{ children?: ReactNode } & P>

export type PageType<P = {}> = (props: PageProps & P) => JSX.Element

export type ServerPage<P = {}> = (props: PageProps & P) => Promise<JSX.Element>

