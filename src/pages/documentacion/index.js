import { Box, HStack, Center, Link } from '@chakra-ui/react'
import { getApiRes } from "../../services/callApi"
import Image from 'next/image'
import Header from "../../components/header"
import Footer from "../../components/footer"
import Head from 'next/head';
import { Heading } from "@chakra-ui/react"

function documentation({ documentationData }) {
    let url = '/cronologias-invisible'
    return (
        <>
        <Head>
            <link rel="icon" type="image/svg" sizes="42x42" href="/logoCrono.png"/>
        </Head>
        <Header />
        <Box 
                fontFamily="body"
                w="100vw" 
                h={{ base: "266px", lg: "331px" }}
                position="relative"
            >
                <Image 
                    src="/bg.svg"
                    layout='fill'
                    objectFit="cover"
                />
                <Box
                    position="absolute"
                    zIndex="2"
                    bottom="1.25rem"
                    ml="2rem"
                    mr="2rem"
                >
                    <Heading
                    as="h2"
                    color="brand.baseColor"
                    fontStyle="bold"
                    pb="1.563rem"
                    fontSize={{ base: '1.75rem', md: '1.85rem', lg: '2rem' }}
                    >
                    Documentación
                    </Heading>
                </Box>
            </Box>
            <Box mb={{ base: "2rem", md: "2.25rem", lg: "2.5rem" }}>
                {documentationData.data.allDocumentacions.map((documentation, index) => (
                    documentation.enlaceDocumentacion === "" ? url = url : url = documentation.enlaceDocumentacion,
                    index % 2 === 0 ?
                        <Center
                            key={index}>
                            <HStack
                                spacing={{ base: 4, md: 6, lg: 8 }}
                                mt={{ base: 5, lg: 8 }}>
                                <Link href="/">
                                    <Box w={{ base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem" }}
                                        h={{ base: "16rem", md: "28rem", lg: "30rem" }} position='relative'>
                                        <Image
                                            layout='fill'
                                            objectFit="cover"
                                            src={url}
                                            alt="Documentación">
                                        </Image>
                                    </Box>
                                </Link>
                                <Box bg="brand.primaryOrange"
                                    w={{ base: "4rem", md: "15rem", lg: "14rem", xl: "16rem" }}
                                    h={{ base: "16rem", md: "28rem", lg: "30rem" }}>
                                </Box>
                            </HStack>
                        </Center> :
                        <Center key={index} >
                            <HStack
                                spacing={{ base: 4, md: 6, lg: 8 }}
                                mt={{ base: 5, lg: 8 }}>
                                <Box
                                    bg="brand.primaryBlack"
                                    w={{ base: "4rem", md: "15rem", lg: "14rem", xl: "16rem" }}
                                    h={{ base: "16rem", md: "28rem", lg: "30rem" }} >
                                </Box>
                                <Link href="/" >
                                    <Box w={{ base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem" }}
                                        h={{ base: "16rem", md: "28rem", lg: "30rem" }} position='relative'>
                                        <Image
                                            layout='fill'
                                            objectFit="cover"
                                            src={url}
                                            alt="Documentación">
                                        </Image>
                                    </Box>
                                </Link>
                            </HStack>
                        </Center>
                ))
                }
            </Box>
            <Footer />
        </>
    )
}
export default documentation

export async function getStaticProps() {
    const URl = process.env.NEXT_URL;
    const TOKEN = process.env.NEXT_TOKEN;
    const bodyDocumentation = 'query MyQuery {allDocumentacions {enlaceDocumentacion}}'
    const getDocumentation = await getApiRes(URl, TOKEN, bodyDocumentation)
    const documentationData = getDocumentation
    return {
        props: {
            documentationData
        }
    }
}
