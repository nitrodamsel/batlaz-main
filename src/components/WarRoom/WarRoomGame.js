import { useCallback, useState, React } from "react";

import placeholderImg from ".././assets/Image-placeholder.webp";
import sectionBG from ".././assets/wr-bg.webp";
import profilePic from ".././assets/recent1.webp";
import iconLight from ".././assets/icon-light.webp";
import HeroCup from ".././assets/Hero-cup.webp";
import clock from ".././assets/clock.webp";

import rec1 from ".././assets/rec1.webp";
import rec2 from ".././assets/rec2.webp";
import rec3 from ".././assets/rec3.webp";
import rec4 from ".././assets/rec4.webp";

import pic1 from ".././assets/gamepic1.webp";
import pic2 from ".././assets/gamepic2.webp";
import coin from ".././assets/coin.webp";
import arrowdot from ".././assets/arrowdot.webp";

import daily1 from ".././assets/daily1.webp";

import test1 from ".././assets/elephant.webp";
import test2 from ".././assets/giraffe.webp";
import test3 from ".././assets/hippo.webp";

import star from ".././assets/star1.webp";
import starline from ".././assets/star2.webp";

import Header from "../Header/Header";

import { AiFillFire } from "react-icons/ai";

import "./WarRoom.css";
import FooterGeneral from "../Footer/FooterGeneral";
import FooterTrans from "../Footer/FooterTrans";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Gameplay() {
  const [currentTab, setCurrentTab] = useState("home");
  const tabSwitcher = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <Box>
      <Box className="pb-36" h="auto" py="10" px="24" bgImage={sectionBG}>
        {currentTab === "home" && <Home tabSwitcher={tabSwitcher} />}
        {currentTab === "about" && <About tabSwitcher={tabSwitcher} />}
        {currentTab === "youwin" && <YouWin tabSwitcher={tabSwitcher} />}
      </Box>
    </Box>
  );
}

function Home({ tabSwitcher }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <Flex
      alignItems="center"
      height="auto"
      marginTop="17vh"
      gap="10"
      flexDirection="column"
      marginBottom="50vh"
      justifyContent="center"
    >
      <Text color="white" fontSize="5xl">
        War Room Lobby 1
      </Text>

      <Flex gap="2" w="100%" justifyContent="center">
        <Flex
          color="#716B76"
          bgColor="black"
          w="12%"
          padding="1.5"
          borderRadius="10px"
          gap="2"
        >
          <Box bgColor="#0E0D0F" borderRadius="15px" px="1.5" py="1">
            <Image src={coin} height="38px"></Image>
          </Box>
          <Stack spacing={0}>
            <Text color="#716B76" fontSize="xs">
              PRIZE MONEY
            </Text>
            <Text color="white">$100,000</Text>
          </Stack>
        </Flex>
        <Flex
          color="#716B76"
          bgColor="black"
          w="12%"
          padding="1.5"
          borderRadius="10px"
          gap="2"
        >
          <Box bgColor="#0E0D0F" borderRadius="15px" px="1.5" py="1">
            <Image src={arrowdot} height="38px"></Image>
          </Box>

          <Stack spacing={0}>
            <Text color="#716B76" fontSize="xs">
              WAGER
            </Text>
            <Text color="white">$100</Text>
          </Stack>
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="center" gap="20">
        <Box
          border="3px solid"
          borderColor="#7E20C9"
          px="2"
          py="1"
          borderRadius="50%"
        >
          <Image src={pic1} height="25vh"></Image>
        </Box>
        <Box
          border="3px solid"
          borderColor="#7E20C9"
          px="2"
          py="1"
          borderRadius="50%"
        >
          <Image src={pic1} height="25vh"></Image>
        </Box>
        <Box
          border="3px solid"
          borderColor="#716B76"
          padding="1.5"
          borderRadius="50%"
        >
          <Image src={pic2} height="25vh"></Image>
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent="center" gap="20">
        <Box
          border="3px solid"
          borderColor="#7E20C9"
          px="2"
          py="1"
          borderRadius="50%"
        >
          <Image src={pic1} height="25vh"></Image>
        </Box>
        <Box
          border="3px solid"
          borderColor="#7E20C9"
          px="2"
          py="1"
          borderRadius="50%"
        >
          <Image src={pic1} height="25vh"></Image>
        </Box>
        <Box
          border="3px solid"
          borderColor="#716B76"
          padding="1.5"
          borderRadius="50%"
        >
          <Image src={pic2} height="25vh"></Image>
        </Box>
      </Flex>
      <Flex>
        <Button
          bgColor="#7E20C9"
          color="white"
          fontSize="xs"
          px="10"
          onClick={() => {
            tabSwitcher("about");
          }}
        >
          Begin Battle
        </Button>
      </Flex>
    </Flex>
  );
}

