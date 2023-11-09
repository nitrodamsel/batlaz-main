import React from "react";
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
export default function LatestBattle() {
  return (
    <Box
      bgImage={sectionBg}
      height={{ base: "100%", md: "118vh" }}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent={{ base: "start", md: "center" }}
      paddingBottom="8vh"
    >
      <Box
        className="flex flex-col my-2 md:my-0 md:mt-0 md:flex-row px-5 md:px-20 justify-between py-5 items-center"
        w="100%"
      >
        <Text className="text-3xl" color="white">
          Latest batlaz battle
        </Text>
        <Link
          display={{ base: "none", md: "block" }}
          color="white"
          bgColor="black"
          px="3"
          py="1"
          borderRadius="15"
        >
          View All Games
        </Link>
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        className="px-10 md:px-20 gap-16 md:gap-10"
        w="100%"
        // height="60vh"
      >
        <Box
          bgColor="black"
          px="3"
          className="latest-div"
          borderRadius="35"
          display="flex"
          justifyContent="start"
          flexDirection="column"
          position="relative"
          alignItems="center"
          _hover={{
            border: "2px solid",
            borderColor: "#7E20C9",
            height: "65vh",
          }}
          height={{ base: "40vh", md: "58vh" }}
        >
          <Box paddingTop="3">
            <Image src={circle1} />
            <Text className="text-center text-white" fontSize="xl" py="4">
              Latest batlaz battle
            </Text>
          </Box>

          <Flex
            justifyContent="center"
            className="play-div"
            position="absolute"
            top="94.5%"
            w="100%"
          >
            <Box bgColor="#7E20C9" className="play-div">
              <Text color="white" marginTop="2vh">
                PLAY
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box
          bgColor="black"
          px="3"
          className="latest-div"
          borderRadius="35"
          display="flex"
          justifyContent="start"
          flexDirection="column"
          position="relative"
          alignItems="center"
          _hover={{
            border: "2px solid",
            borderColor: "#7E20C9",
            height: "65vh",
          }}
          height={{ base: "40vh", md: "58vh" }}
        >
          <Box paddingTop="3">
            <Image src={circle2} />
            <Text className="text-center text-white" fontSize="xl" py="4">
              Latest batlaz battle
            </Text>
          </Box>

          <Flex
            justifyContent="center"
            className="play-div"
            position="absolute"
            top="94.5%"
            w="100%"
          >
            <Box bgColor="#7E20C9" className="play-div">
              <Text color="white" marginTop="2vh">
                PLAY
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box
          bgColor="black"
          px="3"
          className="latest-div"
          borderRadius="35"
          display="flex"
          justifyContent="start"
          flexDirection="column"
          position="relative"
          alignItems="center"
          _hover={{
            border: "2px solid",
            borderColor: "#7E20C9",
            height: "65vh",
          }}
          height={{ base: "40vh", md: "58vh" }}
        >
          <Box paddingTop="3">
            <Image src={circle3} />
            <Text className="text-center text-white" fontSize="xl" py="4">
              Latest batlaz battle
            </Text>
          </Box>

          <Flex
            justifyContent="center"
            className="play-div"
            position="absolute"
            top="94.5%"
            w="100%"
          >
            <Box bgColor="#7E20C9" className="play-div">
              <Text color="white" marginTop="2vh">
                PLAY
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
