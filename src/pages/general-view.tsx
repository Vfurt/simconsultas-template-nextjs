import MainLayout from '../layouts/mainLayout/MainLayout'
import { PageWithLayout } from '../types/_app'
import React from 'react'
import { PageHeader } from 'antd'

const GeneralView: PageWithLayout = () => {
  return (
    <>
      <PageHeader title={'Visão Geral'} />
    </>
  )
}

GeneralView.Layout = MainLayout

export default GeneralView
