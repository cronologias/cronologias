import React from 'react'
import Link from "next/link";
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
            <Link href="/">
              <a>
                <Image 
                  w={{ base: "100px", md: "130px", lg: "150px" }} 
                  src={logo} 
                  alt="Cronologias de lo Invisible">
                </Image>
              </a>
            </Link>
          </Center> 
        </Box>
      </>
    )
}

export default Footer