function About({ tabSwitcher }) {
  return (
    <Flex
      alignItems="center"
      height="auto"
      marginTop="17vh"
      gap="10"
      flexDirection="column"
      marginBottom="50vh"
      justifyContent="center"
    >
      <Flex justifyContent="start" w="70%">
        <Text color="white" fontSize="5xl">
          Farm Animals Trivia Battle
        </Text>
      </Flex>

      <Flex
        gap="6"
        w="70%"
        justifyContent="center"
        bgColor="black"
        borderRadius="10px"
        py="5"
        flexDirection="column"
      >
        <Flex w="100%" padding="1.5" gap="2" justifyContent="center">
          <Text fontSize="lg" textAlign="center" color="white">
            1. What animal has the highest blood pressures?
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          gap="5"
          flexDirection="column"
        >
          <Box
            border="1px solid"
            borderColor="#7E20C9"
            borderRadius="10px"
            w="50%"
            alignItems="center"
            display="flex"
          >
            <Box w="50%" px="7">
              <Text color="white">Giraffe</Text>
            </Box>
            <Box bgImage={test1} w="50%" height="7vh"></Box>
          </Box>
          <Box
            border="1px solid"
            borderColor="#7E20C9"
            borderRadius="10px"
            w="50%"
            alignItems="center"
            display="flex"
          >
            <Box w="50%" px="7">
              <Text color="white">Giraffe</Text>
            </Box>
            <Box bgImage={test2} w="50%" height="7vh"></Box>
          </Box>
          <Box
            border="1px solid"
            borderColor="#7E20C9"
            borderRadius="10px"
            w="50%"
            alignItems="center"
            display="flex"
          >
            <Box w="50%" px="7">
              <Text color="white">Giraffe</Text>
            </Box>
            <Box bgImage={test3} w="50%" height="7vh"></Box>
          </Box>
        </Flex>

        <Flex justifyContent="center" gap="2">
          <Button
            bgColor="#1A181C"
            color="white"
            fontSize="xs"
            px="10"
            onClick={() => {
              tabSwitcher("home");
            }}
          >
            End Battle
          </Button>
          <Button
            bgColor="#7E20C9"
            color="white"
            fontSize="xs"
            px="10"
            onClick={() => {
              tabSwitcher("youwin");
            }}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
function YouWin({ tabSwitcher }) {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <Flex
      alignItems="center"
      height="auto"
      marginTop="17vh"
      gap="10"
      flexDirection="column"
      marginBottom="50vh"
      justifyContent="center"
    >
      <Flex justifyContent="start" w="70%">
        <Text color="white" fontSize="5xl">
          Farm Animals Trivia Battle
        </Text>
      </Flex>

      <Flex
        gap="6"
        w="70%"
        justifyContent="center"
        bgColor="black"
        borderRadius="10px"
        py="20"
        flexDirection="column"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          gap="5"
          flexDirection="column"
          bgColor="#7E20C9"
          padding="10"
          w="70%"
          alignSelf="center"
          borderRadius="10px"
          position="relative"
        >
          <Text
            fontSize="3xl"
            color="white"
            position="absolute"
            fontWeight="bold"
            top="-18%"
          >
            YOU WIN!
          </Text>
          <Text fontSize="xs" color="white" fontWeight="bold">
            You got 4 correct answers!
          </Text>
          <Flex gap="4">
            {" "}
            <Image src={star} w="35px" h="35px"></Image>
            <Image src={star} w="35px" h="35px"></Image>
            <Image src={star} w="35px" h="35px"></Image>
            <Image src={star} w="35px" h="35px"></Image>
            <Image src={starline} w="35px" h="35px"></Image>
          </Flex>
        </Flex>

        <Flex
          justifyContent="center"
          gap="3"
          flexDirection="column"
          alignItems="center"
        >
          <Button
            bgColor="#7E20C9"
            color="white"
            fontSize="xs"
            px="20"
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            Ok
          </Button>

          <Button bgColor="#1C1A1E" color="white" fontSize="xs" px="10">
            Share
          </Button>

          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent bgColor="#7E20C9" position="relative" py="30">
              <ModalHeader
                textAlign="center"
                color="white"
                position="absolute"
                w="100%"
                top="-17%"
                fontSize="2xl"
                fontWeight="bold"
              >
                HURRAY!
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text textAlign="center" fontSize="xs" color="white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra ut sem etiam vel, elit, nisi, at. Quam gravida
                  ultrices luctus arcu tellus nulla enim non.
                </Text>
              </ModalBody>
              <ModalFooter
                display="flex"
                justifyContent="center"
                gap="4"
                borderColor="#7E20C9"
              >
                <Button
                  onClick={onClose}
                  bgColor="#7E20C9"
                  border="2px solid"
                  borderColor="white"
                  fontSize="xs"
                  color="white"
                >
                  Continue Game
                </Button>
                <Button
                  onClick={onClose}
                  fontSize="xs"
                  bgColor="white"
                  color="#7E20C9"
                >
                  Advance To Next round
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </Flex>
  );
}
