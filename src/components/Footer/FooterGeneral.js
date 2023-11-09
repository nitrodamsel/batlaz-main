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
      <div className="flex footer-general justify-between items-center px-10 py-3 bg-[#000000]">
        <Text color="#716B76" fontSize="xs">
          BatLaz © Copyright
          <CurrentYear />, Inc. All rights reserved.
        </Text>

        <div className="flex">
          <div>
            <Link className="px-2" color="#716B76" fontSize="xs">
              Terms of Service
            </Link>
            <Link className="px-2" color="#716B76" fontSize="xs">
              Privacy Policy
            </Link>
            <Link className="px-2" color="#716B76" fontSize="xs">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
