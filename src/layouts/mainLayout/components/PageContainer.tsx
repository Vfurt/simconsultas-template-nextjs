import { Layout } from 'antd'
import styled, { css } from 'styled-components'
import React from 'react'

type Props = {
  collapsed: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CollapsableContainer = styled(({ collapsed, ...rest }) => (
  <Layout {...rest} />
))`
  transition: 0.2s all;
  margin-left: 205px;
  ${({ collapsed }) =>
    collapsed &&
    css`
      margin-left: 80px;
    `};

  @media (max-width: 575.98px) {
    margin-left: 0;
  }
`

const PageContainer: React.FC<Props> = ({ children, collapsed }) => (
  <CollapsableContainer collapsed={collapsed}>{children}</CollapsableContainer>
)
export { PageContainer }
