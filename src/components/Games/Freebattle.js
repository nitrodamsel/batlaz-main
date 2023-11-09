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
import sectionBg from ".././assets/freeBG.webp";
import section2Bg from ".././assets/warBG.webp";

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
export default function FreeBattle() {
  return (
    <Box>
      <Box
        bgImage={sectionBg}
        display="flex"
        alignItems="start"
        flexDirection="column"
        justifyContent="center"
        gap="10"
        position="relative"
        className="leftPoly leftGradient"
        marginTop="-10vh"
        height="80vh"
      >
        <Flex
          w="100%"
          justifyContent="start"
          px="5vw"
          alignItems="start"
          flexDirection="column"
          gap="3"
          zIndex="999"
        >
          <Text className="text-3xl" color="white" textAlign="center">
            Free Battle Games
          </Text>
          <Text color="white" fontSize={{ base:"xs", md:"md"}}>
            Maecenas sit amet urna ornare ligula faucibus consectetur nec
            <br></br> vitae augue. Quisque dolor leo, tristique et hendrerit
            nec,
            <br></br> vestibulum nec tellus. Vivamus ex velit. Ut in ex mattis.
          </Text>
          <Link
            bgColor="#7E20C9"
            color="white"
            fontSize="xs"
            fontWeight="bold"
            px="10"
            py="3"
            borderRadius="20px"
          >
            Explore Battles
          </Link>
        </Flex>
      </Box>
      <Box
        bgImage={section2Bg}
        display="flex"
        alignItems="start"
        flexDirection="column"
        justifyContent="center"
        gap="10"
        position="relative"
        className="rightpoly"
        marginTop="-10vh"
        height="80vh"
      >
        <Flex
          w="100%"
          justifyContent="start"
          px={{base:"2vw", md:"5vw"}}
          alignItems="start"
          flexDirection="row"
          gap="3"
        >
          <Flex w={{base:"0%", md:"50%"}} bgColor="red"></Flex>
          <Flex
            w={{ base:"100%", md:"50%"}}
            alignItems="start"
            flexDirection="column"
            gap="3"
            paddingLeft={{ base:"0vw", md:"8vw"}}
            zIndex="999"
          
          >
            <Text className="text-3xl" color="white" textAlign="center">
              Free Battle Games
            </Text>
            <Text color="white" fontSize={{ base:"xs", md:"md"}} >
              Maecenas sit amet urna ornare ligula faucibus consectetur nec
              <br></br> vitae augue. Quisque dolor leo, tristique et hendrerit
              nec,
              <br></br> vestibulum nec tellus. Vivamus ex velit. Ut in ex
              mattis.
            </Text>
            <Link
              bgColor="#7E20C9"
              color="white"
              fontSize="xs"
              fontWeight="bold"
              px="10"
              py="3"
              borderRadius="20px"
            >
              Explore Battles
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
