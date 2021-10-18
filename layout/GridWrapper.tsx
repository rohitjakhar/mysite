import { Grid, GridItem } from '@chakra-ui/react'

const GridWrapper = ({ children, columns }) => {
  return (
    <Grid
      templateColumns={[`repeat(${columns}, 1fr)`, `repeat(${columns}, 1fr)`, `repeat(${columns + 2}, 1fr)`]}
      px={[6, 6, 0]}
    >
      <GridItem colSpan={[0, 0, 1]}></GridItem>
      <GridItem colSpan={columns}>{children}</GridItem>
      <GridItem colSpan={[0, 0, 1]}></GridItem>
    </Grid>
  )
}

export default GridWrapper