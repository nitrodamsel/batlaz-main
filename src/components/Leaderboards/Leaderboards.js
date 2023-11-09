import React, { useEffect, useState } from "react";

import placeholderImg from ".././assets/Image-placeholder.webp";
import sectionBG from ".././assets/section-background.webp";
import profilePic from ".././assets/recent1.webp";
import iconLight from ".././assets/icon-light.webp";
import HeroCup from ".././assets/Hero-cup.webp";
import clock from ".././assets/clock.webp";

import pic1 from ".././assets/gamepic1.webp";
import flag from ".././assets/flag2.webp";
import crowntop from ".././assets/crowntop.webp";
import crown from ".././assets/crown.webp";

import rec1 from ".././assets/rec1.webp";
import rec2 from ".././assets/rec2.webp";
import rec3 from ".././assets/rec3.webp";
import rec4 from ".././assets/rec4.webp";
import sandclock from ".././assets/sandclock.webp";

import { IoTrashOutline } from "react-icons/io5";

import batImg from ".././assets/reg-img.webp";
import iconTest from ".././assets/iconTest.webp";
import leftArrow from ".././assets/leftArrow.webp";

import Header from "../Header/Header";

import { AiFillFire } from "react-icons/ai";
import { useQuery } from "react-query";

import FooterGeneral from "../Footer/FooterGeneral";
import FooterBlack from "../Footer/FooterTrans";
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
  Spinner,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

import LeaderboardService from "../../services/game_engine/leaderboard";

