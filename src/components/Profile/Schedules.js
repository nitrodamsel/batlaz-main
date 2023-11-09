import { useState, React } from "react";

import { useSelector } from "react-redux";

import Flag from "react-world-flags";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import { IoIosArrowUp } from "react-icons/io";

import placeholderImg from ".././assets/Image-placeholder.webp";
import sectionBG from ".././assets/section-background.webp";
import profilePic from ".././assets/battlepic.webp";
import iconLight from ".././assets/icon-light.webp";
import HeroCup from ".././assets/Hero-cup.webp";

import userIcon from ".././assets/user.webp";
import lgIcon from ".././assets/lightning.webp";
import bellIcon from ".././assets/bell-1.webp";
import noteIcon from ".././assets/note.webp";
import friendsIcon from ".././assets/friends.webp";

import mask1 from ".././assets/schedule-mask.webp";
import mask2 from ".././assets/battlemask2.webp";
import flag from ".././assets/us-flag.webp";

import clock from ".././assets/clock.webp";
import coin from ".././assets/coin.webp";

import camera from ".././assets/camera.webp";

import Header from "../Header/Header";
import FooterTrans from "../Footer/FooterTrans";

import "./Profile.css";
import FooterGeneral from "../Footer/FooterGeneral";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Collapse,
  Center,
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
  Checkbox,
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function Battles() {
  const { userData, userStats } = useSelector((state) => state.user);
  const win_rate = ((userStats.wins / userStats.totalBattles) * 100).toFixed(2);
  const lose_rate = ((userStats.loss / userStats.totalBattles) * 100).toFixed(
    2
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenNew,
    onToggle: onToggleNew,
    onClose: onToggleClose,
  } = useDisclosure();

  return (
    <Box display="flex" gap="5" w="100%">
      <Box
        bgColor="black"
        w="40%"
        gap="5"
        display="flex"
        flexDirection="column"
        borderRadius="15"
        height="auto"
      >
        <Box
          w="100%"
          gap="5"
          display="flex"
          flexDirection="column"
          px="5"
          paddingTop="5"
          paddingBottom="1"
        >
          <Flex flexDirection="column">
            <Flex justifyContent="space-between">
              <Flex gap="6">
                <Box display="flex" justifyContent="center" position="relative">
                  <Avatar
                    src={userData?.profileImage}
                    bgColor="#7E20C9"
                    color="white"
                    type="lazy"
                    size="xl"
                    border="2px solid #7E20C9"
                    name={`${userData?.firstName} ${userData?.lastName}`}
                  />
                </Box>
                <Flex alignItems="start" flexDirection="column" gap="2">
                  <Text
                    color="white"
                    fontSize={{ lg: "md", xl: "xl" }}
                    fontWeight="bold"
                  >
                    {userData.firstName} {userData.lastName}
                  </Text>
                  <Text color="#716B76" fontSize="xs">
                    @{userData.username ?? "unknown"}
                  </Text>
                  <Flex gap="2">
                    <Flag
                      code={userData?.countryCode}
                      fallback={<span>Unknown</span>}
                    />
                    <Text fontSize="xs" color="#716B76">
                      {userData?.countryCode}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                w="100%"
                bgColor="#190628"
                borderRadius="10px"
                marginBottom="9"
              ></Flex>
            </Flex>
          </Flex>

          <Flex flexDirection="column" gap="3">
            <Text color="white" fontWeight="bold">
              Statistics
            </Text>
            <Flex gap="3" flexDirection="column">
              <Flex flexDirection="column">
                <Flex w="100%" px="5">
                  <Flex w="40%"></Flex>
                  <Flex
                    w={{ lg: "75%", xl: "60%" }}
                    justifyContent="center"
                    alignItems="center"
                    gap="4"
                  >
                    <Flex alignItems="center" justifyContent="center">
                      <Text color="#716B76" fontSize="xs">
                        WINS
                      </Text>
                      <Text
                        className="text-[#42C340] font-bold"
                        fontSize={{ lg: "md", xl: "lg" }}
                      >
                        &nbsp;&nbsp;
                        {isNaN(parseInt(win_rate)) ? "0%" : `${win_rate}%`}
                      </Text>
                    </Flex>

                    <Flex alignItems="center">
                      <Text color="#716B76" fontSize="xs">
                        LOSS
                      </Text>
                      <Text
                        className="text-[#BC0000] font-bold"
                        fontSize={{ lg: "md", xl: "lg" }}
                      >
                        &nbsp;&nbsp;
                        {isNaN(parseInt(lose_rate)) ? "0%" : `${lose_rate}%`}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>

                <Box display="flex" justifyContent="center" gap="5" w="100%">
                  <Flex w="100%" bgColor="#1A181C" borderRadius="20px">
                    <Box
                      height="20px"
                      w="62.11%"
                      bgColor="#7E20C9"
                      borderLeftRadius="20px"
                    ></Box>
                  </Flex>
                </Box>
              </Flex>
              <Flex w="100%" flexDirection="row" gap="2">
                <Flex
                  justifyContent="center"
                  alignItems="start"
                  flexDirection="column"
                  py="4"
                  borderRadius="15"
                  w="50%"
                  gap="2"
                >
                  <Text fontSize="sm" color="#716B76">
                    Total Battles
                  </Text>
                  <Text fontSize="sm" color="white" fontWeight="bold">
                    {userStats.totalBattles ?? 0}
                  </Text>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="start"
                  flexDirection="column"
                  py="4"
                  borderRadius="15"
                  w="50%"
                  gap="2"
                >
                  <Text fontSize="sm" color="#716B76">
                    Total XP Points
                  </Text>
                  <Text fontSize="sm" color="white" fontWeight="bold">
                    {userStats.totalExperience ?? 0}
                  </Text>
                </Flex>
              </Flex>

              <Flex w="100%" flexDirection="row" gap="2">
                <Flex
                  justifyContent="center"
                  alignItems="start"
                  flexDirection="column"
                  py="4"
                  borderRadius="15"
                  w="50%"
                  gap="2"
                >
                  <Text fontSize="sm" color="#716B76">
                    Total Prize Winnings
                  </Text>
                  <Text fontSize="sm" color="white" fontWeight="bold">
                    ${userStats.totalPrizeWinnings ?? 0}
                  </Text>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="start"
                  flexDirection="column"
                  py="4"
                  borderRadius="15"
                  w="50%"
                  gap="2"
                >
                  <Text fontSize="sm" color="#716B76">
                    Level
                  </Text>
                  <Text fontSize="sm" color="white" fontWeight="bold">
                    {userStats.level ?? 0}
                  </Text>
                </Flex>
              </Flex>

              <Flex w="100%" height="auto" flexDirection="row" gap="2">
                <Flex
                  justifyContent="center"
                  alignItems="start"
                  flexDirection="column"
                  py="4"
                  borderRadius="15"
                  w="50%"
                  gap="2"
                >
                  <Text fontSize="sm" color="#716B76">
                    Grand Winner
                  </Text>
                  <Text fontSize="sm" color="white" fontWeight="bold">
                    {userStats.grandWinner ?? 0}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box
        bgColor="black"
        height="10vh"
        paddingBottom="4vh"
        w="60%"
        borderRadius="15px"
      >
        <Box w="100%" display="flex" flexDirection="column" borderRadius="15">
          <Box bgColor="" padding="5">
            <Text color="white">Scheduled Battles</Text>
          </Box>

          <Box
            bgColor="black"
            borderTop="1px solid"
            borderColor="#1C1A1E"
            px="4"
            paddingTop="4"
            paddingBottom="2.5vh"
            borderBottomRadius="15px"
          >
            <Accordion
              allowMultiple
              display="flex"
              gap="4"
              flexDirection="column"
            >
              <AccordionItem border="none" bgColor="#141215">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Text color="#716B76" my="2" fontSize="xs">
                        Today
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {[...new Array(3)].map((item, index) => (
                    <Box
                      key={index}
                      bgImage={mask1}
                      bgRepeat="no-repeat"
                      objectFit="cover"
                      display="flex"
                      justifyContent="space-between"
                      py="2"
                      px="4"
                      className={
                        (index + 1) % 2 == 0 ? "bg-amber-500" : "bg-lime-400"
                      }
                      borderRadius="20px"
                      my="2"
                      position="relative"
                    >
                      <Box className="schedulemask-div"></Box>
                      <Flex
                        flexDirection="column"
                        w={{ lg: "75%", xl: "50%" }}
                        zIndex="999"
                        color="white"
                        px="3"
                        justifyContent="center"
                      >
                        <Text
                          textAlign="left"
                          color="white"
                          fontSize="sm"
                          fontWeight="bold"
                        >
                          Farm Animals Trivia Challenge
                        </Text>
                        <Flex gap="2">
                          <Flex alignItems="center" gap="2">
                            <Text fontSize="11px" color="#716B76">
                              Rewards
                            </Text>
                            <Image src={coin} height="15px"></Image>
                            <Text fontSize="11px">1000</Text>
                          </Flex>
                          <Flex alignItems="center" gap="2">
                            <Image src={clock} height="15px"></Image>
                            <Text fontSize="11px">9:00AM</Text>
                            <Text fontSize="11px">GMT</Text>
                          </Flex>
                        </Flex>
                      </Flex>

                      <Flex
                        w="25%"
                        zIndex="999"
                        alignItems="center"
                        justifyContent="end"
                      >
                        <Button
                          py="2"
                          px="6"
                          borderRadius="20px"
                          bgColor="#7E20C9"
                        >
                          <Text
                            textAlign="left"
                            color="#E6E5E7"
                            fontSize="xs"
                            fontWeight="bold"
                          >
                            Enter Battle
                          </Text>
                        </Button>
                      </Flex>
                    </Box>
                  ))}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem bgColor="#141215" border="none">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Text color="#716B76" my="2" fontSize="xs">
                        Next Week
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {[...new Array(6)].map((item, index) => (
                    <Box
                      key={index}
                      bgImage={mask1}
                      bgRepeat="no-repeat"
                      objectFit="cover"
                      display="flex"
                      justifyContent="space-between"
                      py="2"
                      px="4"
                      className={
                        (index + 1) % 2 == 0 ? "bg-amber-500" : "bg-lime-400"
                      }
                      borderRadius="20px"
                      my="2"
                      position="relative"
                    >
                      <Box className="schedulemask-div"></Box>
                      <Flex
                        flexDirection="column"
                        w={{ lg: "75%", xl: "50%" }}
                        zIndex="999"
                        color="white"
                        px="3"
                        justifyContent="center"
                      >
                        <Text
                          textAlign="left"
                          color="white"
                          fontSize="sm"
                          fontWeight="bold"
                        >
                          Farm Animals Trivia Challenge
                        </Text>
                        <Flex gap="2">
                          <Flex alignItems="center" gap="2">
                            <Text fontSize="11px" color="#716B76">
                              Rewards
                            </Text>
                            <Image src={coin} height="15px"></Image>
                            <Text fontSize="11px">1000</Text>
                          </Flex>
                          <Flex alignItems="center" gap="2">
                            <Image src={clock} height="15px"></Image>
                            <Text fontSize="11px">9:00AM</Text>
                            <Text fontSize="11px">GMT</Text>
                          </Flex>
                        </Flex>
                      </Flex>

                      <Flex
                        w="25%"
                        zIndex="999"
                        alignItems="center"
                        justifyContent="end"
                      >
                        <Button
                          py="2"
                          px="6"
                          borderRadius="20px"
                          bgColor="#7E20C9"
                        >
                          <Text
                            textAlign="left"
                            color="#E6E5E7"
                            fontSize="xs"
                            fontWeight="bold"
                          >
                            Enter Battle
                          </Text>
                        </Button>
                      </Flex>
                    </Box>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
