import React from 'react'
import Link from "next/link";
import { Box, Flex, Spacer, Image } from "@chakra-ui/react"
import MenuHam from './menuHam'
import logo from '../../public/logoNegro.svg'

function Header() {
    return (
        <>
            <Flex bg="brand.primaryOrange" alignItems="center">
                <Box p={8}>
                    <Link href="/">
                       <a>
                        <Image w={{ base: "100px", md: "130px", lg: "150px" }} src={logo} alt="Cronologias de lo Invisible" />
                       </a>
                    </Link>
                </Box>
                <Spacer />
                <MenuHam></MenuHam>
            </Flex>
        </>
    )
}
export default Header