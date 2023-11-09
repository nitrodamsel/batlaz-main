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

import recent1 from ".././assets/recent1.webp";
import recent2 from ".././assets/recent2.webp";
import recent3 from ".././assets/recent3.webp";
import recent4 from ".././assets/recent4.webp";
import recent5 from ".././assets/rec6.webp";
import recent6 from ".././assets/rec7.webp";
import recent7 from ".././assets/rec8.webp";
import recent8 from ".././assets/rec9.webp";

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
export default function RecentBattle() {
  return (
    <Box
      height="110vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      bgColor="black"
    >
      <Box className="flex px-20 justify-between py-5 items-center" w="100%">
        <Text className="text-3xl" color="white">
          Recent Battle
        </Text>
        <Link
          color="white"
          bgColor="black"
          px="3"
          py="1"
          borderRadius="15"
          border="1px solid"
          borderColor="#7E20C9"
        >
          Show More
        </Link>
      </Box>
      <Box display="flex" flexDirection="row" className="px-20 gap-10" w="100%">
        <Box
          w="25%"
          border="1px"
          borderColor="#1C1A1E"
          borderRadius="25"
          position="relative"
          bgColor="black"
          className="view-div"
          _hover={{ border: "1px solid", borderColor: "#7E20C9" }}
          height="55.6vh"
        >
          <Box
            className="flex justify-between"
            flexDirection="column"
            alignItems="center"
            gap="5"
          >
            <Stack position="relative">
              <Image src={recent6} className="recent-img" padding="2" />
              <Stack
                position="absolute"
                display="flex"
                justifyContent="center"
                w="100%"
                top="75%"
                alignItems="center"
                className="recent-text"
              >
                <Center
                  padding="1px"
                  borderRadius="5px"
                  bgColor="#42C340"
                  color="white"
                  w="15%"
                >
                  <Text>WIN</Text>
                </Center>

                <Text className="text-center text-white">
                  Science Trivia Challenge
                </Text>
              </Stack>
              <Center
                href=""
                className="view-profile"
                height="auto"
                borderBottomLeftRadius="21"
                borderBottomRightRadius="21"
                py="3"
                borderTop="1px solid"
                borderColor="#1C1A1E"
                _hover={{
                  cursor: "pointer",
                }}
                color="#716B76"
                w="100%"
                position="absolute"
                top="87%"
              >
                <Link>View Battle</Link>
              </Center>
            </Stack>
          </Box>
        </Box>

        <Box
          w="25%"
          border="1px"
          borderColor="#1C1A1E"
          borderRadius="25"
          position="relative"
          bgColor="black"
          className="view-div"
          _hover={{ border: "1px solid", borderColor: "#7E20C9" }}
          height="55.6vh"
        >
          <Box
            className="flex justify-between"
            flexDirection="column"
            alignItems="center"
            gap="5"
          >
            <Stack position="relative">
              <Image src={recent5} className="recent-img" padding="2" />
              <Stack
                position="absolute"
                display="flex"
                justifyContent="center"
                w="100%"
                top="75%"
                alignItems="center"
                className="recent-text"
              >
                <Center
                  padding="1px"
                  borderRadius="5px"
                  bgColor="#42C340"
                  color="white"
                  w="15%"
                >
                  <Text>WIN</Text>
                </Center>

                <Text className="text-center text-white">
                  Science Trivia Challenge
                </Text>
              </Stack>
              <Center
                href=""
                className="view-profile"
                height="auto"
                borderBottomLeftRadius="21"
                borderBottomRightRadius="21"
                py="3"
                borderTop="1px solid"
                borderColor="#1C1A1E"
                _hover={{
                  cursor: "pointer",
                }}
                color="#716B76"
                w="100%"
                position="absolute"
                top="87%"
              >
                <Link>View Battle</Link>
              </Center>
            </Stack>
          </Box>
        </Box>

        <Box
          w="25%"
          border="1px"
          borderColor="#1C1A1E"
          borderRadius="25"
          position="relative"
          bgColor="black"
          className="view-div"
          _hover={{ border: "1px solid", borderColor: "#7E20C9" }}
          height="55.6vh"
        >
          <Box
            className="flex justify-between"
            flexDirection="column"
            alignItems="center"
            gap="5"
          >
            <Stack position="relative">
              <Image src={recent7} className="recent-img" padding="2" />
              <Stack
                position="absolute"
                display="flex"
                justifyContent="center"
                w="100%"
                top="75%"
                alignItems="center"
                className="recent-text"
              >
                <Center
                  padding="1px"
                  borderRadius="5px"
                  bgColor="#42C340"
                  color="white"
                  w="15%"
                >
                  <Text>WIN</Text>
                </Center>

                <Text className="text-center text-white">
                  Science Trivia Challenge
                </Text>
              </Stack>
              <Center
                href=""
                className="view-profile"
                height="auto"
                borderBottomLeftRadius="21"
                borderBottomRightRadius="21"
                py="3"
                borderTop="1px solid"
                borderColor="#1C1A1E"
                _hover={{
                  cursor: "pointer",
                }}
                color="#716B76"
                w="100%"
                position="absolute"
                top="87%"
              >
                <Link>View Battle</Link>
              </Center>
            </Stack>
          </Box>
        </Box>

        <Box
          w="25%"
          border="1px"
          borderColor="#1C1A1E"
          borderRadius="25"
          position="relative"
          bgColor="black"
          className="view-div"
          _hover={{ border: "1px solid", borderColor: "#7E20C9" }}
          height="55.6vh"
        >
          <Box
            className="flex justify-between"
            flexDirection="column"
            alignItems="center"
            gap="5"
          >
            <Stack position="relative">
              <Image src={recent8} className="recent-img" padding="2" />
              <Stack
                position="absolute"
                display="flex"
                justifyContent="center"
                w="100%"
                top="75%"
                alignItems="center"
                className="recent-text"
              >
                <Center
                  padding="1px"
                  borderRadius="5px"
                  bgColor="#42C340"
                  color="white"
                  w="15%"
                >
                  <Text>WIN</Text>
                </Center>

                <Text className="text-center text-white">
                  Science Trivia Challenge
                </Text>
              </Stack>
              <Center
                href=""
                className="view-profile"
                height="auto"
                borderBottomLeftRadius="21"
                borderBottomRightRadius="21"
                py="3"
                borderTop="1px solid"
                borderColor="#1C1A1E"
                _hover={{
                  cursor: "pointer",
                }}
                color="#716B76"
                w="100%"
                position="absolute"
                top="87%"
              >
                <Link>View Battle</Link>
              </Center>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
