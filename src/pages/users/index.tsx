import { Card, notification, PageHeader } from 'antd'
import Axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import { StyledTable } from '../../styled'
import { UserType } from '../../types/user'
import { PageWithLayout } from '../../types/_app'

const getUsers = () =>
  Axios.request<UserType[]>({
    method: 'GET',
    baseURL: 'http://localhost:3000',
    url: '/api/users'
  })

/**
 * Example Page with SSG
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
const Users: PageWithLayout = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getUsersIns = () => {
      setLoading(true)
      getUsers()
        .then(response => {
          const { data } = response
          setUsers(data)
        })
        .catch(() => notification.error({ message: 'Erro de conexão' }))
        .finally(() => setLoading(false))
    }
    getUsersIns()
  }, [])

  return (
    <>
      <PageHeader title={'Usuários'} />
      <Card>
        <StyledTable dataSource={users} loading={loading} rowKey={'id'}>
          <StyledTable.Column<UserType>
            key={'id'}
            dataIndex={'id'}
            title={'Id'}
          />
          <StyledTable.Column<UserType>
            key={'name'}
            dataIndex={'name'}
            title={'Nome'}
          />
          <StyledTable.Column<UserType>
            key={'email'}
            dataIndex={'email'}
            title={'Email'}
          />
          <StyledTable.Column<UserType>
            key={'website'}
            dataIndex={'website'}
            title={'Website'}
          />
          <StyledTable.Column<UserType>
            key={'details'}
            dataIndex={'id'}
            title={'Website'}
            render={(_, record) => {
              return (
                <>
                  <Link href={`users/${record.id}`}>
                    <a>Detalhes</a>
                  </Link>
                </>
              )
            }}
          />
        </StyledTable>
      </Card>
    </>
  )
}

Users.Layout = MainLayout

export default Users
