import { Box, LinkOverlay, LinkBox, Center, AspectRatio, Flex, Text } from '@chakra-ui/react'
import { BsFillCalendar2WeekFill, BsGeoAlt } from 'react-icons/bs'
import { getApiRes } from '../services/callApi'
import Header from './header'
import Footer from './footer'
import Link from 'next/link';
import Head from 'next/head';
function ExpositionMuseum({ expositionData }) {
    return (
        <>
        <Head>
            <link rel="icon" type="image/svg" sizes="42x42" href="/logoCrono.png"/>
        </Head>
            <Header museumMenu= {expositionData} />
            <Box 
            position="relative"
            overflow="hidden"
            mb={8}
            >
                <AspectRatio  h='25rem' 
                _before = {{ pb:'none'}}
                >
                    <iframe
                        crossOrigin="anonymous"
                        position="absolute"
                        top="0"
                        left="0"
                        m="0"
                        p="0"
                        h="100%"
                        w="100%"
                        title={expositionData.tituloDeLaTarjeta}
                        src= {expositionData.recorrido360}
                        allowFullScreen
                    />
                </AspectRatio>
            </Box>
            <Center alignItems='start'
                flexDir={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
                display='flex'
                m='auto'
                w={{ base: '20rem', '2sm':'24rem', md: '48rem', lg: '60rem', xl: '75rem' }}
            >
                <Box
                    w={{ md: '20rem',  lg: '27rem' }}
                    fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem' }}
                    fontWeight='bold'
                    fontFamily='heading'
                    mb={8}
                >
                    <LinkBox color='brand.secondaryOrange'
                        fontSize={{ base: '1.5rem', md: '1.5rem', lg: '1.75rem' }}
                    >
                        <LinkOverlay>Exposición</LinkOverlay>
                    </LinkBox>
                    <LinkBox fontWeight={500}>
                        <LinkOverlay> {expositionData.tituloDeLaTarjeta} </LinkOverlay>
                    </LinkBox>
                </Box>
                <Flex flexDir='column' >
                    <Box
                    mb={8}
                    >
                        <Center>
                            <Box border='2px'
                                borderColor='brand.secondaryOrange'
                                w={{ base: '11rem', '2sm':'14rem', md: '12.81rem', lg: '19.40rem' }}
                                h={{ base: '9rem', md: '11rem' }}
                                fontFamily='heading'
                                fontSize={{ base: '1rem', lg: '1.125rem' }}

                            >
                                <Center 
                                pt={{ base: '2.5rem', md: '2.7rem', lg: '3.5rem' }}
                                pr={4}
                                >
                                    <BsFillCalendar2WeekFill w={{base:'1.5rem', md:'2rem'}}
                                        style={{ margin: 15 }}
                                    >
                                    </BsFillCalendar2WeekFill>
                                    <Box >
                                        <Text >
                                            {expositionData.fechaDeLaExposicion}
                                        </Text>
                                        <Text >
                                            {expositionData.fechaDeFinalizacionDeLaExposicion}
                                        </Text>
                                    </Box>
                                </Center>
                            </Box>
                            <Box bgColor='brand.secondaryOrange'
                                w={{ base: '9rem',  md: '11.62rem', lg: '17rem' }}
                                h={{ base: '9rem', md: '11rem' }}
                                fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem' }}
                                fontFamily='heading'
                                color='brand.baseColor'
                            >
                                <Center>
                                    <Box 
                                    fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.75rem' }}
                                    pt={{ base: '3rem', md: '3.7rem', lg: '4rem' }}
                                    pr={2}
                                    >
                                        Fechas
                                    </Box>
                                </Center>
                            </Box>
                        </Center>
                    </Box>

                    <Box m={{ md: '2rem' }}                                
                    mb={{base:'2rem', lg:'4rem'}}>
                        <Box>
                            <Center>
                                <Box bgColor='brand.secondaryOrange'
                                    w={{ base: '11rem', '2sm':'14rem', md: '11.62rem', lg: '17rem' }}
                                    h={{ base: '9rem', md: '11rem' }}
                                    fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem' }}
                                    fontFamily='heading'
                                    color='brand.baseColor'
                                >
                                    <Center>
                                        <Box 
                                        fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.75rem' }}
                                        pt={{ base: '3rem', md: '3.7rem', lg: '4rem' }}
                                        pr={2}>
                                            Ubicación
                                        </Box>
                                    </Center>
                                </Box>
                                <Box border='2px'
                                    borderColor='brand.secondaryOrange'
                                    w={{ base: '9rem', md: '12.81rem', lg: '19.40rem' }}
                                    h={{ base: '9rem', md: '11rem' }}
                                    fontFamily='heading'
                                    fontSize={{ base: '1rem', lg: '1.125rem' }}
                                >
                                    <Center                                     
                                    pt={{ base: '3rem', md: '3.7rem', lg: '4rem' }}
                                    pr={2}>
                                        <BsGeoAlt w={{base:'1.5rem', md:'2rem'}} style={{ margin: 10 }}></BsGeoAlt>
                                        <Box textDecoration='underline'
                                            color='brand.secondaryBlue'
                                        >
                                            <Link
                                                href={expositionData.ubicacionDelMuseo}
                                            >
                                                <a>San José</a>
                                            </Link>
                                        </Box>
                                    </Center>
                                </Box>
                            </Center>
                        </Box>
                    </Box>
                </Flex>
            </Center>
            <Footer />
        </>
    )
}
export default ExpositionMuseum
export async function getStaticProps() {
    const URl = process.env.NEXT_URL;
    const TOKEN = process.env.NEXT_TOKEN;
    const bodyExposition = 'query MyQuery {allVisitaLaExposicions {tituloDeLaTarjeta enlaceDeLaImagen fechaDeLaExposicion fechaDeFinalizacionDeLaExposicion ubicacionDelMuseo recorrido360}}'
    const getExposition = await getApiRes(URl, TOKEN, bodyExposition)
    const expositionData = getExposition
    return {
        props: {
            expositionData
        }
    }
}