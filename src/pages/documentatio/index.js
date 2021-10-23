import {Box, HStack, Image, Center} from '@chakra-ui/react'
import {getApiRes} from "../../services/callApi"
import Header from "../../components/header"
import Footer from "../../components/footer"

function documentation({documentationData}){
    console.log(documentationData.data.allDocumentacions.enlaceDocumentacion)
    return(
        <>
            <Header/>
            <Box>
                <Center>
                    <HStack spacing={{base:4, md:6 ,lg:8}} mt={{base:5, lg:8}}>
                        <Box>
                            <Image w={{ base: "16rem", md:"28rem" ,lg: "44rem", xl:"50rem"}} 
                            h={{lg:"30rem"}} 
                            src={documentationData.data.allDocumentacions.enlaceDocumentacion} 
                            alt="Galeria del Artista">
                            </Image>
                        </Box>
                        <Box
                            bg="brand.primaryOrange"
                            w={{ base: "4rem", md:"15rem", xl:"16rem"}}
                            h={{ base: "16rem", md:"28rem",lg: "30rem"}}>
                        </Box>
                    </HStack>
                </Center>
                <Center>
                    <HStack spacing={{base:4, md:6 ,lg:8}} mt={{base:5, lg:8}}>
                        <Box
                            bg="brand.primaryBlack"
                            w={{ base: "4rem", md:"15rem", xl: "16rem"}}
                            h={{ base: "16rem", md:"28rem", lg: "30rem"}}>
                        </Box>
                        <Box>
                            <Image w={{ base: "16rem", md:"28rem" , lg: "44rem", xl:"50rem"}} 
                            h={{lg:"30rem"}}
                            src={documentationData.data.allDocumentacions.enlaceDocumentacion} 
                            alt="Galeria del Artista">
                            </Image>
                        </Box>
                    </HStack>
                </Center>   
            </Box>   
            <Footer/>
        </>
    )
}
export default documentation
export async function getStaticProps () {
    const URl= process.env.NEXT_URL;
    const TOKEN= process.env.NEXT_TOKEN;
    const bodyDocumentation ='query MyQuery {allDocumentacions {enlaceDocumentacion}}'
    const getDocumentation = await getApiRes(URl,TOKEN, bodyDocumentation)
    const documentationData = getDocumentation
    return{
        props: {
            documentationData
        }
    }
}