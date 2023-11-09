import { useState, React } from "react";

import placeholderImg from ".././assets/Image-placeholder.webp";
import sectionBG from ".././assets/section-background.webp";
import profilePic from ".././assets/pic1.webp";
import iconLight from ".././assets/icon-light.webp";
import HeroCup from ".././assets/Hero-cup.webp";

import star from ".././assets/star1.svg";

import userIcon from ".././assets/user.webp";
import lgIcon from ".././assets/lightning.webp";
import bellIcon from ".././assets/bell-1.webp";
import noteIcon from ".././assets/note.webp";
import friendsIcon from ".././assets/friends.webp";

import Header from "../Header/Header";
import FooterTrans from "../Footer/FooterTrans";

import "./Profile.css";
import FooterGeneral from "../Footer/FooterGeneral";
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
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function Friends() {
  return (
    <Box display="flex" flexDirection="column" gap="5" w="100%">
      <Flex
        bgColor="black"
        flexDirection="column"
        px="5"
        py="5"
        borderRadius="15px"
        gap="3"
      >
        <Text color="white">Leadership Boards</Text>

        <Flex w="100%" gap="3" flexDirection="row">
          {[...new Array(8)].map((item, index) => (
            <Flex
              key={index}
              flexDirection="column"
              w="12.5%"
              className="friends-div"
            >
              <Flex
                bgColor="#0E0D0F"
                padding="3"
                borderRadius="10"
                flexDirection="column"
                justifyContent="space-between"
                gap="5"
              >
                <Flex flexDirection="column">
                  <Text fontSize="xl" color="white" className="numbers">
                    11,446
                  </Text>
                  <Text fontSize="xs" color="#716B76">
                    Battle Wins
                  </Text>
                </Flex>
                <Flex alignSelf="end" position="relative">
                  <Image
                    src={profilePic}
                    borderRadius="50%"
                    height="40px"
                    width="40px"
                    className="f-image"
                  />
                  <Box
                    position="absolute"
                    left="65%"
                    height="35px"
                    width="35px"
                  >
                    <Image src={star}></Image>
                    <Text
                      top="3%"
                      fontSize="xs"
                      color="white"
                      position="absolute"
                      left="21%"
                    >
                      1
                    </Text>
                  </Box>
                </Flex>
              </Flex>
              <Text
                textAlign="center"
                fontSize="xs"
                color="white"
                className="f-name"
              >
                John Smith
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Box bgColor="black" w="100%" paddingBottom="6vh" borderRadius="15px">
        <Box px="5" py="3">
          <Text color="white">Friends</Text>
        </Box>
        <Flex flexDirection="column">
          {[...new Array(8)].map((item, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              padding="2"
              mx="0"
              className={(index + 1) % 2 == 0 ? "bg-black" : "bg-gray"}
            >
              <Flex w="50%" color="white" py="1" alignItems="center" px="3">
                <Image
                  src={profilePic}
                  borderRadius="50%"
                  height="35px"
                  width="35px"
                ></Image>
                <Text px="3">John Smith</Text>
              </Flex>
              <Flex alignItems="center" w="25%"></Flex>
              <Flex alignItems="center" w="25%">
                <Flex color="gray" gap="3">
                  <Image src={iconLight} />
                  <Text textAlign="left" color="white">
                    Level 150
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
