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

import batImg from ".././assets/reg-img.webp";

import Header from "../Header/Header";

import { AiFillFire } from "react-icons/ai";

import "./Daily.css";
import FooterGeneral from "../Footer/FooterGeneral";
import FooterBlack from "../Footer/FooterTrans";
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
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

export default function Daily() {
  return (
    <Box>
      <Flex
        flexDirection="column"
        className="pb-30"
        h="auto"
        py="10"
        px="24"
        bgImage={sectionBG}
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        <Flex w="100%" marginTop="17vh">
          <Text color="white" fontSize="4xl">
            Register Battle
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          gap="5"
          marginBottom="30vh"
          height="auto"
          w="100%"
        >
          <Flex
            w="70%"
            flexDirection="column"
            bgColor="black"
            padding="7"
            borderRadius="15px"
          >
            <Flex justifyContent="space-between" w="100%" paddingBottom="7">
              <Stack>
                <RadioGroup defaultValue="1"></RadioGroup>
                <Text color="white">Pay with wallet</Text>
                <Flex>
                  <Stack>
                    {/* <Radio value="1" isDisabled>
                      Checked
                    </Radio>
                    <Radio value="2">Unchecked</Radio> */}
                    <Radio value="3">$131</Radio>
                  </Stack>
                </Flex>
              </Stack>
              <Stack>
                <Link href="/addmoney" color="#8B00FF">
                  Add Money to Wallet
                </Link>
                <Text>Batlaz Balance</Text>
              </Stack>
            </Flex>
            <Flex
              justifyContent="space-between"
              w="100%"
              borderTop="1px solid"
              borderBottom="1px solid"
              borderColor="#1C1A1E"
              py="7"
            >
              <Stack>
                <Text color="white">Pay with Card</Text>

                <Stack>
                  <Radio value="3">Ending in: *****1214</Radio>
                  <Radio value="3">Ending in: *****1214</Radio>
                </Stack>
              </Stack>
              <Stack>
                <Text color="#8B00FF">Add Card</Text>
                <Text>$131</Text>
              </Stack>
            </Flex>
            <Flex justifyContent="space-between" w="100%" py="7">
              <Stack>
                <Text color="white">Other Payment Methods</Text>
                <Stack>
                  <Radio value="3">Paypal</Radio>
                  <Radio value="3">Paypal</Radio>
                </Stack>
              </Stack>
              <Stack>
                <Text color="white">Pay with wallet</Text>
                <Text>$131</Text>
              </Stack>
            </Flex>
          </Flex>
          <Flex
            w="30%"
            bgColor="black"
            padding="7"
            borderRadius="15px"
            flexDirection="column"
            gap="5"
          >
            <Text color="white">Battle Summary</Text>
            <Image src={batImg}></Image>
            <Text color="white" fontSize="2xl" fontWeight="bold">
              Farm Animals Trivia Battle
            </Text>
            <Flex flexDirection="column">
              <Flex w="100%" justifyContent="space-between">
                <Stack w="100%" spacing={0}>
                  <Text fontSize="xs" color="white">
                    Battle
                  </Text>
                  <Flex>
                    <Text fontSize="xs" color="white">
                      Starts In
                    </Text>
                    <AiFillFire color="orange"></AiFillFire>
                  </Flex>
                </Stack>
                <Flex gap="3">
                  <Grid templateColumns="repeat(2, 1fr)" gap={0.5}>
                    <GridItem
                      w="100%"
                      bgColor="#1A181C"
                      px="3"
                      py="2"
                      fontSize="lg"
                      color="white"
                      alignSelf="center"
                      borderRadius="7px"
                      display="flex"
                    >
                      <Text>0</Text>
                    </GridItem>

                    <GridItem
                      w="100%"
                      bgColor="#1A181C"
                      px="3"
                      py="2"
                      fontSize="lg"
                      color="white"
                      alignSelf="center"
                      borderRadius="7px"
                      display="flex"
                    >
                      <Text>0</Text>
                    </GridItem>
                    <Text fontSize="10px" color="#716B76">
                      HOURS
                    </Text>
                  </Grid>

                  <Grid templateColumns="repeat(2, 1fr)" gap={0.5}>
                    <GridItem
                      w="100%"
                      bgColor="#1A181C"
                      px="3"
                      py="2"
                      fontSize="lg"
                      color="white"
                      alignSelf="center"
                      borderRadius="7px"
                      display="flex"
                    >
                      <Text>4</Text>
                    </GridItem>

                    <GridItem
                      w="100%"
                      bgColor="#1A181C"
                      px="3"
                      py="2"
                      fontSize="lg"
                      color="white"
                      alignSelf="center"
                      borderRadius="7px"
                      display="flex"
                    >
                      <Text>8</Text>
                    </GridItem>
                    <Text fontSize="10px" color="#716B76">
                      HOURS
                    </Text>
                  </Grid>

                  <Grid templateColumns="repeat(2, 1fr)" gap={0.5}>
                    <GridItem
                      w="100%"
                      bgColor="#1A181C"
                      px="3"
                      py="2"
                      fontSize="lg"
                      color="white"
                      alignSelf="center"
                      borderRadius="7px"
                      display="flex"
                    >
                      <Text>3</Text>
                    </GridItem>

                    <GridItem
                      w="100%"
                      bgColor="#1A181C"
                      px="3"
                      py="2"
                      fontSize="lg"
                      color="white"
                      alignSelf="center"
                      borderRadius="7px"
                      display="flex"
                    >
                      <Text>2</Text>
                    </GridItem>
                    <Text fontSize="10px" color="#716B76">
                      HOURS
                    </Text>
                  </Grid>
                </Flex>
              </Flex>
            </Flex>
            <Flex>
              <Flex w="50%" flexDirection="column">
                <Text color="#716B76">Prize Money</Text>
                <Text color="white" fontWeight="bold">
                  $100,000
                </Text>
              </Flex>
              <Flex w="50%" flexDirection="column">
                <Text color="#716B76">Wager</Text>
                <Text color="white" fontWeight="bold">
                  0.99
                </Text>
              </Flex>
            </Flex>
            <Button
              bgColor="#7E20C9"
              color="white"
              fontSize="xs"
              borderRadius="20px"
            >
              {" "}
              Continue
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
