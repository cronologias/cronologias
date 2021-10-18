import React from 'react'
import { Box, Flex, Spacer, Image } from "@chakra-ui/react"
import MenuHam from '../src/components/MenuHam'
import { SearchBarContainer } from '../src/components/searchBarContainer'
import Galery from '../src/components/artistGalery'
import ArtistImg from '../artistImage'
import ModalDialog from "../src/components/modal"
import Slider from "../src/components/slider"
import Slides from "../slides"
import MobileSlider from "../src/components/mobileSlider"
import MobileSlides from "../mobileSlides"
//HeaderCronicas(Aquí van los props ej: props.name, etc...)
function HeaderCronicas() {
  return (
    <>
      <Flex bg="brand.primaryOrange" alignItems="center">
        <Box p={8}>
          <Image w={{ base: "42px", md: "50px", lg: "58px" }} src='/logoNegro.svg' alt="Cronologias de lo Invisible"></Image>
        </Box>
        <Spacer />
        <MenuHam></MenuHam>
      </Flex>
      <SearchBarContainer></SearchBarContainer>
      <Galery images={ArtistImg}></Galery>
      <ModalDialog>
        <Slider slides={Slides}/>
      </ModalDialog>
      <MobileSlider mobleSlides={MobileSlides}/>
    </>

  )
}

export default HeaderCronicas
export async function getStaticProps(context) {
  //Aquí va el llamado a GraphQl con Dato-cms getArtist()
  return {
    props: {
      //aquí se retornan los datos se icluye, propiedades, datos
    }, // will be passed to the page component as props
  }
}
