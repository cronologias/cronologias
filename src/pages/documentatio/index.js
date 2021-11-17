import { Box, 
    HStack, 
    Center, 
    Link, 
    Modal, 
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    ModalBody
} from '@chakra-ui/react'
import { getApiRes } from "../../services/callApi"
import Image from 'next/image'
import Header from "../../components/header"
import Footer from "../../components/footer"
import Head from 'next/head';
import { Heading } from "@chakra-ui/react"
import {useState} from 'react'
import Slider from '../../components/slider'

function documentation({ documentationData }) {
    let url = '/cronologias-invisible'
    const [indexSlide, setindexSlide] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const count = (e) => {
        setindexSlide(e.target.dataset.index)
    }
    return (
        <>
        <Head>
            <link rel="icon" type="image/svg" sizes="42x42" href="/logoCrono.png"/>
        </Head>
        <Header />
        <Box 
                fontFamily="body"
                w="100%" 
                h={{ base: "266px", lg: "331px" }}
                position="relative"
            >
                <Image 
                    src="/background.png"
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
                                <Box w={{ base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem" }}
                                    h={{ base: "16rem", md: "28rem", lg: "30rem" }} position='relative'>
                                    <Image
                                        layout='fill'
                                        objectFit="cover"
                                        src={url}
                                        alt="Documentación"
                                        data-index={index}
                                        onClick={
                                            (e)=>{
                                                count(e); 
                                                onOpen();
                                            }
                                        }>
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
                                        src={url}
                                        alt="Documentación"
                                        data-index={index}
                                        onClick={
                                        (e)=>{
                                            count(e); 
                                            onOpen();
                                        }
                                    }>
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
                        <Slider slides={documentation} position={indexSlide}/>
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
    const bodyDocumentation = 'query MyQuery {allDocumentacions {enlaceDocumentacion}}'
    const getDocumentation = await getApiRes(URl, TOKEN, bodyDocumentation)
    const documentationData = getDocumentation
    return {
        props: {
            documentationData
        }
    }
}
