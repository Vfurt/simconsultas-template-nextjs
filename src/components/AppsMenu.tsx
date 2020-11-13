import React, { useState } from 'react'
import {
  AppstoreOutlined,
  BarcodeOutlined,
  FormOutlined,
  RobotOutlined,
  SwapOutlined
} from '@ant-design/icons'
import { Button, Card, Dropdown, List, Row, Typography } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import styled from 'styled-components'
import { CardProps } from 'antd/lib/card'

const CardWithHover = styled(Card)<CardProps & { hovercolor: string }>`
  &:hover {
    color: ${props => props.hovercolor || 'cornflowerblue'};
  }
  &: hover span {
    color: ${props => props.hovercolor || 'cornflowerblue'};
  }
`

type Props = {
  size?: SizeType
  hovercolor?: string
}

const AppsMenu: React.FC<Props> = ({ size, hovercolor }) => {
  const [spin, setSpin] = useState<boolean>(false)
  const dataSource = [
    {
      name: 'Data Gateway',
      icon: <SwapOutlined style={{ fontSize: 30 }} />,
      url: 'https://sdg.simconsultas.com.br'
    },
    {
      name: 'Fiscal',
      icon: <BarcodeOutlined style={{ fontSize: 30 }} />,
      url: 'http://portalfiscal.simconsultas.com.br'
    },
    {
      name: 'Digitação',
      icon: <RobotOutlined style={{ fontSize: 30 }} />,
      url: 'http://hcr.simconsultas.com.br'
    },
    {
      name: 'Portal Cadastro',
      url: 'https://cadastrogp.simconsultas.com.br',
      icon: <FormOutlined style={{ fontSize: 30 }} />
    }
  ]

  const overlay = () => {
    return (
      <>
        <Card
          onMouseEnter={() => setSpin(true)}
          onMouseLeave={() => setSpin(false)}
        >
          <List
            grid={{ gutter: 10, column: 3 }}
            dataSource={dataSource}
            renderItem={item => (
              <List.Item>
                <CardWithHover
                  hovercolor={hovercolor}
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open(item.url, '_blank')}
                >
                  <Row justify={'center'}>{item.icon}</Row>
                  <Row justify={'center'}>
                    <Typography.Text>{item.name}</Typography.Text>
                  </Row>
                </CardWithHover>
              </List.Item>
            )}
          />
        </Card>
      </>
    )
  }

  return (
    <Dropdown overlay={overlay}>
      <Button
        icon={<AppstoreOutlined spin={spin} />}
        size={size}
        onMouseEnter={() => setSpin(true)}
        onMouseLeave={() => setSpin(false)}
        onClick={() => setSpin(false)}
      />
    </Dropdown>
  )
}
export { AppsMenu }
