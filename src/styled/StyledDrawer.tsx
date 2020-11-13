import { Drawer } from 'antd'
import { DrawerProps } from 'antd/lib/drawer'
import styled from 'styled-components'

/**
 * Styled Drawer with headercolor and fontcolor props.
 * Defaults to dark header with light font.
 */
const StyledDrawer = styled(Drawer)<
  DrawerProps & { headercolor?: string; fontcolor?: string }
>`
  .ant-drawer-header {
    background: ${props => props.headercolor || '#001529'} !important;
  }
  .ant-drawer-title {
    color: ${props => props.fontcolor || '#fff'} !important;
    font-weight: 600;
  }
  .ant-drawer-close {
    color: ${props => props.fontcolor || '#fff'} !important;
    font-weight: 600 !important;
    :hover {
      color: #86c224 !important;
    }
  }
`

export { StyledDrawer }
