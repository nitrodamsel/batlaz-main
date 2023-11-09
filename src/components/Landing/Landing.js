import React from "react";
import Modal from "react-modal";
import banner from ".././assets/Hero-cup.webp";
import egame from ".././assets/egame-new.webp";
import circle1 from ".././assets/b1.webp";
import circle2 from ".././assets/b2.webp";
import circle3 from ".././assets/b3.webp";
import speaker from ".././assets/speaker.webp";
import googlegray from ".././assets/google-play-new.webp";
import claygray from ".././assets/clay-games-new.webp";
import whiteCrown from ".././assets/pic1.webp";
import BlackCrown from ".././assets/VectorCrown.webp";
import console from ".././assets/console.webp";
import thunder from ".././assets/VectorThunder-White.webp";
import LandingImg from ".././assets/Landing.webp";
import sectionBg from ".././assets/section-background.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from ".././assets/gamepic1.webp";
import img2 from ".././assets/gamepic2.webp";

import StarTop from ".././assets/StarTop.webp";
import bviolet from ".././assets/bviolet.webp";
import gpicons from ".././assets/gpicons.webp";
import picIcon from ".././assets/pic1.webp";

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
import Download from "../Extras/Download";

import Header from "../Header/Header";
import FooterLanding from "../Footer/FooterLanding";

import { CgArrowLongRight } from "react-icons/cg";

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

import "./Landing.css";
import { TbMinusVertical } from "react-icons/tb";

import CountUp from "react-countup";

