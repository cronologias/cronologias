import Link from "next/link";
import { Box, Center, Image, Text} from "@chakra-ui/react";
import HeaderCronicas from "../src/components/headerCronicas";
import MobileSlider from "../src/components/mobileSlider";
import MobileSlides from "../mobileSlides";
import Footer from "../src/components/footer";

function homePage() {
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
      <HeaderCronicas />
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
          mb={{ base: "2rem" }}
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
              href="/">
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
      {/* Aquí va el espacip de curadoras */}
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

      <Footer></Footer>
    </>
  );
}

export default homePage;