import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import banner from ".././assets/Hero-cup.webp";
import egame from ".././assets/egame-new.webp";
import circle1 from ".././assets/b1.webp";
import circle2 from ".././assets/b2.webp";
import circle3 from ".././assets/b3.webp";
import speaker from ".././assets/speaker.webp";
import googlegray from ".././assets/google-play-new.webp";
import claygray from ".././assets/clay-games-new.webp";
import whiteCrown from ".././assets/VectorCrown-White.webp";
import BlackCrown from ".././assets/VectorCrown.webp";
import console from ".././assets/console.webp";
import thunder from ".././assets/VectorThunder-White.webp";
import LandingImg from ".././assets/Landing.webp";
import sectionBg from ".././assets/section-background.webp";

import StarTop from ".././assets/StarTop.webp";

import iphoneImage from ".././assets/iPhone13.webp";
import warImg from ".././assets/img1.webp";
import batlazwar from ".././assets/Batlaz-War.webp";

import gstore from ".././assets/gstore.webp";
import astore from ".././assets/appstore.webp";
import friends from ".././assets/friends.webp";

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
import Footer from "../Footer/Footer";

import profilePic from ".././assets/recent1.webp";

import {
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
  Image,
  Icon,
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
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import "./Index.css";
import { TbMinusVertical } from "react-icons/tb";

export default function Content() {
  return (
    <Box>
      <Flex height="auto" flexDirection="column">
        <Box py="3">
          <Text color="white" fontSize="2xl">
            Content Management Area
          </Text>
        </Box>
        <Flex w="100%" flexDirection="column">
          <Flex color="white" flexDirection="column">
            <Tabs variant="unstyled">
              <TabList bgColor="#0E0D0F" paddingTop="4vh">
                <Tab _selected={{ color: "white", bg: "#1A181C" }}>
                  Daily Trivia Battles
                </Tab>
                <Tab _selected={{ color: "white", bg: "#1A181C" }}>
                  Weekly Trivia Battles
                </Tab>
                <Tab _selected={{ color: "white", bg: "#1A181C" }}>
                  Monthly Trivia Battles
                </Tab>
                <Tab _selected={{ color: "white", bg: "#1A181C" }}>
                  B2B Self Create Competition
                </Tab>
                <Tab _selected={{ color: "white", bg: "#1A181C" }}>
                  Monthly Trivia Battles
                </Tab>
              </TabList>
              {[...new Array(2)].map((item, index) => (
                <TabPanels key={index}>
                  <TabPanel display="flex" gap="5" padding="0" my="5">
                    {[...new Array(4)].map((item, index) => (
                      <Flex
                        key={index}
                        bgColor="#000000"
                        px="7"
                        py="5"
                        flexDirection="column"
                        w="25%"
                        borderRadius="10px"
                      >
                        <Flex
                          w="100%"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                          gap="5"
                        >
                          <Image
                            src={profilePic}
                            height="50px"
                            width="50px"
                            borderRadius="15%"
                          />
                          <Text fontSize="sm" textAlign="center">
                            Farm Animals Trivia Battle
                          </Text>

                          <Text fontSize="xs" textAlign="center">
                            Maecenas sit amet urna ornare ligula faucibus
                            consectetur necvitae.
                          </Text>
                          <Flex
                            alignItems="center"
                            gap="2"
                            border="1px solid"
                            borderColor="#1C1A1E"
                            py="1"
                            px="2"
                            borderRadius="6px"
                          >
                            <Icon
                              viewBox="0 0 200 200"
                              fontSize="xs"
                              color="#42C340"
                            >
                              <path
                                fill="currentColor"
                                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                              />
                            </Icon>
                            <Text fontSize="xs">402 Playing</Text>
                          </Flex>

                          <Button
                            fontSize="xs"
                            // bgColor="#7E20C9"
                            bgColor="#1A181C"
                            _hover={{ bgColor: "#7E20C9" }}
                            w="100%"
                          >
                            Review
                          </Button>
                        </Flex>
                      </Flex>
                    ))}
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>one!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>one!</p>
                  </TabPanel>
                </TabPanels>
              ))}
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
