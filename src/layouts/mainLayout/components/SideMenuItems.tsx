import { Menu } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { CSSProperties, ReactNode } from 'react'
import {
  PieChartFilled,
  UnorderedListOutlined,
  UserOutlined
} from '@ant-design/icons'
import styled from 'styled-components'

type SideMenuItem = {
  icon: ReactNode
  route: string
  name: string
}

const menuItems: SideMenuItem[] = [
  {
    icon: <PieChartFilled />,
    route: '/general-view',
    name: 'Visão Geral'
  },
  {
    icon: <UserOutlined />,
    route: '/users',
    name: 'Usuários'
  },
  {
    icon: <UnorderedListOutlined />,
    route: '/cats',
    name: 'Gatos'
  }
]

const { Item } = Menu

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledMenuItem = styled(({ collapsed, ...rest }) => <Item {...rest} />)`
  padding-left: ${({ collapsed }) => (collapsed ? '' : '16px !important')};
`

const menuItemMap = (collapsed: boolean) =>
  menuItems.map(x => {
    return (
      <StyledMenuItem collapsed={collapsed} key={x.route}>
        <Link href={x.route}>
          <a>
            {x.icon}
            <span>{x.name}</span>
          </a>
        </Link>
      </StyledMenuItem>
    )
  })

type Props = {
  style?: CSSProperties
  collapsed: boolean
  closeDrawer: () => void
}

const SideMenuItems: React.FC<Props> = ({ style, collapsed, closeDrawer }) => {
  const router = useRouter()
  const currentPath = router.route
  const selectedKeys = []

  function mapItems(x) {
    if (currentPath.includes(x.route)) {
      selectedKeys.push(x.route)
    }
  }
  menuItems.map(mapItems)

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      style={{ ...style, padding: '16px 0' }}
      onClick={async ({ key }) => {
        closeDrawer()
        await router.push(key as string)
      }}
    >
      {menuItemMap(collapsed)}
    </Menu>
  )
}

export { SideMenuItems }
