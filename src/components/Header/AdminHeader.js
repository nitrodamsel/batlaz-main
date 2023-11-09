import React from "react";

import { useNavigate } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";

import { BsFillArrowUpCircleFill, BsFillCircleFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import iuser from ".././assets/Avatar1.webp";
import ibell from ".././assets/bell.webp";
import iwallet from ".././assets/wallet.webp";
import imessage from ".././assets/comment.webp";
import isearch from ".././assets/search.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

import {
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
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
} from "@chakra-ui/react";

export default function AdminHeader({ links = [] }) {
  const history = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      color={"white"}
      // backgroundColor="#1A1A1A"
      // py={2}
      zIndex="50"
      sx={{
        position: "fixed",
      }}
      w="100%"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ base: "0", md: "0", lg: "0" }}
        paddingBottom={{ base: "0", md: "0", lg: "0" }}
        flexDirection={{ base: "row", md: "row", lg: "row" }}
        bgColor="black"
      >
        <Flex paddingStart="10" w="50%">
          <Link href="/" color="white" fontSize="xl">
            Batlaz.
          </Link>
        </Flex>

        <Flex w="50%" py="5" flexDirection="row" justifyContent="center">
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            gap="2"
            marginRight="50px"
            justifyContent="end"
          >
            <Flex
              alignItems="center"
              gap="2"
              border="1px solid"
              borderColor="#1C1A1E"
              py="1"
              px="3"
              borderRadius="20px"
              w="28%"
            >
              <img src={isearch} className="h-4" alt="" />
              <Input
                placeholder="Search"
                color="white"
                border="none"
                _selected={{ borderColor: "none", border: "none" }}
                _focus={{ boxShadow: "none" }}
                _placeholder={{ color: "white" }}
                height="28px"
              />
            </Flex>

            <Box
              padding="2"
              border="1px"
              borderColor="#1C1A1E"
              borderRadius="50%"
              _hover={{ backgroundColor: "gray" }}
            >
              <img src={iwallet} className="h-4" alt="" />
            </Box>

            <Box
              padding="2"
              border="1px"
              borderColor="#1C1A1E"
              borderRadius="50%"
              _hover={{ backgroundColor: "gray" }}
            >
              <img src={imessage} className="h-4" alt="" />
            </Box>

            <Box
              padding="2"
              border="1px"
              borderColor="#1C1A1E"
              borderRadius="50%"
              _hover={{ backgroundColor: "gray" }}
            >
              <img src={ibell} className="h-4" alt="" />
            </Box>

            <Box
              padding="1"
              border="1px"
              borderColor="#1C1A1E"
              borderRadius="50%"
              _hover={{ backgroundColor: "gray" }}
            >
              <img src={iuser} className="h-7" alt="" />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
