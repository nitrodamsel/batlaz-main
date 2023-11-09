import React from "react";
import Modal from "react-modal";
import banner from ".././assets/Hero-cup.webp";
import egame from ".././assets/egame-new.webp";
import circle1 from ".././assets/b1.webp";
import circle2 from ".././assets/b2.webp";
import circle3 from ".././assets/b3.webp";
import speaker from ".././assets/speaker.webp";
import googlegray from ".././assets/google-play-new.webp";
import claygray from ".././assets/clay-games-new.webp";
import whiteCrown from ".././assets/pic1.webp";
import BlackCrown from ".././assets/VectorCrown.webp";
import console from ".././assets/console.webp";
import thunder from ".././assets/VectorThunder-White.webp";
import LandingImg from ".././assets/Landing.webp";
import sectionBg from ".././assets/section-background.webp";

import StarTop from ".././assets/StarTop.webp";
import bviolet from ".././assets/bviolet.webp";
import gpicons from ".././assets/gpicons.webp";
import picIcon from ".././assets/pic1.webp";

import iphoneImage from ".././assets/iPhone13.webp";
import warImg from ".././assets/img1.webp";
import batlazwar from ".././assets/Batlaz-War.webp";

import gstore from ".././assets/gstore.webp";
import astore from ".././assets/appstore.webp";

import Featured from ".././assets/Feature-Image.webp";
import HeroController from ".././assets/Hero-Controller.webp";
import Sword from ".././assets/Sword.webp";
import Arrow from ".././assets/CTA-Arrow.webp";

import { FaLongArrowAltRight } from "react-icons/fa";

import Controller from ".././assets/Controller.webp";
import Trophy from ".././assets/Trophy.webp";
import Flag from ".././assets/Flag.webp";
import Star from ".././assets/Flag.webp";
import Thunder from ".././assets/Thunder.webp";
import Chest from ".././assets/Chest.webp";

import LatestBattle from "../Games/LatestBattle";
import Download from "../Extras/Download";

import Header from "../Header/Header";
import FooterLanding from "../Footer/FooterLanding";

import { CgArrowLongRight } from "react-icons/cg";

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
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import "./index.css";
import { TbMinusVertical } from "react-icons/tb";

import CountUp from "react-countup";

