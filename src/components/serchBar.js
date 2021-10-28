import React, { useState } from "react";
import { Stack, Input, InputRightElement, InputGroup, Box, SimpleGrid, Text } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import SearchBarCard from "./searchBarCard";

const SearchBar = ({ names }) => {
  const [serchTerm, setSerchTerm] = useState('')

  return (
    <>
    <Box
      m="0 auto"
      w={{ base: "20rem", md: "48rem", lg: "60rem", xl: "75rem" }}
      mb={{ base: '2rem', md:'2.25rem', lg:'2.5rem'}}
    >
      <Stack 
        spacing={4} 
        w="100%" 
        h="100%" 
        m="0 auto" 
        pt={8} 
        fontFamily="body">
        <Text>Búsqueda por nombre o apellido </Text>
        <InputGroup 
          w={{ base: "20rem", md: "48rem", lg: "60rem", xl: "75rem" }} 
          m="0 auto" 
          bg="brand.baseColor"
        >
          <Input
            variant='outline'
            placeholder="Búsqueda de artista"
            size="lg" 
            borderWidth={{ base: "0.125rem", md: "0.175rem" }}
            borderColor="brand.secondaryGray"
            borderRadius="0"
            w="100%"
            onChange={event => { setSerchTerm(event.target.value) }}
            _placeholder={{ color: "brand.secondaryGray" }}
            _focus={{ borderColor: "brand.primaryOrange" }}
          />
          <InputRightElement width="15px" mr="15px" mt="5px" children={<BsSearch />} />
        </InputGroup>
      </Stack>
      <Stack 
        spacing={4} 
        w="100%" 
        h="100%" 
        m="0 auto" 
        pt={8} 
        textAlign="center">
        <SimpleGrid columns={{ base:[2,2], md:[4, 2] }}>
          {names.filter((val) => {
            if (serchTerm === "") {
              return ""
            } else if (val.nombreDeLaAutora.toLocaleLowerCase().includes(serchTerm.toLocaleLowerCase())) {
              return val
            }
            return '';
          }).map((val, key) => {
            return (
              <SearchBarCard key={key} names={val} />
            )
          })}
        </SimpleGrid>
      </Stack>
    </Box>
    </>
  )
}
export { SearchBar }