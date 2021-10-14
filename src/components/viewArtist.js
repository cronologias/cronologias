import React from "react";
import { Box, Collapse, Button, Container } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const ViewArtist = ({ names }) => {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)

    return (
        <Box p={4} display={{ lg: "flex" }}>
            <Box fontWeight="bold" fontFamily="heading" fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }} color="brand.primaryBlack">
                hola
            </Box>
            <Box fontWeight="bold" fontFamily="heading" fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }} textDecoration="underline" color="brand.primaryGray">
                Biografía
            </Box>
            <Box fontWeight="bold" fontFamily="heading" fontSize={{ base: "1.5rem", md: "1.5rem", lg: "2rem" }} textDecoration="underline" color="brand.primaryGray">
                Obras
            </Box>
            <Collapse startingHeight={700} in={show}>
                
                    <ReactMarkdown components={{
                        p: ({ nodo, ...props }) => < p style={{ paddingBottom: '0.625rem', paddingTop:'0.625rem' }}  {...props} />
                    }}>{names.biografADeLaArtista}</ReactMarkdown>
                
            </Collapse>
            <Container alignContent centerContent>
            <Button size="sm" onClick={handleToggle} mt="1rem">
                {show ? <ChevronUpIcon boxSize={9} color='brand.primaryOrange'/> : <ChevronDownIcon boxSize={9} color='brand.primaryOrange'/> }
            </Button>
            </Container>
        </Box>
    )
}

export { ViewArtist }