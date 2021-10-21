import React from 'react'
import { Box, Flex, Spacer, Image } from "@chakra-ui/react"
import MenuHam from '../src/components/MenuHam'
import { SearchBar } from '../src/components/serchBar'
import Galery from '../src/components/artistGalery'
import ArtistImg from '../artistImage'
import ModalDialog from "../src/components/modal"
import Slider from "../src/components/slider"
import Slides from "../slides"
import MobileSlider from "../src/components/mobileSlider"
import { ViewArtist } from '../src/components/viewArtist'
import AboutInvestigation from '../src/components/aboutInvestigation'
import { getApiRes } from '../src/services/callApi'
import AccordionSearch from '../src/components/accordionSearch'
import CuratorsCards from '../src/components/curatorsCards'

function HeaderCronicas({dataArtist, dataView, investigationData, curatorsData, museumData}) {
  console.log(museumData)
  return (
    <>
      <Flex bg="brand.primaryOrange" alignItems="center">
        <Box p={8}>
          <Image w={{ base: "42px", md: "50px", lg: "58px" }} src='/logoNegro.svg' alt="Cronologias de lo Invisible"></Image>
        </Box> 
        <Spacer />
        <MenuHam></MenuHam>
      </Flex>
      <SearchBar names={dataArtist}></SearchBar>
      <AccordionSearch names={dataArtist}></AccordionSearch>
      <ViewArtist names={dataView}/>
      <Galery images={ArtistImg}></Galery>
      <ModalDialog>
        <Slider slides={Slides}/>
      </ModalDialog>
      <MobileSlider mobleSlides={museumData}/>
      <AboutInvestigation investigationData={investigationData} />
      <CuratorsCards curators={curatorsData} />
    </>

  )
}

export default HeaderCronicas

export async function getStaticProps () {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  const bodyArtist ='query Myquery{allTarjetaAutoras(first:54) {id nombreDeLaAutora imagenDeLaArtista}}';
  const bodyView ='query Myquery { allNombreAutoras { id nombreDeLaArtista biografADeLaArtista imagenDeLaArtista}}'
  const bodyInvestigation ='query Myquery {allSobreLaInvestigacions {cuerpoDeLaInvestigacion}}'
  const curatorsInfo ='query MyQuery{ allTarjetaCuradoras{ nombreDeLaCuradora enlaceDeLaImagen breveDescripcionDeLaCuradora }}'
  const museumInfo ='query MyQuery {allVisitaLaExposicions{ enlaceDeLaImagen, tituloDeLaTarjeta}}'
  const getArtist = await getApiRes(URl,TOKEN, bodyArtist)
  const dataArtist =getArtist.data.allTarjetaAutoras;
  const getView = await getApiRes(URl,TOKEN, bodyView);
  const dataView = getView.data.allNombreAutoras[0];
  const getInvestigation = await getApiRes(URl,TOKEN, bodyInvestigation)
  const investigationData = getInvestigation
  const getCurators = await getApiRes(URl,TOKEN, curatorsInfo)
  const curatorsData = getCurators.data.allTarjetaCuradoras
  const getMuseum = await getApiRes(URl,TOKEN, museumInfo)
  const museumData = getMuseum.data.allVisitaLaExposicions

  return{
    props: {
      dataArtist,
      dataView,
      investigationData,
      curatorsData,
      museumData,
    }
  }
}
