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

export default function FooterLanding() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between px-5 md:px-10 py-3 bg-[#7E20C9] gap-3">
        <Text color="white">
          BatLaz © Copyright <CurrentYear />, Inc. All rights reserved.
        </Text>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex justify-center">
            <Link className="px-2" color="white">
              Terms of Service
            </Link>
            <Link className="px-2" color="white">
              Privacy Policy
            </Link>
            <Link className="px-2" color="white">
              FAQs
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img src={fb} className="h-7 px-1" />
            <img src={twitter} className="h-7 px-1" />
            <img src={ig} className="h-7 px-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
