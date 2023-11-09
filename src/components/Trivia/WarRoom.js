import React from "react";
import { useCallback, useState } from "react";

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

import { IoTrashOutline } from "react-icons/io5";

import batImg from ".././assets/reg-img.webp";
import iconTest from ".././assets/iconTest.webp";
import leftArrow from ".././assets/leftArrow.webp";

import Header from "../Header/Header";

import { AiFillFire } from "react-icons/ai";

import "./WarRoom.css";
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
import WarRoomCategory from "./WarRoomCategory";

import { Provider } from "react-redux";

import Reducers from "./Reducer";
import Productlist from "./Productlist";
import Cart from "./Cart";

import QuestionData from "./Data/QuestionData";

import API from "./Data/mockAPI";

export default function WarRoom() {
  const [currentTab, setCurrentTab] = useState("warroommain");

  const tabSwitcher = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <Box>
      {currentTab === "warroommain" && (
        <WarRoomMain tabSwitcher={tabSwitcher} />
      )}
      {currentTab === "category" && (
        <WarRoomCategory tabSwitcher={tabSwitcher} />
      )}
    </Box>
  );
}

function WarRoomMain({ tabSwitcher }) {
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

  //start
  const [cart, setCart] = useState(API);

  const addToCart = (i) => {
    setCart((prevState) =>
      prevState.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            inCart: true,
            count: item.counterVal,
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = (i) => {
    setCart((prevCart) =>
      prevCart.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            count: 0,
            counterVal: 1,
            inCart: false,
          };
        }
        return item;
      })
    );
  };

  const cartCountTotal = cart.reduce((acc, item) => acc + item.count, 0);
  const cartPriceTotal = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const cartTotals = () =>
    cartCountTotal === 0 ? (
      <>
        <Text color="#ACA7AF">0 out of 5 questions</Text>
      </>
    ) : (
      <>
        <Text color="#ACA7AF">{cartCountTotal} out of 5 questions</Text>
      </>
    );

  const cartItems = cart.map((item, i) => (
    <React.Fragment key={item.name}>
      <Flex flexDirection="column">
        {item.inCart && (
          <Accordion allowToggle my="2">
            <AccordionItem bgColor="#141215" border="none">
              <h2>
                <AccordionButton w="100%">
                  <Flex alignItems="center" color="white" w="100%" gap="4">
                    <IoTrashOutline
                      onClick={() => removeFromCart(i)}
                      color="red"
                    ></IoTrashOutline>
                    <Text>Question {item.number}</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex flexDirection="column" gap="2" key={item.name}>
                  <Text color="white">{item.question}</Text>
                  {Object.entries(item.choices).map(([key, value]) => (
                    <Text key={key} color="white">
                      {value}
                    </Text>
                  ))}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )}
      </Flex>
    </React.Fragment>
  ));

  const cartProducts = () => (
    <Flex flexDirection="column" gap="4">
      {cart.map((item, i) => (
        <Accordion key={i} allowToggle gap="5">
          <AccordionItem bgColor="#141215" border="none">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="white">
                  Question {item.number}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex flexDirection="column" gap="2" key={item.name}>
                <Text color="white">{item.question}</Text>

                {Object.entries(item.choices).map(([key, value]) => (
                  <Text key={key} color="white">
                    {value}
                  </Text>
                ))}

                {cartCountTotal == 5 ? (
                  <>
                    <Text color="white">
                      (Maximum of 5 Questions have been selected)
                    </Text>
                  </>
                ) : (
                  <>
                    {!item.inCart ? (
                      <>
                        <Button
                          onClick={() => addToCart(i)}
                          px="10"
                          bgColor="#7E20C9"
                          borderRadius="20px"
                          color="white"
                          fontSize="xs"
                          w="20%"
                        >
                          Add
                        </Button>
                      </>
                    ) : (
                      <>
                        <Text color="white" fontWeight="bold">
                          (Question added)
                        </Text>
                      </>
                    )}
                  </>
                )}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Flex>
  );
  return (
    <Box>
      <Flex
        flexDirection="column"
        h="100%"
        px="24"
        bgImage={sectionBG}
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        <Flex w="100%" justifyContent="space-between" py="5" marginTop="14vh">
          <Flex alignItems="center" gap="10">
            <Flex flexDirection="row" alignItems="center" gap="2">
              <Image
                src={leftArrow}
                w="2vw"
                cursor="pointer"
                onClick={() => {
                  tabSwitcher("category");
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

          <Flex flexDirection="row" alignItems="center" gap="5">
            <Flex alignItems="center">
              <Image src={iconTest}></Image>
              <Text color="white">Science Armory</Text>
            </Flex>
            <Link
              color="white"
              bgColor="#7E20C9"
              borderRadius="20px"
              px="16"
              fontSize="xs"
              py="3"
              fontWeight="bold"
              href="/battle"
            >
              Ready
            </Link>
          </Flex>
        </Flex>

        <Flex alignItems="start" gap="5" height="100vh" w="100%">
          <Flex
            w="50%"
            flexDirection="column"
            bgColor="black"
            borderRadius="15px"
            padding="5"
            gap="4"
          >
            <Flex alignItems="center" gap="4">
              <Text color="white" fontWeight="bold" fontSize="lg">
                Bank Questions
              </Text>
              <Text color="#ACA7AF" fontSize="sm">
                Select up to 5 questions
              </Text>
            </Flex>
            <Flex justifyContent="center" py="3">
              {/* <Input
                placeholder="Search"
                w="45%"
                _placeholder={{ color: "#716B76" }}
                border="1px solid"
                borderColor="#7E20C9"
              /> */}
              <Button
                px="10"
                bgColor="#7E20C9"
                borderRadius="20px"
                color="white"
                fontSize="xs"
              >
                Choose Random
              </Button>
            </Flex>

            <Flex
              w="100%"
              height="36.5vh"
              flexDirection="column"
              gap="4"
              overflowY="scroll"
              paddingTop="3px"
              className="questions"
              paddingRight="4"
              paddingLeft="1"
            >
              {cartProducts()}
            </Flex>
          </Flex>

          <Flex
            w="50%"
            bgColor="black"
            borderRadius="15px"
            flexDirection="column"
            padding="5"
            gap="4"
          >
            <Flex alignItems="center" justifyContent="space-between" gap="4">
              <Text color="white" fontSize="lg" fontWeight="bold">
                Selected Questions
              </Text>
              <Text color="#ACA7AF" fontSize="sm">
                {cartTotals()}
              </Text>
            </Flex>

            <Flex flexDirection="column">{cartItems}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
