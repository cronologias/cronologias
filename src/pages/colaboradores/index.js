import { getApiRes } from '../../services/callApi'
import Header from '../../components/header'
import CardCollaborators from '../../components/cardsCollaborators'
import Footer from '../../components/footer'
import Image from "next/image";
import Head from 'next/head';
import {
  Box,
  Heading,
} from "@chakra-ui/react"

function viewCollaborators({ collaboratorsData, institucionData }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" sizes="42x42" href="/logoCrono.png"/>
      </Head>
      <Header />
      <Box 
            fontFamily="body"
            w="100%" 
            h={{ base: "266px", lg: "331px" }}
            position="relative"
        >
            <Image 
                src="/background.png"
                layout='fill'
                objectFit="cover"
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
                fontSize={{ base: '1.75rem', md: '1.85rem', lg: '2rem' }}
                >
                Colaboradores
                </Heading>
            </Box>
        </Box>
        <CardCollaborators collaboratorsData={collaboratorsData} institucionData={institucionData}/>
        <Footer />
    </>
  )
}

export default viewCollaborators

export async function getStaticProps () {
  const URl= process.env.NEXT_URL;
  const TOKEN= process.env.NEXT_TOKEN;
  
  const collaborartorsInfo ='query MyQuery{ allPersonaColaboradoras{ id imagenDelColaborador nombreDelColaborador profesion enlace { id enlaceASitioWebYRedesSociales }}}'
  const institucionInfo ='query MyQuery{ allInstitucionColaboradoras{ id nombreDeLaInstitucion imagenDeLaInstitucion enlaceASitioWebYRedesSociales{ id enlaceASitioWebYRedesSociales}}}'
  
  const getCollaborators = await getApiRes(URl,TOKEN, collaborartorsInfo)
  const collaboratorsData = getCollaborators.data.allPersonaColaboradoras
  
  const getInstitucion = await getApiRes(URl,TOKEN, institucionInfo)
  const institucionData = getInstitucion.data.allInstitucionColaboradoras

  return{
    props: {
      collaboratorsData,
      institucionData,
    }
  }
}