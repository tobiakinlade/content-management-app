import Head from 'next/head'
import Image from 'next/image'

import NewsLetter from 'components/NewsLetter'
import ResourceHighLight from 'components/ResourceHighLight'
import ResourceList from 'components/ResourceList'
import Footer from 'components/Footer'
import Layout from 'components/Layout'

export default function Home() {
  return (
    <Layout>
      <ResourceHighLight />
      <NewsLetter />
      <ResourceList />
      <Footer />
    </Layout>
  )
}
