/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Button, chakra, Box, useColorModeValue } from "@chakra-ui/react"

const Highlight = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      // mx={{ lg: 8 }}
      display={{ lg: "flex" }}
      maxW={{ lg: "5xl" }}
      // shadow={{ lg: "lg" }}
      rounded={{ lg: "lg" }}
      my="24"
    >
      <Box w={{ lg: "50%" }}>
        <Box
          h={{ base: 64, lg: "full" }}
          rounded="lg"
          bgSize="cover"
          style={{
            backgroundImage:
                "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
          }}
        ></Box>
      </Box>

      <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
        <chakra.h2
          fontSize={{ base: "2xl", md: "3xl" }}
          color={useColorModeValue("gray.800", "white")}
          fontWeight="bold"
        >
            Want to Build Your New Idea?
        </chakra.h2>
        <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
          Your idea is great! I know it can be very hard to find an individual
          who is committed to helping you create it. You can feel comfortable 
          that I don't just have the know-how to help you create your ideas, but
          I also have the skillset to help you grow your application. I can help
          you make your application stand out in today's competitive market, all
          while using the proper technologies that are proven to yield the best 
          results.
        </chakra.p>

        <Box mt={8}>
          <Button
            as="a"
            href="https://calendly.com/aarushgoyal/15min"
            colorScheme="teal"
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
          >
              Book Me Up
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Highlight