import React, { PureComponent } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  AreaChart,
  rangeData,
  Area,
} from "recharts";
import banner from ".././assets/Hero-cup.webp";
import egame from ".././assets/egame-new.webp";
import circle1 from ".././assets/b1.webp";
import circle2 from ".././assets/b2.webp";
import circle3 from ".././assets/b3.webp";
import speaker from ".././assets/speaker.webp";
import googlegray from ".././assets/google-play-new.webp";
import claygray from ".././assets/clay-games-new.webp";
import whiteCrown from ".././assets/VectorCrown-White.webp";
import BlackCrown from ".././assets/VectorCrown.webp";
import console from ".././assets/console.webp";
import thunder from ".././assets/VectorThunder-White.webp";
import LandingImg from ".././assets/Landing.webp";
import sectionBg from ".././assets/section-background.webp";

import StarTop from ".././assets/StarTop.webp";

import iphoneImage from ".././assets/iPhone13.webp";
import warImg from ".././assets/img1.webp";
import batlazwar from ".././assets/Batlaz-War.webp";

import gstore from ".././assets/gstore.webp";
import astore from ".././assets/appstore.webp";
import friends from ".././assets/friends.webp";

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
import Footer from "../Footer/Footer";

import profilePic from ".././assets/recent1.webp";

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
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import "./Index.css";
import { TbMinusVertical } from "react-icons/tb";