export default function Landing() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <Box>
      <Box
        bgImage={sectionBg}
        className="flex"
        flexDirection={{ base: "column-reverse", md: "row" }}
        zIndex="1"
        paddingBottom="7vh"
      >
        <Box
          height="auto"
          display="flex"
          flexDirection={{ base: "column", md: "column" }}
          className="w-full md:w-1/2 p-5 md:p-12"
        >
          <Flex justifyContent="center">
            <Image src={banner} w={{ base: "250px", md: "100%" }} alt="" />
          </Flex>

          <Box
            display="flex"
            px={{ base: "0px", md: "7px" }}
            height={{ base: "50px", md: "84px" }}
          >
            <Box
              className="w-4/12 md:w-1/5 flex"
              marginRight={{ base: "0vw", md: "5vw" }}
            >
              <Flex>
                <Image
                  src={bviolet}
                  height={{ base: "50px", md: "84px" }}
                  alt=""
                />
                <Flex
                  flexDirection="column"
                  paddingLeft={{ base: "0px", md: "10px" }}
                >
                  <Text color="white" fontSize={{ base: "lg", md: "4xl" }}>
                    <CountUp end={1280} separator={","} duration={2} />
                  </Text>
                  <Text color="white" fontSize={{ base: "9px", md: "lg" }}>
                    Collection
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box className="w-4/12 md:w-1/5" marginRight="5vw">
              <Flex>
                <Image
                  src={bviolet}
                  height={{ base: "50px", md: "84px" }}
                  alt=""
                />
                <Flex flexDirection="column" paddingLeft="10px">
                  <Text color="white" fontSize={{ base: "lg", md: "4xl" }}>
                    <CountUp end={11800} separator={","} duration={2} />
                  </Text>
                  <Text color="white" fontSize={{ base: "9px", md: "lg" }}>
                    Users
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box className="w-4/12 md:w-1/5">
              <Flex>
                <Image
                  src={bviolet}
                  height={{ base: "50px", md: "84px" }}
                  alt=""
                />
                <Flex flexDirection="column" paddingLeft="10px">
                  <Text color="white" fontSize={{ base: "lg", md: "4xl" }}>
                    <CountUp end={21890} separator={","} duration={2} />
                  </Text>
                  <Text color="white" fontSize={{ base: "9px", md: "lg" }}>
                    Subscriber
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box
          position="relative"
          className="w-full md:w-1/2 mt-16 mb-5 md:my-0 flex justify-center flex-col gap-10"
        >
          <div className="px-5 md:px-20">
            <Text
              fontSize={{ base: "3xl", md: "4xl", xl: "7xl" }}
              className="font-normal md:font-bold text-white"
              color="white"
            >
              Best Batlaz<br></br> Battle for you
            </Text>
          </div>

          <Flex className="flex w-full px-5 md:px-20" gap="10">
            <Link
              className="px-9 md:px-12 py-4"
              color="white"
              borderRadius="10"
              bgColor="#7E20C9"
              fontSize={{ base: "sm", md: "md" }}
            >
              Explore Now
            </Link>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="-1"
            >
              <Link color="white" className="px-3 py-3 border-10">
                Get Started
              </Link>
              <CgArrowLongRight
                color="white"
                fontSize="30px"
              ></CgArrowLongRight>
            </Box>
          </Flex>
          <Image
            src={HeroController}
            height="30vh"
            marginLeft="55%"
            top="78%"
            zIndex="99999999"
            position="absolute"
            display={{ base: "none", md: "block" }}
          />
        </Box>
      </Box>

      <Box
        bgColor="green"
        height="64vh"
        className="py-20 gap-14 md:gap-0 flex flex-col items-center justify-center md:flex-row w-full flex rightPolynew"
        marginTop={{ base: "-7.2vh", md: "-7.5vh" }}
      >
        <Flex
          px={{ base: "5", md: "20" }}
          flexDirection={{ base: "column", md: "column" }}
          justifyContent={{ base: "start", md: "center" }}
          w={{ base: "100%", md: "50%" }}
          gap="3"
        >
          <Text
            color="white"
            className="text-4xl font-normal md:font-bold text-white"
          >
            Trusted with<br className="block md:hidden"></br> Lorem Ipsum
          </Text>
          <Text fontSize="sm" color="white">
            Maecenas sit amet urna ornare ligula faucibus consectetur
          </Text>
        </Flex>
        <Box
          className="flex justify-center md:justify-between items-center px-5 md:px-0"
          position="relative"
          w={{ base: "100%", md: "50%" }}
          paddingRight={{ base: "5", md: "20" }}
        >
          <Image src={gpicons} w="100%" />
        </Box>
      </Box>

      <Box
        className="flex flex-col md:flex-row w-full px-5 md:px-20"
        w="100%"
        bgColor="#7E20C9"
        py="12"
      >
        <Image
          src={Featured}
          height="auto"
          w={{ base: "100%", md: "50%" }}
        ></Image>
        <Box
          w={{ base: "100%", md: "50%" }}
          py="10"
          display="flex"
          flexDirection="column"
          px={{ base: "5", md: "16" }}
          gap="5"
        >
          <Heading className="text-5xl" color="white">
            Join or watch streams<br></br> on batlaz war room
          </Heading>
          <Text color="white">
            Maecenas sit amet urna ornare ligula faucibus consectetur nec vitae
            augue. Quisque dolor leo, tristique et hendrerit nec, vestibulum nec
            tellus. Vivamus ut ex velit. Ut in ex mattis, porta urna eu,
            placerat risus. Vestibulum tempor ut dui ut vestibulum. Integer mi
            dui, sollicitudin id arcu ac, eleifend pulvinar lacus. Morbi
            placerat imperdiet pretium. Praesent id egestas eros, ac rutrum sem.
            Aenean scelerisque massa ac nisi egestas elementum.
          </Text>
          <Link
            py="3"
            px="12"
            bgColor="black"
            textAlign="center"
            color="white"
            w={{ base: "65%", md: "35%" }}
            borderRadius="10"
          >
            Explore Now
          </Link>
        </Box>
      </Box>

      <Box className="flex flex-col">
        <LatestBattle />

        <Flex
          justifyContent="center"
          bgColor="black"
          w="100%"
          px={{ base: "5", md: "20" }}
          py="20"
          flexDirection="column"
          gap="5"
          position="relative"
        >
          <Image
            src={Sword}
            height="30vh"
            position="absolute"
            top="-11%"
            left="58%"
            display={{ base: "none", md: "block" }}
          />
          <Box w="100%" paddingBottom="50">
            <Text color="white" fontSize="3xl">
              Our batlaz war room
            </Text>
          </Box>

          {[...new Array(6)].map((item, index) => (
            <Box
              key={index}
              w="100%"
              display="flex"
              alignItems="center"
              border="1px"
              borderColor="#454545"
              borderRightRadius="50"
              borderLeftRadius="50"
              _hover={{ border: "1px solid", borderColor: "#7E20C9" }}
              height={{ base: "70px", md: "auto" }}
            >
              <Box w="20%" px="1">
                <Image src={warImg} className="h-12 md:h-20" />
              </Box>
              <Box w="20%">
                <Text color="#716B76" fontSize={{ base: "9px", md: "sm" }}>
                  ROOM NAME
                </Text>
                <Text color="white" fontSize={{ base: "9px", md: "lg" }}>
                  Our batlaz war room
                </Text>
              </Box>
              <Box
                w="30%"
                bgImage={batlazwar}
                display="flex"
                alignItems="start"
                flexDirection="column"
                justifyContent="center"
              >
                <Text color="#716B76" fontSize={{ base: "9px", md: "sm" }}>
                  ROOM DESCRIPTION
                </Text>
                <Text color="white" fontSize={{ base: "9px", md: "lg" }}>
                  Proin ullamcorper purus quis tempor interdum.
                </Text>
              </Box>
              <Center
                w="30%"
                bgColor="#7E20C9"
                _hover={{ bgColor: "#49087D", cursor: "pointer" }}
                py={{ base: "7", md: "8" }}
                borderRightRadius="50"
              >
                <Link
                  textAlign="center"
                  color="white"
                  fontSize={{ base: "10px", md: "md" }}
                >
                  JOIN NOW
                </Link>
              </Center>
            </Box>
          ))}
        </Flex>

        <Box
          display="flex"
          bgColor="#7E20C9"
          py="50"
          w="100%"
          flexDirection="column"
        >
          <Box>
            <Box
              className="flex px-5 md:px-20 justify-between flex-row"
              position="relative"
            >
              <Image
                src={Arrow}
                position="absolute"
                height="15vh"
                top="-50%"
                left="65%"
                display={{ base: "none", md: "block" }}
              />
              <Box
                w={{ base: "100%", md: "60%" }}
                display="flex"
                gap="3"
                flexDirection="column"
              >
                <Text className="text-4xl  text-white">
                  Enjoy Gaming Experience <br></br> With Batlaz App
                </Text>
                <p className="text-white">
                  Vestibulum felis sapien, tristique vitae finibus et, aliquam
                  quis turpis. Nam euismod nisi<br></br> in mauris convallis
                  tempor. In hac habitasse platea dictumst.
                </p>
              </Box>
              <Box
                w="40%"
                justifyContent="center"
                alignItems="center"
                display={{ base: "none", md: "flex" }}
              >
                <Link color="white" className="bg-black py-2 px-10 rounded-md">
                  Explore Now
                </Link>
              </Box>
            </Box>
          </Box>
          <Box
            w="100%"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
          >
            <Box
              w={{ base: "100%", md: "60%" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box className="w-full flex px-5 md:px-20">
                <Flex
                  paddingBottom="8"
                  w="100%"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Box
                    w="50%"
                    className="flex"
                    flexDirection="column"
                    justifyContent="center"
                    gap="5"
                    // bg="red"
                    // borderBottom="4px solid green"
                  >
                    <img src={Controller} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to playzzz
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Trophy} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to play
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>

              <Box className="w-full flex px-5 md:px-20">
                <Flex
                  paddingBottom="8"
                  w="100%"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Flag} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to play
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Star} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to play
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>

              <Box className="w-full flex px-5 md:px-20">
                <Flex
                  paddingBottom="8"
                  w="100%"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Thunder} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to play
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                  <Box w="50%" className="flex" flexDirection="column" gap="5">
                    <img src={Chest} className="w-10 circle" alt="" />
                    <Box className="" marginTop="-12">
                      <Text color="white" fontWeight="bold" fontSize="lg">
                        Easy to plays
                      </Text>
                      <Text color="white">Nunc sit amet sagittis tortor. </Text>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Flex
              w={{ base: "100%", md: "40%" }}
              justifyContent={{ base: "center", md: "start" }}
            >
              <Image src={iphoneImage} height={{ base: "50vh", md: "70vh" }} />
            </Flex>
          </Box>
        </Box>

        <Box
          className="w-full px-5 py-10 md:py-20 md:pl-20 "
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bgImage={sectionBg}
          height={{ base: "100%", md: "110vh" }}
        >
          <Box className="flex w-full flex-col h-full items-center justify-center py-5 gap-24 swipe-container">
            <Center className="flex h-9 w-9">
              <Heading color="white" fontSize="4xl" fontWeight="normal">
                Leaderboard
              </Heading>
            </Center>

            <div className="block md:hidden w-full">
              {[...new Array(3)].map((item, index) => (
                <Flex
                  key={index}
                  bg="black"
                  justifyContent="center"
                  w="100%"
                  position="relative"
                  my="5"
                  borderRadius="15px"
                >
                  <Flex position="absolute" top="-4%" w="100%" zIndex="999999">
                    <Flex position="relative" left="80%">
                      <Image src={StarTop} className="h-10" zIndex="999" />
                      <Text
                        color="white"
                        fontWeight="bold"
                        fontSize="lg"
                        zIndex="9999"
                        position="absolute"
                        top="16%"
                        left="33.5%"
                      >
                        1
                      </Text>
                    </Flex>
                  </Flex>
                  <Box
                    className="flex justify-between"
                    flexDirection="column"
                    alignItems="center"
                    gap="5"
                    px="0"
                    paddingTop="10"
                  >
                    <Image
                      src={whiteCrown}
                      className="h-16"
                      alt=""
                      border="2px"
                      borderColor="#716B76"
                      padding="1"
                      borderRadius="50%"
                    />
                    <Text className="ml-2" color="white">
                      Marley Bator
                    </Text>

                    <Box>
                      <Text textAlign="center" color="white" fontSize="3xl">
                        <CountUp end={11446} duration={2} separator="," />
                      </Text>
                      <Text color="white">Total Battle Wins</Text>
                    </Box>
                    <Box w="100%">
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        w="100%"
                        borderTop="1px"
                        borderBottom="1px"
                        borderColor="#1C1A1E"
                        py="2"
                        px="5"
                      >
                        <Text color="#716B76">Win Rate:</Text>
                        <Text color="white">
                          <CountUp
                            end={89.8}
                            decimals={1}
                            suffix={"%"}
                            duration={2}
                          />
                        </Text>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        w="100%"
                        py="2"
                        px="5"
                      >
                        <Text color="#716B76">Favorite Room:</Text>
                        <Text color="white">Oblivion</Text>
                      </Box>

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
                      >
                        <Link>View Profile</Link>
                      </Center>
                    </Box>
                  </Box>
                </Flex>
              ))}
            </div>

            <Swiper
              slidesPerView={3}
              className="hidden md:flex flex-col w-full py-16 pl-0 "
            >
              {[...new Array(6)].map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="view-div bg-black mx-4 rounded-3xl relative h-full"
                >
                  <Flex position="absolute" top="-4%" w="100%" zIndex="999999">
                    <Flex position="relative" left="80%">
                      <Image src={StarTop} className="h-10" zIndex="999" />
                      <Text
                        color="white"
                        fontWeight="bold"
                        fontSize="lg"
                        zIndex="9999"
                        position="absolute"
                        top="16%"
                        left="33.5%"
                      >
                        1
                      </Text>
                    </Flex>
                  </Flex>
                  <Box
                    className="flex justify-between"
                    flexDirection="column"
                    alignItems="center"
                    gap="5"
                    px="0"
                    paddingTop="10"
                  >
                    <Image
                      src={whiteCrown}
                      className="h-16"
                      alt=""
                      border="2px"
                      borderColor="#716B76"
                      padding="1"
                      borderRadius="50%"
                    />
                    <Text className="ml-2" color="white">
                      Marley Bator
                    </Text>

                    <Box>
                      <Text textAlign="center" color="white" fontSize="3xl">
                        <CountUp end={11446} duration={2} separator="," />
                      </Text>
                      <Text color="white">Total Battle Wins</Text>
                    </Box>
                    <Box w="100%">
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        w="100%"
                        borderTop="1px"
                        borderBottom="1px"
                        borderColor="#1C1A1E"
                        py="2"
                        px="5"
                      >
                        <Text color="#716B76">Win Rate:</Text>
                        <Text color="white">
                          <CountUp
                            end={89.8}
                            decimals={1}
                            suffix={"%"}
                            duration={2}
                          />
                        </Text>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        w="100%"
                        py="2"
                        px="5"
                      >
                        <Text color="#716B76">Favorite Room:</Text>
                        <Text color="white">Oblivion</Text>
                      </Box>

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
                      >
                        <Link>View Profile</Link>
                      </Center>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
      <Download />
      <FooterLanding />
    </Box>
  );
}
