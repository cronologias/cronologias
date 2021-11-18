import React from "react";
import Image from "next/image";
import { Box, Collapse, Button, Container, Flex, Text, Link, HStack, Heading } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { BsEnvelope,BsGlobe2 } from 'react-icons/bs'
import Header from "./header";
import Footer from "./footer";
import Head from 'next/head';
import { buildUrl } from 'cloudinary-build-url';

function CuratorsBio(props) {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    let imgurl =''
    return (
        imgurl = buildUrl(props.curators[0].imagenDeLaCuradora, {
            cloud: {
                cloudName: 'cronologias-invisible',
            },
            transformations: {
                width:'490',
                quality:'75',
            }
        }),
        <>
        <Head>
            <link rel="icon" type="image/svg" sizes="42x42" href="/logoCrono.png"/>
        </Head>
        <Header museumMenu={props.museumData} /> 
        <Box 
        fontFamily='body'
        w='100%' 
        h={{ base: '266px', lg: '331px' }}
        position='relative'
        >
            <Image
                src="/bg.svg"
                layout='fill'
                objectFit="cover"
                alt=""
            />
            <Box
            position='absolute'
            zIndex='2'
            bottom='1.25rem'
            ml='2rem'
            mr='2rem'
            >
                <Heading
                as='h2'
                color='brand.baseColor'
                fontStyle='bold'
                pb='1.563rem'
                fontSize={{ base: '1.75rem', md: '1.85rem', lg: '2rem' }}
                >
                {props.curators[0].nombreDeLaCuradora}
                </Heading>
                <Text
                color="brand.baseColor"
                fontSize={{ base: "1rem", lg: "1.125rem" }}
                >
                {props.curators[0].breveDescripcionDeLaCuradora}
                </Text>
            </Box>
        </Box>
            <Flex 
                p={8} 
                flexDir={{ base: "column", lg: "row" }}
                m="auto"
                w={{ base: "20rem", md: "48rem", lg:"57rem", xl:"75rem" }}
                justifyContent="space-between"
                > 
                
                <Box 
                w={{ base: "16rem", md: "44rem", lg:"24.188rem", xl:"30.625rem" }}
                mb={4}
                >
                    <Box
                    position="relative"
                    w="full"
                    h={{base: "24rem", md:"64rem", lg: "36rem", xl:"44rem"}}
                    >
                        <Image 
                        src={imgurl}
                        layout='fill'
                        objectFit="cover"
                        alt={props.curators[0].nombreDeLaCuradora}
                        />
                    </Box>
                    <Flex
                    justifyContent='flex-end'
                    pt='1.5rem'
                    pb='1.625rem'
                    >
                        <HStack 
                        spacing={{ base:"1.25rem", md:"2rem" }}
                        alignItems="center"
                        position="relative"
                        >
                            <Link 
                            href='#'
                            w={{ base: '1.5rem' }}
                            h={{ base: '1.5rem' }}
                            >
                                <BsGlobe2/>
                            </Link>
                            <Link 
                            href='#'
                            w={{ base: '1.5rem'}}
                            h={{ base: '1.5rem'}}
                            >
                                <BsEnvelope/>
                            </Link>
                        </HStack>
                    </Flex>
                </Box>
                <Box 
                    w={{lg:'36.313rem', xl:'38.125rem'}}
                    fontSize={{ base: '1rem', md: '1rem', lg: '1.125rem' }} 
                    display={{ base: 'block', lg: 'none' }}
                    position='relative'
                    pl='0.5rem'
                >
                    <Collapse startingHeight={460} in={show} >
                        <ReactMarkdown 
                        components={{
                            p: ({ nodo, ...props }) => < p style={{}}  {...props} />
                        }}>{props.curators[0].cuerpoDeLaBiografia}</ReactMarkdown>
                    </Collapse>
                    <Container alignContent centerContent>
                        <Button size='sm' onClick={handleToggle} mt='1rem' _active={{ bg: 'brand.secondaryGray' }} _focus={{ boxShadow: 'none' }}>
                            {show ? <ChevronUpIcon boxSize={9} color='brand.primaryOrange' /> : <ChevronDownIcon boxSize={9} color='brand.primaryOrange' />}
                        </Button>
                    </Container>
                </Box>
                <Box
                w={{lg:'27rem', xl:'38.125rem'}}
                fontSize={{ base: '1rem', md: '1rem', lg: '1.125rem' }} 
                display={{ base: 'none', lg: 'block' }}>
                    <ReactMarkdown  components={{
                        p: ({ nodo, ...props }) => < p style={{paddingBottom: '0.625rem', paddingTop: '0.625rem'}}  {...props} />
                    }}>{props.curators[0].cuerpoDeLaBiografia}</ReactMarkdown>
                </Box>
            </Flex>
            <Footer></Footer>
        </>

    )
}
export default CuratorsBio

