import { Navbar } from 'components/Navbar'
import { AnimatePresence } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
  const [modal, setModal] = useState(false)
  
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Home
