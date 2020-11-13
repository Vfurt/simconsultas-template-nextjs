import React from 'react'
import Head from 'next/head'
import { Layout } from 'antd'
import { NextPage } from 'next'
import styled from 'styled-components'
import { Logo, Footer } from './mainLayout/components'
import { useAuth } from '../hooks/useAuth'
import { PageLoading } from '../components/PageLoading'
import { useAbsoluteUrl } from '../hooks/useAbsoluteUrl'

const Title = styled.div`
  display: inline-block;
  color: #001529;
  font-weight: 600;
  font-size: 20px;
  font-family: 'Arial';
  vertical-align: middle;
  cursor: default;
`

const ColoredLayout = styled(Layout)`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    167deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 45%,
    rgba(0, 255, 51, 1) 200%
  );
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
`

type Props = {
  title?: string
  children: React.ReactNode
}
const EmptyLayout: React.FC<Props> = ({
  children,
  title = 'SIM Consultas - Governança de Parceiros'
}) => {
  const { origin } = useAbsoluteUrl()
  const { loading } = useAuth({
    redirectTo: `${origin}/general-view`,
    redirectIfFound: true
  })

  if (loading) {
    return (
      <>
        <PageLoading />
      </>
    )
  }

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <ColoredLayout>
        <Layout.Header
          style={{
            background: '#fff',
            boxShadow: '0 1px 4px rgba(0,21,41,.08)',
            display: 'flex'
          }}
        >
          <div>
            <div style={{ display: 'inline-block' }}>
              <Title>SIMConsultas</Title>
              <Logo src="/logo-simconsultas-notext.png" alt="logo" />
            </div>
          </div>
        </Layout.Header>
        <Layout.Content>{children}</Layout.Content>
        <Layout.Footer style={{ background: 'inherit' }}>
          <Footer title={'SIM Consultas'} />
        </Layout.Footer>
      </ColoredLayout>
    </Layout>
  )
}

export const getLayout: NextPage = page => <EmptyLayout>{page}</EmptyLayout>

export default EmptyLayout
