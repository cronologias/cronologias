import React from "react";
import { Box, Collapse, Button, Container, Flex, Text } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {getApiRes} from "../src/services/callApi"

function AboutInvestigation({ investigationData }) {
    console.log(investigationData)
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    return (
        <>
            <Flex p={8} > 
                <Box fontWeight="bold" fontFamily="heading" fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }} color="brand.primaryBlack" w={{ lg: '21.875rem' }} mb={4}>
                    <Text>{investigationData.tituloDeLaInvestigacion}</Text>
                </Box>
                <Box
                    w="0.25rem"
                    h={{ base: "28.75rem", md: "16.375rem", lg:"24rem" }}
                    bg="brand.primaryOrange"
                    ml={{base: "-0.5rem", lg:"36rem"}}
                    position="absolute"
                >
                </Box>
                <Box  position="relative" fontSize={{ base: "1rem", md: "1rem", lg: "1.125rem" }} display={{ base: "block", lg: "none" }}>
                    <Collapse startingHeight={460} in={show} >
                        <ReactMarkdown components={{
                            p: ({ nodo, ...props }) => < p style={{}}  {...props} />
                        }}>{investigationData.cuerpoDeLaInvestigacion}</ReactMarkdown>
                    </Collapse>
                    <Container alignContent centerContent>
                        <Button size="sm" onClick={handleToggle} mt="1rem" _active={{ bg: "brand.secondaryGray" }} _focus={{ boxShadow: "none" }}>
                            {show ? <ChevronUpIcon boxSize={9} color='brand.primaryOrange' /> : <ChevronDownIcon boxSize={9} color='brand.primaryOrange' />}
                        </Button>
                    </Container>
                </Box>
                <Box ml="37rem" w={{ lg: "37.375rem" }} fontSize={{ base: "1rem", md: "1rem", lg: "1.125rem" }} display={{ base: "none", lg: "block" }}>
                    <ReactMarkdown  components={{
                        p: ({ nodo, ...props }) => < p style={{}}  {...props} />
                    }}>{investigationData.cuerpoDeLaInvestigacion}</ReactMarkdown></Box>
            </Flex>
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
    console.log(investigationData)
    return{
        props: {
            investigationData
        }
    }
}