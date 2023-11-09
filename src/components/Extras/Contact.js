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

import footerBG from ".././assets/Footer-Background.webp";
import ig from ".././assets/ig-violet.webp";
import twitter from ".././assets/twitter-violet.webp";
import fb from ".././assets/fb-violet.webp";

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
} from "@chakra-ui/react";

import "./Extras.css";
import { TbMinusVertical } from "react-icons/tb";

export default function Contact() {
  return (
    <Box
      bgColor="black"
      // bgImage={footerBG}
      height="100%"
      display="flex"
      className="px-5 py-10 md:px-20"
      justifyContent="center"
      px={{ base: "5", md: "20" }}
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "5", md: "0" }}
      >
        <Box
          w={{ base: "100%", md: "45%" }}
          paddingRight={{ base: "0", md: "10vw" }}
        >
          <Text href="/" color="white" fontSize="3xl">
            Batlaz.
          </Text>
          <Text color="white" marginTop="1">
            Maecenas sit amet urna ornare ligula faucibus consectetur nec vitae
            augue. Quisque dolor leo, tristique et hendrerit nec, vestibulum nec
            tellus. Vivamus ut ex velit. Ut in ex mattis, porta urna eu,
            placerat risus.
          </Text>
        </Box>
        <Flex w="100%" justifyContent="center" gap="20">
          <Box w={{ base: "100%", md: "15%" }}>
            <Text fontSize="xl" color="white" fontWeight="bold">
              Contact Us
            </Text>
            <Box display="flex" flexDirection="column" marginTop="3">
              <Link color="white">Home</Link>
              <Link color="white">About</Link>
              <Link color="white">Leaderboard</Link>
              <Link color="white">News</Link>
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "15%" }}>
            <Text fontSize="xl" color="white" fontWeight="bold">
              Legal
            </Text>
            <Box display="flex" flexDirection="column" marginTop="3">
              <Link color="white">Privacy</Link>
              <Link color="white">FAQ</Link>
              <Link color="white">Contact</Link>
            </Box>
          </Box>
        </Flex>
        <Box
          w={{ base: "100%", md: "25%" }}
          display="flex"
          justifyContent={{ base: "center", md: "end" }}
        >
          <Image src={fb} px="1" height="40px" />
          <Image src={twitter} px="1" height="40px" />
          <Image src={ig} px="1" height="40px" />
        </Box>
      </Box>
    </Box>
  );
}
