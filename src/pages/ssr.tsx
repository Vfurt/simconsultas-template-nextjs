import React from 'react'
import MainLayout from '../layouts/mainLayout/MainLayout'
import { PageWithLayout } from '../types/_app'

const SSR: PageWithLayout = () => {
  return <div>SSR Page</div>
}

SSR.Layout = MainLayout

export default SSR
