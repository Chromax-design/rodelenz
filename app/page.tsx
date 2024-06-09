import Contact from '@/components/Contact'
import GetEmailed from '@/components/GetEmailed'
import { Hero } from '@/components/Hero'
import InfiniteCards from '@/components/InfiniteCards'
import Portfolio from '@/components/Portfolio'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Portfolio />
      <Contact />
      <InfiniteCards />
      <GetEmailed />
    </div>
  )
}

export default Home