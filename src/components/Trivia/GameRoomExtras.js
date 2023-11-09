import React, { useState, useEffect } from "react";

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

import flag1 from ".././assets/gameflaglg1.webp";
import flag2 from ".././assets/gameflaglg2.webp";
import ig from ".././assets/ig-violet.webp";
import fb from ".././assets/fb-violet.webp";
import twitter from ".././assets/twitter-violet.webp";

import batImg from ".././assets/reg-img.webp";
import iconTest from ".././assets/iconTest.webp";
import gamebox from ".././assets/gameroombox.webp";
import winloseBG from ".././assets/win-loseBG.webp";
import winTrophy from ".././assets/wintrophy.webp";

import user1 from ".././assets/gamepic1.webp";
import user2 from ".././assets/gamepic2.webp";

import Header from "../Header/Header";

import { AiFillFire } from "react-icons/ai";

import "./GameRoom.css";
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
  Center,
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
  Progress,
} from "@chakra-ui/react";

import Countdown from "react-countdown";

import WaitingOpponent from "./SearchingOpponent";

import mockAPI from "./Data/mockAPI";

import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function WarRoomCategory({ tabSwitcher }) {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.400" backdropFilter="blur(10px) " />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [overlay, setOverlay] = useState(<OverlayOne />);

  const [question, setQuestion] = useState(mockAPI);

  const [value, setValue] = React.useState("1");

  return (
    <Box>
      <Flex
        flexDirection="column"
        h="100vh"
        px="24"
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        <Flex w="100%" justifyContent="end" py="5">
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
              <Center spacing={5}>
                <Button
                  onClick={onClose}
                  fontSize="xs"
                  bg="white"
                  color="#7E20C9"
                  w="40%"
                  py="1"
                  borderRadius="20px"
                  mx="2"
                >
                  Cancel
                </Button>
                <Button
                  onClick={onClose}
                  fontSize="xs"
                  bg="#6a1ba9"
                  px="12"
                  py="1"
                  w="40%"
                  borderRadius="20px"
                  mx="2"
                  color="white"
                >
                  Exit
                </Button>
              </Center>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </Box>
  );
}
