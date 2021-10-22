import React from "react";
import { Box, Collapse, Button, Container, Flex, Text } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {getApiRes} from "../../services/callApi"
import Header from "../../components/header";
import Footer from "../../components/footer";

function AboutInvestigation({ investigationData }) {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    return (
        <>
        <Header/> 
        <Box 
        bg="brand.primaryBlack"
        w="100%"
        h="331px"
        >

        </Box>
            <Flex 
                p={8} 
                flexDir={{ base: "column", lg: "row" }}
                m="auto"
                w={{ base: "20rem", md: "48rem", lg: "60rem", xl: "75rem" }}
                justifyContent="space-between"
                > 
                
                <Box 
                fontWeight={700} 
                fontFamily="heading" 
                fontSize={{ base: "1.25rem", md: "1.25rem", lg: "1.5rem" }}
                color="brand.primaryBlack"
                mb={4}
                >
                    <Text>{investigationData.data.sobreLaInvestigacion.tituloDeLaInvestigacion}</Text>
                </Box>
                <Box 
                    ml="-10px"
                    mt={{base:"5.125rem", md:"3.125rem"}}
                    display={{lg:"none", xl:"none"}}
                    w="0.25rem"
                    h={{ base: "28.75rem", md: "16.375rem", lg:"24rem" }}
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
                        }}>{investigationData.data.sobreLaInvestigacion.cuerpoDeLaInvestigacion}</ReactMarkdown>
                    </Collapse>
                    <Container alignContent centerContent>
                        <Button size="sm" onClick={handleToggle} mt="1rem" _active={{ bg: "brand.secondaryGray" }} _focus={{ boxShadow: "none" }}>
                            {show ? <ChevronUpIcon boxSize={9} color='brand.primaryOrange' /> : <ChevronDownIcon boxSize={9} color='brand.primaryOrange' />}
                        </Button>
                    </Container>
                </Box>
                <Box
                w={{lg:"36.313rem", xl:"38.125rem"}}
                fontSize={{ base: "1rem", md: "1rem", lg: "1.125rem" }} 
                display={{ base: "none", lg: "block" }}>
                    <ReactMarkdown  components={{
                        p: ({ nodo, ...props }) => < p style={{}}  {...props} />
                    }}>{investigationData.data.sobreLaInvestigacion.cuerpoDeLaInvestigacion}</ReactMarkdown>
                </Box>
            </Flex>
            <Footer></Footer>
        </>

    )
}
export default AboutInvestigation

export async function getStaticProps () {
    const URl= process.env.NEXT_URL;
    const TOKEN= process.env.NEXT_TOKEN;
    const bodyInvestigation ='query MyQuery {sobreLaInvestigacion {tituloDeLaInvestigacion cuerpoDeLaInvestigacion}}'
    const getInvestigation = await getApiRes(URl,TOKEN, bodyInvestigation)
    const investigationData = getInvestigation
    return{
        props: {
            investigationData
        }
    }
}



