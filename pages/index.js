// import Link from "next/link";
import React from "react";
import { Box, Center, Image, Container } from "@chakra-ui/react";
import HeaderCronicas from "../src/components/HeaderCronicas";
import MobileSlider from "../src/components/mobileSlider";
import MobileSlides from "../mobileSlides";
import Footer from "../src/components/footer";
import {
  BsFillInfoSquareFill,
  BsFillPinMapFill,
  BsPeopleFill,
} from "react-icons/bs";

function home() {
  let style = {color: "#EB5529"}
  return (
    <>
      <HeaderCronicas />
      <Box bg="brand.primaryOrange" width="100%">
        <Image
          src="/animation.gif"
          m="auto"
          w={{ base: "22.5rem" }}
          h={{ base: "18.125rem" }}
        ></Image>
      </Box>
      <Container w={{ base: "360px", md: "768", lg: "960", xl: "1200" }}>
        <Center
          display="flex"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box 
            alignItems="center" 
            display="flex" 
            flexDir="row" 
            mb={8}
          >
            <BsFillInfoSquareFill style={style}/>
            <Box>
              <h2>Sobre la investigación</h2>
            </Box>
          </Box >
          <Box 
            bg="brand.primaryBlack"
            color="brand.baseColor"
          >
            <p >
              La muestra recopila obras de 54 artistas que estaban presentes y
              notablemente activas, no solo en el campo artístico y académico
              del país, sino también a escala internacional; mujeres cuyas
              prácticas artísticas no se limitaban a la pintura, al grabado, etc
              ...
            </p>
            {/* <Link href="/">
              <a>Leermás</a>
            </Link> */}
          </Box>
        </Center>
          {/*<Box>
            <BsFillPinMapFill />
            <Box>
              <h2>Visita las exposiciones</h2>
            </Box>
          </Box>
          <MobileSlider mobleSlides={MobileSlides} />
          <Box>
            <BsPeopleFill />
            <Box>
              <h2>Curadoras</h2>
            </Box>
          </Box> */}
          {/* <Footer></Footer> */}
      </Container>
    </>
  );
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
