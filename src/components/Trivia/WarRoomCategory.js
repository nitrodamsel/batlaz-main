import React, { useEffect } from "react";
import axios from "axios";

import placeholderImg from ".././assets/Image-placeholder.webp";
import sectionBG from ".././assets/bgTrivia2.webp";
import profilePic from ".././assets/recent1.webp";
import iconLight from ".././assets/icon-light.webp";
import HeroCup from ".././assets/Hero-cup.webp";
import clock from ".././assets/clock.webp";

import rec1 from ".././assets/rec1.webp";
import rec2 from ".././assets/rec2.webp";
import rec3 from ".././assets/rec3.webp";
import rec4 from ".././assets/rec4.webp";
import sandclock from ".././assets/sandclock.webp";

import batImg from ".././assets/reg-img.webp";
import iconTest from ".././assets/iconTest.webp";

import Header from "../Header/Header";

import { AiFillFire } from "react-icons/ai";

import "./WarRoom.css";
import FooterGeneral from "../Footer/FooterGeneral";
import Footer from "../Footer/Footer";
import Contact from "../Extras/Contact";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
  CheckboxGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Center,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import Countdown from "react-countdown";

import WaitingOpponent from "./SearchingOpponent";
import leftArrow from ".././assets/leftArrow.webp";
import science from ".././assets/science.webp";
import CategoryData from "./Data/CategoryData";

import { useCallback, useState } from "react";

export default function WarRoomCategory({ tabSwitcher }) {
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Flex alignItems="center" gap="2">
          <Image src={sandclock} className="sandclock" height="3vh"></Image>
          <Text color="white" fontSize="md" fontWeight="bold">
            {minutes}:{seconds}
          </Text>
          {seconds <= 59 && minutes == 0 ? (
            <>
              <Text color="white" fontSize="sm">
                seconds remaining
              </Text>
            </>
          ) : (
            <>
              <Text color="white" fontSize="sm">
                minutes remaining
              </Text>
            </>
          )}
        </Flex>
      );
    }
  };

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.400" backdropFilter="blur(10px) " />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchCategory() {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_GE_BASE_URL}/trivias/categories`,
      })
        .then((res) => {
          setCategory(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchCategory();
  }, []);

  const [termCategory, setTermCategory] = useState(CategoryData);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box>
      <Flex
        flexDirection="column"
        h="auto"
        px="15"
        bgImage={sectionBG}
        alignItems="center"
        justifyContent="center"
        w="100%"
        gap="3"
        py="20"
      >
        <Flex flexDirection="column" gap="4" w="65%" height="160vh">
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent bg="#7E20C9" py="8" px="12" w="60%">
              <ModalHeader textAlign="center" color="white">
                Exit Battle
              </ModalHeader>

              <ModalBody>
                <Text
                  textAlign="center"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                >
                  Are you sure you want to end the battle? You will
                  automatically lose the game.
                </Text>
              </ModalBody>
              <Center spacing={5} mt="3">
                <Button
                  onClick={onClose}
                  fontSize="xs"
                  bg="white"
                  color="#7E20C9"
                  px="12"
                  py="1"
                  borderRadius="20px"
                  mx="2"
                >
                  Cancel
                </Button>
                <Link
                  href="/trivia"
                  fontSize="xs"
                  bg="#6a1ba9"
                  px="12"
                  py="3"
                  w="40%"
                  borderRadius="20px"
                  mx="2"
                  color="white"
                  textAlign="center"
                >
                  Exit
                </Link>
              </Center>
            </ModalContent>
          </Modal>
          <Flex alignItems="center" gap="10">
            <Flex flexDirection="row" alignItems="center" gap="2">
              <Image
                src={leftArrow}
                w="2vw"
                cursor="pointer"
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              ></Image>

              <Text color="white" fontSize="4xl">
                War Room
              </Text>
            </Flex>
            <Text>
              <Countdown date={Date.now() + 120000} renderer={renderer} />
            </Text>
          </Flex>
          <Text textAlign="center" fontSize="4xl" my="6" color="white">
            Choose Question for your Opponent
          </Text>

          {loading ? (
            <Flex justifyContent="center" w="100%">
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                w="100%"
                gap="8"
              >
                {[...new Array(3)].map((item, index) => (
                  <Grid
                    key={index}
                    templateColumns="repeat(5, 1fr)"
                    gap={6}
                    w="100%"
                  >
                    <Stack w="100%">
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                    </Stack>
                    <Stack w="100%">
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                    </Stack>
                    <Stack w="100%">
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                    </Stack>
                    <Stack w="100%">
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                    </Stack>
                    <Stack w="100%">
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                      <Skeleton height="30px" />
                    </Stack>
                  </Grid>
                ))}
              </Flex>
            </Flex>
          ) : (
            <Grid
              templateColumns="repeat(5, 2fr)"
              gap={6}
              height="100%"
              w="100%"
              px="3"
            >
              {category.map((item, index) => (
                <GridItem
                  key={index}
                  bg="black"
                  // px="4"
                  // py="4"
                  borderRadius="10px"
                  _hover={{ border: "2px solid", borderColor: "#7E20C9" }}
                  height="30vh"
                  w="11vw"
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                  px="0"
                  position="relative"
                >
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"

                    // height="100%"
                    // w="100%"
                  >
                    {console.log(
                      item.toLowerCase(),
                      "{console.log(item.toLowerCase())}"
                    )}
                    {termCategory.map((tcItem, index) =>
                      item.toLowerCase() == tcItem.text.toLowerCase() ? (
                        <Image
                          key={index}
                          src={tcItem.image}
                          height=""
                          w="50px"
                        ></Image>
                      ) : (
                        <></>
                      )
                    )}
                    <button
                      className="text-white"
                      onClick={() => {
                        tabSwitcher("warroommain");
                        console.log(item.text);
                      }}
                      cursor="pointer"
                    >
                      <Text>{item}</Text>
                    </button>
                  </Flex>
                  <Text fontSize="10px" mx="3" textAlign="center">
                    Maecenas sit amet urna ornare ligula faucibus consectetur
                    nec vitae augue.
                  </Text>
                  <Button
                    borderTopLeftRadius="0px"
                    borderTopRightRadius="0px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="10px"
                    bg="#7E20C9"
                    w="11vw"
                    height="4.5vh"
                    onClick={() => {
                      tabSwitcher("warroommain");
                      console.log(item.text);
                    }}
                    position="absolute"
                    top="88%"
                    py="4"
                    display="flex"
                    justifyContent="center"
                  >
                    <Center textAlign="center" color="white">
                      Select
                    </Center>
                  </Button>
                </GridItem>
              ))}
            </Grid>
          )}
        </Flex>
      </Flex>
      <Contact />
      <Footer />
    </Box>
  );
}
