import { Table } from 'antd'
import { TableProps } from 'antd/lib/table'
import styled from 'styled-components'

/**
 * Styled Table with with bolder column names.
 */
const StyledTable = styled(Table)<
  TableProps<unknown> & { fontWeight?: string }
>`
  .ant-table-thead > tr > th {
    font-weight: ${props => props.fontWeight || '600'} !important;
  }
`

export { StyledTable }
