import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Flex,
} from "@chakra-ui/react"

function ModalDialog(props) {
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
                    bg="brand.primaryOrange"
                    borderRadius="0"
                    maxWidth="none"
                    w={{ base: "100vw", sm: "22rem", md: "26rem", lg: "30rem" }}
                >
                    <ModalCloseButton
                        mt="12"
                        color="brand.primaryBlack"
                        size="1rem"
                        w={7} h={7}
                        borderRadius="none"
                        right={5}
                    />
                    <ModalBody mt="24">
                        {props.children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalDialog;
