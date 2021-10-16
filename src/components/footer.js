import React from 'react'
import {Box, Image, Center} from '@chakra-ui/react'
import logo from '../img/logo.svg'

function Footer(){
    return (
        <>
            <Box
                bg="brand.primaryBlack"
                w={{ base: "23.5rem", md:"48rem", lg: "64rem", xl: "88rem"}}
                h={{ base: "7rem", md:"9rem", lg: "10rem"}}
                mt={8}
            >
                <Center>
                    <Image w={{ base: "3rem", md: "4.5rem", lg: "5rem", xl: "4.5rem" }} 
                    src={logo} 
                    mt={{base: "2rem", md: "2.2rem", lg: "2.5rem"}}
                    alt="Cronologias de lo Invisible">
                    </Image>
                </Center> 
            </Box>
        </>
    )
}

export default Footer