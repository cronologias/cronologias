import { getApiRes } from '../src/services/callApi'
import HeaderCronicas from '../src/components/headerCronicas'
import { SearchBar } from '../src/components/serchBar'
import AccordionSearch from '../src/components/accordionSearch'
import Footer from '../src/components/footer'

import {
  Box,
  Center
} from "@chakra-ui/react"

function searchArtist({ dataArtist }) {
  return (
    <>
      <HeaderCronicas />
      <Box 
        bg="brand.primaryBlack" 
        w="100%" 
        h="320px"> 
      </Box>
      <Center 
          flexDir="column"
          m="auto"
          w={{ base: "360px", md: "768px", lg: "960px", xl: "1200px" }}
        >
        <SearchBar names={dataArtist}></SearchBar>
        <AccordionSearch names={dataArtist}></AccordionSearch>
      </Center>
      <Footer />
    </>
  )
}

export default searchArtist

export async function getStaticProps () {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  const bodyArtist ='query Myquery{allTarjetaAutoras(first:54) {id nombreDeLaAutora imagenDeLaArtista}}';
  const getArtist = await getApiRes(URl,TOKEN, bodyArtist);
  const dataArtist =getArtist.data.allTarjetaAutoras;
 
 
  
  return {
    props: {
      dataArtist
    }
  }
}