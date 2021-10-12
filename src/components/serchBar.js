import React, {useState} from "react";
import { Stack, Input, InputRightElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({names}) => {
  const [serchTerm, setSerchTerm] = useState('')
  return (
    <div>
      <Stack spacing={4} w="100%" h="100%" m="0 auto" pt="100px" fontFamily="body">
        <InputGroup w={{ base: "328px", md: "80%", lg: "50%" }} m="0 auto" bg="brand.baseColor">
          <Input 
            variant='outline' 
            placeholder="Búsqueda de artista" 
            size="lg" w="100%" 
            borderWidth={{ base: "0.125rem", md: "0.175rem"}} 
            borderColor="brand.secondaryGray" 
            borderRadius="0" 
            onChange={event => { setSerchTerm(event.target.value) }}
            _placeholder={{ color:"brand.secondaryGray"}}
            _focus={{ borderColor:"brand.primaryOrange"}}
          />
          <InputRightElement width="15px" mr="15px" mt="5px" children={<BsSearch/>} />
        </InputGroup>
      </Stack>
      <Stack spacing={4} w="100%" h="100%" m="0 auto" pt="100px" textAlign="center">
        {names.filter((val) => {
          if (serchTerm === "") {
            return val
          } else if (val.nombreDeLaAutora.toLocaleLowerCase().includes(serchTerm.toLocaleLowerCase())) {
            return val
          }
          return '';
        }).map((val, key) => {
          return (
            <div key={key}>
              <p>{val.nombreDeLaAutora}</p>
            </div>)
        })}
      </Stack>
    </div>
  )
}
export { SearchBar }