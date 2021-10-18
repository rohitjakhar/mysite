
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import GridWrapper from '../layout/GridWrapper'
import { chakra } from '@chakra-ui/react'
import SocialMediaLinks from '../components/SocialMediaLinks'
import About from '../components/About'
import Highlight from '../components/Highlight'
import Achievement from '../components/Achievement'

export default function Home() {
  return (
    <>
    <SEO title="Android Developer" />

    <GridWrapper columns ={3}>
      <chakra.div minH="100vh">
        <Hero />
      </chakra.div>

      <About/>
      
      <Achievement />
    
      <Highlight />

    </GridWrapper>

    <SocialMediaLinks />
    </>
  )
}