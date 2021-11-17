import Link from "next/link";
import {Text, Heading, Box, Flex, HStack,} from '@chakra-ui/react';
import { buildUrl } from 'cloudinary-build-url';
import Image from 'next/image'

function CuratorsCards(props) {
    let imgurl = ''
    return (
    <>
    <Flex
        alignItems='start'
        flexDir='column' 
        m='auto'
        w={{ base: '20rem', '2sm': '24rem' , md: '45rem', lg: '58rem', xl: '72rem' }}
        justifyContent='space-between'
        mb={{ base: '3rem', md:'4rem', lg:'5rem'}}
    >
        <HStack 
        spacing={{ base:'0.700rem', md:'1rem', lg:'10.5rem' }}
        alignItems='normal'
        mb={8}>
            {props.curators.map((element, index) => (
                imgurl = buildUrl(element.imagenDeLaCuradora, {
                    cloud: {
                        cloudName: 'cronologias-invisible',
                    },
                    transformations: {
                        width:'240',
                        quality:'75',
                    }
                }),
                <Box
                key={`curators-card-${index}`}
                w={{base:'9.75rem', md:'15rem'}}
                >
                    <Link
                    href={`/curadoras/${element.id}`} as={`/curadoras/${element.id}`}
                    >
                        <a>
                            <Box 
                            w="100%"
                            h={{base:"14.875rem", md:"22rem"}}
                            position='relative'
                            >
                            <Image 
                                mr='0'
                                src={imgurl} 
                                display="inline-block" 
                                layout='fill'
                                objectFit="contain"
                                alt={element.nombreDeLaCuradora} 
                                pb='7px'
                            />
                            </Box>
                            <Heading
                            textTransform='uppercase'
                            textAlign='center'
                            as='h3'
                            href='#' 
                            textStyle='body'
                            fontSize={{ base:'1.125rem'}}
                            fontWeight={300}
                            fontFamily='body'
                            m='0 auto'
                            mb={3}
                            mt={3}
                            fontWeight='bold'
                            w={{ base:'108px', md:'auto'}}
                            >
                                {element.nombreDeLaCuradora} 
                            </Heading>
                            <Box
                            transform= 'rotate(-4deg)'
                            m='0 auto'
                            bg='brand.secondaryOrange'
                            h='4px'
                            w='80px'
                            ></Box>
                            <Text
                            textAlign='center'
                            fontSize={{ base:'1rem'}}
                            fontFamily='body'
                            fontWeight={300}
                            mt={3}
                            >
                                {element.breveDescripcionDeLaCuradora} 
                            </Text>
                        </a>
                    </Link>
                </Box>
                
            ))}
        </HStack>
    </Flex>
    </>
    )
}

export default CuratorsCards