export default function Leaderboards() {
  const {
    data: leaderboardData,
    isLoading,
    isError,
    error,
  } = useQuery("leaderboards", () => LeaderboardService.getData());

  let content;
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    content = <h1>{error.message}</h1>;
  } else {
    content = leaderboardData.data;
  }

  return (
    <Box>
      <Flex
        flexDirection="column"
        minHeight="100vh"
        py="15vh"
        px="24"
        bgImage={sectionBG}
        bgSize="cover"
        bgRepeat="no-repeat"
        alignItems="center"
        justifyContent="center"
        w="100%"
        gap="7"
      >
        <Flex flexDirection="row" alignItems="center" gap="3" w="100%">
          <Link to="/" cursor="pointer">
            <Image src={leftArrow} w="2vw" cursor="pointer" />
          </Link>

          <Text color="white" fontSize="4xl">
            Leaderboards
          </Text>
        </Flex>
        <Flex w="100%" bg="black" borderRadius="15px" maxWidth="72.3rem">
          <Tabs w="100%" paddingBottom="2vh">
            <TabList
              w="100%"
              border="none"
              borderTopLeftRadius="15px"
              borderTopRightRadius="15px"
            >
              <Tab
                w="25%"
                color="#ACA7AF"
                _selected={{
                  color: "white",
                  borderBottom: "3px sold",
                  borderColor: "#7E20C9",
                  backgroundImage:
                    "linear-gradient(to top, #7d20c982, #7d20c903 50%);",
                }}
              >
                <Text my="4">All Time</Text>
              </Tab>
              <Tab
                w="25%"
                color="#ACA7AF"
                _selected={{
                  color: "white",
                  borderBottom: "3px sold",
                  borderColor: "#7E20C9",
                  backgroundImage:
                    "linear-gradient(to top, #7d20c982, #7d20c903 50%);",
                }}
              >
                <Text my="4">Daily Trivia Battles</Text>
              </Tab>
              <Tab
                w="25%"
                color="#ACA7AF"
                _selected={{
                  color: "white",
                  borderBottom: "3px sold",
                  borderColor: "#7E20C9",
                  backgroundImage:
                    "linear-gradient(to top, #7d20c982, #7d20c903 50%);",
                }}
              >
                <Text my="4">Weekly Trivia Battles</Text>
              </Tab>
              <Tab
                w="25%"
                color="#ACA7AF"
                _selected={{
                  color: "white",
                  borderBottom: "3px sold",
                  borderColor: "#7E20C9",
                  backgroundImage:
                    "linear-gradient(to top, #7d20c982, #7d20c903 50%);",
                }}
              >
                <Text my="4">Monthly Trivia Battles</Text>
              </Tab>
            </TabList>

            <TabPanels my="4" w="100%" px="2">
              <TabPanel
                w="100%"
                display="flex"
                gap="4"
                flexDirection="column"
                alignItems="center"
              >
                {content.map((item, index) => (
                  <Flex
                    key={item.userId}
                    bg="#141215"
                    w="100%"
                    py="0"
                    borderRadius="20px"
                    px="4"
                  >
                    <Flex px="3" py="3" alignItems="center" gap="5" w="30%">
                      <Stack position="relative">
                        {index == 0 ? (
                          <>
                            <Image src={crowntop} h="42px"></Image>
                          </>
                        ) : (
                          <Image src={crown} h="42px"></Image>
                        )}
                        <Text
                          position="absolute"
                          color="white"
                          fontWeight="bold"
                          left="40%"
                          top="20%"
                        >
                          {index + 1}
                        </Text>
                      </Stack>
                      <Image
                        border="2px solid"
                        borderColor="#7E20C9"
                        borderRadius="50%"
                        src={pic1}
                        h="105px"
                      ></Image>
                      <Stack>
                        <Text color="white" fontWeight="bold" fontSize="xl">
                          {item.name}
                        </Text>
                        <HStack>
                          <Image src={flag} w="25px"></Image>
                          <Text color="#716B76">{item.countryCode}</Text>
                        </HStack>
                      </Stack>
                    </Flex>
                    <Flex w="22.5%" alignItems="center" justifyContent="center">
                      <Stack>
                        <Text fontSize="md" color="#716B76">
                          XP
                        </Text>
                        <Text fontSize="2xl" color="#F09C37">
                          {item.totalExperience}
                        </Text>
                      </Stack>
                    </Flex>
                    <Flex w="22.5%" alignItems="center" justifyContent="center">
                      <Stack>
                        <Text fontSize="md" color="#716B76">
                          Winnings
                        </Text>
                        <Text fontSize="2xl" color="#F09C37">
                          {item.totalPrizeWinnings}
                        </Text>
                      </Stack>
                    </Flex>
                    <Flex w="25%" alignItems="center" justifyContent="center">
                      <Button
                        bg="#7E20C9"
                        px="14"
                        py="5"
                        borderRadius="20px"
                        color="white"
                        fontWeight="bold"
                        fontSize="xs"
                      >
                        View Profile
                      </Button>
                    </Flex>
                  </Flex>
                ))}
              </TabPanel>
              <TabPanel display="flex" gap="4" flexDirection="column">
                {content.map((item, index) => (
                  <Flex
                    key={item.userId}
                    bg="#141215"
                    w="100%"
                    py="0"
                    borderRadius="20px"
                    px="4"
                  >
                    <Flex px="3" py="3" alignItems="center" gap="5" w="30%">
                      <Stack position="relative">
                        {index == 0 ? (
                          <>
                            <Image src={crowntop} h="42px"></Image>
                          </>
                        ) : (
                          <Image src={crown} h="42px"></Image>
                        )}
                        <Text
                          position="absolute"
                          color="white"
                          fontWeight="bold"
                          left="40%"
                          top="20%"
                        >
                          {index + 1}
                        </Text>
                      </Stack>
                      <Image
                        border="2px solid"
                        borderColor="#7E20C9"
                        borderRadius="50%"
                        src={pic1}
                        h="105px"
                      ></Image>
                      <Stack>
                        <Text color="white" fontWeight="bold" fontSize="xl">
                          {item.name}
                        </Text>
                        <HStack>
                          <Image src={flag} w="25px"></Image>
                          <Text color="#716B76">{item.countryCode}</Text>
                        </HStack>
                      </Stack>
                    </Flex>
                    <Flex w="22.5%" alignItems="center" justifyContent="center">
                      <Stack>
                        <Text fontSize="md" color="#716B76">
                          XP
                        </Text>
                        <Text fontSize="2xl" color="#F09C37">
                          {item.totalExperience}
                        </Text>
                      </Stack>
                    </Flex>
                    <Flex w="22.5%" alignItems="center" justifyContent="center">
                      <Stack>
                        <Text fontSize="md" color="#716B76">
                          Winnings
                        </Text>
                        <Text fontSize="2xl" color="#F09C37">
                          {item.totalPrizeWinnings}
                        </Text>
                      </Stack>
                    </Flex>
                    <Flex w="25%" alignItems="center" justifyContent="center">
                      <Button
                        bg="#7E20C9"
                        px="14"
                        py="5"
                        borderRadius="20px"
                        color="white"
                        fontWeight="bold"
                        fontSize="xs"
                      >
                        View Profile
                      </Button>
                    </Flex>
                  </Flex>
                ))}
              </TabPanel>
              <TabPanel display="flex" gap="4" flexDirection="column">
                {content.map((item, index) => (
                  <Flex
                    key={item.userId}
                    bg="#141215"
                    w="100%"
                    py="0"
                    borderRadius="20px"
                    px="4"
                  >
                    <Flex px="3" py="3" alignItems="center" gap="5" w="30%">
                      <Stack position="relative">
                        {index == 0 ? (
                          <>
                            <Image src={crowntop} h="42px"></Image>
                          </>
                        ) : (
                          <Image src={crown} h="42px"></Image>
                        )}
                        <Text
                          position="absolute"
                          color="white"
                          fontWeight="bold"
                          left="40%"
                          top="20%"
                        >
                          {index + 1}
                        </Text>
                      </Stack>
                      <Image
                        border="2px solid"
                        borderColor="#7E20C9"
                        borderRadius="50%"
                        src={pic1}
                        h="105px"
                      ></Image>
                      <Stack>
                        <Text color="white" fontWeight="bold" fontSize="xl">
                          {item.name}
                        </Text>
                        <HStack>
                          <Image src={flag} w="25px"></Image>
                          <Text color="#716B76">{item.countryCode}</Text>
                        </HStack>
                      </Stack>
                    </Flex>
                    <Flex w="22.5%" alignItems="center" justifyContent="center">
                      <Stack>
                        <Text fontSize="md" color="#716B76">
                          XP
                        </Text>
                        <Text fontSize="2xl" color="#F09C37">
                          {item.totalExperience}
                        </Text>
                      </Stack>
                    </Flex>
                    <Flex w="22.5%" alignItems="center" justifyContent="center">
                      <Stack>
                        <Text fontSize="md" color="#716B76">
                          Winnings
                        </Text>
                        <Text fontSize="2xl" color="#F09C37">
                          {item.totalPrizeWinnings}
                        </Text>
                      </Stack>
                    </Flex>
                    <Flex w="25%" alignItems="center" justifyContent="center">
                      <Button
                        bg="#7E20C9"
                        px="14"
                        py="5"
                        borderRadius="20px"
                        color="white"
                        fontWeight="bold"
                        fontSize="xs"
                      >
                        View Profile
                      </Button>
                    </Flex>
                  </Flex>
                ))}
              </TabPanel>
              <TabPanel display="flex" gap="4" flexDirection="column">
                {content.map((item, index) => (
                  <Flex
                    key={item.userId}
                    bg="#141215"
                    w="100%"
                    py="0"
                    borderRadius="20px"
                    px="4"
                  >
                    <Flex px="3" py="3" alignItems="center" gap="5" w="30%">
                      <Stack position="relative">
                        {index == 0 ? (
                          <>
                            <Image src={crowntop} h="42px"></Image>
                          </>
                        ) : (
                          <Image src={crown} h="42px"></Image>
                        )}
                        <Text
                          position="absolute"
                          color="white"
                          fontWeight="bold"
                          left="40%"
                          top="20%"
                        >
                          {index + 1}
                        </Text>
                      </Stack>
                      <Image
                        border="2px solid"
                        borderColor="#7E20C9"
                        borderRadius="50%"
                        src={pic1}
                        h="105px"
                      ></Image>
                      <Stack>
                        <Text color="white" fontWeight="bold" fontSize="xl">
                          {item.name}
                        </Text>
                        <HStack>
                          <Image src={flag} w="25px"></Image>
                          <Text color="#716B76">{item.countryCode}</Text>
                        </HStack>
                      </Stack>
                    </Flex>
                    <Flex w="22.5%" alignItems="center" justifyContent="center">
                      <Stack>
                        <Text fontSize="md" color="#716B76">
                          XP
                        </Text>
                        <Text fontSize="2xl" color="#F09C37">
                          {item.totalExperience}
                        </Text>
                      </Stack>
                    </Flex>
                    <Flex w="22.5%" alignItems="center" justifyContent="center">
                      <Stack>
                        <Text fontSize="md" color="#716B76">
                          Winnings
                        </Text>
                        <Text fontSize="2xl" color="#F09C37">
                          {item.totalPrizeWinnings}
                        </Text>
                      </Stack>
                    </Flex>
                    <Flex w="25%" alignItems="center" justifyContent="center">
                      <Button
                        bg="#7E20C9"
                        px="14"
                        py="5"
                        borderRadius="20px"
                        color="white"
                        fontWeight="bold"
                        fontSize="xs"
                      >
                        View Profile
                      </Button>
                    </Flex>
                  </Flex>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  );
}
