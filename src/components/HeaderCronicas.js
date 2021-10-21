import React from 'react'
import { Box, Flex, Spacer } from "@chakra-ui/react"
import MenuHam from './menuHam'


function HeaderCronicas() {
  return (
    <>
      <Flex bg="brand.primaryOrange" alignItems="center">
        <Box p={8}>
        </Box>
        <Spacer/>
        <MenuHam/>
      </Flex>
    </>
  )
}

export default HeaderCronicas
