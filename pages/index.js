<<<<<<< HEAD
import Link from "next/link";
import { Box, Center, Image, Container, Text, Stack } from "@chakra-ui/react";
import HeaderCronicas from "../src/components/headerCronicas";
import MobileSlider from "../src/components/mobileSlider";
import MobileSlides from "../mobileSlides";
import Footer from "../src/components/footer";

function home() {
  let style = {
    color: "#E6AA92",
    fontFamily: "Kulim Park, sans-serif",
    fontWeight: "bold",
  };
  let style2 = {
    color: "brand.primaryBlack",
    fontFamily: "Cousine, monospace",
  };
  return (
    <>
      <HeaderCronicas />
      <Box bg="brand.fifhtOrange" width="100%" >
        <Image
          src="/animation.gif"
          m="auto"
          w={{ base: "22.5rem", md:"30rem"}}
        ></Image>
        <Box
          w="100%"
          bg="brand.thirdOrange"
          h={{ base: "15.75rem", md: "8.75rem", xl: "7.75rem" }}
          p="2.375rem"
          mb={{ base: "2rem" }}
        >
          <Text fontSize={{ base: "1rem", lg: "1.125rem" }}>
            <span style={style}></span>
            <span style={style}>CRONOLOGÍAS DE LO INVISIBLE</span>{" "}
            <span style={style2}>
              es una exposición historiográfica de las artistas visuales en
              Costa Rica de los años 1900 a 1979. Muestra los resultados de las
              investigaciones realizadas por
            </span>{" "}
            <span style={style}>Sussy Vargas Alvarado</span>{" "}
            <span style={style2}>y</span>{" "}
            <span style={style}>Susana Sánchez Carballo</span>
          </Text>
        </Box>
      </Box>

      <Center
        alignItems="start"
        color="brand.primaryBlack"
        flexDir={{ base: "column", md: "row" }} 
        fontFamily="heading"
        fontSize={{ base: "1.25rem", md: "1.25rem", lg: "1.5rem" }}
        fontWeight={700}
        m="auto"
        w={{ base: "20rem", md: "48rem", lg: "60rem", xl: "75rem" }}
        justifyContent="space-between"
        mb={8}
      >
        <Box
          w={{ base: "100%", md: "16.938rem" }}
          mb="1rem"
        >
          <h2>Sobre la investigación</h2>
        </Box>
        <Box
          fontFamily="body"
          fontWeight={300}
          mb={{ base: "2rem" }}
          fontSize={{ base: "1rem", lg: "1.125rem" }}
          w={{ base: "20rem", md: "24.4rem", lg: "36.25", xl:"43.125rem" }} 
          m={{ md: "0" }}
        >
          <p>
            La muestra recopila obras de 54 artistas que estaban presentes y
            notablemente activas, no solo en el campo artístico y académico
            del país, sino también a escala internacional; mujeres cuyas
            prácticas artísticas no se limitaban a la pintura, al grabado, etc
            ...
          </p>
          <Box
          textAlign="end"
          textDecoration="underline"
          >
            <Link
              href="/sobreLaInvestigacion">
              <a>Leer más</a>
            </Link>
          </Box>
        </Box>

      </Center>
      <Box
        w={{ base: "20rem", md: "48rem", lg: "60rem", xl: "75rem" }}
        m="auto"
        textAlign="start"
        fontFamily="heading"
        fontSize={{ base: "1.25rem", md: "1.25rem", lg: "1.5rem" }}
        color="brand.primaryBlack"
        fontWeight={700}
        mb={4}
      >
        <h2>Visita las exposiciones</h2>
      </Box>
      <MobileSlider mobleSlides={MobileSlides} />
      {/* Aquí va el espaci de curadoras */}
      <Center>
        <Box
        bg="brand.primaryOrange"
        color="brand.baseColor"
        fontSize={{ base: "1rem", lg: "1.125rem" }}
        fontFamily="body"
        fontWeight={700}
        mt="6rem"
        p={4}
        >
          <Link
            href="/">
            <a>Búsqueda de artistas</a>
          </Link>
        </Box>
      </Center>
=======
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
import MobileSlides from "../mobileSlides"
import { ViewArtist } from '../src/components/viewArtist'
import AboutInvestigation from '../src/components/aboutInvestigation'
import { getApiRes } from '../src/services/callApi'
import AccordionSearch from '../src/components/accordionSearch'

function HeaderCronicas({dataArtist, dataView, investigationData }) {
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
      <MobileSlider mobleSlides={MobileSlides}/>
      <AboutInvestigation investigationData={investigationData} />
    </>
>>>>>>> ffae53bb035bea3397951d9fb30a048f313188df


<<<<<<< HEAD
      <Footer></Footer>
    </>
  );
=======
export default HeaderCronicas

export async function getStaticProps () {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  const bodyArtist ='query Myquery{allTarjetaAutoras(first:54) {id nombreDeLaAutora imagenDeLaArtista}}';
  const bodyView ='query Myquery { allNombreAutoras { id nombreDeLaArtista biografADeLaArtista imagenDeLaArtista}}'
  const bodyInvestigation ='query Myquery {allSobreLaInvestigacions {cuerpoDeLaInvestigacion}}'
  const getArtist = await getApiRes(URl,TOKEN, bodyArtist)
  const dataArtist =getArtist.data.allTarjetaAutoras;
  const getView = await getApiRes(URl,TOKEN, bodyView);
  const dataView = getView.data.allNombreAutoras[0];
  const getInvestigation = await getApiRes(URl,TOKEN, bodyInvestigation)
  const investigationData = getInvestigation
  return{
    props: {
      dataArtist,
      dataView,
      investigationData,
    }
  }
>>>>>>> ffae53bb035bea3397951d9fb30a048f313188df
}

export default home;

// function HeaderCronicas({data, names, investigationData }) {
//   return (
//     <>
//       <Flex bg="brand.primaryOrange" alignItems="center">
//         <Box p={8}>
//           <Image w={{ base: "42px", md: "50px", lg: "58px" }} src='/logoNegro.svg' alt="Cronologias de lo Invisible"></Image>
//         </Box>
//         <Spacer />
//         <MenuHam></MenuHam>
//       </Flex>
//       <SearchBar names={data}></SearchBar>
//       <AccordionSearch names={data}></AccordionSearch>
//       <ViewArtist names={names}/>
//       <Galery images={ArtistImg}></Galery>
//       <ModalDialog>
//         <Slider slides={Slides}/>
//       </ModalDialog>
//       <MobileSlider mobleSlides={MobileSlides}/>
//       <AboutInvestigation investigationData={investigationData} />
//     </>

//   )
// }

// export default HeaderCronicas
// export async function getStaticProps () {
//   const URl= process.env.NEXT_URL;
//   const TOKEN= process.env.NEXT_TOKEN;
//   const resposeJson = await getArtist(URl,TOKEN,);
//   const data = resposeJson.data.allTarjetaAutoras;
//   const resposeJson2 = await getArtistView(URl,TOKEN);
//   const names = resposeJson2.data.allNombreAutoras[0];
//   const responseJson3 = await getInvestigation(URl,TOKEN)
//   const investigationData = responseJson3.data.sobreLaInvestigacion
//   return{
//     props: {
//       data,
//       names,
//       investigationData,
//     }
//   }
// }
