import React from 'react'
import {Box, Image, Center} from '@chakra-ui/react'
import logo from '../../public/logo.svg'

function Footer(){
    return (
      <>
        <Box
          bg="brand.primaryBlack"
          w={"100%"}
          p={9}
        >
          <Center>
            <Image 
              w={{ base: "100px", md: "130px", lg: "150px" }} 
              src={logo} 
              alt="Cronologias de lo Invisible">
            </Image>
          </Center> 
        </Box>
      </>
    )
}

export default Footer