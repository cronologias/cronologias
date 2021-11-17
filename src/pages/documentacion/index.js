import { getApiRes } from "../../services/callApi"
import Image from 'next/image'
import Header from "../../components/header"
import Footer from "../../components/footer"
import Head from 'next/head';
import { 
    Heading,
    Box,
    HStack,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react"
import { buildUrl } from 'cloudinary-build-url';
import Slider from '../../components/documentationSlider'
import {useState} from 'react'

function documentation({ documentationData }) {
    const [slide, setslide] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const slides = (e) => {
        setslide(e.target.dataset.slide)
      }
    let url = '/cronologias-invisible';
    let imgurl ='';
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
                {documentationData.data.allDocumentacions.map((element, index) => (
                    element.documentacion[0].imagenDelDocumento === "" ? url = url : url = element.documentacion[0].imagenDelDocumento,
                    imgurl = buildUrl(url, {
                        cloud: {
                          cloudName: 'cronologias-invisible',
                        },
                        transformations: {
                          width:'1031',
                          quality:'75',
                        }
                    }),
                    index % 2 === 0 ?
                        <Center
                            key={index}>
                            <HStack
                                spacing={{ base: 4, md: 6, lg: 8 }}
                                mt={{ base: 5, lg: 8 }}>
                                <Box w={{ base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem" }}
                                    h={{ base: "16rem", md: "28rem", lg: "30rem" }} position='relative'>
                                    <Image
                                        layout='fill'
                                        objectFit="cover"
                                        src={imgurl}
                                        data-slide={index}
                                        alt="Documentación"
                                        onClick={(e)=>{slides(e), onOpen()}}>
                                    </Image>
                                </Box>
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
                                <Box w={{ base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem" }}
                                    h={{ base: "16rem", md: "28rem", lg: "30rem" }} position='relative'>
                                    <Image
                                        layout='fill'
                                        objectFit="cover"
                                        src={imgurl}
                                        data-slide={index}
                                        alt="Documentación"
                                        onClick={(e)=>{slides(e), onOpen()}}>
                                    </Image>
                                </Box>
                            </HStack>
                        </Center>
                ))
                }
            </Box>
            <Modal
                isOpen={isOpen} onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent
                    bg='brand.primaryOrange'
                    borderRadius='0'
                    maxWidth='none'
                    w={{ base: '100%', sm: '22rem', md: '26rem', lg: '30rem' }}
                >
                    <ModalCloseButton
                        _hover={{ bg: 'brand.secondaryOrange', borderRadius:'none'}}
                        _active={{ bg: 'brand.secondaryOrange', boxShadow: 'none', borderRadius:'none'}}
                        _focus={{ boxShadow: 'none', borderRadius:'none', border: '0.125rem solid', borderColor: 'brand.primaryBlack'}}
                        mt='12'
                        color='brand.primaryBlack'
                        size='1rem'
                        w={7} h={7}
                        borderRadius='none'
                        right={5}
                    />
                    <ModalBody mt='24'>
                         <Slider slides={documentationData.data.allDocumentacions} index={slide}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Footer />
        </>
    )
}
export default documentation

export async function getStaticProps() {
    const URl = process.env.NEXT_URL;
    const TOKEN = process.env.NEXT_TOKEN;
    const bodyDocumentation = 'query MyQuery {allDocumentacions{ tituloDelDocumento, documentacion{ imagenDelDocumento, derechoDeAutor, informacionExtra,}}}'
    const getDocumentation = await getApiRes(URl, TOKEN, bodyDocumentation)
    const documentationData = getDocumentation
    return {
        props: {
            documentationData
        }
    }
}
