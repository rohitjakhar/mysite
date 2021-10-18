import React from "react"
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react"

const Hero = () => {
  return (
    <Box px={8} py={[24, 16, 16, 16]} mx="auto" >
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >
          {/* All your{" "} */}
          <Text
            display="inline"
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Rohit Jakhar
          </Text>{" "}
          - Android Developer.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600",'gray.300')}
        >
          Try to spent life peacefully.
        </chakra.p>
        <Stack
          direction={{base:"column",sm:"row"}}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            variant="solid"
            colorScheme="teal"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            href="https://www.buymeacoffee.com/rohitjakhar"
          >
            Sponsor Me
          </Button>
          <Button
            as="a"
            colorScheme="gray"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            href="https://github.com/Aarush-Goyal/Aarush-Goyal/blob/main/resume.md"
          >
            Resume
          </Button>
        </Stack>
      </Box>


      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        // mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="/doug.gif"
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </Box>
  )
}

export default Hero