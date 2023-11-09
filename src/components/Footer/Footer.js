import React from "react";
import gstore from ".././assets/gstore.webp";
import astore from ".././assets/appstore.webp";
import ig from ".././assets/instagram.webp";
import fb from ".././assets/fb.webp";
import twitter from ".././assets/twitter-new.webp";
import "./Footer.css";
import CurrentYear from "./CurrentYear";

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

export default function Footer() {
  return (
    <div className="">
      <Box className="flex flex-col md:flex-row justify-between px-10 py-3" bgColor="#1A181C">
        <Text color="white" fontSize={{ base:"12px", md:"md"}} textAlign={{ base:"center", md:"left" }}>
          BatLaz © Copyrights <CurrentYear />, Inc. All rights reserved.
        </Text>

        <div className="flex">
          <Flex gap="3" flexDirection={{base: "column", md:"row"}} w="100%" alignItems="center" marginTop={{ base:"2vh", md:"0"}}>
            <Link className="px-2" color="white" fontSize={{ base:"12px", md:"md"}}>
              Terms of Service
            </Link>
            <Link className="px-2" color="white" fontSize={{ base:"12px", md:"md"}}>
              Privacy Policy
            </Link>
            <Link className="px-2" color="white" fontSize={{ base:"12px", md:"md"}}>
              FAQs
            </Link>
          </Flex>
        </div>
      </Box>
    </div>
  );
}
