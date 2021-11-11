import { getApiRes } from '../../services/callApi'
import Header from '../../components/header'
import { SearchBar } from '../../components/serchBar'
import AccordionSearch from '../../components/accordionSearch'
import Footer from '../../components/footer'
import Image from "next/image";
import Head from 'next/head';
import {
  Box,
  Heading,
} from '@chakra-ui/react'

function searchArtist({ dataArtist, museumData }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" sizes="42x42" href="/logoCrono.png"/>
      </Head>
      <Header museumMenu={museumData} />
      <Box 
            fontFamily='body'
            w='100vw' 
            h={{ base: '266px', lg: '331px' }}
            position='relative'
        >
            <Image 
                src="/bg.svg"
                layout='fill'
                objectFit="cover"
            />
            <Box
                position='absolute'
                zIndex='2'
                bottom='1.25rem'
                ml='2rem'
                mr='2rem'
            >
                <Heading
                as='h2'
                color='brand.baseColor'
                fontStyle='bold'
                pb='1.563rem'
                fontSize={{ base: '1.75rem', md: '1.85rem', lg: '2rem' }}
                >
                Búsqueda de artistas
                </Heading>
            </Box>
        </Box>
        <SearchBar names={dataArtist}></SearchBar>
        <AccordionSearch names={dataArtist}></AccordionSearch>
      <Footer />
    </>
  )
}

export default searchArtist

export async function getStaticProps () {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  
  const bodyArtist ='query Myquery{allTarjetaAutoras(first:54) {id nombreDeLaAutora imagenDeLaArtista }}';
  const getArtist = await getApiRes(URl,TOKEN, bodyArtist);
  const dataArtist =getArtist.data.allTarjetaAutoras;
  const museumInfo ='query MyQuery {allVisitaLaExposicions {id tituloDeLaTarjeta}}'
  const getMuseum = await getApiRes(URl,TOKEN, museumInfo)
  const museumData = getMuseum.data.allVisitaLaExposicions
  return {
    props: {
      dataArtist,
      museumData
    }
  }
}