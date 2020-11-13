import React from 'react'
import { ConfigProvider } from 'antd'
import ptBr from 'antd/lib/locale/pt_BR'
import moment from 'moment'
import { AppPropsWithLayout } from '../types/_app'

const EmptyLayout = ({ children }) => children

/**
 * Main Component that initializes all pages.
 * Can be used to store app state
 * https://nextjs.org/docs/advanced-features/custom-app
 * @param Component
 * @param pageProps
 * @constructor
 */
const MyApp: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  moment.locale('pt-br')

  const Layout = Component.Layout || EmptyLayout

  return (
    <ConfigProvider locale={ptBr}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  )
}

export default MyApp
