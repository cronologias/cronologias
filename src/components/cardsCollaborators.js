import React from "react";
//import Link from "next/link";
import { Flex, SimpleGrid,  Box, Text, Image, Link} from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsTwitter, BsGlobe2 } from 'react-icons/bs'

const CardCollaborators = ({ collaboratorsData, institucionData }) => {
  let style = {color: '#EB5529', width:'24px'}
  return (
    <>
      <Box
        m='auto'
        w={{ base: '20rem', "2sm":"25rem", md: '48rem', lg: '60rem', xl: '75rem' }} 
      >

        <Text 
          fontFamily='heading'
          fontSize={{ base: '1.25rem', md: '1.25rem', lg: '1.5rem'}}
          fontWeight={700}
          mt='2rem'
          mb={2}
        >
            Equipo
        </Text>

        <SimpleGrid 
          align="start"
          columns={{base:1, md:2, lg:3}} 
          fontFamily='body'
          mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}
          spacing={{base:2, md:8, lg:8}}
        > 
          {collaboratorsData.map((person, index) => {
            return (
              <Flex 
                border='2px'
                borderColor="brand.primaryOrange"
                flexDir="row"
                key={index} 
                p={2}
                w={{base:'20rem', '2sm':'25rem', md:'22rem', lg:'25rem'}}
              >

                <Box w={{base:'7.5rem', '2sm':'8rem'}}  mr={{base:2.5, '2sm': 3}}>
                  <Image h="7rem"  src={person.imagenDelColaborador} alt={person.nombreDelColaborador} />
                </Box>

                <Box>
                  <Text
                    fontSize={{ base: '1.1rem'}}
                    fontWeight={700} mb={2} >
                    {person.nombreDelColaborador}
                  </Text>

                  <Flex 
                    align="center"
                    flexDir="row" 
                    justifyContent='space-between'
                    mb={2}
                    w={28}
                  >
                    <Link href='/'>
                      <a>
                        <BsFacebook style={style} />
                      </a>
                    </Link>
                    <Link href='/'>
                      <a>
                      <BsInstagram style={style} />
                      </a>
                    </Link>
                    <Link href='/'>
                      <a>
                        <BsTwitter style={style} />
                      </a>
                    </Link>
                    <Link href='/'>
                      <a>
                        <BsGlobe2 style={style} />
                      </a>
                    </Link>
                  </Flex>
                  
                  <Text
                    fontSize={{ base: '1rem', md: '1.2rem'}}
                    fontWeight={300}
                    w={{ base:'12rem', "2sm":"13rem"}}
                  >
                    {person.profesion}
                  </Text>
                </Box>
            
              </Flex>
            )
          })}
            
        </SimpleGrid>
      </Box>
      
      <Box
        m='auto'
        w={{ base: '20rem', "2sm":"25rem", md: '48rem', lg: '60rem', xl: '75rem' }} 
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
          columns={{base:1, md:2, lg:3}} 
          fontFamily='body'
          mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}
          spacing={{base:2, md:8, lg:8}}
        > 
          {institucionData.map((institucion, index) => {
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

                <Box w={{base:'7.5rem', '2sm':'8rem'}}  mr={{base:2.5, '2sm': 3}}>
                  <Image h="7rem"  src={institucion.imagenDeLaInstitucion} alt={institucion.nombreDeLaInstitucion} />
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
                    justifyContent='space-between'
                    mb={2}
                    w={28}
                  >
                    <Link href={institucion.enlaceASitioWebYRedesSociales} isExternal>
                    
                        <BsFacebook style={style} />
                      
                    </Link>
                    <Link href={institucion.enlaceASitioWebYRedesSociales} isExternal>
                      
                      <BsInstagram style={style} />
                      
                    </Link>
                    <Link href={institucion.enlaceASitioWebYRedesSociales} isExternal>
                      
                        <BsTwitter style={style} />
                      
                    </Link>
                    <Link href={institucion.enlaceASitioWebYRedesSociales} isExternal>
                    
                        <BsGlobe2 style={style} />
                        
                    </Link>
                  </Flex>
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


/*
{institucion.enlaceASitioWebYRedesSociales.map((link) => {
    return (
      <>
        <Link href={link.enlaceASitioWebYRedesSociales} isExternal>                   
          <BsFacebook style={style} />
        </Link>
        
      </>
    )
  })}


*/