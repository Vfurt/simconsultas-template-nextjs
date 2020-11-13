import Axios from 'axios'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import { UserType } from '../../types/user'
import { PageWithLayout } from '../../types/_app'
import { Card, Descriptions, PageHeader } from 'antd'
import DescriptionsItem from 'antd/lib/descriptions/Item'

type Props = {
  user: UserType
}

/**
 * Example Page with SSR
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
const User: PageWithLayout<Props> = ({ user }) => {
  return (
    <>
      <PageHeader title={'Detalhes do usuário'} />
      <Card>
        <Descriptions
          bordered
          title={`Nome: ${user?.name}`}
          layout={'vertical'}
        >
          <DescriptionsItem label={'Email'}>{user?.email}</DescriptionsItem>
          <DescriptionsItem label={'Phone'}>{user?.phone}</DescriptionsItem>
          <DescriptionsItem label={'Website'}>{user?.website}</DescriptionsItem>
        </Descriptions>
      </Card>
    </>
  )
}

User.Layout = MainLayout

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const {
    query: { id }
  } = context
  const { data } = await Axios.request<UserType>({
    method: 'GET',
    baseURL: 'http://localhost:3000',
    url: `/api/users/${id}`
  })
  return {
    props: { user: data }
  }
}

export default User
