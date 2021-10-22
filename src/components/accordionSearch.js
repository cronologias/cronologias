import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  Stack,
} from "@chakra-ui/react"

import { 
  BsSearch, 
} from "react-icons/bs"

import { CardAccordion } from "./card";

function AccordionSearch({names}){
  const order = names.sort((a, b) => (a.nombreDeLaAutora > b.nombreDeLaAutora ? 1 : a.nombreDeLaAutora < b.nombreDeLaAutora ? -1 : 0))
  let style = {color: "#EB5529"}
  let newObject = {}
  order.forEach(element => {
    const letter = element.nombreDeLaAutora.charAt(0)
    if(newObject[letter]) {
      newObject[letter].push(element)
    } else {
      newObject[letter] = [element]
    }
  })
  return (
    <>
      <Center 
        alignItems="start"
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        fontFamily="heading"
        m="auto"
        mb="5.25rem"
        w={{ base: "20rem", md: "48rem", lg: "60rem", xl: "75rem" }}
      >
        <Box
          fontSize={{ base: "1.25rem", md: "1.25rem", lg: "1.5rem"}}
          fontWeight={700}
        >
          <Stack 
            display="flex" 
            flexDir="row" 
            mb={4}
            w="22.5rem"
            >
            <Box
              pt={3.5} 
              pr={2}
            >
              <BsSearch style={style} />
            </Box>
              <h2>Búsqueda por orden alfabético</h2>
          </Stack>
        </Box>
        <Accordion allowToggle>
          {
            Object.keys(newObject).map((val, key) => {
              const artist = newObject[val]
              return (
                <AccordionItem
                  key={key}
                  bg="brand.primaryOrange" 
                  fontSize={{ base: "1rem"}}
                  m="auto"
                  w={{ base: "20rem", md: "24.4rem", lg: "36.25", xl:"43.125rem" }} 
                >
                  <AccordionButton color="brand.baseColor" fontWeight={700}>
                    <Box 
                      flex="1" 
                      fontSize={{ base: "1rem", md: "1.125rem", lg: "1.25rem"}}
                      textAlign="left"
                      textStyle="subtitle" 
                    >
                      {val}
                    </Box>
                    <AccordionIcon 
                      boxSize={{ base: "1.5rem", md: "1.75rem", lg: "2rem"}} 
                    />
                  </AccordionButton>
              
                  <AccordionPanel 
                    bg="brand.baseColor" 
                    pb={4}
                  >
                    <CardAccordion names={artist}/> 
                  </AccordionPanel>
                </AccordionItem>
              )
          })}
        </Accordion>
      </Center>
    </>
  )
}

export default AccordionSearch;