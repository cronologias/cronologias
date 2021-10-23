import { getApiRes } from '../../services/callApi'
import Header from '../../components/header'
import { SearchBar } from '../../components/serchBar'
import AccordionSearch from '../../components/accordionSearch'
import Footer from '../../components/footer'

import {
  Box,
  Center,
  Image,
  Heading,
} from "@chakra-ui/react"

function searchArtist({ dataArtist }) {
  return (
    <>
      <Header />
      <Box 
            fontFamily="body"
            w="100%" 
            h={{ base: "266px", lg: "331px" }}
            position="relative"
        >
            <Image 
                src="/background.png"
                w="100%" 
                h="100%"
                objectFit="cover"
            />
            <Box
                position="absolute"
                zIndex="2"
                bottom="1.25rem"
                ml="2rem"
                mr="2rem"
            >
                <Heading
                as="h2"
                color="brand.baseColor"
                fontStyle="bold"
                pb="1.563rem"
                fontSize="2rem"
                >
                Búsqueda de artistas
                </Heading>
            </Box>
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