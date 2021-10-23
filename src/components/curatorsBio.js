import React from "react";
import { Box, Collapse, Button, Container, Flex, Text, Image, Link, HStack, Heading } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Header from "./header";
import Footer from "./footer";
import webSite from '../../public/webSite.svg'
import email from '../../public/email.svg'


function CuratorsBio(props) {
    console.log(props.curators)
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    return (
        <>
        <Header/> 
        <Box 
        fontFamily="body"
        w="100%" 
        h={{ base: "266px", lg: "331px" }}
        position="relative"
        >
            <Image 
                w="100%"
                src="/background.png"
                w="100%" 
                h="100%"
                objectFit="cover"
                alt=""
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
                fontSize="2rem"
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
                    w="full"
                    h={{base: "10.375rem", md:"31.5rem", lg: "18.563rem", xl:"23.75rem"}}
                    >
                        <Image 
                        src={props.curators[0].imagenDeLaCuradora}
                        w="100%" 
                        h="100%"
                        objectFit="cover"
                        alt={props.curators[0].nombreDeLaCuradora}
                        />
                    </Box>
                    <Flex
                    justifyContent="flex-end"
                    pt="1.5rem"
                    pb="1.625rem"
                    >
                        <HStack 
                        spacing={{ base:"1.25rem", md:"2rem" }}
                        alignItems="center"
                        >
                            <Link 
                            href="#"
                            w={{ base: "1.5rem" }}
                            h={{ base: "1.5rem" }}
                            >
                                <Image 
                                src={webSite} 
                                alt="Cronologias de lo Invisible">
                                </Image>
                            </Link>
                            <Link 
                            href="#"
                            w={{ base: "1.5rem"}}
                            h={{ base: "1.5rem"}}
                            >
                                <Image 
                                src={email} 
                                alt="Cronologias de lo Invisible">
                                </Image>
                            </Link>
                        </HStack>
                    </Flex>
                </Box>
                <Box 
                    ml="-10px"
                    mt={{base:"14.6rem", md:"35.4rem"}}
                    display={{lg:"none", xl:"none"}}
                    w="0.25rem"
                    h={{ base: "33rem", md: "33.4rem" }}
                    bg="brand.primaryOrange"
                    position="absolute"
                >
                </Box>
                <Box 
                    w={{lg:"36.313rem", xl:"38.125rem"}}
                    fontSize={{ base: "1rem", md: "1rem", lg: "1.125rem" }} 
                    display={{ base: "block", lg: "none" }}
                    position="relative"
                    pl="0.5rem"
                >
                    <Collapse startingHeight={460} in={show} >
                        <ReactMarkdown 
                        components={{
                            p: ({ nodo, ...props }) => < p style={{}}  {...props} />
                        }}>{props.curators[0].cuerpoDeLaBiografia}</ReactMarkdown>
                    </Collapse>
                    <Container alignContent centerContent>
                        <Button size="sm" onClick={handleToggle} mt="1rem" _active={{ bg: "brand.secondaryGray" }} _focus={{ boxShadow: "none" }}>
                            {show ? <ChevronUpIcon boxSize={9} color='brand.primaryOrange' /> : <ChevronDownIcon boxSize={9} color='brand.primaryOrange' />}
                        </Button>
                    </Container>
                </Box>
                <Box
                w={{lg:"27rem", xl:"38.125rem"}}
                fontSize={{ base: "1rem", md: "1rem", lg: "1.125rem" }} 
                display={{ base: "none", lg: "block" }}>
                    <ReactMarkdown  components={{
                        p: ({ nodo, ...props }) => < p style={{}}  {...props} />
                    }}>{props.curators[0].cuerpoDeLaBiografia}</ReactMarkdown>
                </Box>
            </Flex>
            <Footer></Footer>
        </>

    )
}
export default CuratorsBio