import React from "react";
import { Box, Collapse, Button, Container, Flex, Image} from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";


function AboutInvestigation({ investigationData }) {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    return (
        <>
        <Image
        src="../../public/background.png"
        >
            
        </Image>
            {/* <Box className="bg"
                backgroundImage="url(../../public/background.png)"
                backgroundRepeat="no-repeat"
            >
            </Box> */}
            <Flex p={8} > 
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







{/* <Flex
            >
                <Box
                    backgroundImage="url('../../public/background.svg')"    
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                >          
                </Box>
            </Flex>
            <Box
                position= "absolute"
                top= "12.5rem"
                left= {8}
                color="brand.primaryOrange"
                fontFamily="body"
                fontSize={{ base: "1.75rem", md: "2rem", lg: "2.25rem" }}
            >
                <h1>
                Sobre la investigación
                </h1>
            </Box> */}