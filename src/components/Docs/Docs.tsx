import { Flex, Stack, Heading, Image, Button } from "@chakra-ui/react"
import kit from '../../assets/kit.jpg'
import pills from '../../assets/pills.jpg'
import vitamina from '../../assets/vitamina.png'
import vitaminb from '../../assets/vitaminb.png'
import rocket from '../../assets/rocket.png'

const Docs = () => {
  return (
    <Flex wrap='wrap' direction={["column", 'row', 'row']} bg='white' padding='20px' paddingTop='40px' h='auto' w='auto' justify='center' align='center' gap='20px'>  
        <Stack spaceY='2' padding='20px' h='300px' bg='white' w='300px' marginLeft='auto' marginRight='auto'>
          <Heading fontSize='2xl'>Recommendation</Heading>
          <Flex gap='20px'>
            <Image 
            w='70px'
            h='70px'
            borderRadius='50%'
            src={kit} />
              <Heading>What is Alopecia?</Heading>
          </Flex>
          <Flex gap='20px'>
            <Image 
            w='70px'
            h='70px'
            borderRadius='50%'
            src={pills} />
              <Heading>What are Antibiotics?</Heading>
          </Flex>
        </Stack>
        <Stack spaceY='2' padding='20px' h='300px' bg='white' w='300px' marginLeft='auto' marginRight='auto'>
          <Heading fontSize='2xl'>Treatment</Heading>
          <Flex gap='20px' >
            <Image 
            w='70px'
            h='70px'
            borderRadius='50%'
            src={vitamina} />
              <Heading>Vitamin A</Heading>
          </Flex>
          <Flex gap='20px'>
            <Image 
            w='70px'
            h='70px'
            borderRadius='50%'
            src={vitaminb} />
              <Heading>Vitamin B</Heading>
          </Flex>
        </Stack>
        <Stack spaceY='3' h='300px' w='300px' bg='black' borderRadius='20px' marginLeft='auto' marginRight='auto' padding='20px'>
          <Image
          h='150px'
          w='150px'
          bg='none'
          src={rocket} />

          <Heading fontSize='3xl' color='white'>
            Upgrade To Pro</Heading>
            <Button 
            color='blue.600'
            fontSize='xl'
            h='40px'
            w='130px'>
              Get Started</Button>
          
        </Stack>
    </Flex>
  )
}

export default Docs
