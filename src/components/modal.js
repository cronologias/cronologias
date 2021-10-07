import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    useDisclosure,
    Button,
    Flex,
    // Image,
    IconButton,
    Center,
} from "@chakra-ui/react"
import {
    ChevronLeftIcon,
    ChevronRightIcon,
}
    from '@chakra-ui/icons'
import Component from "./slider"

function ModalDialog() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Flex mt="20%">
                <Button
                    fontFamily="subtitle-fontFamily"
                    fontSize="paragraph.sm"
                    bg="brand.primaryOrange"
                    color="brand.baseColor"
                    m="0 auto"
                    onClick={onOpen}
                >
                    Open Modal
                </Button>
            </Flex>
            <Modal
                isOpen={isOpen} onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent
                    bg="brand.primaryBlack"
                    pb={50}
                    borderRadius="0"
                    maxWidth="none"
                    w={{ base: "22rem", md: "28rem", lg: "30rem" }}
                >

                    <ModalHeader
                        color="brand.baseColor"
                        fontFamily="body"
                        fontSize="2xl"
                        mt="24"
                    >Retrato de Maria Cristina Goicochea
                    </ModalHeader>
                    <ModalCloseButton
                        mt="12"
                        color="brand.baseColor"
                        w={7} h={7}
                    />
                    <ModalBody>
                        <Center>
                            {/* < Image
                                mt="10"
                                src="https://i.ibb.co/yypmPZm/maria-Crisstina.png"
                                alt="se muestra una foto de Emilia prieto en sus años dorados"
                            /> */}
                            <Component />
                        </Center>

                    </ModalBody>
                    <ModalFooter>
                        <IconButton

                            bg="transparent"
                            _hover={{ bg: "brand.primaryOrange", }}
                            mt="10"
                            mr="14"
                            aria-label="imagen anterior"
                            icon={<ChevronLeftIcon color="brand.baseColor" w={10} h={10} />} />
                        <IconButton
                            bg="transparent"
                            _hover={{ bg: "brand.primaryOrange", }}
                            mt="10"
                            aria-label="siguiente imagen"
                            icon={<ChevronRightIcon color="brand.baseColor" w={10} h={10} />} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalDialog;
