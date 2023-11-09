import React from "react";
import gstore from ".././assets/gstore.webp";
import astore from ".././assets/appstore.webp";
import ig from ".././assets/ig-violet.webp";
import fb from ".././assets/fb-violet.webp";
import twitter from ".././assets/twitter-violet.webp";
import "./Footer.css";

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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function FooterTrans() {
  return (
    <Box
      className="footerTrans"
      // bgColor="green"
      height="30vh"
      marginTop="-30vh"
      w="100%"
    >
      <Box className="flex justify-between px-10 py-3">
        <Flex w="40%" flexDirection="column" py="0" gap="3">
          <Text color="white" fontSize="3xl">
            BatLaz.
          </Text>
          <Text fontSize="xs" color="white">
            Maecenas sit amet urna ornare ligula faucibus consectetur nec vitae
            <br></br>
            augue. Quisque dolor leo, tristique et hendrerit nec, vestibulum nec
            <br></br>
            tellus. Vivamus ut ex velit. Ut in ex mattis, porta urna eu,
            placerat risus.
          </Text>
        </Flex>

        <Flex w="20%" flexDirection="column">
          <Text fontSize="xl" fontWeight="bold" color="white">
            Contact Us
          </Text>
          <Stack spacing={3}>
            {" "}
            <Link className="" color="white" fontSize="xs" marginTop="2vh">
              Home
            </Link>
            <Link className="" color="white" fontSize="xs">
              About
            </Link>
            <Link className="" color="white" fontSize="xs">
              Leaderboard
            </Link>
            <Link className="" color="white" fontSize="xs">
              News
            </Link>
          </Stack>
        </Flex>

        <Flex w="20%" flexDirection="column">
          <Text fontSize="xl" fontWeight="bold" color="white">
            Legal
          </Text>
          <Stack spacing={3}>
            {" "}
            <Link className="" color="white" fontSize="xs" marginTop="2vh">
              Privacy
            </Link>
            <Link className="" color="white" fontSize="xs">
              FAQ
            </Link>
            <Link className="" color="white" fontSize="xs">
              Contact
            </Link>
          </Stack>
        </Flex>

        <Box className="flex" w="20%">
          <Box className="flex items-start">
            <img src={fb} className="h-7 px-1" />
            <img src={twitter} className="h-7 px-1" />
            <img src={ig} className="h-7 px-1" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
