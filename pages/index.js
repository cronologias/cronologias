import React from 'react'
import { Box, Flex, Spacer, Image } from "@chakra-ui/react"
import MenuHam from '../src/components/MenuHam'
import { SearchBarContainer } from '../src/components/searchBarContainer'
function HeaderCronicas() {
  return (
    <>
      <Flex bg="brand.primaryOrange" alignItems="center">
        <Box p={8}>
          <Image w={{ base: "42px", md: "50px", lg: "58px" }} src='/logoNegro.svg' alt="Cronologias de lo Invisible"></Image>
        </Box>
        <Spacer />
        <MenuHam></MenuHam>
      </Flex>
      <SearchBarContainer></SearchBarContainer>
    </>
  )
}

export default HeaderCronicas
