import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import ResourceHighLight from '../components/ResourceHighLight'
import ResourceList from '../components/ResourceList'
import Footer from '../Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <ResourceHighLight />
      <NewsLetter />
      <ResourceList />
      <Footer />
    </>
  )
}
