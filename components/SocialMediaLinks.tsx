import { Flex, Link } from "@chakra-ui/react"
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCoffee
} from "react-icons/fa"
import { useColorModeValue } from "@chakra-ui/react"

const SocialMediaLinks = () => {
  return (
    <Flex
      position="fixed"
      display={["none", "flex"]}
      bottom="0"
      justify="space-evenly"
      align="center"
      zIndex="11"
      direction="column"
      height="35vh"
      padding="4"
    >
      <Link href="https://www.github.com/RohitJakhar">
        <FaGithub size="25" color={useColorModeValue("black","white")} />
      </Link>
      <Link href="https://www.buymeacoffee.com/RohitJakhar">
        <FaCoffee size="25" color={useColorModeValue("black","white")} />
      </Link>
      <Link href="https://dev.to/rohitjakhar">
        <FaDev size="25" color={useColorModeValue("black","white")} />
      </Link>
      <Link href="https://linkedin.com/in/rohit-jakhar">
        <FaLinkedin size="25" color={useColorModeValue("black","white")} />
      </Link>
      <Link href="https://twitter.com/rohitjakhar0">
        <FaTwitter size="25" color={useColorModeValue("black","white")} />
      </Link>
      <Link href="https://instagram.com/rohitjakhar0">
        <FaInstagram size="25" color={useColorModeValue("black","white")} />
      </Link>
    </Flex>
  )
}

export default SocialMediaLinks