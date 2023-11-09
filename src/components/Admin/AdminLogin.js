import { useState } from "react";
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

import dashboard from ".././assets/dashboard.svg";

import gstore from ".././assets/gstore.webp";
import astore from ".././assets/appstore.webp";
import friends from ".././assets/friends.webp";
import oview from ".././assets/overview.svg";
import content from ".././assets/content.svg";
import trivia from ".././assets/trivia.webp";
import users from ".././assets/users.webp";

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

import AdminHeader from "../Header/AdminHeader";
import Footer from "../Footer/Footer";

import DashBoard from "./DashBoard";
import AreaOverview from "./AreaOverview";
import Content from "./Content";

import UserManagement from "./Users/UserManagement";
import UserFeedback from "./Users/UserFeedback";
import UserReport from "./Users/UserReport";

import Daily from "./Trivia/Daily";
import Weekly from "./Trivia/Weekly";
import Monthly from "./Trivia/Monthly";
import Free from "./Trivia/Free";

import Gameplay from "./B2B/Gameplay";
import Question from "./B2B/Question";

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
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import "./Index.css";
import { TbMinusVertical } from "react-icons/tb";

export default function AdminLogin() {
  const [currentTab, setCurrentTab] = useState("usermanagement");

  const onClickHandler = (e) => {
    setCurrentTab(e.target.name);
  };

  return (
    <Box>
      <AdminHeader />
      <Flex height="150vh" bgColor="#3f1064">
        <Tabs display="flex" variant="unstyled" w="100%">
          <TabList
            display="flex"
            flexDirection="column"
            w="22%"
            height="auto"
            bgColor="black"
            paddingTop="15vh"
          >
            <Tab
              display="flex"
              _selected={{
                color: "white",
                bg: "rgba(28, 26, 30, 0.5)",
                borderColor: "none",
              }}
            >
              {" "}
              <Flex w="20%">
                <Image src={oview}></Image>
              </Flex>
              <Flex w="80%" fontSize="sm" color="#716B76">
                Overview
              </Flex>
            </Tab>
            <Tab
              display="flex"
              _selected={{ color: "white", bg: "rgba(28, 26, 30, 0.5)" }}
            >
              {" "}
              <Flex w="20%">
                <Image src={dashboard}></Image>
              </Flex>
              <Flex w="80%" fontSize="sm" color="#716B76">
                DashBoard
              </Flex>
            </Tab>
            <Tab
              display="flex"
              _selected={{ color: "white", bg: "rgba(28, 26, 30, 0.5)" }}
            >
              {" "}
              <Flex w="20%">
                <Image src={dashboard}></Image>
              </Flex>
              <Flex w="80%" fontSize="sm" color="#716B76">
                Content
              </Flex>
            </Tab>
            <Tab
              display="flex"
              _selected={{ color: "white", bg: "rgba(28, 26, 30, 0.5)" }}
            >
              {" "}
              <Flex w="20%">
                <Image src={users}></Image>
              </Flex>
              <Flex w="80%" fontSize="sm" color="#716B76">
                {/* Users */}
                <Accordion
                  w="100%"
                  allowMultiple
                  _focus={{ color: "white", bg: "green.400" }}
                  _selected={{ color: "white", bg: "green.400" }}
                >
                  <AccordionItem
                    w="100%"
                    sx={{ border: "none" }}
                    _focus={{ color: "white", bg: "green.400" }}
                    _selected={{ color: "white", bg: "green.400" }}
                  >
                    <AccordionButton px="0" mx="0">
                      <Box flex="1" textAlign="left">
                        Users
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Flex flexDirection="column">
                        <Tabs variant="unstyled">
                          <TabList
                            display="flex"
                            flexDirection="column"
                            padding="0"
                          >
                            <Tab
                              padding="0"
                              _selected={{ color: "#7E20C9" }}
                              name="usermanagement"
                              onClick={onClickHandler}
                              display="flex"
                              justifyContent="start"
                            >
                              User Management
                            </Tab>
                            <Tab
                              name="userfeedback"
                              onClick={onClickHandler}
                              padding="0"
                              _selected={{ color: "#7E20C9" }}
                              display="flex"
                              justifyContent="start"
                            >
                              User Feedback
                            </Tab>
                            <Tab
                              name="userreport"
                              onClick={onClickHandler}
                              padding="0"
                              _selected={{ color: "#7E20C9" }}
                              display="flex"
                              justifyContent="start"
                            >
                              User Reports
                            </Tab>
                          </TabList>
                        </Tabs>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Tab>
            <Tab
              display="flex"
              _selected={{ color: "white", bg: "rgba(28, 26, 30, 0.5)" }}
            >
              {" "}
              <Flex w="20%">
                <Image src={trivia}></Image>
              </Flex>
              <Flex w="80%" fontSize="sm" color="#716B76">
                <Accordion
                  w="100%"
                  allowMultiple
                  _selected={{ color: "white" }}
                >
                  <AccordionItem w="100%" sx={{ border: "none" }}>
                    <AccordionButton
                      onClick={() => setCurrentTab("daily")}
                      px="0"
                      mx="0"
                    >
                      <Box
                        flex="1"
                        textAlign="left"
                        _selected={{ color: "white" }}
                      >
                        Trivia Management
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Box>
                        <Tabs variant="unstyled">
                          <TabList
                            display="flex"
                            flexDirection="column"
                            padding="0"
                          >
                            <Tab
                              padding="0"
                              name="daily"
                              onClick={onClickHandler}
                              _selected={{ color: "#7E20C9" }}
                              display="flex"
                              justifyContent="start"
                            >
                              Daily
                            </Tab>
                            <Tab
                              padding="0"
                              name="weekly"
                              onClick={onClickHandler}
                              _selected={{ color: "#7E20C9" }}
                              display="flex"
                              justifyContent="start"
                            >
                              Weekly
                            </Tab>
                            <Tab
                              padding="0"
                              name="monthly"
                              onClick={onClickHandler}
                              _selected={{ color: "#7E20C9" }}
                              display="flex"
                              justifyContent="start"
                            >
                              Monthly
                            </Tab>
                            <Tab
                              padding="0"
                              name="free"
                              onClick={onClickHandler}
                              _selected={{ color: "#7E20C9" }}
                              display="flex"
                              justifyContent="start"
                            >
                              Free
                            </Tab>
                          </TabList>
                        </Tabs>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Tab>

            <Tab
              display="flex"
              _selected={{ color: "white", bg: "rgba(28, 26, 30, 0.5)" }}
            >
              {" "}
              <Flex w="20%">
                <Image src={friends}></Image>
              </Flex>
              <Flex w="80%" fontSize="sm" color="#716B76">
                <Accordion w="100%" allowMultiple>
                  <AccordionItem w="100%" sx={{ border: "none" }}>
                    <AccordionButton px="0" mx="0">
                      <Box flex="1" textAlign="left">
                        B2B
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Box>
                        <Tabs variant="unstyled">
                          <TabList
                            display="flex"
                            bgColor="red"
                            flexDirection="column"
                            padding="0"
                          >
                            <Tab
                              padding="0"
                              _selected={{ color: "white", bg: "green.400" }}
                              name="gameplay"
                              onClick={onClickHandler}
                            >
                              Gameplay Requests
                            </Tab>
                            <Tab
                              padding="0"
                              _selected={{ color: "white", bg: "green.400" }}
                              name="question"
                              onClick={onClickHandler}
                            >
                              Questions Manager
                            </Tab>
                          </TabList>
                        </Tabs>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Tab>

            <Tab
              display="flex"
              _selected={{ color: "white", bg: "rgba(28, 26, 30, 0.5)" }}
            >
              {" "}
              <Flex w="20%">
                <Image src={friends}></Image>
              </Flex>
              <Flex w="80%" fontSize="sm" color="#716B76">
                War Room Management
              </Flex>
            </Tab>

            <Tab
              display="flex"
              _selected={{ color: "white", bg: "rgba(28, 26, 30, 0.5)" }}
            >
              {" "}
              <Flex w="20%">
                <Image src={friends}></Image>
              </Flex>
              <Flex w="80%" fontSize="sm" color="#716B76">
                Free Trivia Battle Management
              </Flex>
            </Tab>

            <Tab
              display="flex"
              _selected={{ color: "white", bg: "rgba(28, 26, 30, 0.5)" }}
            >
              {" "}
              <Flex w="20%">
                <Image src={friends}></Image>
              </Flex>
              <Flex w="80%" fontSize="sm" color="#716B76">
                Prize Share Management
              </Flex>
            </Tab>

            <Tab
              display="flex"
              _selected={{ color: "white", bg: "rgba(28, 26, 30, 0.5)" }}
            >
              {" "}
              <Flex w="20%">
                <Image src={friends}></Image>
              </Flex>
              <Flex w="80%" fontSize="sm" color="#716B76">
                Leadership Management
              </Flex>
            </Tab>

            <Tab
              display="flex"
              _selected={{ color: "white", bg: "rgba(28, 26, 30, 0.5)" }}
            >
              {" "}
              <Flex w="20%">
                <Image src={friends}></Image>
              </Flex>
              <Flex w="78%" fontSize="sm" color="#716B76">
                Wallet Payment Management
              </Flex>
            </Tab>
          </TabList>
          <TabPanels w="78%">
            <TabPanel>
              <Box marginTop="15vh">
                <AreaOverview></AreaOverview>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box marginTop="15vh">
                <DashBoard></DashBoard>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box marginTop="15vh">
                <Content></Content>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box marginTop="15vh">
                {currentTab === "usermanagement" && <UserManagement />}
                {currentTab === "userfeedback" && <UserFeedback />}
                {currentTab === "userreport" && <UserReport />}
              </Box>
            </TabPanel>
            <TabPanel>
              <Box marginTop="15vh">
                {currentTab === "daily" && <Daily />}
                {currentTab === "weekly" && <Weekly />}
                {currentTab === "monthly" && <Monthly />}
                {currentTab === "free" && <Free />}
              </Box>
            </TabPanel>
            <TabPanel>
              <Box marginTop="15vh">
                {currentTab === "gameplay" && <Gameplay />}
                {currentTab === "question" && <Question />}
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}
