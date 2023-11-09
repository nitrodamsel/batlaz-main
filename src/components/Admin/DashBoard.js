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
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function DashBoard() {
  return (
    <Box>
      <Text>sdsd</Text>
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
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={140}
                height={50}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </ResponsiveContainer>
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
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={140}
                height={50}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </ResponsiveContainer>
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
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={140}
                height={50}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
