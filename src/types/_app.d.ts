import { AppProps } from 'next/app'
import React from 'react'
import {
  NextComponentType,
  NextPageContext
} from 'next/dist/next-server/lib/utils'

/**
 * Extends AppProps with a Layout variable that can be used to set a specific
 * layout inside the page component
 */
export type AppPropsWithLayout<P = unknown> = AppProps<P> & {
  Component: PageWithLayout<P>
}

export type PageWithLayout<P = unknown> = NextComponentType<
  NextPageContext,
  unknown,
  P
> & {
  Layout: React.FC
}
