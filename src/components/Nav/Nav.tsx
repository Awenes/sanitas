import { Box, Flex, Image, Icon } from "@chakra-ui/react"
import { BiLogOut } from "react-icons/bi"
import sanitas from '../../assets/sanitas.jpg'
const Nav = () => {
  return (
        <Flex bg='white' padding='7' w="auto" h="70px" justify='space-between'>
            <Box height="40px" w="50px">
              <Image src={sanitas} alt="" />
            </Box>
            <Box height="40px" w="40px">
                <Icon bg='white' fontSize='28px' color='tomato'>
                  <BiLogOut />
                </Icon>
            </Box>
        </Flex>
  )
}

export default Nav
