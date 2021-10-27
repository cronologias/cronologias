import React from 'react'
import {
  Box,
  Image,
  HStack,
  Center,
  Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react"
import Slider from './slider'

function Galery(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let position = 0;
  function count(index){
    position = index;
  }
  return (
    <> 
      <Box mb={{ base: "2rem", md:"2.25rem", lg:"2.5rem"}}>
        {props.images.map((worksImg, index) => (
          
          index % 2 === 0 ?
            <Center 
                key={index} 
              >
              <HStack 
                spacing={ {base: 4, md: 6, lg: 8} }
                mt={ { base: 5, lg: 8 }} 
              >
                <Box >
                <p>{index}</p>
                      <Image 
                      data-index={index}
                        w={ { base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem"} }
                        h={ {base: "16rem", md: "28rem", lg: "30rem"} }
                        objectFit="cover" 
                        src={worksImg.imagenDeLaObraDeLaArtista}
                        alt="Galeria del Artista" onClick={index, onOpen}>
                      </Image>
                </Box>
                <Box bg="brand.primaryOrange"
                  w={ {base: "4rem",md: "15rem", lg: "14rem", xl: "16rem"} }
                  h={ { base: "16rem", md: "28rem", lg: "30rem" }} >
                </Box>
              </HStack>
            </Center> :
            <Center key={index} >
              <HStack 
                spacing={{ base: 4, md: 6, lg: 8 }}
                mt={{ base: 5, lg: 8 }} 
              >
                <Box 
                  bg="brand.primaryBlack"
                  w={{ base: "4rem", md: "15rem", lg: "14rem", xl: "16rem" }}
                  h={{ base: "16rem", md: "28rem", lg: "30rem" }} >
                </Box>
                <Box >
                <p>{index}</p>
                      <Image 
                        w={ { base: "11.5rem", md: "28rem", lg: "40rem", xl: "53rem"} }
                        h={ {base: "16rem", md: "28rem", lg: "30rem"} }
                        objectFit="cover" 
                        src={worksImg.imagenDeLaObraDeLaArtista}
                        alt="Galeria del Artista" alt="Galeria del Artista" onClick={index, onOpen}>
                      </Image>
                </Box>
              </HStack>
            </Center>
            ))
          }
      </Box>
            <Modal
                isOpen={isOpen} onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent
                    bg='brand.primaryOrange'
                    borderRadius='0'
                    maxWidth='none'
                    w={{ base: '100%', sm: '22rem', md: '26rem', lg: '30rem' }}
                >
                    <ModalCloseButton
                        _hover={{ bg: 'brand.secondaryOrange', borderRadius:'none'}}
                        _active={{ bg: 'brand.secondaryOrange', boxShadow: 'none', borderRadius:'none'}}
                        _focus={{ boxShadow: 'none', borderRadius:'none', border: '0.125rem solid', borderColor: 'brand.primaryBlack'}}
                        mt='12'
                        color='brand.primaryBlack'
                        size='1rem'
                        w={7} h={7}
                        borderRadius='none'
                        right={5}
                    />
                    <ModalBody mt='24'>
                        {props.children}
                        <Slider slides={props.images} position={position}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
    </>
  )
}
export default Galery