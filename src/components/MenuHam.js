import React from 'react'

import { 
  Box,  
  IconButton,
  Center,
} from "@chakra-ui/react"

import { 
  Drawer, 
  DrawerBody, 
  DrawerContent, 
  useDisclosure, 
  DrawerCloseButton, 
  List, 
  ListItem, 
} from "@chakra-ui/react"

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"

import { HamburgerIcon } from '@chakra-ui/icons'

import { 
  BsFillInfoSquareFill, 
  BsSearch, 
  BsFillPinMapFill, 
  BsFileEarmark, 
  BsPeopleFill, 
  BsClock } from "react-icons/bs"

import { FaUsers } from "react-icons/fa"


function MenuHam() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement] = React.useState("right")
  
  return (
    <>
      <IconButton 
        aria-label="hambuerger menu" 
        bg="brand.primaryOrange"
        icon={ 
          <HamburgerIcon 
          boxSize={{ base: "1.5rem", md: "2rem", lg: "2.25rem" }} 
          color="brand.primaryBlack" 
          onClick={onOpen}
          _hover={{ color:"brand.baseColor"}} 
          />
        }
        mr={4}
        p={4}
        _hover={{ bg: "brand.primaryBlack", color:"brand.baseColor"}}  
      > 
      </IconButton>

      {/* este es el drawer */}
      <Drawer 
        size="100%" 
        placement={placement} 
        onClose={onClose} 
        isOpen={isOpen}
      >
        <DrawerContent bg="brand.primaryOrange">
          <DrawerCloseButton 
            color="brand.primaryBlack"
            mr={{ base: "1rem", md:"6rem"}}
            mt={8}
            size={{ base: "1.5rem", md: "2rem", lg: "2.25rem" }}
            p={4}
            _hover={{ bg: "brand.primaryBlack", color:"brand.baseColor"}} 
          >
          </DrawerCloseButton>

          <DrawerBody 
            color="brand.primaryBlack"
            fontFamily="body" 
            fontSize={{ base: "1.25rem", md: "1.25rem", lg: "1.5rem"}} 
            mt={{ base: "24%", md: "16%", lg: "8%"}}
          >
            <Center 
              m="auto" 
              p={5}
              w={{ base: "22rem", md: "30rem", lg: "38rem" }} 
            >
              <List fontWeight={700}>
                <ListItem 
                  alignItems="center" 
                  display="flex" 
                  flexDir="row" 
                  mb={8}
                >
                  <Box pr={2}>
                    <BsFillInfoSquareFill></BsFillInfoSquareFill>
                  </Box>
                  Sobre la Investigación
                </ListItem>

                <ListItem
                  alignItems="center" 
                  display="flex" 
                  flexDir="row" 
                  mb={8}
                >
                  <Box pr={2}>
                    <Accordion isdisabled="true" allowToggle>
                      <AccordionItem borderStyle="none" color="brand.primaryBlack" pl="0" pr="0">
                        <Box display="flex" flexDir="row" alignItems="center">
                          <BsFillPinMapFill></BsFillPinMapFill>
                          <AccordionButton w={{ base: "16rem", md: "25rem"}} p={2}>
                            <Box 
                            flex="1" 
                            fontSize={{ base: "1.25rem", md: "1.25rem", lg: "1.5rem"}} 
                            fontWeight={700} 
                            textStyle="body" 
                            textAlign="left"
                            >
                              <h4>Visita las exposiciones</h4>
                            </Box>
                            <AccordionIcon/>
                          </AccordionButton>
                        </Box>
                        <Box fontSize={{ base: "1rem", md: "1.25rem"}} ml={2}>
                          <AccordionPanel fontWeight={300} border="none">
                            {/* add respect this https://chakra-ui.com/docs/navigation/link 
                              use react Router
                            */}
                            Museo del Jade y de la Cultura Precolombina
                          </AccordionPanel>
                          <AccordionPanel fontWeight={300} border="none">
                            {/* add respect this https://chakra-ui.com/docs/navigation/link 
                              use react Router
                            */}
                            Museo Dr. Rafael Ángel Calderon Guardia
                          </AccordionPanel>
                          <AccordionPanel fontWeight={300} border="none">
                            {/* add respect this https://chakra-ui.com/docs/navigation/link 
                              use react Router
                            */}
                            Biblioteca Nacional
                          </AccordionPanel>
                        </Box>
                      </AccordionItem>
                    </Accordion>                  
                  </Box>
                </ListItem>

                <ListItem
                  alignItems="center" 
                  display="flex" 
                  flexDir="row" 
                  mb={8}
                >
                  <Box pr={2}>
                    <Accordion isdisabled="true" allowToggle>
                      <AccordionItem borderStyle="none" color="brand.primaryBlack" pl="0" pr="0">
                        <Box display="flex" flexDir="row" alignItems="center">
                          <BsPeopleFill></BsPeopleFill>
                          <AccordionButton w={{ base: "16rem", md: "25rem"}} p={2}>
                            <Box fontSize={{ base: "1.25rem", md: "1.25rem", lg: "1.5rem"}}fontWeight={700} textStyle="body" flex="1" textAlign="left">
                              <h4>Curadoras</h4>
                            </Box>
                            <AccordionIcon/>
                          </AccordionButton>
                        </Box>
                        <Box fontSize={{ base: "1rem", md: "1.25rem"}} ml={2}>
                          <AccordionPanel fontWeight={300} border="none" pb={4}>
                            {/* add respect this https://chakra-ui.com/docs/navigation/link 
                              use react Router
                            */}
                            Susana Sánchez Carballo
                          </AccordionPanel>
                          <AccordionPanel fontWeight={300} border="none" pb={4}>
                            {/* add respect this https://chakra-ui.com/docs/navigation/link 
                              use react Router
                            */}
                            Sussy Vargas Alvarado
                          </AccordionPanel>
                        </Box>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                </ListItem>
                
                <ListItem
                  alignItems="center" 
                  display="flex" 
                  flexDir="row" 
                  mb={8}
                >
                  <Box pr={2}>
                    <BsSearch></BsSearch>
                  </Box>
                  Busca nuestras Artistas
                </ListItem>

                <ListItem
                  alignItems="center" 
                  display="flex" 
                  flexDir="row" 
                  mb={8}
                >
                  <Box pr={2}>
                    <BsClock></BsClock>
                  </Box>
                    Línea de Tiempo
                </ListItem>

                <ListItem
                  alignItems="center" 
                  display="flex" 
                  flexDir="row" 
                  mb={8}
                >
                  <Box pr={2}>
                    <BsFileEarmark></BsFileEarmark>               
                  </Box>
                    Documentación
                </ListItem>

                <ListItem
                  alignItems="center" 
                  display="flex" 
                  flexDir="row" 
                  mb={8}
                >
                  <Box pr={2}>
                    <FaUsers></FaUsers>
                  </Box>
                    Colaboradores
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