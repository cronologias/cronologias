import React from 'react'
import { Box, Flex, Spacer, Image } from "@chakra-ui/react"
import MenuHam from './MenuHam'
import logo from '../../public/logoNegro.svg'

function HeaderCronicas() {
  return (
    <>
      <Flex bg="brand.primaryOrange" alignItems="center">
        <Box p={8}>
          <Image w={{ base: "42px", md: "50px", lg: "58px" }} src={logo} alt="Cronologias de lo Invisible" />
        </Box>
        <Spacer />
        <MenuHam></MenuHam>
      </Flex>
    </>
  )
}

export default HeaderCronicas
