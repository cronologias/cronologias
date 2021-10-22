import React from 'react'
import {
  Box,
  Image,
  HStack,
  Center
} from "@chakra-ui/react"

function Galery(props) {
  return ( 
    <> {
      props.images.map((worksImg, index) => (
        index % 2 === 0 ?
          < Center key={
            index
          } >
            <HStack spacing={
                {
                  base: 4,
                  md: 6,
                  lg: 8
                }
              }
              mt={
                {
                  base: 5,
                  lg: 8
                }
              } >
              <Box >
                <Image w={
                    {
                      base: "16rem",
                      md: "28rem",
                      lg: "44rem",
                      xl: "50rem"
                    }
                  }
                  h={
                    {
                      lg: "30rem"
                    }
                  }
                  src={
                    worksImg.img
                  }
                  alt="Galeria del Artista" >
                  </Image>
                  </Box>
                  <Box bg="brand.primaryOrange"
                    w={
                      {
                        base: "4rem",
                        md: "15rem",
                        lg: "14rem",
                        xl: "16rem"
                      }
                    }
                    h={
                      {
                        base: "16rem",
                        md: "28rem",
                        lg: "30rem"
                      }
                    } >
                    </Box>
                    </HStack>
                    </Center> :
                    <Center key={
                        index
                      } >
                      <HStack spacing={
                          {
                            base: 4,
                            md: 6,
                            lg: 8
                          }
                        }
                        mt={
                          {
                            base: 5,
                            lg: 8
                          }
                        } >
                        <Box bg="brand.primaryBlack"
                          w={
                            {
                              base: "4rem",
                              md: "15rem",
                              lg: "14rem",
                              xl: "16rem"
                            }
                          }
                          h={
                            {
                              base: "16rem",
                              md: "28rem",
                              lg: "30rem"
                            }
                          } >
                          </Box>
                          <Box >
                            <Image w={
                                {
                                  base: "16rem",
                                  md: "28rem",
                                  lg: "44rem",
                                  xl: "50rem"
                                }
                              }
                              h={
                                {
                                  lg: "30rem"
                                }
                              }
                              src={
                                worksImg.img
                              }
                              alt="Galeria del Artista" >
                              </Image>
                              </Box>
                              </HStack>
                              </Center>
                              ))
    } 
    </>
                              )
}
                              export default Galery