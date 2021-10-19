import React from 'react'
import { Flex, Box } from "@chakra-ui/react"

function AboutInvestigation({ investigationData }) {
    return (
        <>
            <Flex
            >
                <Box
                    backgroundImage="url('../img/background.png')"    
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                >          
                </Box>
            </Flex>
            <Box
                position= "absolute"
                top= "12.5rem"
                left= {8}
                color="brand.primaryOrange"
                fontFamily="body"
                fontSize={{ base: "1.75rem", md: "2rem", lg: "2.25rem" }}
            >
                <h1>
                Sobre la investigación
                </h1>
            </Box>
        </>

    )
}
export default AboutInvestigation
