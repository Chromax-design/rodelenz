import React from 'react'
import { InfiniteMovingCards } from './ui/infiniteMovingCards'
import { PortfolioImages } from '@/constants'

const InfiniteCards = () => {
  return (
    <section className='py-10'>
        <InfiniteMovingCards items={PortfolioImages} speed='slow'/>
    </section>
  )
}

export default InfiniteCards