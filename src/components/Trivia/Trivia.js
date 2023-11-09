import React from "react";

import sectionBG from ".././assets/bgTrivia2.webp";

import Header from "../Header/Header";

import { HiArrowLeft } from "react-icons/hi";

import {
  Box,
  Flex,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import lock from ".././assets/padlock.webp";
import FooterBlack from "../Footer/FooterBlack";
import FooterGeneralGray from "../Footer/FooterGeneralGray";
import B2B from "./B2B/B2B";
import "./Daily.css";
import Monthly from "./Monthly";
import Weekly from "./Weekly";

import Daily from "./Daily";

export default function Trivia() {
  const navigate = useNavigate();
  let { category } = useParams();

  const getTabDefaultIndex = () => {
    switch (category) {
      case "daily":
        return 0;
      case "weekly":
        return 1;
      case "monthly":
        return 2;
      case "b2b":
        return 3;
      default:
        return 0;
    }
  };

  const setCategoryToPath = (index) => {
    switch (index) {
      case 0:
        navigate("/trivia/daily", { replace: true });
        break;
      case 1:
        navigate("/trivia/weekly", { replace: true });
        break;
      case 2:
        navigate("/trivia/monthly", { replace: true });
        break;
      case 3:
        navigate("/trivia/b2b", { replace: true });
        break;
      default:
        navigate("/trivia/daily", { replace: true });
        break;
    }
  };

  return (
    <Box>
      {localStorage.getItem("accessToken") ? null : (
        <Flex
          position="absolute"
          w="100%"
          zIndex="99999"
          height="100%"
          borderRadius="16"
          className="bg-blur"
          alignItems="center"
          justifyContent="center"
        >
          <Flex flexDirection="column" alignItems="center" gap="5">
            <Image src={lock} h="12vh" w="6vw"></Image>
            <Stack>
              <Text
                textAlign="center"
                color="white"
                fontSize="xl"
                fontWeight="bold"
              >
                Login to Batlaz to enjoy our battles
              </Text>
              <Text textAlign="center" color="white" fontSize="xs">
                You can try our daily, weekly battles. You can also create your
                own battles
              </Text>
            </Stack>
          </Flex>
        </Flex>
      )}
      <Box
        className="pb-36"
        h="auto"
        py="10"
        px={{ md: "19px", lg: "22", xl: "24" }}
        bgImage={sectionBG}
      >
        <Flex
          alignItems="center"
          height="auto"
          marginTop="17vh"
          gap="5"
          flexDirection="column"
          marginBottom="50vh"
        >
          <Tabs
            w="100%"
            defaultIndex={getTabDefaultIndex()}
            onChange={(idx) => setCategoryToPath(idx)}
          >
            <Flex
              bgColor="black"
              borderTopLeftRadius="15px"
              borderTopRightRadius="15px"
              alignItems="center"
              gap="5"
            >
              <Box
                borderTopLeftRadius="15px"
                py="6"
                px="4"
                color="white"
                bgColor="#1C1A1E"
                cursor="pointer"
                onClick={() => navigate(-1)}
              >
                <HiArrowLeft></HiArrowLeft>
              </Box>

              <Text fontSize="2xl" color="white">
                Ready for a Battle
              </Text>
            </Flex>
            <TabList
              w="100%"
              borderBottom="none"
              bgColor="black"
              borderTop="1px solid"
              borderColor="#1C1A1E"
            >
              <Tab
                w="25%"
                py="5"
                color="#716B76"
                _selected={{
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottom: "1px solid",
                  borderColor: "#7E20C9",
                  color: "white",
                  backgroundImage:
                    "linear-gradient(to top, #7d20c982, #7d20c903 60%);",
                }}
              >
                Daily Trivia Battles
              </Tab>
              <Tab
                w="25%"
                bgColor="black"
                py="5"
                borderRight="1px solid"
                borderLeft="1px solid"
                borderColor="red"
                borderBottom="none"
                color="#716B76"
                _selected={{
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottom: "1px solid",
                  borderColor: "#7E20C9",
                  color: "white",
                  backgroundImage:
                    "linear-gradient(to top, #7d20c982, #7d20c903 60%);",
                }}
              >
                Weekly Trivia Battles
              </Tab>
              <Tab
                w="25%"
                bgColor="black"
                py="5"
                borderRight="1px solid"
                borderLeft="1px solid"
                borderColor="#716B76"
                borderBottom="none"
                color="#716B76"
                _selected={{
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottom: "1px solid",
                  borderColor: "#7E20C9",
                  color: "white",
                  backgroundImage:
                    "linear-gradient(to top, #7d20c982, #7d20c903 60%);",
                }}
              >
                Monthly Trivia Battles
              </Tab>
              <Tab
                w="25%"
                bgColor="black"
                py="5"
                borderRight="1px solid"
                borderLeft="1px solid"
                borderColor="#716B76"
                borderBottom="none"
                color="#716B76"
                _selected={{
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottom: "1px solid",
                  borderColor: "#7E20C9",
                  color: "white",
                  backgroundImage:
                    "linear-gradient(to top, #7d20c982, #7d20c903 60%);",
                }}
              >
                B2B Self Create Competition
              </Tab>
            </TabList>

            <TabPanels px="0" marginTop="2">
              <TabPanel px="0">
                <Daily></Daily>
              </TabPanel>
              <TabPanel px="0">
                <Weekly></Weekly>
              </TabPanel>
              <TabPanel px="0">
                <Monthly></Monthly>
              </TabPanel>
              <TabPanel px="0">
                <B2B></B2B>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
      <FooterBlack></FooterBlack>
      <FooterGeneralGray />
    </Box>
  );
}
