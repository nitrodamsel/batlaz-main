import React from "react";

import {
  chakra,
  Box,
  Flex,
  HStack,
  Button,
  Image,
  useDisclosure,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Center,
  Radio,
  Link,
  Input,
  RadioGroup,
  Progress,
  CircularProgress,
  useCheckbox,
  ModalCloseButton,
  onClose,
} from "@chakra-ui/react";

import gamepic from ".././assets/gamepic1.webp";

function Chat() {
  const OverlayTwo = () => <ModalOverlay bg="none" backdropFilter="auto" />;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  return (
    <Box>
      <Text
        fontSize="11px"
        mx="1"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Chat
      </Text>
      <Modal isCentered isOpen={isOpen} onClose={onClose} w="100%" bg="blue">
        {overlay}
        <ModalContent
          bg="black"
          height="80vh"
          borderRadius="10px"
          border="2px solid #7E20C9"
        >
          <ModalHeader
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="3"
            borderBottom="2px solid #1A181C"
          >
            <HStack>
              <Image
                src={gamepic}
                borderRadius="50%"
                w="50px"
                radius="50%"
                border="2px solid #7E20C9"
              ></Image>
              <Text>Dan Kirk</Text>
            </HStack>
            <HStack>
              <Text color="white" fontSize="2xl" fontWeight="bold">
                ...
              </Text>
            </HStack>
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody px="0" py="0">
            <Box height="85%"></Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              height="15%"
              px="2"
              gap="3"
              borderTop="2px solid #1A181C"
            >
              <Box w="50%">
                <Input
                  placeholder="Type Message"
                  border="1px solid #7E20C9"
                  borderColor="#7E20C9"
                  _placeholder={{ color: "#716B76" }}
                />
              </Box>
              <Flex w="50%" gap="2">
                <Button
                  w="50%"
                  bg="#7E20C9"
                  fontSize="xs"
                  color="white"
                  borderRadius="10px"
                >
                  Send
                </Button>
                <Button
                  w="50%"
                  bg="#190628"
                  fontSize="xs"
                  color="white"
                  borderRadius="10px"
                >
                  Friend Request
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Chat;
