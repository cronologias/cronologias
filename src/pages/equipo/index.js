import { getApiRes } from '../../services/callApi'
import Header from "../../components/header"
import Footer from "../../components/footer"
import Head from 'next/head';
import {Text, Heading, Box, Flex, HStack, Link, Image} from '@chakra-ui/react'
import { buildUrl } from 'cloudinary-build-url';

function Team({teamData}){
    console.log(teamData.data.allEquipos[0].cuerpoDeLaBiografiaDelIntegrante)
    let imgurl = ''
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg" sizes="42x42" href="/logoCrono.png"/>
            </Head>
            <Header/>
            <Flex
            alignItems='start'
            flexDir={{base:'column', md:"row"}}
            m='auto'
            w={{ base: '20rem', '2sm': '24rem' , md: '45rem', lg: '58rem', xl: '72rem' }}
            justifyContent='space-between'
            >
                    {teamData.data.allEquipos.map((element, index) => (
                        imgurl = buildUrl(element.imagenIntegranteDelEquipo, {
                            cloud: {
                                cloudName: 'cronologias-invisible',
                            },
                            transformations: {
                                width:'320',
                                quality:'75',
                            }
                        }),
                        <Box
                        key={`curators-card-${index}`}
                        w={{base:'20rem', md:'31rem'}}
                        >
                            <Heading
                                textTransform='uppercase'
                                as='h3'
                                href='#' 
                                textStyle='body'
                                fontSize={{ base:'1.125rem'}}
                                fontWeight={300}
                                fontFamily='body'
                                mb={3}
                                mt={3}
                                fontWeight='bold'
                                w={{ base:'12rem', md:'auto'}}
                            >
                                {teamData.data.allEquipos[index].nombreDelIntegrante} 
                            </Heading>
                            <Link
                            href='/'
                            >
                                <a>
                                    <Box 
                                    w="100%"
                                    h={{base:"32.625rem", md:"32.5rem"}}
                                    position='relative'
                                    >
                                    <Image 
                                        mr='0'
                                        src={imgurl} 
                                        display="inline-block" 
                                        layout='fill'
                                        objectFit="contain"
                                        alt={teamData.data.allEquipos[index].nombreDelIntegrante} 
                                    />
                                    </Box>
                                    
                                    <Text
                                    textAlign='center'
                                    fontSize={{ base:'1rem'}}
                                    fontFamily='body'
                                    fontWeight={300}
                                    mt={3}
                                    >
                                        {element.profesion} 
                                    </Text>
                                </a>
                            </Link>
                            <Box pb={8}
                            w={{md:"18rem", lg:"22rem", xl:"26rem"}}>
                                <Text>
                                    {teamData.data.allEquipos[index].cuerpoDeLaBiografiaDelIntegrante}
                                </Text>
                            </Box>
                        </Box>
                    ))}
            </Flex>
            
            <Footer/>
        </>
    )
}
export default Team

export async function getStaticProps() {
    const URl = process.env.NEXT_URL;
    const TOKEN = process.env.NEXT_TOKEN;
    const bodyTeam = 'query MyQuery {allEquipos {id, nombreDelIntegrante, imagenIntegranteDelEquipo, cuerpoDeLaBiografiaDelIntegrante}}'
    const getTeam = await getApiRes(URl, TOKEN, bodyTeam)
    const teamData = getTeam
    return {
        props: {
            teamData
        }
    }
}