import { useState, React } from "react";

import placeholderImg from ".././assets/Image-placeholder.webp";
import sectionBG from ".././assets/section-background.webp";
import profilePic from ".././assets/recent1.webp";
import notifpic from ".././assets/notifpic.webp";
import iconLight from ".././assets/icon-light.webp";
import HeroCup from ".././assets/Hero-cup.webp";

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

export default function Notifications() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="5"
      w="100%"
      bgColor="black"
      borderRadius="15px"
      paddingBottom="5vh"
    >
      <Flex
        justifyContent="space-between"
        px="5"
        paddingTop="2vh"
        alignItems="center"
      >
        <Text color="white">Notifications</Text>
        <Text color="#716B76" className="underline">
          Mark as read
        </Text>
      </Flex>

      <Tabs>
        <TabList className="tablist">
          <Tab
            _focus={{ borderColor: "#7E20C9", color: "white" }}
            marginLeft="15px"
            className="tab"
          >
            <Text _focus={{ color: "white" }} _selected={{ color: "white" }}>
              All
            </Text>{" "}
            &nbsp;{" "}
            <Box
              bgColor="#7E20C9"
              px="2"
              borderRadius="5"
              _selected={{ color: "white" }}
            >
              8
            </Box>
          </Tab>
          <Tab
            _focus={{ borderColor: "#7E20C9", color: "white" }}
            marginLeft="15px"
            className="tab"
          >
            <Text _focus={{ color: "white" }} _selected={{ color: "white" }}>
              Unread
            </Text>{" "}
            &nbsp;{" "}
            <Box
              bgColor="#7E20C9"
              px="2"
              borderRadius="5"
              _selected={{ color: "white" }}
            >
              3
            </Box>
          </Tab>
          <Tab className="tab">Archive</Tab>
        </TabList>

        <TabPanels>
          <TabPanel w="100%" display="flex" gap="5" flexDirection="column">
            {[...new Array(5)].map((item, index) => (
              <Flex
                key={index}
                flexDirection="row"
                w="100%"
                gap="5"
                borderBottom="1px solid gray"
                py="3"
              >
                <Box position="relative">
                  <Image
                    src={notifpic}
                    borderRadius="5px"
                    height="45px"
                    width="45px"
                  ></Image>
                  <Box
                    position="absolute"
                    height="6px"
                    w="6px"
                    border="1px solid"
                    borderColor="white"
                    borderRadius="50%"
                    bgColor="#69FF51"
                    top="88%"
                    left="88%"
                  ></Box>
                </Box>
                <Box>
                  <Text color="white">Ana Raddon</Text>
                  <Text fontSize="xs" color="#BCBCBC">
                    2h ago
                  </Text>
                </Box>
                <Box>
                  <Text color="white">Want to play with you.</Text>
                </Box>
              </Flex>
            ))}
          </TabPanel>
          <TabPanel className="tab">
            <p>Unread</p>
          </TabPanel>
          <TabPanel className="tab">
            <p>Archive</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
