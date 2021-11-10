import Link from 'next/link';
import { Box, Center, Image, Text} from '@chakra-ui/react';
import MobileSlider from '../components/mobileSlider';
import Header from '../components/header';
import CuratorsCards from '../components/curatorsCards';
import Footer from '../components/footer';
import {getApiRes} from '../services/callApi';
import Head from 'next/head';

function homePage({curatorsData, museumData}) {
  let emphasisWord = {
    color: '#E6AA92',
    fontFamily: 'Kulim Park, sans-serif',
    fontWeight: 'bold',
  };
  let normalParagraph = {
    color: 'brand.primaryBlack',
    fontFamily: 'Cousine, monospace',
  };
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" sizes="42x42" href="/logoCrono.png"/>
      </Head>
      <Header museumMenu={museumData} />
      <Box 
        bg='#000000' 
        width='100%' 
        //mb={{ base: '0', md:'2.25rem', lg:'2.5rem'}}
      >
        <Image
          m='auto'
          src='/animationBlack.gif'
          w={{ base: '30rem', md:'40rem', lg:'45rem', xl:'55rem'}} 
          h={{base:'20rem', md:'25rem', lg:'30rem', xl:'35rem'}}
          alt='cronologías de lo invisible'
        />
      </Box>
      <Box
        w='100%'
        bg='brand.primaryOrange'
        // h={{ base: '16.75rem', '400px':'13.75rem' , md: '8.75rem', xl: '7.75rem' }}
        p='2rem'
        m='auto'
        mb={{ base: '2rem', md:'2.25rem', lg:'2.5rem'}}
      >
        <Text 
          fontSize={{ base: '1rem', lg: '1.125rem' }}
          m='auto'
          w={{ base: '20rem', '2sm': '23rem', md: '48rem', lg: '60rem', xl: '75rem'}}
        >
          <span style={emphasisWord}>CRONOLOGÍAS DE LO INVISIBLE</span>{' '}
          <span style={normalParagraph}>
            es una exposición historiográfica de las artistas visuales en
            Costa Rica de los años 1900 a 1979. Muestra los resultados de las
            investigaciones realizadas por
          </span>{' '}
          <span style={emphasisWord}>Sussy Vargas Alvarado</span>{' '}
          <span style={normalParagraph}>y</span>{' '}
          <span style={emphasisWord}>Susana Sánchez Carballo</span>
        </Text>
      </Box>
      <Center
        alignItems='start'
        color='brand.primaryBlack'
        flexDir={{ base: 'column', md: 'row' }} 
        fontFamily='heading'
        fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem' }}
        fontWeight={700}
        m='auto'
        w={{ base: '20rem', '2sm': '23rem', md: '48rem', lg: '60rem', xl: '75rem' }}
        justifyContent='space-between'
        mb={{ base: '2rem', md:'2.25rem', lg:'2.5rem'}}
      >
        <Box
          w={{ base: '100%', md: '16.938rem' }}
          mb='1rem'
        >
          <h2>Sobre la investigación</h2>
        </Box>
        <Box
          fontFamily='body'
          fontWeight={300}
          mb={{ base: '2rem' }}
          fontSize={{ base: '1rem', lg: '1.125rem' }}
          w={{ base: '20rem',  '2sm': '24rem', md: '24.4rem', lg: '36.25rem', xl:'43.125rem' }} 
          m={{ md: '0' }}
        >
          <p>
          La muestra recopila obras de 54 artistas que estaban presentes y notablemente activas, no solo en el campo 
          artístico y académico del país, sino también a escala internacional; mujeres cuyas prácticas artísticas no se 
          limitaban a la pintura, al grabado, a la escultura, a la cerámica, o a la fotografía, sino también a la gestión cultural, 
          a la producción editorial y a la docencia en escuelas, colegios y universidades.
          </p>
          <Box
          textAlign='end'
          textDecoration='underline'
          >
            <Link
              href='/about-investigation'>
              <a>Leer más</a>
            </Link>
          </Box>
        </Box>

      </Center>
      <Box
        w={{ base: '20rem', md: '48rem', lg: '60rem', xl: '75rem' }}
        m='auto'
        textAlign='start'
        fontFamily='heading'
        fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem' }}
        color='brand.primaryBlack'
        fontWeight={700}
        mb={4}
      >
        <h2>Visita las exposiciones</h2>
      </Box>
      <MobileSlider mobleSlides={museumData}/>
      <CuratorsCards curators={curatorsData} />
      <Center>
        <Box
        bg='brand.primaryOrange'
        color='brand.baseColor'
        fontSize={{ base: '1rem', lg: '1.125rem' }}
        fontFamily='body'
        fontWeight={700}
        p={4}
        mb={{ base: '2rem', md:'2.25rem', lg:'2.5rem'}}
        _hover={{ bg: 'brand.secondaryBlack'}}
        >
          <Link
            href='/search-artist'>
            <a>Búsqueda de artistas</a>
          </Link>
        </Box>
      </Center>
      <Footer></Footer>
    </>
  );
}

export default homePage;

export async function getStaticProps () {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  
  const curatorsInfo ='query MyQuery{ allBiografiaCuradoras{ id nombreDeLaCuradora imagenDeLaCuradora breveDescripcionDeLaCuradora }}'
  const museumInfo ='query MyQuery {allVisitaLaExposicions { id tituloDeLaTarjeta enlaceDeLaImagen fechaDeLaExposicion fechaDeFinalizacionDeLaExposicion ubicacionDelMuseo recorrido360}}'
  
  const getCurators = await getApiRes(URl,TOKEN, curatorsInfo)
  const curatorsData = getCurators.data.allBiografiaCuradoras
  
  const getMuseum = await getApiRes(URl,TOKEN, museumInfo)
  const museumData = getMuseum.data.allVisitaLaExposicions

  return{
    props: {
      curatorsData,
      museumData,
    }
  }
}