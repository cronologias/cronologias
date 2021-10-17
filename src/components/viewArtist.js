import React from "react";
import { Box, Collapse, Button, Container, Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const ViewArtist = ({ names }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    return (
        <>
            <Flex p={8} flexDir={{ base: "column", lg: "row" }}>
                <Box fontWeight="bold" fontFamily="heading" fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }} color="brand.primaryBlack" w={{ lg: '21.875rem' }} mb={4}>
                    <Text>{names.nombreDeLaArtista}</Text>
                </Box>
                <Box display={{ lg: "none" }}>
                    <LinkBox fontFamily="heading" fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }} textDecoration="underline" color="brand.primaryGray" mb={4}>
                        <LinkOverlay href="#artTreasures">Obras</LinkOverlay>
                    </LinkBox>
                </Box>
                    <Box w={{ lg: "581px" }} fontSize={{ base: "1rem", md: "1rem", lg: "1.125rem" }} display={{base:"block", lg:"none"}}>
                        <Collapse startingHeight={460} in={show} >

                            <ReactMarkdown id="biography" components={{
                                p: ({ nodo, ...props }) => < p style={{ paddingBottom: '0.625rem', paddingTop: '0.625rem' }}  {...props} />
                            }}>{names.biografADeLaArtista}</ReactMarkdown>

                        </Collapse>
                        <Container alignContent centerContent>
                            <Button size="sm" onClick={handleToggle} mt="1rem"  _active={{bg:"brand.secondaryGray"}} _focus={{boxShadow:"none"}}>
                                {show ? <ChevronUpIcon boxSize={9} color='brand.primaryOrange' /> : <ChevronDownIcon boxSize={9} color='brand.primaryOrange' />}
                            </Button>
                        </Container>
                    </Box>
                    <Box ml="15.375rem" w={{ lg: "36.313rem" }} fontSize={{ base: "1rem", md: "1rem", lg: "1.125rem" }} display={{base:"none",lg:"block"}}>
                        <ReactMarkdown id="biography" components={{
                            p: ({ nodo, ...props }) => < p style={{ paddingBottom: '0.625rem', paddingTop: '0.625rem' }}  {...props} />
                        }}>{names.biografADeLaArtista}</ReactMarkdown></Box>
            </Flex>
            <Box id="artTreasures" pl={8} pr={8} fontWeight="bold" fontFamily="heading" fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }} color="brand.primaryBlack" w={{ lg: '21.875rem' }}>
                    <Text>Obras</Text>
                </Box>
        </>
    )
}

export { ViewArtist }