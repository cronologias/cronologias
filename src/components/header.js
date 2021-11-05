import React from 'react'
import Link from 'next/link';
import { Box, Flex, Spacer } from '@chakra-ui/react'
import Image from 'next/image';
import MenuHam from './menu'
import logo from '../../public/logoNegro.svg'

function Header(props) {
    return (
        <>
            <Flex bg='brand.primaryOrange' alignItems='center'>
                    <Link href='/'>
                        <a>
                        <Box p={8} w={{ base: '100px', md: '130px', lg: '150px' }} position='relative' height='100px' ml={8}>
                            <Image layout='fill' src={logo} alt='Cronologias de lo Invisible' />
                            </Box>
                        </a>
                    </Link>
                <Spacer />
                <MenuHam  museumMenu={props.museumMenu} />
            </Flex>
        </>
    )
}
export default Header
