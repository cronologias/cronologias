import React from 'react';
import Image from 'next/image';
import { Box, Collapse, Button, Container, Flex, Heading } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Header from './header';
import Footer from './footer';


function AboutInvestigation({ investigationData }) {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    return (
        <>
        <Header/> 
        <Box 
fontFamily='body'
w='100%' 
h={{ base: '266px', lg: '331px' }}
position='relative'
>
    <Image 
        src='/background.png'
        layout='fill'
        objectFit='cover'
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
            Sobre la investigación
        </Heading>
    </Box>
</Box>
            <Flex 
                p={8} 
                flexDir={{ base: 'column', lg: 'row' }}
                m='auto'
                w={{ base: '20rem', "2sm":"30rem", md: '48rem', lg: '60rem', xl: '75rem' }}
                justifyContent='space-between'
                > 
                <Box 
                fontWeight={700} 
                fontFamily='heading' 
                color='brand.primaryBlack'
                mb={4}
                >
                    <Heading
                        fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem' }}
                        as='h3'
                    >{investigationData.data.sobreLaInvestigacion.tituloDeLaInvestigacion}</Heading>
                </Box>
                <Box 
                    ml='-10px'
                    mt={{base:"4rem", "2sm":"3rem" , md:"3rem"}}
                    display={{lg:'none', xl:'none'}}
                    w='0.25rem'
                    h={{ base: '28.75rem', md: '15rem', lg:'24rem' }}
                    bg='brand.primaryOrange'
                    position='absolute'
                >
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
                        }}>{investigationData.data.sobreLaInvestigacion.cuerpoDeLaInvestigacion}</ReactMarkdown>
                    </Collapse>
                    <Container alignContent centerContent>
                        <Button size='sm' onClick={handleToggle} mt='1rem' _active={{ bg: 'brand.secondaryGray' }} _focus={{ boxShadow: 'none' }}>
                            {show ? <ChevronUpIcon boxSize={9} color='brand.primaryOrange' /> : <ChevronDownIcon boxSize={9} color='brand.primaryOrange' />}
                        </Button>
                    </Container>
                </Box>
                <Box
                w={{lg:'36.313rem', xl:'38.125rem'}}
                fontSize={{ base: '1rem', md: '1rem', lg: '1.125rem' }} 
                display={{ base: 'none', lg: 'block' }}>
                    <ReactMarkdown  components={{
                        p: ({ nodo, ...props }) => < p style={{}}  {...props} />
                    }}>{investigationData.data.sobreLaInvestigacion.cuerpoDeLaInvestigacion}</ReactMarkdown>
                </Box>
            </Flex>
            <Footer />
        </>
    )
}
export default AboutInvestigation