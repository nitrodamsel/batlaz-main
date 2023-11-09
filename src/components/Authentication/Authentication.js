import React from "react";

import placeholderImg from ".././assets/Image-placeholder.webp";
import sectionBG from ".././assets/section-background.webp";
import HeroCup from ".././assets/Hero-cup.webp";

import "./Authentication.css";
import {
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Link,
  Heading,
  PinInput,
  PinInputField,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

export default function Authentication() {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <Box className="pb-36" h="120vh" py="10" px="24" bgImage={sectionBG}>
      <Flex
        alignItems="center"
        height="100vh"
        marginTop="10"
        flexDirection="column"
        justifyContent="center"
        gap="10"
      >
        <Link
          href="/"
          color="white"
          fontSize="xl"
          position="absolute"
          top="2%"
          left="4%"
        >
          Batlaz.
        </Link>
        <Box
          w="50%"
          gap="5"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            className="mainfont"
            as="h2"
            fontWeight="400"
            size="3xl"
            color="white"
          >
            Authentication Code
          </Heading>
          <Text color="white" textAlign="center">
            You’ve entered jsmith@gmail.com as the email address for your
            account. <br></br>Please verify this email address by clicking the
            button below
          </Text>
        </Box>
        <Box
          w="50%"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          gap="10"
        >
          <Stack></Stack>
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            gap="2"
          >
            <Text color="white" textAlign="center">
              Or copy and paste this link to your browser
            </Text>
            <Link
              cursor="pointer"
              color="#7E20C9"
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              http://www.company.com:81/a/b/c.html?user=Alice&year=2008#p2
            </Link>
          </Flex>

          <Flex>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent bgColor="#7E20C9" borderRadius="15px">
                <ModalHeader
                  textAlign="center"
                  color="white"
                  fontWeight="bold"
                  fontSize="4xl"
                  textTransform="uppercase"
                  marginTop="-6vh"
                >
                  Awesome!
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                  gap="5"
                >
                  <Text color="white" fontWeight="bold">
                    Your account has been created successfully!
                  </Text>
                  <Text color="white" fontWeight="bold">
                    Go to Profile for full verification of your account
                  </Text>
                </ModalBody>
                <ModalFooter display="flex" justifyContent="center" gap="4">
                  <Link
                    py="3"
                    px="12"
                    onClick={onClose}
                    bgColor="#6a1ba9"
                    borderRadius="20px"
                    color="white"
                  >
                    Got it
                  </Link>
                  <Link
                    py="3"
                    px="12"
                    onClick={onClose}
                    borderRadius="20px"
                    color="#7E20C9"
                    bgColor="white"
                    href="/profile"
                  >
                    Go to Profile
                  </Link>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
