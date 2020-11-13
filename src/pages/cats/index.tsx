import { Card, Descriptions, Divider, PageHeader, Space } from 'antd'
import DescriptionsItem from 'antd/lib/descriptions/Item'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import MainLayout from '../../layouts/mainLayout/MainLayout'
import { catsMock } from '../../mocks/cats.mock'
import { PageWithLayout } from '../../types/_app'

type Props = {
  cats: CatType[]
}

/**
 * Example Page with SSG
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
const Cats: PageWithLayout<Props> = ({ cats }) => {
  return (
    <>
      <PageHeader title={'Gatos'} />
      <Card>
        <Space direction={'vertical'}>
          {cats.map(cat => {
            return (
              <Card key={cat.id}>
                <img src={cat.imageLink} width={200} height={200} />
                <Descriptions bordered layout={'vertical'}>
                  <DescriptionsItem label={'Conhecido como'}>
                    {
                      <Space split={<Divider type={'vertical'} />}>
                        {cat?.codeNames}
                      </Space>
                    }
                  </DescriptionsItem>
                  <DescriptionsItem label={'Descrição'}>
                    {cat?.altText}
                  </DescriptionsItem>
                </Descriptions>
              </Card>
            )
          })}
        </Space>
      </Card>
    </>
  )
}

Cats.Layout = MainLayout

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  return {
    props: { cats: catsMock }
  }
}

export default Cats
