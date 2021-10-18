import { extendTheme } from "../node_modules/@chakra-ui/react/dist/types"

const config = {
    initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default theme