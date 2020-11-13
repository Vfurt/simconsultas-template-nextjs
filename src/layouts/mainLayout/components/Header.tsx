import { Layout, Button, Col, Statistic, Divider, Tooltip, Row } from 'antd'
import styled from 'styled-components'
import { Logo } from './Logo'
import Link from 'next/link'
import React from 'react'
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { AppsMenu } from '../../../components/AppsMenu'

const TriggerBlock = styled.div`
  display: inline-block;
  height: 100%;
`

const StyledImageBlock = styled(TriggerBlock)`
  @media (min-width: 576px) {
    display: none !important;
  }

  padding-left: 24px;
`

const MobileLogo = styled(Logo)`
  height: 46px;
  vertical-align: -24px;
  margin-right: 10px;
`
// const {Header} = Layout

// const WhiteHeader = styled(Header)`
//         background: #fff,
//         padding: 0,
//         boxShadow: 0 1px 4px rgba(0,21,41,.08),
//         display: flex
// `

type UserInfoType = {
  userId: string
  userName: string
  company: string
}

type Props = {
  collapsed?: boolean
  handleToggle?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  userInfo: UserInfoType
  logout: () => void
}

const Header: React.FC<Props> = ({
  collapsed,
  handleToggle,
  userInfo,
  logout
}) => {
  return (
    <Layout.Header
      style={{
        background: '#fff',
        padding: 0,
        boxShadow: '0 1px 4px rgba(0,21,41,.08)',
        display: 'flex'
      }}
    >
      <Link href="/">
        <a>
          <StyledImageBlock>
            <MobileLogo src="/logo-simconsultas-notext.png" alt="logo" />
          </StyledImageBlock>
        </a>
      </Link>
      <TriggerBlock>
        {collapsed ? (
          <MenuUnfoldOutlined
            onClick={handleToggle}
            style={{
              fontSize: 20,
              verticalAlign: 'middle',
              marginLeft: 10
            }}
          />
        ) : (
          <MenuFoldOutlined
            onClick={handleToggle}
            style={{
              fontSize: 20,
              verticalAlign: 'middle',
              marginLeft: 10
            }}
          />
        )}
      </TriggerBlock>
      {/* if isAuthenticated */}
      <div
        style={{
          marginLeft: 'auto'
        }}
      >
        <Row
          gutter={20}
          justify="end"
          style={{ alignItems: 'center', marginRight: 10 }}
        >
          <Col>
            <Statistic
              title="Empresa"
              value={userInfo.company}
              valueStyle={{
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: -10
              }}
            />
          </Col>
          <Divider type={'vertical'}></Divider>
          <Col>
            <Statistic
              title="Bem vindo"
              value={userInfo.userName}
              valueStyle={{
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: -10
              }}
            />
          </Col>

          <Col>
            <Tooltip title="Sair">
              <Button
                type="default"
                icon={<LogoutOutlined />}
                onClick={logout}
              />
            </Tooltip>
          </Col>
          <Col>
            <AppsMenu />
          </Col>
        </Row>
      </div>
    </Layout.Header>
  )
}

export { Header }
