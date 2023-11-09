import { useForm } from "react-hook-form";
import React from "react";

import banner from ".././assets/Hero-cup.webp";
import egame from ".././assets/egame.webp";
import circle from ".././assets/group-circle.webp";
import speaker from ".././assets/speaker.webp";
import googlegray from ".././assets/google-play-gray.webp";
import claygray from ".././assets/clay-games-gray.webp";
import whiteCrown from ".././assets/VectorCrown-White.webp";
import BlackCrown from ".././assets/VectorCrown.webp";
import console from ".././assets/console.webp";
import thunder from ".././assets/VectorThunder-White.webp";
import LandingImg from ".././assets/Landing.webp";
import HeroImg from ".././assets/upcoming-img.webp";
import gameBG from ".././assets/gamebackground.webp";
import contactBG from ".././assets/contact-bg.webp";

import Controller from ".././assets/Hero-Controller.webp";

import gstore from ".././assets/gstore.webp";
import astore from ".././assets/appstore.webp";
import upBG from ".././assets/up-bg.webp";

import {
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
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
  Form,
  Field,
  validateName,
  FormErrorMessage,
  props,
  Center,
} from "@chakra-ui/react";

import "./index.css";

import WarRoom from "../WarRoom/WarRoom";
import Contact from "../Extras/Contact";
import RecentBattle from "../Games/RecentBattle";
import Games from "../Games/Games";
import FreeBattle from "../Games/Freebattle";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export default function Upcoming() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      height="122vh"
      py=""
      alignItems="center"
      bgImage={upBG}
      px="4"
      flexDirection="column"
      gap="16"
    >
      <Center ><Text fontSize="4xl" color="white">Upcoming Battles</Text></Center>
      <Tabs
        variant="unstyled"
        height="auto"
        py="0"
        position="relative"
        zIndex="9999"
        w={{base:"98%", md:"65%"}}
        marginBottom="10vh"
      >
        <TabPanels py="0">
          <TabPanel px="0" py="0">
            <Box
              bgImage={HeroImg}
              bgSize="cover"
              height={{ base:"45vh", md:"70vh"}}
              bgPosition="center"
              className="upcoming"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              borderRadius="30px"
            >
              <Stack
                position="absolute"
                top="20%"
                left="3vw"
                gap="2"
                zIndex="99999"
            
              >
                <Text
                  textAlign="center"
                  color="white"
                  textTransform="uppercase"
                  border="1px solid"
                  borderColor="white"
                  borderRadius="10px"
                  py="1"
                  w={{ base:"36%", md:"32%"}}
                  fontSize={{ base:"xs", md:"md"}}
                >
                  DAILY TRIVIA BATTLE
                </Text>

                <Text fontSize={{ base:"lg", md:"4xl"}} fontWeight="bold" color="white">
                  History Battle Trivia
                </Text>
                <Text color="white" fontSize={{ base:"xs", md:"md"}}>
                  Maecenas sit amet urna ornare ligula faucibus consectetur nec
                  vitae augue.<br className="hidden md:block"></br> Quisque dolor leo, tristique et
                  hendrerit nec, vestibulum nec tellus. Vivamus ut<br className="hidden md:block"></br> ex
                  velit. Ut in ex mattis, porta urna eu, placerat risus.
                </Text>

                <Link
                  py={{ base:"3", md:"4"}}
                  px={{ base:"4", md:"8"}}
                  fontSize="xs"
                  color="white"
                  bgColor="#7E20C9"
                  borderRadius="30px"
                  textAlign="center"
                  fontWeight="bold"
                  w={{ base:"50%", md:"40%"}}
                >
                  More Information
                </Link>
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel px="0" py="0">
            <Box
              bgImage={HeroImg}
              bgSize="cover"
              height={{ base:"45vh", md:"70vh"}}
              bgPosition="center"
              className="upcoming"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              borderRadius="30px"
            >
              <Stack
                position="absolute"
                top="20%"
                left="3vw"
                gap="2"
                zIndex="99999"
            
              >
                <Text
                  textAlign="center"
                  color="white"
                  textTransform="uppercase"
                  border="1px solid"
                  borderColor="white"
                  borderRadius="10px"
                  py="1"
                  w={{ base:"36%", md:"32%"}}
                  fontSize={{ base:"xs", md:"md"}}
                >
                  DAILY TRIVIA BATTLE
                </Text>

                <Text fontSize={{ base:"lg", md:"4xl"}} fontWeight="bold" color="white">
                  History Battle Trivia
                </Text>
                <Text color="white" fontSize={{ base:"xs", md:"md"}}>
                  Maecenas sit amet urna ornare ligula faucibus consectetur nec
                  vitae augue.<br className="hidden md:block"></br> Quisque dolor leo, tristique et
                  hendrerit nec, vestibulum nec tellus. Vivamus ut<br className="hidden md:block"></br> ex
                  velit. Ut in ex mattis, porta urna eu, placerat risus.
                </Text>

                <Link
                  py={{ base:"3", md:"4"}}
                  px={{ base:"4", md:"8"}}
                  fontSize="xs"
                  color="white"
                  bgColor="#7E20C9"
                  borderRadius="30px"
                  textAlign="center"
                  fontWeight="bold"
                  w={{ base:"50%", md:"40%"}}
                >
                  More Information
                </Link>
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel px="0" py="0">
            <Box
              bgImage={HeroImg}
              bgSize="cover"
              height={{ base:"45vh", md:"70vh"}}
              bgPosition="center"
              className="upcoming"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              borderRadius="30px"
            >
              <Stack
                position="absolute"
                top="20%"
                left="3vw"
                gap="2"
                zIndex="99999"
            
              >
                <Text
                  textAlign="center"
                  color="white"
                  textTransform="uppercase"
                  border="1px solid"
                  borderColor="white"
                  borderRadius="10px"
                  py="1"
                  w={{ base:"36%", md:"32%"}}
                  fontSize={{ base:"xs", md:"md"}}
                >
                  DAILY TRIVIA BATTLE
                </Text>

                <Text fontSize={{ base:"lg", md:"4xl"}} fontWeight="bold" color="white">
                  History Battle Trivia
                </Text>
                <Text color="white" fontSize={{ base:"xs", md:"md"}}>
                  Maecenas sit amet urna ornare ligula faucibus consectetur nec
                  vitae augue.<br className="hidden md:block"></br> Quisque dolor leo, tristique et
                  hendrerit nec, vestibulum nec tellus. Vivamus ut<br className="hidden md:block"></br> ex
                  velit. Ut in ex mattis, porta urna eu, placerat risus.
                </Text>

                <Link
                  py={{ base:"3", md:"4"}}
                  px={{ base:"4", md:"8"}}
                  fontSize="xs"
                  color="white"
                  bgColor="#7E20C9"
                  borderRadius="30px"
                  textAlign="center"
                  fontWeight="bold"
                  w={{ base:"50%", md:"40%"}}
                >
                  More Information
                </Link>
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel px="0" py="0">
            <Box
              bgImage={HeroImg}
              bgSize="cover"
              height={{ base:"45vh", md:"70vh"}}
              bgPosition="center"
              className="upcoming"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              borderRadius="30px"
            >
              <Stack
                position="absolute"
                top="20%"
                left="3vw"
                gap="2"
                zIndex="99999"
            
              >
                <Text
                  textAlign="center"
                  color="white"
                  textTransform="uppercase"
                  border="1px solid"
                  borderColor="white"
                  borderRadius="10px"
                  py="1"
                  w={{ base:"36%", md:"32%"}}
                  fontSize={{ base:"xs", md:"md"}}
                >
                  DAILY TRIVIA BATTLE
                </Text>

                <Text fontSize={{ base:"lg", md:"4xl"}} fontWeight="bold" color="white">
                  History Battle Trivia
                </Text>
                <Text color="white" fontSize={{ base:"xs", md:"md"}}>
                  Maecenas sit amet urna ornare ligula faucibus consectetur nec
                  vitae augue.<br className="hidden md:block"></br> Quisque dolor leo, tristique et
                  hendrerit nec, vestibulum nec tellus. Vivamus ut<br className="hidden md:block"></br> ex
                  velit. Ut in ex mattis, porta urna eu, placerat risus.
                </Text>

                <Link
                  py={{ base:"3", md:"4"}}
                  px={{ base:"4", md:"8"}}
                  fontSize="xs"
                  color="white"
                  bgColor="#7E20C9"
                  borderRadius="30px"
                  textAlign="center"
                  fontWeight="bold"
                  w={{ base:"50%", md:"40%"}}
                >
                  More Information
                </Link>
              </Stack>
            </Box>
          </TabPanel>
          <TabPanel px="0" py="0">
            <Box
              bgImage={HeroImg}
              bgSize="cover"
              height={{ base:"45vh", md:"70vh"}}
              bgPosition="center"
              className="upcoming"
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              borderRadius="30px"
            >
              <Stack
                position="absolute"
                top="20%"
                left="3vw"
                gap="2"
                zIndex="99999"
            
              >
                <Text
                  textAlign="center"
                  color="white"
                  textTransform="uppercase"
                  border="1px solid"
                  borderColor="white"
                  borderRadius="10px"
                  py="1"
                  w={{ base:"36%", md:"32%"}}
                  fontSize={{ base:"xs", md:"md"}}
                >
                  DAILY TRIVIA BATTLE
                </Text>

                <Text fontSize={{ base:"lg", md:"4xl"}} fontWeight="bold" color="white">
                  History Battle Trivia
                </Text>
                <Text color="white" fontSize={{ base:"xs", md:"md"}}>
                  Maecenas sit amet urna ornare ligula faucibus consectetur nec
                  vitae augue.<br className="hidden md:block"></br> Quisque dolor leo, tristique et
                  hendrerit nec, vestibulum nec tellus. Vivamus ut<br className="hidden md:block"></br> ex
                  velit. Ut in ex mattis, porta urna eu, placerat risus.
                </Text>

                <Link
                  py={{ base:"3", md:"4"}}
                  px={{ base:"4", md:"8"}}
                  fontSize="xs"
                  color="white"
                  bgColor="#7E20C9"
                  borderRadius="30px"
                  textAlign="center"
                  fontWeight="bold"
                  w={{ base:"50%", md:"40%"}}
                >
                  More Information
                </Link>
              </Stack>
            </Box>
          </TabPanel>
        </TabPanels>
        <Flex
          flexDirection="row"
          position="absolute"
          top="85%"
          zIndex="99999"
          w="100%"
          justifyContent="space-between"
          px="3vw"
        >
          <TabList
            left="2vw"
            border="none"
            borderColor="none"
            gap="2"
            display="flex"
            w="70%"
          >
            <Tab
              color="white"
              _selected={{
                color: "black",
                bg: "white",
                border: "none",
              }}
              border="1px solid"
              borderColor="white"
              borderRadius="50%"
              height={{ base:"35px", md:"45px" }}
              w={{ base:"35px", md:"45px" }}
            >
              {" "}
              1
            </Tab>
            <Tab
              color="white"
              _selected={{ color: "black", bg: "white", border: "none" }}
              border="1px solid"
              borderColor="white"
              borderRadius="50%"
              height={{ base:"35px", md:"45px" }}
              w={{ base:"35px", md:"45px" }}
            >
              {" "}
              2
            </Tab>
            <Tab
              color="white"
              _selected={{ color: "black", bg: "white", border: "none" }}
              border="1px solid"
              borderColor="white"
              borderRadius="50%"
              height={{ base:"35px", md:"45px" }}
              w={{ base:"35px", md:"45px" }}
            >
              {" "}
              3
            </Tab>
            <Tab
              color="white"
              _selected={{ color: "black", bg: "white", border: "none" }}
              border="1px solid"
              borderColor="white"
              borderRadius="50%"
              height={{ base:"35px", md:"45px" }}
              w={{ base:"35px", md:"45px" }}
            >
              {" "}
              4
            </Tab>
            <Tab
              color="white"
              _selected={{ color: "black", bg: "white", border: "none" }}
              border="1px solid"
              borderColor="white"
              borderRadius="50%"
              height={{ base:"35px", md:"45px" }}
              w={{ base:"35px", md:"45px" }}
            >
              {" "}
              5
            </Tab>
          </TabList>
          <Flex w="15%" flexDirection="row" height="auto">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="50%"
              bgColor="black"
              borderRadius="7px 0px 0px 7px"
              border="1px solid"
              borderColor="white"
            >
              <BiLeftArrowAlt fontSize="2xl" color="white" />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="50%"
              bgColor="white"
              borderRadius="0px 7px 7px 0px"
            >
              <BiRightArrowAlt />
            </Box>
          </Flex>
        </Flex>
      </Tabs>
    </Box>
  );
}
