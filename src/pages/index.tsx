import React from 'react'
import { Grid, Button, Card, Col, Row, Space, Typography } from 'antd'
import Link from 'next/link'
import { PageWithLayout } from '../types/_app'
import EmptyLayout from '../layouts/EmptyLayout'
import { authenticate } from '../services/auth.api'
import { useAbsoluteUrl } from '../hooks/useAbsoluteUrl'
import { activeAuth } from '../utils/constants'

const Index: PageWithLayout = () => {
  const Breakpoints = Grid.useBreakpoint()
  const { origin } = useAbsoluteUrl()
  const { baseURL, url } = authenticate(origin)

  return (
    <>
      <div style={{ padding: 20 }}>
        <Row justify={'space-around'} align={'middle'}>
          {Breakpoints.lg && (
            <Col span={8}>
              <Space direction={'vertical'} size={'large'}>
                <Typography.Title
                  level={3}
                  style={{ color: '#a90329 !important' }}
                >
                  Portal SIM Consultas Data Gateway
                </Typography.Title>
                <Typography.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas et felis turpis. Nulla id elit et enim facilisis
                  feugiat. Sed dictum velit semper eros lacinia egestas.
                  Phasellus dapibus nisi quis nibh feugiat pulvinar. Maecenas
                  commodo sagittis fringilla. Maecenas feugiat lorem libero, sed
                  gravida lorem dictum sed. Proin id metus ac.
                </Typography.Text>
              </Space>
            </Col>
          )}

          {/* <Col span={8} /> */}
          <Col lg={8} sm={12} xs={18}>
            <Card
              title={
                <Typography.Text style={{ fontSize: '1.5em' }}>
                  Entrar
                </Typography.Text>
              }
              type={'inner'}
            >
              <Space direction={'vertical'} style={{ width: '100%' }}>
                <Link href={activeAuth ? `${baseURL}${url}` : 'general-view'}>
                  <Button block type={'primary'}>
                    Acessar
                  </Button>
                </Link>
                <div style={{ textAlign: 'center' }}>
                  <Link href={'/'}>
                    <a>Meu primeiro acesso</a>
                  </Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Link href={'/'}>
                    <a>Recuperar senha</a>
                  </Link>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
Index.Layout = EmptyLayout

export default Index
