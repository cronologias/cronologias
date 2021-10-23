import {Box, LinkOverlay, LinkBox, Center, AspectRatio} from '@chakra-ui/react'
import Link from "next/link"
import { BsFillCalendar2WeekFill, BsGeoAlt} from "react-icons/bs"
import {getApiRes} from "../../services/callApi"
import Header from "../../components/header"
import Footer from "../../components/footer"

function expositionMuseum({expositionData}){
    console.log(expositionData.data.visitaLaExposicion.recorrido360)
    return(
        <>
            <Header/>
            <AspectRatio maxW="100%" h="25rem">
            <iframe
                title={expositionData.data.visitaLaExposicion.tituloDeLaTarjeta}
                src= {expositionData.data.visitaLaExposicion.recorrido360}
                allowFullScreen
            />
            </AspectRatio>

            <Box m={{base:"1rem", md: "3rem"}}>
                <LinkBox fontWeight="bold" fontFamily="heading" color="brand.secondaryOrange" fontSize={{ base: "1.75rem", md: "1.5rem", lg: "2rem" }}>
                    <LinkOverlay>Exposición</LinkOverlay>
                </LinkBox>
                <LinkBox fontWeight="bold" fontFamily="heading" fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }}>
                    <LinkOverlay> Museo del Jade y de la Cultura Precolombina </LinkOverlay>
                </LinkBox>
            </Box>
            <Box m={4}>
                <Center>
                    <Box border="2px" borderColor="brand.secondaryOrange" w={{base:"12rem", md:"21rem", lg:"25rem"}} h={{base:"9rem", md:"11rem"}} fontFamily="heading" fontSize={{base:"1rem", md:"1.5rem"}} p={{md:"2.5rem", lg:"3rem"}} pt={{base:"2.2rem", md: "2.5rem"}}>
                        <Center>
                            <BsFillCalendar2WeekFill size={"2rem"} style={{margin: 15}}> </BsFillCalendar2WeekFill>
                            03/03/2022 - 30/05/2022
                        </Center>
                    </Box>
                    <Box bgColor="brand.secondaryOrange" borderRadius={{md:"0 1rem 1rem 0"}} w={{base: "10rem", md:"21rem", lg: "30rem"}} h={{base: "9rem", md: "11rem"}} fontSize={{base:"1.5rem", md:"2rem"}} fontFamily="heading" color="brand.baseColor" pt={{base:"3rem", md:"3.5rem"}}>
                        <Center>
                            Fechas
                        </Center>
                    </Box>
                </Center>
            </Box>
            <Box m={{md:"2rem"}}>
                <Box m={4}>
                    <Center>
                        <Box bgColor="brand.secondaryOrange" borderRadius={{md:"1rem 0 0 1rem"}} w={{base: "10rem", md:"21rem", lg: "30rem"}} h={{base: "9rem", md: "11rem"}} fontSize={{base:"1.5rem", md:"2rem"}} fontFamily="heading" color="brand.baseColor" pt={{base:"3rem", md:"3.5rem"}}>
                            <Center>
                                Ubicación
                            </Center>
                        </Box>
                        <Box border="2px" borderColor="brand.secondaryOrange" w={{base:"12rem", md:"21rem", lg:"25rem"}} h={{base:"9rem", md:"11rem"}} fontFamily="heading" fontSize={{base:"1rem", md:"1.5rem"}} p={{md:"2rem"}} pt={{base:"2.2rem", md: "3rem"}}>
                            <Center>
                                <BsGeoAlt size="2rem" style={{margin: 10}}></BsGeoAlt>
                                <Box textDecoration="underline" color="brand.secondaryBlue">
                                    <Link
                                        href="https://goo.gl/maps/Gp2TVVXAPuQRu8dQA">
                                        <a>San José</a>
                                    </Link>
                                </Box>
                            </Center>
                        </Box>
                    </Center>
                </Box>
            </Box>
            
            <Footer/>
        </>
    )
}
export default expositionMuseum
export async function getStaticProps () {
    const URl= process.env.NEXT_URL;
    const TOKEN= process.env.NEXT_TOKEN;
    const bodyExposition ='query MyQuery {visitaLaExposicion {tituloDeLaTarjeta recorrido360}}'
    const getExposition = await getApiRes(URl,TOKEN, bodyExposition)
    const expositionData = getExposition
    return{
        props: {
            expositionData
        }
    }
}