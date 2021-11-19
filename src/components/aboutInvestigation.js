import React from 'react';
import { Box, Collapse, Button, Container, Flex, Heading, Image } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';


function AboutInvestigation(props) {
    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
    return (
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
                    width='100%'
                    h={{base:'16.625rem', md:'20.688rem'}}
                    objectFit='cover'
                />
                <Box
                    position='absolute'
                    zIndex='2'
                    bottom='1.25rem'
                    ml='2rem'
                    mr='2rem'
                >
                    <Box
                    position='relative'
                    
                    >
                    <Image 
                    src="/sobreInvestigacionMobile.svg"
                    srcSet="/sobreInvestvistaMobile.svg 768w, /sobreInvestvistaDescktop.svg 960w"
                    alt="Equipo"
                    w={{base:'90px', md:'270px'}}
                    h={{base:'90px', md:'65px'}}
                    mb={2}
                    
                    />
                    </Box>
                </Box>
            </Box>
            <Flex 
                p={8} 
                flexDir={{ base: 'column', lg: 'row' }}
                m='auto'
                w={{ base: '20rem', '2sm':'30rem', md: '48rem', lg: '60rem', xl: '75rem' }}
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
                    >{props.investigationData.data.sobreLaInvestigacion.tituloDeLaInvestigacion}</Heading>
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
                            p: ({ nodo, ...props }) => < p style={{ paddingBottom: '0.625rem', paddingTop: '0.625rem'}}  {...props} />
                        }}>{props.investigationData.data.sobreLaInvestigacion.cuerpoDeLaInvestigacion}</ReactMarkdown>
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
                        p: ({ nodo, ...props }) => < p style={{ paddingBottom: '0.625rem', paddingTop: '0.625rem'}}  {...props} />
                    }}>{props.investigationData.data.sobreLaInvestigacion.cuerpoDeLaInvestigacion}</ReactMarkdown>
                </Box>
            </Flex>
            <Footer />
        </>
    )
}
export default AboutInvestigation
