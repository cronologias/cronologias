import Link from 'next/link';
import { Box, Center, Image, Text} from '@chakra-ui/react';
import MobileSlider from '../components/mobileSlider';
import Header from '../components/header';
import CuratorsCards from '../components/curatorsCards';
import TeamCards from '../components/teamCards';
import Footer from '../components/footer';
import {getApiRes} from '../services/callApi';
import Head from 'next/head';

function homePage({curatorsData, museumData, teamData}) {
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
        h='70vh'
      >
        <Image
          m='auto'
          src='/animationBlack.gif'
          w={{ base: "100%"}}
          h={{ base: "70vh"}}
          objectFit='cover'
          alt='cronologías de lo invisible'
        />
      </Box>
      <Box
        w='100%'
        bg='brand.primaryOrange'
        p={{base:'1rem', md:'2rem'}}
        m='auto'
        mb={{ base: '2rem', md:'2.25rem', lg:'2.5rem'}}
      >
        <Text 
          fontSize={{ base: '1rem', lg: '1.125rem' }}
          m='auto'
          w={{ base: '20rem', '2sm': '23rem', md: '46rem', lg: '58rem', xl: '72rem'}}
        >
          <span style={emphasisWord}>CRONOLOGÍAS DE LO INVISIBLE</span>{' '}
          <span style={normalParagraph}>
            es una exposición historiográfica de las artistas visuales en
            Costa Rica de los años 1900 a 1980.</span>
          <span>
            Muestra los resultados de las investigaciones realizadas por
          </span>{' '}
          <span style={emphasisWord}>Sussy Vargas Alvarado</span>{' '}
          <span style={normalParagraph}>y</span>{' '}
          <span style={emphasisWord}>Susana Sánchez Carballo</span>
        </Text>
      </Box>
      <Center
        alignItems='start'
        color='brand.primaryBlack'
        flexDir={{ base: 'column', md: 'column' }} 
        fontFamily='heading'
        fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem' }}
        fontWeight={700}
        m='auto'
        w={{ base: '20rem', '2sm': '23rem', md: '45rem', lg: '58rem', xl: '72rem' }}
        justifyContent='space-between'
      >
        <Box
        mb={{ base: '3rem', md:'4rem', lg:'5rem'}}
        >
          <Box
          mb='1rem'
          >
            <Link
                href='/about-investigation'>
                <a>
                  <Image 
                    src='/sobreInvestDesktopBlack.svg' 
                    alt="Sobre la investigación"
                  />
                </a>
            </Link>
          </Box>
          <Box
            fontFamily='body'
            fontWeight={300}
            mb={{ base: '4rem' }}
            fontSize={{ base: '1rem', lg: '1.125rem' }}
            w={{ base: '20rem',  '2sm': '24rem', md: '36.5rem', lg: '58rem', xl: '49rem' }} 
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
                href='/sobre-la-investigacion'>
                <a>Leer más</a>
              </Link>
            </Box>
          </Box>
        </Box>
        

        
        <Box
          w={{ base: '20rem', md: '45rem', lg: '58rem', xl: '72rem' }}
          m='auto'
          mb='1rem'
        >
        <Image 
          src="/visitaExpoDesktop.svg"
          alt="Visita las exposiciones"
        />
        </Box>
        <MobileSlider mobleSlides={museumData}/>

        <Box
          w={{ base: '20rem', md: '45rem', lg: '58rem', xl: '72rem' }}
          m='auto'
          textAlign='start'
          mb='1rem'
        >
        <Image 
          src="/curadoras_desktop.svg"
          alt="Curadoras"
        />
        </Box>
        <CuratorsCards curators={curatorsData} />

        <Box
          w={{ base: '20rem', md: '45rem', lg: '58rem', xl: '72rem' }}
          m='auto'
          textAlign='start'
          mb='1rem'
        >
        <Image 
          src="/equipoDesktopBlack.svg"
          alt="Equipo"
        />
        </Box>
        <TeamCards team={teamData} />
      </Center>
      <Center>
          <Box
          bg='brand.primaryOrange'
          color='brand.baseColor'
          fontSize={{ base: '1rem', lg: '1.125rem' }}
          fontFamily='body'
          fontWeight={700}
          p={4}
          mb={{ base: '3rem', md:'4rem', lg:'5rem'}}
          _hover={{ bg: 'brand.secondaryBlack'}}
          >
            <Link
              href='/busqueda-de-artistas'>
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
  
  const teamInfo ='query MyQuery {allEquipos {id imagenIntegranteDelEquipo nombreDelIntegrante profesion enlace {enlaceASitioWebYRedesSociales}}}'
  const curatorsInfo ='query MyQuery{ allBiografiaCuradoras{ id nombreDeLaCuradora imagenDeLaCuradora breveDescripcionDeLaCuradora }}'
  const museumInfo ='query MyQuery {allVisitaLaExposicions { id tituloDeLaTarjeta enlaceDeLaImagen fechaDeLaExposicion fechaDeFinalizacionDeLaExposicion ubicacionDelMuseo recorrido360}}'
  
  const getCurators = await getApiRes(URl,TOKEN, curatorsInfo)
  const curatorsData = getCurators.data.allBiografiaCuradoras

  const getTeamData = await getApiRes(URl,TOKEN, teamInfo)
  const teamData = getTeamData.data.allEquipos
  
  const getMuseum = await getApiRes(URl,TOKEN, museumInfo)
  const museumData = getMuseum.data.allVisitaLaExposicions

  return{
    props: {
      curatorsData,
      museumData,
      teamData,
    }
  }
}