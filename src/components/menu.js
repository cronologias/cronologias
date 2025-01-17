import React from 'react'
import Link from 'next/link';
import {
    Box,
    IconButton,
    Center,
} from '@chakra-ui/react'

import {
    Drawer,
    DrawerBody,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    List,
    ListItem,
} from '@chakra-ui/react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

import {
    BsFillInfoSquareFill,
    BsSearch,
    BsFillPinMapFill,
    BsFileEarmark,
    BsPeopleFill,
} from 'react-icons/bs'

import { FaUsers } from 'react-icons/fa'


function MenuHam() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement] = React.useState('right')

    return (
        <>
            <IconButton
                aria-label='hambuerger menu'
                bg='brand.primaryOrange'
                borderRadius= 'none'
                icon={
                    <HamburgerIcon
                        boxSize={{ base: '1.5rem', md: '2rem', lg: '2.25rem' }}
                        color='brand.primaryBlack'
                    />
                }
                mr={4}
                p={2}
                onClick={onOpen}
                _hover={{ bg: 'brand.secondaryOrange', borderRadius: 'none' }}
                _active={{ bg: 'brand.secondaryOrange', boxShadow: 'none', borderRadius: 'none' }}
                _focus={{ boxShadow: 'none', borderRadius: 'none', border: '0.125rem solid', borderColor: 'brand.primaryBlack' }}
            >
            </IconButton>

            <Drawer
                size='100%'
                placement={placement}
                onClose={onClose}
                isOpen={isOpen}
            >
                <DrawerContent bg='brand.primaryOrange'>
                    <DrawerCloseButton
                        color='brand.primaryBlack'
                        mr={{ base: '1rem', md: '6rem' }}
                        mt={8}
                        size={{ base: '1.5rem', md: '2rem', lg: '2.25rem' }}
                        p={2}
                        _hover={{ bg: 'brand.secondaryOrange', borderRadius: 'none' }}
                        _active={{ bg: 'brand.secondaryOrange', boxShadow: 'none', borderRadius: 'none' }}
                        _focus={{ boxShadow: 'none', borderRadius: 'none', border: '0.125rem solid', borderColor: 'brand.primaryBlack' }}
                    >
                    </DrawerCloseButton>

                    <DrawerBody
                        color='brand.primaryBlack'
                        fontFamily='body'
                        fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.75rem' }}
                        mt={{ base: '24%', md: '16%', lg: '8%' }}
                    >
                        <Center
                            m='auto'
                            p={5}
                            w={{ base: '22rem', md: '30rem', lg: '38rem' }}
                            
                        >
                            <List fontWeight={700}>
                                <ListItem
                                    alignItems='center'
                                    display='flex'
                                    flexDir='row'
                                    mb={8}
                                >
                                    <Box pr={2}>
                                        <BsFillInfoSquareFill></BsFillInfoSquareFill>
                                    </Box>
                                    <Box 
                                    p={2}
                                    _hover={{ bg: 'rgba(0, 0, 0, 0.04)'}}>
                                        <Link 
                                            href='/sobre-la-investigacion'>
                                            <a
                                                onClick={onClose}
                                            >Sobre la Investigación</a>
                                        </Link>
                                    </Box>
                                </ListItem>

                                <ListItem
                                    alignItems='center'
                                    display='flex'
                                    flexDir='row'
                                    mb={8}
                                >
                                    <Box pr={2}>
                                        <Accordion isdisabled='true' allowToggle >
                                            <AccordionItem borderStyle='none' color='brand.primaryBlack' pl='0' pr='0'>
                                                <Box display='flex' flexDir='row' alignItems='center'>
                                                    <BsFillPinMapFill></BsFillPinMapFill>
                                                    <AccordionButton
                                                        w={{ base: '16rem', md: '25rem' }}
                                                        p={2}
                                                        _focus={{ boxShadow: 'none', borderRadius: 'none', border: '0.125rem solid', borderColor: 'brand.primaryBlack' }}>
                                                        <Box
                                                            flex='1'
                                                            fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.75rem' }}
                                                            fontWeight={700}
                                                            textStyle='body'
                                                            textAlign='left'
                                                        >
                                                            <h4>Visita las exposiciones</h4>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </Box>
                                                <Box 
                                                    fontSize={{ base: '1rem', md: '1.25rem' }} 
                                                    ml={2}
                                                    w={{ base: '16rem', md: '25rem' }}
                                                    >
                                                    <AccordionPanel fontWeight={300} border='none'>
                                                        <Link
                                                            href='/visita-las-exposiciones/70573081'>
                                                            <a
                                                                onClick={onClose}
                                                            >Museo del Jade y de la Cultura Precolombina</a>
                                                        </Link>
                                                        
                                                    </AccordionPanel>
                                                    <AccordionPanel fontWeight={300} border='none'>
                                                        <Link
                                                            href='/visita-las-exposiciones/63998873'>
                                                            <a
                                                                onClick={onClose}
                                                            >Museo Dr. Rafael Ángel Calderon Guardia</a>
                                                        </Link>
                                                        
                                                    </AccordionPanel>
                                                    <AccordionPanel fontWeight={300} border='none'>
                                                        <Link
                                                            href='/visita-las-exposiciones/63998876'>
                                                            <a
                                                                onClick={onClose}
                                                            >Biblioteca Nacional</a>
                                                        </Link>
                                                        
                                                    </AccordionPanel>
                                                </Box>
                                            </AccordionItem>
                                        </Accordion>
                                    </Box>
                                </ListItem>

                                <ListItem
                                    alignItems='center'
                                    display='flex'
                                    flexDir='row'
                                    mb={8}
                                >
                                    <Box pr={2}>
                                        <Accordion isdisabled='true' allowToggle>
                                            <AccordionItem borderStyle='none' color='brand.primaryBlack' pl='0' pr='0'>
                                                <Box display='flex' flexDir='row' alignItems='center'>
                                                    <BsPeopleFill></BsPeopleFill>
                                                    <AccordionButton
                                                        w={{ base: '16rem', md: '25rem' }}
                                                        p={2}
                                                        _focus={{ boxShadow: 'none', borderRadius: 'none', border: '0.125rem solid', borderColor: 'brand.primaryBlack' }}
                                                    >
                                                        <Box fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.75rem' }} fontWeight={700} textStyle='body' flex='1' textAlign='left'>
                                                            <h4>Curadoras</h4>
                                                        </Box>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </Box>
                                                <Box fontSize={{ base: '1rem', md: '1.25rem' }} ml={2}>
                                                    <AccordionPanel fontWeight={300} border='none' pb={4}>
                                                        <Link
                                                            href='/curadoras/64001243'>
                                                            <a
                                                                onClick={onClose}
                                                            >Susana Sánchez Carballo</a>
                                                        </Link>
                                                    </AccordionPanel>
                                                    <AccordionPanel fontWeight={300} border='none' pb={4}>
                                                    <Link
                                                            href='/curadoras/64001348'>
                                                            <a
                                                                onClick={onClose}
                                                            >Sussy Vargas Alvarado</a>
                                                        </Link>
                                                    </AccordionPanel>
                                                </Box>
                                            </AccordionItem>
                                        </Accordion>
                                    </Box>
                                </ListItem>

                                <ListItem
                                    alignItems='center'
                                    display='flex'
                                    flexDir='row'
                                    mb={8}
                                >
                                    <Box pr={2}>
                                        <BsSearch></BsSearch>
                                    </Box>
                                    <Box 
                                    p={2}
                                    _hover={{ bg: 'rgba(0, 0, 0, 0.04)'}}>
                                        <Link href='/busqueda-de-artistas'>
                                            <a
                                                onClick={onClose}
                                            >Búsqueda de artistas</a>
                                        </Link>
                                    </Box>
                                </ListItem>

                                <ListItem
                                    alignItems='center'
                                    display='flex'
                                    flexDir='row'
                                    mb={8}
                                >
                                    <Box pr={2}>
                                        <BsFileEarmark></BsFileEarmark>
                                    </Box>
                                    <Box
                                    p={2}
                                    _hover={{ bg: 'rgba(0, 0, 0, 0.04)'}}
                                    >
                                        <Link
                                            href='/documentacion'>
                                            <a
                                                onClick={onClose}
                                            >Documentación</a>
                                        </Link>
                                    </Box>
                                    
                                </ListItem>
                                <ListItem
                                    alignItems='center'
                                    display='flex'
                                    flexDir='row'
                                    mb={8}
                                >
                                    <Box pr={2}>
                                        <FaUsers></FaUsers>
                                    </Box>
                                    <Box
                                    p={2}
                                    _hover={{ bg: 'rgba(0, 0, 0, 0.04)'}}
                                    >
                                        <Link
                                            href='/colaboradores'>
                                            <a
                                                onClick={onClose}
                                            >Colaboradores</a>
                                        </Link>
                                    </Box>
                                    
                                </ListItem>
                            </List>
                        </Center>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MenuHam