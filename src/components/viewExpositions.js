import { Box, LinkOverlay, LinkBox, Center, AspectRatio, Flex } from '@chakra-ui/react'
import Link from "next/link"
import { BsFillCalendar2WeekFill, BsGeoAlt } from "react-icons/bs"
import { getApiRes } from "../services/callApi"
import Header from "./header"
import Footer from "./footer"

function ExpositionMuseum({ expositionData }) {
    console.log(expositionData)
    return (
        <>
            <Header />
            {/* <AspectRatio maxW="50%" h="25rem" mb={8}>
                <iframe
                    title={expositionData.data.allVisitaLaExposicions.tituloDeLaTarjeta}
                    src= {expositionData.data.allVisitaLaExposicions.recorrido360}
                    allowFullScreen
                />
            </AspectRatio> */}
            <Center alignItems="start"
                flexDir={{ base: "column", md: "row" }}
                justifyContent="space-between"
                display="flex"
                m="auto"
                w={{ base: "20rem", md: "48rem", lg: "60rem", xl: "75rem" }}
            >
                <Box
                    w={{ md: "20rem", lg: "27rem" }}
                    fontSize={{ base: "1.25rem", md: "1.25rem", lg: "1.5rem" }}
                    fontWeight="bold"
                    fontFamily="heading"
                    mb={4}
                >
                    <LinkBox color="brand.secondaryOrange"
                        fontSize={{ base: "1.5rem", md: "1.5rem", lg: "1.75rem" }}
                    >
                        <LinkOverlay>Exposición</LinkOverlay>
                    </LinkBox>
                    <LinkBox fontWeight={500}>
                        <LinkOverlay> Museo del Jade y de la Cultura Precolombina </LinkOverlay>
                    </LinkBox>
                </Box>
                <Flex flexDir="column" >
                    <Box>
                        <Center>
                            <Box border="2px"
                                borderColor="brand.secondaryOrange"
                                w={{ base: "10rem", md: "11.62rem", lg: "17rem" }}
                                h={{ base: "9rem", md: "11rem" }}
                                fontFamily="heading"
                                fontSize={{ base: "1rem", md: "1.5rem"}}
                            >
                                <Center pt={{ base: "2rem", md: "2.6rem", lg: "2.9rem" }}>
                                    <BsFillCalendar2WeekFill size={"2rem"}
                                        style={{ margin: 15 }}
                                    >
                                    </BsFillCalendar2WeekFill>
                                    {/* <Box w={{ base: "4.9rem", md: "7.4rem", lg: "8rem", xl:"8.9rem"}}>
                                        <span>{expositionData.data.allVisitaLaExposicions.fechaDeLaExposicion}</span>
                                        <span>{expositionData.data.allVisitaLaExposicions.fechaDeFinalizacionDeLaExposicion}</span>
                                    </Box> */}
                                </Center>
                            </Box>
                            <Box bgColor="brand.secondaryOrange"
                                w={{ base: "9rem", md: "12.81rem", lg: "19.40rem" }}
                                h={{ base: "9rem", md: "11rem" }}
                                fontSize={{ base: "1.5rem", md: "2rem" }}
                                fontFamily="heading"
                                color="brand.baseColor"
                            >
                                <Center>
                                    <Box pt={{ base: "2.9rem", md: "3.5rem", lg: "3.5rem" }}>
                                        Fechas
                                    </Box>
                                </Center>
                            </Box>
                        </Center>
                    </Box>

                    <Box m={{ md: "2rem" }}>
                        <Box>
                            <Center>
                                <Box bgColor="brand.secondaryOrange"
                                    w={{ base: "10rem", md: "11.62rem", lg: "17rem" }}
                                    h={{ base: "9rem", md: "11rem" }}
                                    fontSize={{ base: "1.5rem", md: "2rem" }}
                                    fontFamily="heading"
                                    color="brand.baseColor"
                                >
                                    <Center>
                                        <Box pt={{ base: "2.9rem",  md: "3.5rem" ,lg: "3.5rem" }}>
                                            Ubicación
                                        </Box>
                                    </Center>
                                </Box>
                                <Box border="2px"
                                    borderColor="brand.secondaryOrange"
                                    w={{ base: "9rem", md: "12.81rem", lg: "19.40rem" }}
                                    h={{ base: "9rem", md: "11rem" }}
                                    fontFamily="heading"
                                    fontSize={{ base: "1rem", md: "1.5rem" }}
                                >
                                    <Center pt={{ base: "2.3rem", md: "3rem",lg: "3rem" }}>
                                        <BsGeoAlt size="2rem" style={{ margin: 10 }}></BsGeoAlt>
                                        <Box textDecoration="underline"
                                            color="brand.secondaryBlue"
                                        >
                                            {/* <Link
                                                href={expositionData.data.allVisitaLaExposicions.ubicacionDelMuseo}
                                            >
                                                <a>San José</a>
                                            </Link> */}
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
