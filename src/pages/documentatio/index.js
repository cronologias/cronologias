<<<<<<< HEAD
import {Box, HStack, Image, Center} from '@chakra-ui/react'
import {getApiRes} from '../../services/callApi'
import Header from '../../components/header'
import Footer from '../../components/footer'
=======
import {Box, HStack, Center, Link} from '@chakra-ui/react'
import {getApiRes} from "../../services/callApi"
import Image from 'next/image'
import Header from "../../components/header"
import Footer from "../../components/footer"
>>>>>>> f8921f65b0af8cde6f3a3ed6c9b8518914f8f9b4

function documentation({documentationData}){
    let url ='/cronologias-invisible'
    return(
        <>
            <Header/>
<<<<<<< HEAD
            <Box>
                <Center>
                    <HStack spacing={{base:4, md:6 ,lg:8}} mt={{base:5, lg:8}}>
                        <Box>
                            <Image w={{ base: '16rem', md:'28rem' ,lg: '44rem', xl:'50rem'}} 
                            h={{lg:'30rem'}} 
                            src={documentationData.data.allDocumentacions.enlaceDocumentacion} 
                            alt='Documentación'/>
                        </Box>
                        <Box
                            bg='brand.primaryOrange'
                            w={{ base: '4rem', md:'15rem', xl:'16rem'}}
                            h={{ base: '16rem', md:'28rem',lg: '30rem'}}>
                        </Box>
                    </HStack>
                </Center>
                <Center>
                    <HStack spacing={{base:4, md:6 ,lg:8}} mt={{base:5, lg:8}}>
                        <Box
                            bg='brand.primaryBlack'
                            w={{ base: '4rem', md:'15rem', xl: '16rem'}}
                            h={{ base: '16rem', md:'28rem', lg: '30rem'}}>
                        </Box>
                        <Box>
                            <Image w={{ base: '16rem', md:'28rem' , lg: '44rem', xl:'50rem'}} 
                            h={{lg:'30rem'}}
                            src={documentationData.data.allDocumentacions.enlaceDocumentacion} 
                            alt='Documentación'/>
                        </Box>
                    </HStack>
                </Center>   
            </Box>   
=======
            <Box mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}>
                {documentationData.data.allDocumentacions.map((documentation, index) => (
                    documentation.enlaceDocumentacion === ""? url= url: url = documentation.enlaceDocumentacion,
                    index % 2 === 0 ?
                        <Center 
                            key={index} 
                        >
                            <HStack 
                                spacing={ {base: 4, md: 6, lg: 8} }
                                mt={ { base: 5, lg: 8 }} 
                            >
                                <Box w={ { base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem"} }
                                        h={ {base: "16rem", md: "28rem", lg: "30rem"} } position='relative'>
                                    <Link href="/" isExternal>
                                        <a>
                                            <Image 
                                                layout='fill'
                                                objectFit="cover" 
                                                src={url}
                                                alt="Documentación">
                                            </Image>
                                        </a>
                                    </Link>
                                </Box>
                                <Box bg="brand.primaryOrange"
                                    w={ {base: "4rem",md: "15rem", lg: "14rem", xl: "16rem"} }
                                    h={ { base: "16rem", md: "28rem", lg: "30rem" }}>
                                </Box>
                            </HStack>
                        </Center> :
                        <Center key={index} >
                            <HStack 
                                spacing={{ base: 4, md: 6, lg: 8 }}
                                mt={{ base: 5, lg: 8 }} 
                            >
                                <Box 
                                    bg="brand.primaryBlack"
                                    w={{ base: "4rem", md: "15rem", lg: "14rem", xl: "16rem" }}
                                    h={{ base: "16rem", md: "28rem", lg: "30rem" }} >
                                </Box>
                                <Box w={ { base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem"} }
                                    h={ {base: "16rem", md: "28rem", lg: "30rem"} } position='relative'>
                                    <Link href="/">
                                        <a>
                                            <Image 
                                                layout='fill'
                                                objectFit="cover" 
                                                src={url}
                                                alt="Documentación">
                                            </Image>
                                        </a>
                                    </Link>
                                </Box>
                        </HStack>
                    </Center>
                    ))  
                }
            </Box>
>>>>>>> f8921f65b0af8cde6f3a3ed6c9b8518914f8f9b4
            <Footer/>
        </>
    )
}
export default documentation

export async function getStaticProps() {
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
