import Head from 'next/head'
import React from 'react'
import { DatePicker } from 'antd'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <DatePicker></DatePicker>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