export default function Leaderboard() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <Box
      className="w-full leftPoly2"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgColor="black"
      gap="20"
      marginTop="-12vh"
      position="relative"
    >
      <Stack alignSelf="start" marginTop={{ base: "9vh", md: "7vh" }}>
        <Text color="white" fontSize="4xl" px="20">
          Leaderboards
        </Text>
      </Stack>

      <Box
        className="flex w-full"
        height={{ base: "100%", md: "44vh" }}
        marginBottom={{ base: "10vh", md: "5vh" }}
      >
        <Box
          className="flex flex-row gap-5"
          //   bgColor="red"
          height="auto"
          w="100%"
          paddingLeft={{ base: "0", md: "5vw" }}
          flexDirection="column"
        >
          <Tabs
            display="flex"
            w="100%"
            flexDirection={{ base: "column", md: "row" }}
          >
            <TabList
              display="flex"
              flexDirection="column"
              w={{ base: "100%", md: "30%" }}
              border="none"
              borderColor="none"
              marginTop="4vh"
              px="5"
            >
              <Tab
                borderRadius="0px"
                display="flex"
                justifyContent="start"
                _selected={{
                  backgroundImage:
                    "linear-gradient(to right, #7d20c982, #7d20c903);",
                  color: "white",
                  borderLeft: "4px solid",
                  borderColor: "#7E20C9",
                  marginLeft: "-2px",
                  borderBottom: "none",
                }}
                w="60%"
                py="4"
              >
                Daily Trivia Battles
              </Tab>
              <Tab
                borderRadius="0px"
                display="flex"
                justifyContent="start"
                _selected={{
                  backgroundImage:
                    "linear-gradient(to right, #7d20c982, #7d20c903);",
                  color: "white",
                  borderLeft: "4px solid",
                  borderColor: "#7E20C9",
                  marginLeft: "-2px",
                  borderBottom: "none",
                }}
                w="60%"
                py="4"
              >
                Weekly Trivia Battles
              </Tab>
              <Tab
                borderRadius="0px"
                display="flex"
                justifyContent="start"
                _selected={{
                  backgroundImage:
                    "linear-gradient(to right, #7d20c982, #7d20c903);",
                  color: "white",
                  borderLeft: "4px solid",
                  borderColor: "#7E20C9",
                  marginLeft: "-2px",
                  borderBottom: "none",
                }}
                w="60%"
                py="4"
              >
                Monthly Trivia Battles
              </Tab>
            </TabList>
            <TabPanels
              w={{ base: "100%", md: "70%" }}
              className="gap-5"
              height={{ base: "100%", md: "44vh" }}
              paddingTop="2vh"
            >
              <TabPanel
                display="flex"
                gap={{ base: "5", md: "1" }}
                flexDirection={{ base: "column", md: "row" }}
              >
                {[...new Array(4)].map((item, index) => (
                  <Box
                    key={index}
                    w={{ base: "100%", md: "25%" }}
                    border="1px"
                    borderColor="#7E20C9"
                    borderRadius="25"
                    position="relative"
                    // className="view-div"
                    _hover={{ border: "2px solid", borderColor: "#7E20C9" }}
                  >
                    <Box position="absolute" right="10" top="-5">
                      <Image src={StarTop} className="h-10" />
                      <Text
                        color="white"
                        fontWeight="400"
                        fontSize="2xl"
                        position="absolute"
                        top="1%"
                        left="31%"
                      >
                        1
                      </Text>
                    </Box>
                    <Box
                      className="flex justify-between"
                      flexDirection="column"
                      alignItems="center"
                      gap="5"
                      px="0"
                      paddingTop="10"
                    >
                      <Image
                        src={whiteCrown}
                        className="h-16"
                        alt=""
                        border="2px"
                        borderColor="#716B76"
                        padding="1"
                        borderRadius="50%"
                      />
                      <Text className="ml-2" color="white">
                        Marley Bator
                      </Text>

                      <Box>
                        <Text textAlign="center" color="white" fontSize="3xl">
                          <CountUp end={11446} duration={2} separator={","} />
                        </Text>
                        <Text color="white">Total Battle Wins</Text>
                      </Box>
                      <Box w="100%">
                        <Center
                          href=""
                          className="view-profile"
                          height="auto"
                          borderBottomLeftRadius="21"
                          borderBottomRightRadius="21"
                          py="3"
                          borderTop="1px solid"
                          borderColor="#1C1A1E"
                          _hover={{
                            cursor: "pointer",
                          }}
                          color="#716B76"
                        >
                          <Link>View Profile</Link>
                        </Center>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </TabPanel>
              <TabPanel
                display="flex"
                gap={{ base: "5", md: "1" }}
                flexDirection={{ base: "column", md: "row" }}
              >
                {[...new Array(4)].map((item, index) => (
                  <Box
                    key={index}
                    w={{ base: "100%", md: "25%" }}
                    border="1px"
                    borderColor="#7E20C9"
                    borderRadius="25"
                    position="relative"
                    // className="view-div"
                    _hover={{ border: "2px solid", borderColor: "#7E20C9" }}
                  >
                    <Box position="absolute" right="10" top="-5">
                      <Image src={StarTop} className="h-10" />
                      <Text
                        color="white"
                        fontWeight="400"
                        fontSize="2xl"
                        position="absolute"
                        top="1%"
                        left="31%"
                      >
                        1
                      </Text>
                    </Box>
                    <Box
                      className="flex justify-between"
                      flexDirection="column"
                      alignItems="center"
                      gap="5"
                      px="0"
                      paddingTop="10"
                    >
                      <Image
                        src={whiteCrown}
                        className="h-16"
                        alt=""
                        border="2px"
                        borderColor="#716B76"
                        padding="1"
                        borderRadius="50%"
                      />
                      <Text className="ml-2" color="white">
                        Marley Bator
                      </Text>

                      <Box>
                        <Text textAlign="center" color="white" fontSize="3xl">
                          <CountUp end={11446} duration={2} separator={","} />
                        </Text>
                        <Text color="white">Total Battle Wins</Text>
                      </Box>
                      <Box w="100%">
                        <Center
                          href=""
                          className="view-profile"
                          height="auto"
                          borderBottomLeftRadius="21"
                          borderBottomRightRadius="21"
                          py="3"
                          borderTop="1px solid"
                          borderColor="#1C1A1E"
                          _hover={{
                            cursor: "pointer",
                          }}
                          color="#716B76"
                        >
                          <Link>View Profile</Link>
                        </Center>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </TabPanel>
              <TabPanel
                display="flex"
                gap={{ base: "5", md: "1" }}
                flexDirection={{ base: "column", md: "row" }}
              >
                {[...new Array(4)].map((item, index) => (
                  <Box
                    key={index}
                    w={{ base: "100%", md: "25%" }}
                    border="1px"
                    borderColor="#7E20C9"
                    borderRadius="25"
                    position="relative"
                    // className="view-div"
                    _hover={{ border: "2px solid", borderColor: "#7E20C9" }}
                  >
                    <Box position="absolute" right="10" top="-5">
                      <Image src={StarTop} className="h-10" />
                      <Text
                        color="white"
                        fontWeight="400"
                        fontSize="2xl"
                        position="absolute"
                        top="1%"
                        left="31%"
                      >
                        1
                      </Text>
                    </Box>
                    <Box
                      className="flex justify-between"
                      flexDirection="column"
                      alignItems="center"
                      gap="5"
                      px="0"
                      paddingTop="10"
                    >
                      <Image
                        src={whiteCrown}
                        className="h-16"
                        alt=""
                        border="2px"
                        borderColor="#716B76"
                        padding="1"
                        borderRadius="50%"
                      />
                      <Text className="ml-2" color="white">
                        Marley Bator
                      </Text>

                      <Box>
                        <Text textAlign="center" color="white" fontSize="3xl">
                          <CountUp end={11446} duration={2} separator={","} />
                        </Text>
                        <Text color="white">Total Battle Wins</Text>
                      </Box>
                      <Box w="100%">
                        <Center
                          href=""
                          className="view-profile"
                          height="auto"
                          borderBottomLeftRadius="21"
                          borderBottomRightRadius="21"
                          py="3"
                          borderTop="1px solid"
                          borderColor="#1C1A1E"
                          _hover={{
                            cursor: "pointer",
                          }}
                          color="#716B76"
                        >
                          <Link>View Profile</Link>
                        </Center>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
