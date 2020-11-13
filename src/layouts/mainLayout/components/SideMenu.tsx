import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'

const { Sider } = Layout

const FixedSider = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

  @media (max-width: 575px) {
    display: none;
  }
`

type Props = {
  collapsed: boolean
  setCollapsed: (e: boolean) => void
}

const SideMenu: React.FC<Props> = ({ collapsed, setCollapsed, children }) => {
  const firstMounted = useRef(false)

  useEffect(() => {
    firstMounted.current = true
  }, [])

  return (
    <FixedSider
      trigger={null}
      width={200}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      onBreakpoint={collapsed => {
        firstMounted.current && setCollapsed(collapsed)
      }}
    >
      {children}
    </FixedSider>
  )
}
export { SideMenu }
