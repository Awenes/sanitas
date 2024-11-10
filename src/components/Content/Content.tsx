import Search from "../Search/Search"
import Dash from "../Dash/Dash"
import { Box } from "@chakra-ui/react"

const Content = () => {
  return (
    <Box w={['auto', 'auto', 'auto']} h='auto'>
      <Search />
      <Dash />
    </Box>
  )
}

export default Content
