import { useForm } from "react-hook-form";

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
import HeroImg from ".././assets/homeHero.webp";
import gameBG from ".././assets/gamebackground.webp";
import contactBG from ".././assets/contact-bg.webp";

import Controller from ".././assets/Hero-Controller.webp";

import gstore from ".././assets/gstore.webp";
import astore from ".././assets/appstore.webp";

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
} from "@chakra-ui/react";

import "./Home.css";

import WarRoom from "../WarRoom/WarRoom";
import Contact from "../Extras/Contact";
import RecentBattle from "../Games/RecentBattle";
import Games from "../Games/Games";
import FreeBattle from "../Games/Freebattle";
import Upcoming from "../Games/Upcoming";
import Leaderboard from "../Games/Leaderboard";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FooterBlack from "../Footer/FooterBlack";

export default function Home() {
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
    <Box height="auto" py="">
      <Box
        variant="unstyled"
        height="auto"
        px="0"
        py="0"
        position="relative"
        zIndex="9999"
      >
        <Box
          bgImage={HeroImg}
          bgSize="cover"
          height="100vh"
          bgPosition="center"
          className="Hero hero-top"
          position="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Stack
            position="absolute"
            top="25%"
            left={{ base: "0%", md: "12%" }}
            gap="3"
            zIndex="99999"
            w={{ base: "100%", md: "40%" }}
            px={{ base: "7px", md: "0px" }}
          >
            <Stack spacing={{ base: "-1", md: "-5" }}>
              <Text fontSize={{ base: "4xl", md: "6xl" }} color="white">
                Best batlaz
              </Text>
              <Text fontSize={{ base: "4xl", md: "6xl" }} color="white">
                battles for you
              </Text>
            </Stack>
            <Text color="white" fontSize="xs">
              Maecenas sit amet urna ornare ligula faucibus consectetur nec
              vitae augue.<br className="hidden md:block"></br> Quisque dolor
              leo, tristique et hendrerit nec, vestibulum nec tellus. Vivamus ut
              <br className="hidden md:block"></br> ex velit. Ut in ex mattis,
              porta urna eu, placerat risus.
            </Text>
            <Text color="white" fontWeight="bold">
              Registration ends in
            </Text>
            <Flex
              alignItems="center"
              bgColor="black"
              py={{ base: "1", md: "3" }}
              borderRadius="20px"
            >
              <Flex w="70%">
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  w="25%"
                  color="white"
                  gap="0"
                >
                  <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold">
                    01
                  </Text>
                  <Text color="#716B76" fontSize={{ base: "10px", md: "xs" }}>
                    SECONDS
                  </Text>
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  w="25%"
                  color="white"
                >
                  <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold">
                    01
                  </Text>
                  <Text color="#716B76" fontSize={{ base: "10px", md: "xs" }}>
                    SECONDS
                  </Text>
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  w="25%"
                  color="white"
                >
                  <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold">
                    01
                  </Text>
                  <Text color="#716B76" fontSize={{ base: "10px", md: "xs" }}>
                    SECONDS
                  </Text>
                </Flex>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  w="25%"
                  color="white"
                >
                  <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold">
                    01
                  </Text>
                  <Text color="#716B76" fontSize={{ base: "10px", md: "xs" }}>
                    SECONDS
                  </Text>
                </Flex>
              </Flex>
              <Flex w="30%">
                <Box
                  py="3"
                  px={{ base: "3", md: "8" }}
                  fontSize="xs"
                  color="white"
                  bgColor="#7E20C9"
                  borderRadius="20px"
                >
                  <Text textAlign="center" fontWeight="bold">
                    Register Now
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Stack>
        </Box>
      </Box>

      <Box
        bgImage={gameBG}
        bgSize="cover"
        height="auto"
        bgPosition="center"
        className="Hero"
      >
        <Games />
        <FreeBattle />
        <Upcoming />
        <Leaderboard />
      </Box>

      <Box
        bgImage={contactBG}
        w="100%"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        px={{ base: "5", md: "20" }}
        py="10"
        gap={{ base: "10", md: "0" }}
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          paddingTop="0"
          paddingRight={{ base: "0", md: "40" }}
        >
          <Text color="white" fontSize="5xl" padding="0" margin="0">
            Contact Us
          </Text>
          <Text color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo...
          </Text>
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          bgColor="black"
          padding="10"
          borderRadius="25"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name} paddingBottom="4">
              <Input
                id="name"
                placeholder="Email*"
                borderRadius="10"
                _focus={{ color: "white" }}
                _placeholder={{ color: "white" }}
                borderColor="#7E20C9"
                bgColor="#1C1620"
                {...register("name", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.name} paddingBottom="4">
              <Input
                id="name"
                placeholder="Phone*"
                _focus={{ color: "white" }}
                _placeholder={{ color: "white" }}
                borderRadius="10"
                borderColor="#7E20C9"
                bgColor="#1C1620"
                {...register("name", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              bgColor="#7E20C9"
              isLoading={isSubmitting}
              type="submit"
              color="white"
              fontSize="sm"
              px="14"
            >
              Send
            </Button>
          </form>
        </Box>
      </Box>
      <Box position="relative">
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
