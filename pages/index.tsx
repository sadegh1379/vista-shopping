import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components'
const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full lg:w-[80%] mx-auto'>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
