import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Clamp</title>
      </Head>

      <Header />

      <Hero />
    </div>
  )
}
