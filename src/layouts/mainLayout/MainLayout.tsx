import { Layout } from 'antd'
import Head from 'next/head'
import React, { useState } from 'react'
import { Footer } from './components/Footer'
import {
  Header,
  SideMenu,
  SideMenuItems,
  LogoTitle,
  PageContainer,
  MobileDrawer
} from './components'
import { useAuth } from '../../hooks/useAuth'
import { PageLoading } from '../../components/PageLoading'
import { activeAuth } from '../../utils/constants'
import useLocalStorage from '../../hooks/useLocalStorage'

const MainLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useLocalStorage<boolean>('collapsed', false)
  const [drawerVisible, setDrawerVisible] = useState(false)

  const { user, logout } = useAuth({
    redirectTo: '/'
  })

  const toggle = () => {
    if (window.innerWidth >= 576) {
      setCollapsed(!collapsed)
    } else {
      setDrawerVisible(!drawerVisible)
    }
  }

  if (!user && activeAuth) {
    return <PageLoading />
  }

  return (
    <Layout
      style={{
        minHeight: '100vh'
      }}
    >
      <Head>
        <title>SIM Consultas - Governança de Parceiros</title>
      </Head>
      <SideMenu
        collapsed={collapsed}
        setCollapsed={() => {
          setCollapsed(!collapsed)
        }}
      >
        <LogoTitle
          collapsed={collapsed}
          title={'SIMConsultas'}
          image={'/logo-simconsultas-notext.png'}
        />

        <SideMenuItems
          collapsed={collapsed}
          closeDrawer={() => setDrawerVisible(false)}
        />
      </SideMenu>
      <PageContainer collapsed={collapsed}>
        <Header
          collapsed={collapsed}
          handleToggle={toggle}
          logout={() => logout()}
          userInfo={{
            userId: user?.sub,
            company: user?.company,
            userName: user?.name
          }}
        />
        <Layout.Content
          style={{
            margin: '20px 16px 15px 16px'
          }}
        >
          {children}
        </Layout.Content>
        <Layout.Footer>
          <Footer title={`SIM Consultas © ${new Date().getFullYear()}`} />
        </Layout.Footer>
      </PageContainer>

      <MobileDrawer
        drawerVisible={drawerVisible}
        closeDrawer={() => setDrawerVisible(false)}
      >
        <LogoTitle collapsed={collapsed} />

        <SideMenuItems
          collapsed={collapsed}
          style={{ minHeight: '100vh' }}
          closeDrawer={() => setDrawerVisible(false)}
        />
      </MobileDrawer>
    </Layout>
  )
}

export default MainLayout
