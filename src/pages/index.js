import Link from "next/link";
import { Box, Center, Image, Text} from "@chakra-ui/react";
import MobileSlider from "../components/mobileSlider";
import Header from "../components/header";
import CuratorsCards from "../components/curatorsCards";
import Footer from "../components/footer";
import {getApiRes} from "../services/callApi";
import { buildUrl } from 'cloudinary-build-url';

//import Head from "next/head";
//import VideoPlayer from "../components/VideoPlayer";

function homePage({curatorsData, museumData}) {

  const urlImg = buildUrl('Edelmira_Losilla_q8a8vz', {
      cloud: {
        cloudName:'cronologias-invisible',
      }
    }
  );
  console.log(urlImg);
  let emphasisWord = {
    color: "#E6AA92",
    fontFamily: "Kulim Park, sans-serif",
    fontWeight: "bold",
  };
  let normalParagraph = {
    color: "brand.primaryBlack",
    fontFamily: "Cousine, monospace",
  };
  return (
    <>
      <Header/>
      <Box bg="brand.fifhtOrange" width="100%" >
        <Image
          src="/animation.gif"
          m="auto"
          w={{ base: "22.5rem", md:"30rem"}}
        />
        <Box
          w="100%"
          bg="brand.thirdOrange"
          h={{ base: "15.75rem", md: "8.75rem", xl: "7.75rem" }}
          p="2.375rem"
          mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}
        >
          <Text fontSize={{ base: "1rem", lg: "1.125rem" }}>
            <span style={emphasisWord}></span>
            <span style={emphasisWord}>CRONOLOGÍAS DE LO INVISIBLE</span>{" "}
            <span style={normalParagraph}>
              es una exposición historiográfica de las artistas visuales en
              Costa Rica de los años 1900 a 1979. Muestra los resultados de las
              investigaciones realizadas por
            </span>{" "}
            <span style={emphasisWord}>Sussy Vargas Alvarado</span>{" "}
            <span style={normalParagraph}>y</span>{" "}
            <span style={emphasisWord}>Susana Sánchez Carballo</span>
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
        mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}
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
          w={{ base: "20rem", md: "24.4rem", lg: "36.25rem", xl:"43.125rem" }} 
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
              href="/about-investigation">
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
      <MobileSlider mobleSlides={museumData}/>
      <CuratorsCards curators={curatorsData} />
      <Center>
        <Box
        bg="brand.primaryOrange"
        color="brand.baseColor"
        fontSize={{ base: "1rem", lg: "1.125rem" }}
        fontFamily="body"
        fontWeight={700}
        p={4}
        mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}
        >
          <Link
            href="/search-artist">
            <a>Búsqueda de artistas</a>
          </Link>
        </Box>
      </Center>
      <Image
        src={urlImg}
        alt="1234"
        q={70}
        width={"500px"}
        height={"500px"}
      />
      <h3>Cloudinary - Dynamic</h3>

      <Footer></Footer>
    </>
  );
}

export default homePage;

export async function getStaticProps () {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  
  const curatorsInfo ='query MyQuery{ allTarjetaCuradoras{ nombreDeLaCuradora enlaceDeLaImagen breveDescripcionDeLaCuradora }}'
  const museumInfo ='query MyQuery {allVisitaLaExposicions{ enlaceDeLaImagen, tituloDeLaTarjeta}}'
  
  const getCurators = await getApiRes(URl,TOKEN, curatorsInfo)
  const curatorsData = getCurators.data.allTarjetaCuradoras
  
  const getMuseum = await getApiRes(URl,TOKEN, museumInfo)
  const museumData = getMuseum.data.allVisitaLaExposicions

  return{
    props: {
      curatorsData,
      museumData,
    }
  }
}