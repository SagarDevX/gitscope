"use client"
import Container from '@/components/Container'
import CTA from '@/components/CTA'
import Features from '@/components/Features'
import LandingPageGradient from '@/components/LandingPageGradient'
import PopulerDeveloper from '@/components/PopulerDeveloper'
import Stats from '@/components/Stats'

const page = () => {

  return (
    <div className='' id="explore">
      <LandingPageGradient/>
      <Container>     
        <Stats />
        <PopulerDeveloper />
        <Features />
        <CTA />
      </Container>

    </div>
  )
}

export default page