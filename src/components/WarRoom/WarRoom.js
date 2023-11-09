import React from "react";

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

import Header from "../Header/Header";

import { AiFillFire } from "react-icons/ai";

import "./WarRoom.css";
import FooterGeneralGray from "../Footer/FooterGeneralGray";
import FooterBlack from "../Footer/FooterBlack";
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
  Checkbox,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function WarRoom() {
  return (
    <Box>
      <Box className="pb-36" h="160vh" py="10" px="24" bgImage={sectionBG}>
        <Flex
          alignItems="center"
          height="auto"
          gap="5"
          flexDirection="column"
          marginBottom="50vh"
        >
          <Flex flexDirection="column" marginTop="12vh" gap="10">
            <Stack>
              <Text fontSize="4xl" color="white" textAlign="center">
                Our Batlaz War room
              </Text>
              <Text textAlign="center" fontSize="xs" color="white">
                Maecenas sit amet urna ornare ligula faucibus consectetur nec
                vitae augue. Quisque dolor leo, tristique<br></br> et hendrerit
                nec, vestibulum nec tellus. Vivamus ut ex velit. Ut in ex
                mattis.
              </Text>
            </Stack>
            <Flex w="100%" gap="5">
              {[...new Array(5)].map((item, index) => (
                <Flex
                  key={index}
                  w="20%"
                  bgColor="black"
                  borderRadius="35px"
                  // padding="2"
                  position="relative"
                  justifyContent="center"
                  className="war-divs"
                  height="40vh"
                >
                  <Image src={rec1} height="auto"></Image>
                  <Flex
                    position="absolute"
                    color="white"
                    top="70%"
                    w="100%"
                    justifyContent="space-between"
                    flexDirection="column"
                    height="30%"
                  >
                    <Stack className="extra-div" px="4">
                      <Text textAlign="left" fontSize="lg">
                        Our batlaz war room
                      </Text>
                      <Text
                        fontSize="xs"
                        className="extra-text"
                        textAlign="left"
                      >
                        Maecenas sit amet urna ornare ligula faucibus
                        consectetur nec vitae augue. Quisque dolor leo.
                      </Text>
                    </Stack>

                    <Flex
                      justifyContent="center"
                      className="join-div"
                      flexDirection="column"
                    >
                      <Link
                        bgColor="#7E20C9"
                        py="4"
                        borderBottomRightRadius="35px"
                        borderBottomLeftRadius="35px"
                        fontSize="xs"
                        fontWeight="bold"
                        w="100%"
                        textAlign="center"
                      >
                        Join Now
                      </Link>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <FooterBlack></FooterBlack>
      <FooterGeneralGray />
    </Box>
  );
}
