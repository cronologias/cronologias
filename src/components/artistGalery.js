import React from 'react'
import {Box, Image, Flex, HStack} from "@chakra-ui/react"

function Galery(){
    return (
        <>
            <Flex m={[6]}>
                <HStack spacing="15px">
                    <Box>
                        <Image w={{ base: "240px", md: "550px"}} 
                        src="https://i.ibb.co/zP0b0Cf/Screen-Shot-2021-10-02-at-09-51-45.png" 
                        alt="Galeria del Artista">
                        </Image>
                    </Box>
                    <Box
                        bg="brand.primaryOrange"
                        w={{ base: "70px", md: "150px" }}
                        h={{ base: "240px", md: "550px"}}>
                    </Box>
                </HStack>
            </Flex>
            <Flex m={[6]}>
                <HStack spacing="15px">
                    <Box
                        bg="brand.primaryBlack"
                        w={{ base: "70px", md: "150px"}}
                        h={{base: "240px", md: "550px"}}>
                    </Box>
                    <Box>
                        <Image w={{ base: "240px", md: "550px"}} 
                        src="https://i.ibb.co/8cFbKFH/Screen-Shot-2021-10-02-at-09-48-51.png"
                        alt="Galeria del Artista">
                        </Image>
                    </Box>
                </HStack>
            </Flex>
        </>
    )
}
export default Galery

