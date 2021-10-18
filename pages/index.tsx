
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import GridWrapper from '../layout/GridWrapper'
import { chakra } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
    <SEO title="Android Developer" />

    <GridWrapper columns ={3}>
      <chakra.div minH="100vh">
        <Hero />
      </chakra.div>
    </GridWrapper>
    </>
  )
}