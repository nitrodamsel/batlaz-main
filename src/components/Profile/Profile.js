import { useState, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserStats } from "../../redux/features/userDataSlice.js";

import TokenService from "../../services/token";

import placeholderImg from ".././assets/Image-placeholder.webp";
import sectionBG from ".././assets/section-background.webp";
import profilePic from ".././assets/recent1.webp";
import iconLight from ".././assets/icon-light.webp";
import HeroCup from ".././assets/Hero-cup.webp";

import userIcon from ".././assets/iconUser.svg";
import lgIcon from ".././assets/lightning.webp";
import bellIcon from ".././assets/bell-1.webp";
import noteIcon from ".././assets/note.webp";
import friendsIcon from ".././assets/friends.webp";

import iBattle from ".././assets/iconBattles2.svg";
import iSchedule from ".././assets/iconSchedules2.svg";

import Header from "../Header/Header";
import FooterTrans from "../Footer/FooterTrans";
import ProfileUser from "./ProfileUser";
import Friends from "./Friends";
import Notifications from "./Notifications";
import Battles from "./Battles";
import Schedules from "./Schedules";

import "./Profile.css";
import PlayerStatsService from "../../services/game_engine/playerStats.js";
import FooterGeneral from "../Footer/FooterGeneral";
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
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }

    const controller = new AbortController();

    const fetchUserStats = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_GE_BASE_URL}/statistics`,
          headers: {
            Authorization: `Bearer ${TokenService.getLocalAccessToken()}`,
          },
          signal: controller.signal,
        });
        dispatch(setUserStats(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserStats();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Box position="relative">
      <Box
        // paddingTop={{ lg: "14vh", xl: "14vh" }}
        // height={{ lg: "160vh", xl: "145vh" }}
        px={{ sm: "0px", lg: "10vw" }}
        className="main-container overflow-y-scroll"
        bgImage={sectionBG}
      >
        <Box height="100%" display="flex" alignItems="center" width="100%">
          <Box w="100%" marginTop="12vh" px="0">
            <Tabs
              variant="unstyled"
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              height="100%"
              px="0"
            >
              <TabList
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                w="20%"
                bgColor="black"
                height="20vh"
                borderRadius="15px"
                paddingTop="2.5vh"
                paddingBottom="2vh"
                zIndex="9999999"
                px="0"
              >
                <Tab
                  display="flex"
                  justifyContent="start"
                  color="#ACA7AF"
                  _selected={{
                    color: "white",
                    backgroundImage:
                      "linear-gradient(to right, #7d20c982, #7d20c903 );",
                    borderLeft: "4px solid",
                    borderColor: "#7E20C9",
                    marginLeft: "-2px",
                    w: "98%",
                  }}
                  px="6"
                >
                  <Image height="18px" src={userIcon}></Image>
                  <Link px="2" fontSize={{ lg: "12px", xl: "14px" }}>
                    Profile
                  </Link>
                </Tab>

                <Tab
                  display="flex"
                  justifyContent="start"
                  color="#ACA7AF"
                  _selected={{
                    color: "white",
                    backgroundImage:
                      "linear-gradient(to right, #7d20c982, #7d20c903);",
                    borderLeft: "4px solid",
                    borderColor: "#7E20C9",
                    marginLeft: "-2px",
                    w: "98%",
                  }}
                  px="6"
                >
                  <Image height="18px" src={iBattle}></Image>
                  <Link px="2" fontSize={{ lg: "12px", xl: "14px" }}>
                    Battle History
                  </Link>
                </Tab>

                <Tab
                  display="flex"
                  justifyContent="start"
                  color="#ACA7AF"
                  _selected={{
                    color: "white",
                    backgroundImage:
                      "linear-gradient(to right, #7d20c982, #7d20c903);",
                    borderLeft: "4px solid",
                    borderColor: "#7E20C9",
                    marginLeft: "-2px",
                    w: "98%",
                  }}
                  px="6"
                >
                  <Image height="18px" src={iSchedule}></Image>
                  <Link px="2" fontSize={{ lg: "12px", xl: "14px" }}>
                    Schedules
                  </Link>
                </Tab>
              </TabList>

              <TabPanels height="107.5vh" gap="5" padding="0px" w="80%">
                <TabPanel
                  display="flex"
                  height="auto"
                  paddingLeft="5"
                  paddingTop="0"
                  paddingRight="0"
                >
                  <ProfileUser></ProfileUser>
                </TabPanel>
                <TabPanel
                  display="flex"
                  height="auto"
                  paddingLeft="5"
                  paddingTop="0"
                  paddingRight="0"
                >
                  <Battles></Battles>
                </TabPanel>
                <TabPanel
                  display="flex"
                  height="auto"
                  paddingLeft="5"
                  paddingTop="0"
                  paddingRight="0"
                >
                  <Schedules></Schedules>
                </TabPanel>
              </TabPanels>

              <TabList
                display={{ base: "flex", md: "none" }}
                justifyContent="center"
                w="100%"
                bgColor="black"
                zIndex="9999999"
              >
                <Tab
                  display="flex"
                  justifyContent="start"
                  color="#ACA7AF"
                  _selected={{
                    color: "white",
                    backgroundImage:
                      "linear-gradient(to right, #7d20c982, #7d20c903 );",
                    borderLeft: "4px solid",
                    borderColor: "#7E20C9",
                    marginLeft: "-2px",
                    w: "98%",
                  }}
                  px="6"
                  py="4"
                  flexDirection="column"
                >
                  <Image height="18px" src={userIcon}></Image>
                  <Link px="2" fontSize="12px">
                    Profile
                  </Link>
                </Tab>

                <Tab
                  display="flex"
                  justifyContent="start"
                  color="#ACA7AF"
                  _selected={{
                    color: "white",
                    backgroundImage:
                      "linear-gradient(to right, #7d20c982, #7d20c903);",
                    borderLeft: "4px solid",
                    borderColor: "#7E20C9",
                    marginLeft: "-2px",
                    w: "98%",
                  }}
                  px="6"
                  py="4"
                  flexDirection="column"
                >
                  <Image height="18px" src={iBattle}></Image>
                  <Link px="2" fontSize="12px">
                    Battle History
                  </Link>
                </Tab>

                <Tab
                  display="flex"
                  justifyContent="start"
                  color="#ACA7AF"
                  _selected={{
                    color: "white",
                    backgroundImage:
                      "linear-gradient(to right, #7d20c982, #7d20c903);",
                    borderLeft: "4px solid",
                    borderColor: "#7E20C9",
                    marginLeft: "-2px",
                    w: "98%",
                  }}
                  px="6"
                  py="4"
                  flexDirection="column"
                >
                  <Image height="18px" src={iSchedule}></Image>
                  <Link px="2" fontSize="12px">
                    Schedules
                  </Link>
                </Tab>
              </TabList>
            </Tabs>
          </Box>
        </Box>
      </Box>
      <FooterGeneral className="footer" />
    </Box>
  );
}
