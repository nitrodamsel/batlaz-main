import React from "react";

import placeholderImg from "../.././assets/Image-placeholder.webp";
import sectionBG from "../.././assets/bgTrivia2.webp";
import profilePic from "../.././assets/recent1.webp";
import iconLight from "../.././assets/icon-light.webp";
import HeroCup from "../.././assets/Hero-cup.webp";
import clock from "../.././assets/clock.webp";

import coin from "../.././assets/coin.webp";
import arrow from "../.././assets/arrowdot.webp";
import mask from "../.././assets/maskTrivia.webp";

import rec1 from "../.././assets/rec1.webp";
import rec2 from "../.././assets/rec2.webp";
import rec3 from "../.././assets/rec3.webp";
import rec4 from "../.././assets/rec4.webp";

import Header from "../../Header/Header";

import { HiArrowLeft } from "react-icons/hi";

import { AiFillFire } from "react-icons/ai";

import "./B2B.css";
import FooterBlack from "../../Footer/FooterBlack";
import Weekly from "../Weekly";
import Monthly from "../Monthly";

import FooterGeneralGray from "../../Footer/FooterGeneralGray";
import FooterTrans from "../../Footer/FooterTrans";
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
  Modal,
  Heading,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
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
  Checkbox,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function CreateBattle() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box className="pb-36" h="auto" py="10" px="24" bgImage={sectionBG}>
        <Flex
          alignItems="center"
          height="auto"
          marginTop="17vh"
          gap="5"
          flexDirection="column"
          marginBottom="50vh"
        >
          <Flex
            bg="black"
            padding="5"
            justifyContent="center"
            alignItems="center"
            w="100%"
            flexDirection="column"
            gap="3"
            className="create-div"
          >
            <Flex alignSelf="start">
              <Text fontWeight="normal" fontSize="xl" color="white">
                Create your Own Battles
              </Text>
            </Flex>
            <Text alignSelf="start" color="white" marginTop="3vh">
              Please complete this form to help us organize your battles. We
              will notify you on the status of the request.
            </Text>
            <Flex w="100%" marginTop="1vh">
              <Flex
                w="50%"
                flexDirection="column"
                // bg="green"
                paddingRight="20px"
                gap="2"
              >
                <Stack>
                  <Text color="#ACA7AF" fontWeight="400">
                    Competition Name
                  </Text>
                  <Input
                    placeholder="Type here"
                    _placeholder={{ color: "#716B76" }}
                    height="6.5vh"
                    border="2px solid"
                    borderColor="#1C1A1E"
                    _focus={{
                      color: "white",
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    _hover={{
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                  />
                </Stack>
                <Stack>
                  <Text color="#ACA7AF" fontWeight="400">
                    Date of Competition
                  </Text>
                  <Input
                    className=""
                    type="date"
                    placeholder="Date Of Birth"
                    w="100%"
                    bgColor="black"
                    focusBorderColor="none"
                    _placeholder={{ color: "#716B76" }}
                    _focus={{
                      color: "white",
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    _hover={{
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    border="2px solid"
                    borderColor="#1C1A1E"
                    height="6.5vh"
                    paddingRight="0"
                  />
                </Stack>
                <Stack>
                  <Text color="#ACA7AF" fontWeight="400">
                    Time of Competition
                  </Text>
                  <Input
                    className=""
                    type="date"
                    placeholder="Date Of Birth"
                    w="100%"
                    bgColor="black"
                    focusBorderColor="none"
                    _placeholder={{ color: "#716B76" }}
                    _focus={{
                      color: "white",
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    _hover={{
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    border="2px solid"
                    borderColor="#1C1A1E"
                    height="6.5vh"
                    paddingRight="0"
                  />
                </Stack>
                <Stack>
                  <Text color="#ACA7AF" fontWeight="400">
                    What is the % profit for Consolation prize winners
                  </Text>
                  <Input
                    placeholder="%"
                    _placeholder={{ color: "#716B76" }}
                    border="2px solid"
                    borderColor="#1C1A1E"
                    height="6.5vh"
                    _focus={{
                      color: "white",
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    _hover={{
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                  />
                </Stack>
                <Stack>
                  <Text color="#ACA7AF" fontWeight="400">
                    What is the % profit for Jackpot winner
                  </Text>
                  <Input
                    placeholder="%"
                    _placeholder={{ color: "#716B76" }}
                    border="2px solid"
                    borderColor="#1C1A1E"
                    height="6.5vh"
                    _focus={{
                      color: "white",
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    _hover={{
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                  />
                </Stack>
              </Flex>
              <Flex
                w="50%"
                flexDirection="column"
                // bg="green"
                paddingRight="20px"
                gap="2"
              >
                <Stack>
                  <Text color="#ACA7AF" fontWeight="400">
                    Category
                  </Text>
                  <Input
                    placeholder="Type here"
                    _placeholder={{ color: "#716B76" }}
                    border="2px solid"
                    borderColor="#1C1A1E"
                    _focus={{
                      color: "white",
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    _hover={{
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    height="6.5vh"
                  />
                </Stack>
                <Stack>
                  <Text color="#ACA7AF" fontWeight="400">
                    Total Number of Players
                  </Text>
                  <Input
                    placeholder="max of 300??"
                    _placeholder={{ color: "#716B76" }}
                    border="2px solid"
                    borderColor="#1C1A1E"
                    _focus={{
                      color: "white",
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    _hover={{
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    height="6.5vh"
                  />
                </Stack>
                <Stack>
                  <Text color="#ACA7AF" fontWeight="400">
                    How much per competitor (stake per competitor)
                  </Text>
                  <Input
                    placeholder="$"
                    _placeholder={{ color: "#716B76" }}
                    border="2px solid"
                    borderColor="#1C1A1E"
                    _focus={{
                      color: "white",
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    _hover={{
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    height="6.5vh"
                  />
                </Stack>
                <Stack>
                  <Text color="#ACA7AF" fontWeight="400">
                    How many people will be in consolation prize category?
                  </Text>
                  <Input
                    placeholder="%"
                    _placeholder={{ color: "#716B76" }}
                    border="2px solid"
                    borderColor="#1C1A1E"
                    _focus={{
                      color: "white",
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    _hover={{
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    height="6.5vh"
                  />
                </Stack>
                <Stack>
                  <Text color="#ACA7AF" fontWeight="400">
                    What profit percentage do you want to keep?
                  </Text>
                  <Input
                    placeholder="%"
                    _placeholder={{ color: "#716B76" }}
                    border="2px solid"
                    borderColor="#1C1A1E"
                    _focus={{
                      color: "white",
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    _hover={{
                      border: "2px",
                      borderColor: "#7E20C9",
                    }}
                    height="6.5vh"
                  />
                </Stack>
              </Flex>
            </Flex>
            <Flex alignSelf="end" gap="3">
              <Link
                bg="#190628"
                fontWeight="bold"
                fontSize="xs"
                color="white"
                borderRadius="20px"
                w="10vw"
                border="1px solid #7E20C9"
                display="flex"
                alignItems="center"
                justifyContent="center"
                href="/trivia"
              >
                Cancel
              </Link>
              <Button
                bg="#7E20C9"
                fontWeight="bold"
                fontSize="xs"
                color="white"
                borderRadius="20px"
                w="10vw"
                onClick={() => {
                  onOpen();
                }}
              >
                Send Request
              </Button>

              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalContent
                  bg="black"
                  py="8"
                  borderRadius="10px"
                  border="1px solid"
                  borderColor="#7E20C9"
                >
                  <ModalHeader textAlign="center" color="white">
                    Battle Submitted
                  </ModalHeader>

                  <ModalBody
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="8"
                  >
                    <Text textAlign="center" fontSize="xs" color="white">
                      We will notify you on the status of the request.<br></br>{" "}
                      You may check them on your email and notifications
                    </Text>
                    <Button
                      bg="#7E20C9"
                      fontWeight="bold"
                      fontSize="xs"
                      color="white"
                      borderRadius="20px"
                      w="10vw"
                      onClick={onClose}
                      alignSelf="center"
                    >
                      Okay
                    </Button>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <FooterBlack></FooterBlack>
      <FooterGeneralGray />
    </Box>
  );
}
