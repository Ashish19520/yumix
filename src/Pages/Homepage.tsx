import React from 'react'
import { Counter } from '../Components/Counter'
import { Hero } from '../Components/Hero'
import { HomepageScroll } from '../Container/Homepage/HomepageScroll'
import { MidWhoBanner } from '../Container/Homepage/MidWhoBanner'
import { ToolBanner } from '../Container/Homepage/ToolBanner'

export const Homepage = () => {
  return (
    <div>
   <Hero />
   {/* <HomepageScroll /> */}
   <Counter />
   <MidWhoBanner />
   <ToolBanner />
   </div>
  )
}
