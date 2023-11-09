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

export default function Download() {
  return (
    <Box>
      <Box className="flex flex-col justify-center md:flex-row top-footer">
        <Box className="w-full md:w-1/2 px-5 md:px-20 py-10 md:py-20 flex flex-col bg-black gap-y-2">
          <Text color="white" className="text-4xl text-white">
            Download our app
          </Text>
          <Text className="" color="white">
            Vestibulum felis sapien, tristique vitae finibus et, aliquam quis
            turpis. Nam euismod nisi in mauris convallis tempor. In hac
            habitasse platea dictumst.
          </Text>
        </Box>
        <Box className="w-full py-5 gap-4 px-5 md:px-10 md:w-1/2 flex justify-center items-center md:justify-start items-center bg-black border-black">
          <Image src={gstore} className="w-1/2	md:w-1/4 h-14" alt="" />
          <Image
            src={astore}
            className="w-1/2 md:w-1/4 h-14 mx-0 md:mx-10"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
}