export default function AreaOverview2() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 12000,
      amt: 2290,
    },
  ];

  const rangeData = [
    {
      day: "Mon",
      temperature: [-1, 10],
    },
    {
      day: "Tue",
      temperature: [2, 15],
    },
    {
      day: "Wed",
      temperature: [3, 12],
    },
    {
      day: "05-04",
      temperature: [4, 12],
    },
    {
      day: "05-05",
      temperature: [12, 16],
    },
    {
      day: "05-06",
      temperature: [5, 16],
    },
    {
      day: "05-07",
      temperature: [3, 12],
    },
    {
      day: "05-08",
      temperature: [0, 8],
    },
    {
      day: "05-09",
      temperature: [-3, 5],
    },
  ];

  const Bardata = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  const Linedata = [
    {
      name: "Mon",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Tue",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Wed",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Thu",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Fri",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sat",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sun",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const triviaData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];

  const indexColor = 1;
  return (
    <Box>
      <Flex flexDirection="column">
        <Text color="white">Hi, Jen!</Text>
        <Text color="white">Welcome back!</Text>
      </Flex>

      <Flex height="auto" gap="5">
        <Flex flexDirection="column" w="70%" gap="5">
          <Flex gap="5">
            <Flex w="33.33%" bgColor="black" padding="5" borderRadius="10">
              <Flex w="50%" flexDirection="column">
                <Text fontSize="xs" color="white">
                  Trivia Battle
                </Text>
                <Text fontSize="2xl" color="white">
                  34756
                </Text>
                <Text fontSize="xs" color="white">
                  Users
                </Text>
              </Flex>
              <Flex w="50%" flexDirection="column">
                <Text textAlign="center" fontSize="xs" color="#42C340">
                  +32%
                </Text>
                <AreaChart
                  width={140}
                  height={50}
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </Flex>
            </Flex>
            <Flex w="33.33%" bgColor="black" padding="5" borderRadius="10">
              <Flex w="50%" flexDirection="column">
                <Text fontSize="xs" color="white">
                  Trivia Battle
                </Text>
                <Text fontSize="2xl" color="white">
                  34756
                </Text>
                <Text fontSize="xs" color="white">
                  Users
                </Text>
              </Flex>
              <Flex w="50%" flexDirection="column">
                <Text textAlign="center" fontSize="xs" color="#42C340">
                  +32%
                </Text>
                <AreaChart
                  width={140}
                  height={50}
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </Flex>
            </Flex>
            <Flex w="33.33%" bgColor="black" padding="5" borderRadius="10">
              <Flex w="50%" flexDirection="column">
                <Text fontSize="xs" color="white">
                  Trivia Battle
                </Text>
                <Text fontSize="2xl" color="white">
                  34756
                </Text>
                <Text fontSize="xs" color="white">
                  Users
                </Text>
              </Flex>
              <Flex w="50%" flexDirection="column">
                <Text textAlign="center" fontSize="xs" color="#42C340">
                  +32%
                </Text>
                <AreaChart
                  width={140}
                  height={50}
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </Flex>
            </Flex>
          </Flex>

          <Flex gap="5">
            <Flex
              w="50%"
              bgColor="black"
              borderRadius="10"
              flexDirection="column"
              paddingBottom="8vh"
            >
              <Flex px="5" py="5">
                <Text color="white" fontSize="lg">
                  Earning by games
                </Text>
              </Flex>
              {[...new Array(6)].map((item, index) => (
                <Flex
                  key={index}
                  py="2"
                  border="0.5px solid"
                  borderColor="#1C1A1E"
                  px="5"
                >
                  <Flex w="50%" gap="2">
                    <Image
                      src={profilePic}
                      height="50px"
                      width="50px"
                      borderRadius="10"
                    />
                    <Flex flexDirection="column">
                      <Text color="white">Trivia Battle</Text>
                      <Text fontSize="xs" color="#716B76">
                        WAR ROOM
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex w="50%" justifyContent="end" alignItems="center">
                    <Text textAlign="right" fontSize="xs" color="white">
                      $30,000
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
            <Flex
              w="50%"
              bgColor="black"
              padding="5"
              borderRadius="10"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Flex flexDirection="column">
                <Text color="white" fontSize="lg">
                  Earning by games
                </Text>
                <Text color="#716B76">
                  Maecenas sit amet urna ornare ligula faucibus consectetur nec
                  vitae augue.
                </Text>
              </Flex>

              <Flex
                flexDirection="column"
                bgColor="#0E0D0F"
                borderRadius="10"
                padding="5"
              >
                <Text fontSize="xs" color="white">
                  Mon 15 • Sun 21
                </Text>
                <Text fontSize="3xl" color="white">
                  $10,859
                </Text>
                <LineChart
                  width={350}
                  height={150}
                  data={Linedata}
                  margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid />
                  <XAxis tickLine={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="linear" dataKey="pv" stroke="#7E20C9" />
                </LineChart>
              </Flex>

              <Flex flexDirection="column">
                <Button bgColor="#7E20C9" color="white" fontSize="xs">
                  Analytics
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="30%" flexDirection="column" gap="5">
          <Flex
            color="white"
            bgColor="black"
            flexDirection="column"
            flexWrap="wrap"
            py="8"
            borderRadius="15px"
          >
            <Box px="7">Affliate Impressions</Box>
            <BarChart width={330} height={250} data={data}>
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#7E20C9" />
              <Bar dataKey="uv" fill="#FFFFFF" />
            </BarChart>
          </Flex>
          <Flex
            color="white"
            bgColor="black"
            flexDirection="column"
            py="5"
            borderRadius="15px"
          >
            <Box px="7" marginBottom="5">
              Transaction History
            </Box>
            {[...new Array(6)].map((item, index) => (
              <Flex
                key={index}
                className={(index + 1) % 2 == 0 ? "bg-transparent" : "bg-gray"}
                px="7"
                py="2"
              >
                <Flex w="50%">
                  <Image
                    src={profilePic}
                    height="50px"
                    width="50px"
                    borderRadius="50%"
                  />
                  <Flex
                    flexDirection="column"
                    // alignItems="center"
                    justifyContent="center"
                    px="3"
                  >
                    <Text fontSize="xs">Nolan Carder</Text>
                    <Text fontSize="xs">PN-1231</Text>
                  </Flex>
                </Flex>
                <Flex w="50%" justifyContent="end" alignItems="center">
                  <Text fontSize="xs">$1241</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
