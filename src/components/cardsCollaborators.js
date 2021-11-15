import React from "react";
import  Image  from "next/image";
import { Flex, SimpleGrid,  Box, Text, Link} from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsTwitter, BsGlobe2 } from 'react-icons/bs'

const CardCollaborators = ({ collaboratorsData, institucionData, index}) => {
  let style = {color: '#EB5529', width:'24px'}
  let url = '/cronologias-invisible'
  return (
    <>
      <Box
        m='auto'
        w={{ base: '20rem', "2sm":"25rem", md: '44rem', lg:'54rem', xl: '74rem' }} 
      >
        <Text 
          fontFamily='heading'
          fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem'}}
          fontWeight={700}
          mt='2rem'
          mb={2}
        >
            Instituciones
        </Text>

        <SimpleGrid 
          align="start"
          columns={{base:1, md:2, lg:2, xl:3}} 
          fontFamily='body'
          mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}
          spacing={{base:2, md:4, lg:8, xl:20}}
        > 
          {institucionData.map((institucion, index) => {
            url='/cronologias-invisible'
            institucion.imagenDeLaInstitucion ===''? url=url: url= institucion.imagenDeLaInstitucion;
            return (
              <Flex 
                alignItems='center'
                border='2px'
                borderColor="brand.primaryOrange"
                flexDir="row"
                key={index} 
                p={2}
                w={{base:'20rem', '2sm':'25rem', md:'22rem', lg:'25rem'}}
              >

                <Box w={{base:'7.5rem', '2sm':'8rem'}}  mr={{base:2.5, '2sm': 3}} h="7rem" position='relative'>
                  <Image layout='fill' objectFit='contain' src={url} alt={institucion.nombreDeLaInstitucion} />
                </Box>

                <Box>
                  <Text
                    fontSize={{ base: '1.1rem'}}
                    fontWeight={700} mb={2} >
                    {institucion.nombreDeLaInstitucion}
                  </Text>

                  <Flex 
                    align="center"
                    flexDir="row" 
                    mb={2}
                    w={28}
                  >
                    {institucion.enlaceASitioWebYRedesSociales.map((link, key) => {
                      const router = link.enlaceASitioWebYRedesSociales
                      const icons = () => {
                        if(router.search('facebook') >= 1) {
                          return (
                            <BsFacebook style={style} />
                          )
                        } else if (router.search('instagram') >= 1) {
                          return (
                            <BsInstagram style={style} />
                          )
                        } else if (router.search('twitter') >= 1) {
                          return (
                            <BsTwitter style={style} />
                          )
                        } else {
                          return (
                            <BsGlobe2 style={style} />
                          )
                        } 
                      }
                      return (
                        
                          <Link mr={2} key={key} href={link.enlaceASitioWebYRedesSociales} isExternal children={icons(link.enlaceASitioWebYRedesSociales)}>                   
                          </Link>   
                        
                      )
                    })}
                  </Flex>
                </Box>
            
              </Flex>
            )
          })}    
        </SimpleGrid>
      </Box>

      <Box
        key={index}
        m='auto'
        w={{ base: '20rem', "2sm":"25rem", md: '44rem', lg:'54rem', xl: '74rem' }} 
      >

        <Text 
          fontFamily='heading'
          fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem'}}
          fontWeight={700}
          mt='2rem'
          mb={2}
        >
          Agradecimientos
        </Text>

        <SimpleGrid 
          align="start"
          columns={{base:2, md:4}} 
          fontFamily='body'
          mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}
          spacing={{base:2, md:4, lg:8}}
        > 
          {collaboratorsData.map((person, index) => {
            return (
              <Flex 
                alignItems='center'
                flexDir="row"
                key={index} 
                p={2}
                pl={0}
                w={{base:'9.375rem', '2sm':'13.375rem', md:'9.375rem', lg:'12.188rem', xl:'16rem'}}
              >

                <Box mr={{base:2}}>
                  <img src='/elementG.svg' />
                </Box>

                <Box>
                  <Text
                    fontSize={{ base: '1rem'}}
                    fontWeight={400}
                  >
                    {person.nombreDelColaborador}
                  </Text>
                </Box>
              </Flex>
            )
          })}
  
        </SimpleGrid>
      </Box>
    </>
  )
}

export default CardCollaborators