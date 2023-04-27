import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Explorer from '@/components/Explorer'
import CryptoContainer from '@/components/CryptoContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Clamp</title>
      </Head>

      <Header />

      <Hero />

      <Explorer />

      <CryptoContainer />
    </div>
  )
}
