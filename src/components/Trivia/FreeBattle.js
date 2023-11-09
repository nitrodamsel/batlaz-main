import React from "react";

import placeholderImg from ".././assets/Image-placeholder.webp";
import sectionBG from ".././assets/section-background.webp";
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
import coin from ".././assets/coin.webp";

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
} from "@chakra-ui/react";

import Countdown from "react-countdown";

import WaitingOpponent from "./SearchingOpponent";
import leftArrow from ".././assets/leftArrow.webp";
import science from ".././assets/science.webp";
import warbox from ".././assets/warboxImg.webp";

export default function FreeBattle({ tabSwitcher }) {
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

  return (
    <Box>
      <Flex
        flexDirection="column"
        h="100%"
        px="15"
        bgImage={sectionBG}
        alignItems="center"
        justifyContent="center"
        w="100%"
        gap="3"
        py="20"
      >
        <Flex flexDirection="column" gap="4" w="65%">
          <Flex alignItems="center" gap="10">
            <Flex flexDirection="row" alignItems="center" gap="2">
              <Link href="/war">
                <Image src={leftArrow} w="2vw" cursor="pointer"></Image>
              </Link>
              <Text color="white" fontSize="4xl">
                Free Battles
              </Text>
            </Flex>
            {/* <Text>
              <Countdown date={Date.now() + 120000} renderer={renderer} />
            </Text> */}
          </Flex>
          {[...new Array(3)].map((item, index) => (
            <Flex key={index} bg="" gap="2">
              <Flex
                w="50%"
                bgImage={warbox}
                h="23vh"
                borderRadius="10px"
                justifyContent="center"
                alignItems="center"
              >
                <Flex flexDirection="column" alignItems="center" gap="2">
                  <Text color="white" fontWeight="bold" fontSize="lg">
                    Farm Animals Trivia Battle
                  </Text>
                  <Flex justifyContent="center" alignItems="center" gap="1">
                    <Text color="#716B76" textAlign="center" fontSize="xs">
                      Rewards
                    </Text>
                    <Image src={coin} height="18px"></Image>
                    <Text color="white" textAlign="center">
                      1000
                    </Text>
                  </Flex>
                  <Link
                    bg="#7E20C9"
                    color="white"
                    fontSize="xs"
                    fontWeight="bold"
                    textAlign="center"
                    py="2"
                    borderRadius="10px"
                    w="70%"
                  >
                    Start Battle
                  </Link>
                </Flex>
              </Flex>
              <Flex
                w="50%"
                bgImage={warbox}
                h="23vh"
                borderRadius="10px"
                justifyContent="center"
                alignItems="center"
              >
                <Flex flexDirection="column" alignItems="center" gap="2">
                  <Text color="white" fontWeight="bold" fontSize="lg">
                    Farm Animals Trivia Battle
                  </Text>
                  <Flex justifyContent="center" alignItems="center" gap="1">
                    <Text color="#716B76" textAlign="center" fontSize="xs">
                      Rewards
                    </Text>
                    <Image src={coin} height="18px"></Image>
                    <Text color="white" textAlign="center">
                      1000
                    </Text>
                  </Flex>
                  <Link
                    bg="#7E20C9"
                    color="white"
                    fontSize="xs"
                    fontWeight="bold"
                    textAlign="center"
                    py="2"
                    borderRadius="10px"
                    w="70%"
                  >
                    Start Battle
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Contact />
      <Footer />
    </Box>
  );
}
