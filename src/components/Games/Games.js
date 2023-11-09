import React from "react";
import banner from ".././assets/Hero-cup.webp";
import egame from ".././assets/egame-new.webp";
import circle1 from ".././assets/b1.webp";
import circle2 from ".././assets/b2.webp";
import circle3 from ".././assets/b3.webp";

import circle4 from ".././assets/b4.webp";
import circle5 from ".././assets/b5.webp";
import circle6 from ".././assets/b6.webp";

import speaker from ".././assets/speaker.webp";
import googlegray from ".././assets/google-play-new.webp";
import claygray from ".././assets/clay-games-new.webp";
import whiteCrown from ".././assets/VectorCrown-White.webp";
import BlackCrown from ".././assets/VectorCrown.webp";
import console from ".././assets/console.webp";
import thunder from ".././assets/VectorThunder-White.webp";
import LandingImg from ".././assets/Landing.webp";
import sectionBg from ".././assets/trivia-bg2.webp";

import StarTop from ".././assets/StarTop.webp";

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

import {
  Box,
  Flex,
  Center,
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
} from "@chakra-ui/react";

import "./index.css";
export default function Games() {
  return (
    <Box
      bgImage={sectionBg}
      // height={{ base: "190vh", md: "112vh" }}
      height="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      marginTop="-12vh"
      className="games"
      paddingBottom={{ base: "20vh", md: "0vh" }}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="10"
        my={{ base: "0vh", md: "12vh" }}
        height={{ base: "100%", md: "100%" }}
      >
        <Box
          className="flex px-20 mt-14 justify-between py-5 items-center "
          w="100%"
          zIndex="999"
        >
          <Center w="100%">
            <Text
              className="text-3xl"
              color="white"
              marginTop="5vh"
              textAlign="center"
            >
              Trivia Games and Battle
            </Text>
          </Center>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          className="px-5 md:px-20 gap-16 md:gap-10"
          w="100%"
          height={{ base: "100%", md: "62vh" }}
          zIndex="999"
        >
          <Link
            href="/trivia/daily"
            color="white"
            fontSize="xl"
            py="4"
            cursor="pointer"
          >
            <Box
              bgColor="black"
              px="3"
              className="latest-div latest-card"
              borderRadius="35"
              display="flex"
              justifyContent="start"
              flexDirection="column"
              position="relative"
              alignItems="center"
              _hover={{
                border: "2px solid",
                borderColor: "#7E20C9",
                height: "52vh",
              }}
              height="45vh"
            >
              <Box paddingTop="3">
                <Image src={circle1} />
                <Text className="text-center text-white" fontSize="xl" py="4">
                  Daily Trivia Battle
                </Text>
              </Box>

              <Flex
                justifyContent="center"
                className="play-div"
                position="absolute"
                top="91%"
                w="100%"
                bgColor="#7e20c9"
                alignItems="center"
              >
                <Box className="play-div">
                  <Text color="white" marginTop="2vh">
                    PLAY
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Link>

          <Link
            href="/trivia/weekly"
            color="white"
            fontSize="xl"
            py="4"
            cursor="pointer"
          >
            <Box
              bgColor="black"
              px="3"
              className="latest-div latest-card"
              borderRadius="35"
              display="flex"
              justifyContent="start"
              flexDirection="column"
              position="relative"
              alignItems="center"
              _hover={{
                border: "2px solid",
                borderColor: "#7E20C9",
                height: "52vh",
              }}
              height="45vh"
            >
              <Box paddingTop="3">
                <Image src={circle2} />
                <Text className="text-center text-white" fontSize="xl" py="4">
                  Weekly Trivia Battle
                </Text>
              </Box>

              <Flex
                justifyContent="center"
                className="play-div"
                position="absolute"
                top="91%"
                w="100%"
                bgColor="#7e20c9"
                alignItems="center"
              >
                <Box className="play-div">
                  <Text color="white" marginTop="2vh">
                    PLAY
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Link>

          <Link
            href="/trivia/monthly"
            color="white"
            fontSize="xl"
            py="4"
            cursor="pointer"
          >
            <Box
              bgColor="black"
              px="3"
              className="latest-div latest-card"
              borderRadius="35"
              display="flex"
              justifyContent="start"
              flexDirection="column"
              position="relative"
              alignItems="center"
              _hover={{
                border: "2px solid",
                borderColor: "#7E20C9",
                height: "52vh",
              }}
              height="45vh"
            >
              <Box paddingTop="3">
                <Image src={circle4} />
                <Text className="text-center text-white" fontSize="xl" py="4">
                  Monthly Trivia Battles
                </Text>
              </Box>

              <Flex
                justifyContent="center"
                className="play-div"
                position="absolute"
                top="91%"
                w="100%"
                bgColor="#7e20c9"
                alignItems="center"
              >
                <Box className="play-div">
                  <Text color="white" marginTop="2vh">
                    PLAY
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Link>

          <Link
            href="/trivia/b2b"
            color="white"
            fontSize="xl"
            py="4"
            cursor="pointer"
          >
            <Box
              bgColor="black"
              px="3"
              className="latest-div latest-card"
              borderRadius="35"
              display="flex"
              justifyContent="start"
              flexDirection="column"
              position="relative"
              alignItems="center"
              _hover={{
                border: "2px solid",
                borderColor: "#7E20C9",
                height: "52vh",
              }}
              height="45vh"
            >
              <Box paddingTop="3">
                <Image src={circle3} />
                <Text className="text-center text-white" fontSize="xl" py="4">
                  B2B Competitions
                </Text>
              </Box>

              <Flex
                justifyContent="center"
                className="play-div"
                position="absolute"
                top="91%"
                w="100%"
                bgColor="#7e20c9"
                alignItems="center"
              >
                <Box className="play-div">
                  <Text color="white" marginTop="2vh">
                    PLAY
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
