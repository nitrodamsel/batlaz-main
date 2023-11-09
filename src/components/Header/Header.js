import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate, Link as ReachLink } from "react-router-dom";
import Modal from "react-modal";
import { extendTheme } from "@chakra-ui/react";
import TokenService from "../../services/token";
import { HiChevronRight } from "react-icons/hi";
import iuser from ".././assets/Avatar1.webp";
import ibell from ".././assets/bell.webp";
import iwallet from ".././assets/wallet.webp";
import imessage from ".././assets/comment.webp";
import timeicon from ".././assets/Time.svg";
import navimg from ".././assets/navimg1.webp";
import flag from ".././assets/us-flag.webp";
import "./Header.css";
import UpperClock, { LowerClock } from "./ClockHeader";

import {
  HamburgerIcon,
  CloseIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

import {
  Avatar,
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Link,
  Image,
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

import { useSelector, useDispatch } from "react-redux";
import token from "../../services/token";

export default function Header({ links = [] }) {
  const history = useNavigate();
  const {
    isOpen: popup1Open,
    onOpen: popup1OnOpen,
    onClose: popup1OnClose,
  } = useDisclosure();
  const {
    isOpen: popup2Open,
    onOpen: popup2OnOpen,
    onClose: popup2OnClose,
  } = useDisclosure();

  const {
    isOpen: popup3Open,
    onOpen: popup3OnOpen,
    onClose: popup3OnClose,
  } = useDisclosure();

  const {
    isOpen: popup4Open,
    onOpen: popup4OnOpen,
    onClose: popup4OnClose,
  } = useDisclosure();

  const {
    isOpen: popup5Open,
    onOpen: popup5OnOpen,
    onClose: popup5OnClose,
  } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  const [modalIsOpen, setIsOpen] = useState(false);

  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

  const handleSetDropdownValue = (value) => {
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };

  const closeAllPopup = () => {
    popup1OnClose();
    popup2OnClose();
    popup3OnClose();
    popup4OnClose();
  };

  const { userData } = useSelector((state) => state.user);

  return (
    <Box
      color="white"
      py={{ base: "0", md: "2" }}
      zIndex="9999999"
      w="100%"
      maxWidth="2240px"
      position={{ base: "relative", md: "fixed" }}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ base: "0", md: "0", lg: "0" }}
        paddingBottom={{ base: "0", md: "0", lg: "0" }}
        flexDirection={{ base: "row", md: "row", lg: "row" }}
        bg={{ base: "black", md: "transparent" }}
      >
        <Flex
          paddingStart={{ base: "5", md: "10" }}
          w={{ base: "30%", md: "65%" }}
          py="5"
        >
          <Link href="/" color="white" fontSize={{ base: "2xl", md: "3xl" }}>
            Batlaz.
          </Link>
        </Flex>

        <Flex
          bg={{ base: "transparent", md: "black" }}
          w={{ base: "90%", md: "100%", lg: "55%", xl: "40%" }}
          flexDirection="row"
          justifyContent={{ base: "end", md: "center" }}
          className="header-div"
          zIndex="99"
        >
          <Box
            w="45%"
            flexDirection="row"
            alignItems="center"
            paddingStart="8"
            py="5"
            borderRight="1px solid red"
            borderColor="#1C1A1E"
            display={{ base: "none", md: "flex" }}
          >
            <Image src={timeicon}></Image>
            <Flex flexDirection="column" paddingStart="2">
              <Flex color="white" fontSize="14px">
                <UpperClock fontSize={{ lg: "12px", xl: "16px" }} />
              </Flex>
              <Text
                className="font-time text-center"
                color="white"
                fontSize="12px"
              >
                <LowerClock fontSize={{ lg: "12px", xl: "16px" }} />
              </Text>
            </Flex>
          </Box>
          {TokenService.getLocalAccessToken() ? (
            <Box
              w={{ base: "100%", md: "55%" }}
              display="flex"
              alignItems="center"
              gap="2"
              paddingStart="10"
              py="5"
              bg={{ base: "transparent", md: "black" }}
              justifyContent={{ base: "end", md: "center" }}
              px={{ base: "5", md: "0" }}
            >
              <Link to="/wallet" as={ReachLink}>
                <Box
                  padding="2"
                  border="1px"
                  borderColor="white"
                  borderRadius="50%"
                  _hover={{ backgroundColor: "gray" }}
                  display={{ base: "none", md: "block" }}
                >
                  <img src={iwallet} className="h-4" alt="" />
                </Box>
              </Link>
              <Box
                padding="2"
                border="1px"
                borderColor="white"
                borderRadius="50%"
                _hover={{ backgroundColor: "gray" }}
                onClick={() => {
                  closeAllPopup();
                  popup4Open ? popup4OnClose() : popup4OnOpen();
                }}
                display={{ base: "none", md: "block" }}
              >
                {dropdownValue === "" ? (
                  <img
                    src={imessage}
                    className="h-icons"
                    padding="0"
                    margin="0"
                    alt=""
                  />
                ) : (
                  dropdownValue
                )}
              </Box>

              <Box
                padding="2"
                border="1px"
                borderColor="white"
                borderRadius="50%"
                _hover={{ backgroundColor: "gray" }}
                onClick={() => {
                  closeAllPopup();
                  popup3Open ? popup3OnClose() : popup3OnOpen();
                }}
                display={{ base: "none", md: "block" }}
              >
                <img
                  src={ibell}
                  className="h-icons"
                  padding="0"
                  margin="0"
                  alt=""
                />
              </Box>

              <Box
                padding="1"
                border="1px"
                borderColor="white"
                borderRadius="50%"
                hover={{ backgroundColor: "gray" }}
                onClick={() => {
                  closeAllPopup();
                  popup2Open ? popup2OnClose() : popup2OnOpen();
                }}
                cursor="pointer"
                display={{ base: "none", md: "block" }}
              >
                <Avatar
                  src={userData?.profileImage}
                  name={`${userData?.firstName} ${userData?.lastName}`}
                  size="sm"
                  className="h-7"
                  border="3px solid 7E20C9"
                  bgColor="#7E20C9"
                  color="white"
                />
                {/* <img src={iuser} className="h-7" alt="" /> */}
              </Box>

              <Box
                border="1px"
                borderColor="white"
                borderRadius="50%"
                _hover={{ backgroundColor: "gray" }}
              >
                <IconButton
                  size={"md"}
                  icon={
                    popup1Open ? (
                      <CloseIcon color="white" />
                    ) : (
                      <HamburgerIcon color="white" marginTop="-3px" />
                    )
                  }
                  borderRadius="50%"
                  bgColor="black"
                  focusBorderColor="none"
                  aria-label={"Open Menu"}
                  onClick={() => {
                    closeAllPopup();
                    popup1Open ? popup1OnClose() : popup1OnOpen();
                  }}
                  _focus={{ outline: "none" }}
                />
              </Box>
            </Box>
          ) : (
            <Box
              w={{ base: "85%", md: "55%" }}
              display="flex"
              alignItems="center"
              paddingStart="3"
              gap="2"
            >
              <Flex w="70%" gap="2">
                <Link
                  bgColor="#7E20C9"
                  color="white"
                  w="50%"
                  textAlign="center"
                  py="1.5"
                  borderRadius="15px"
                  fontSize="xs"
                  fontWeight="bold"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  bgColor="#190628"
                  color="white"
                  w="50%"
                  textAlign="center"
                  py="1.5"
                  borderRadius="15px"
                  fontSize="xs"
                  fontWeight="bold"
                  href="signup"
                  border="1px solid #7E20C9"
                >
                  Sign Up
                </Link>
              </Flex>
              <Box
                border="1px"
                borderColor="white"
                borderRadius="50%"
                _hover={{ backgroundColor: "gray" }}
              >
                <IconButton
                  size={"md"}
                  icon={
                    popup1Open ? (
                      <CloseIcon color="white" />
                    ) : (
                      <HamburgerIcon color="white" marginTop="-3px" />
                    )
                  }
                  borderRadius="50%"
                  bgColor="black"
                  focusBorderColor="none"
                  aria-label={"Open Menu"}
                  onClick={() => {
                    closeAllPopup();
                    popup1Open ? popup1OnClose() : popup1OnOpen();
                  }}
                  _focus={{ outline: "none" }}
                />
              </Box>
            </Box>
          )}
        </Flex>
      </Flex>

      <>
        {popup4Open ? (
          <Flex
            bg="black"
            borderBottomRightRadius="15"
            borderBottomLeftRadius="15"
            flexDirection="column"
            w="15%"
            height="auto"
            gap="2"
            justifyContent="space-between"
            px="3"
            paddingBottom="30px"
            position="absolute"
            left="85%"
            zIndex="99999999"
          >
            <Flex paddingTop="4" justifyContent="space-between">
              <Text fontSize="lg" fontWeight="bold">
                Send a message
              </Text>
            </Flex>
            <Stack paddingBottom="5" spacing={4}>
              <Stack>
                <Text fontSize="xs" color="#716B76">
                  Name
                </Text>
                <Input
                  placeholder="Type here"
                  _placeholder={{ color: "white", fontSize: "sm" }}
                  borderRadius="none"
                  borderBottom="0.5px solid"
                  borderColor="#181818"
                  borderTop="none"
                  borderLeft="none"
                  borderRight="none"
                  paddingBottom="2"
                />
              </Stack>
              <Stack>
                <Text fontSize="xs" color="#716B76">
                  Email
                </Text>
                <Input
                  placeholder="Type here"
                  _placeholder={{ color: "white", fontSize: "sm" }}
                  borderRadius="none"
                  borderBottom="0.5px solid"
                  borderColor="#181818"
                  borderTop="none"
                  borderLeft="none"
                  borderRight="none"
                  paddingBottom="2"
                />
              </Stack>
              <Stack spacing={10}>
                <Text fontSize="xs" color="#716B76">
                  Message
                </Text>
                <Input
                  placeholder="Type here"
                  _placeholder={{ color: "white", fontSize: "sm" }}
                  borderRadius="none"
                  borderBottom="0.5px solid"
                  borderColor="#181818"
                  borderTop="none"
                  borderLeft="none"
                  borderRight="none"
                  paddingBottom="2"
                />
              </Stack>
            </Stack>
            <Button
              bgColor="#7E20C9"
              py="7"
              fontSize="xs"
              borderRadius="10px"
              color="white"
              fontWeight="bold"
            >
              Send
            </Button>
          </Flex>
        ) : null}

        {popup3Open ? (
          <Flex
            bgColor="black"
            borderBottomRightRadius="15"
            borderBottomLeftRadius="15"
            flexDirection="column"
            w="24%"
            height="auto"
            gap="2"
            justifyContent="space-between"
            zIndex="99999999"
            position="absolute"
            left="75%"
          >
            <Flex
              paddingTop="4"
              px="3"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="lg" fontWeight="bold">
                Notification
              </Text>
              <Text fontSize="xs" color="#716B76">
                Mark all as read
              </Text>
            </Flex>
            <Tabs padding="3">
              <TabList border="none">
                <Tab
                  fontSize="xs"
                  _selected={{
                    color: "white",
                    borderBottom: "2x solid",
                    borderColor: "#7E20C9",
                    backgroundImage:
                      "linear-gradient(to top, #7d20c982, #7d20c903 90%);",
                  }}
                  w="20%"
                >
                  All
                </Tab>
                <Tab
                  fontSize="xs"
                  _selected={{
                    color: "white",
                    borderBottom: "2x solid",
                    borderColor: "#7E20C9",
                    backgroundImage:
                      "linear-gradient(to top, #7d20c982, #7d20c903 90%);",
                  }}
                  w="20%"
                >
                  Unread
                </Tab>
                <Tab
                  fontSize="xs"
                  _selected={{
                    color: "white",
                    borderBottom: "2x solid",
                    borderColor: "#7E20C9",
                    backgroundImage:
                      "linear-gradient(to top, #7d20c982, #7d20c903 90%);",
                  }}
                  w="20%"
                >
                  Archive
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Flex borderBottom="1px solid" borderColor="#1A181C" py="3">
                    <Flex w="20%">
                      <Image h="35px" w="35px" src={navimg}></Image>
                    </Flex>
                    <Flex
                      w="80%"
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                    >
                      <Text fontSize="sm">
                        Ana Raddon sent you a friend request
                      </Text>
                      <Text color="#BCBCBC" fontSize="xs">
                        2h ago
                      </Text>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Text fontSize="xs">two!</Text>
                </TabPanel>
                <TabPanel>
                  <Text fontSize="xs">three!</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        ) : null}

        {popup2Open ? (
          <Flex
            bgColor="black"
            borderBottomRightRadius="15"
            borderBottomLeftRadius="15"
            flexDirection="column"
            w="10%"
            height="auto"
            gap="2"
            justifyContent="space-between"
            position="absolute"
            left="90%"
          >
            <Stack my="6">
              <Link px="2" fontSize="xs" color="#716B76" href="/home">
                Home
              </Link>
              <Link
                px="2"
                fontSize="xs"
                color="#716B76"
                as={ReachLink}
                to="/profile"
              >
                Profile
              </Link>
              <Link
                px="2"
                fontSize="xs"
                color="#716B76"
                as={ReachLink}
                to="/trivia"
                cursor="pointer"
              >
                Trivia
              </Link>
              <Link
                px="2"
                fontSize="xs"
                color="#716B76"
                as={ReachLink}
                to="/warroom"
                cursor="pointer"
              >
                War Room
              </Link>
              <Link
                px="2"
                fontSize="xs"
                color="#716B76"
                as={ReachLink}
                to="/leaderboards"
                cursor="pointer"
              >
                Leadership Boards
              </Link>
              <Link px="2" fontSize="xs" color="#716B76">
                Friends List
              </Link>
              <Link
                px="2"
                fontSize="xs"
                color="#716B76"
                as={ReachLink}
                to="/wallet"
                cursor="pointer"
              >
                Wallet
              </Link>
              <Link
                to="/support"
                as={ReachLink}
                px="2"
                fontSize="xs"
                color="#716B76"
                cursor="pointer"
              >
                Support
              </Link>
              <Link px="2" fontSize="xs" color="#716B76">
                Settings
              </Link>
              <Link
                px="2"
                fontSize="xs"
                color="#716B76"
                display="flex"
                justifyContent="space-between"
              >
                Language{" "}
                <HStack spacing={2} marginRight="1vw">
                  <Image src={flag} h="20px"></Image>
                  <HiChevronRight></HiChevronRight>
                </HStack>
              </Link>
              <Link px="2" fontSize="xs" color="#716B76">
                Add Friends
              </Link>
            </Stack>
            <Stack>
              <Link href={TokenService.getLocalAccessToken() ? null : "/login"}>
                <Button
                  borderTopRightRadius="0"
                  borderTopLeftRadius="0"
                  borderBottomRightRadius="15"
                  borderBottomLeftRadius="15"
                  w="100%"
                  bgColor="#6a1ba9"
                  onClick={
                    TokenService.getLocalAccessToken()
                      ? () => setIsOpen(true)
                      : null
                  }
                  fontSize="xs"
                >
                  {TokenService.getLocalAccessToken() ? "Logout" : "Login"}
                </Button>
              </Link>
              {TokenService.getLocalAccessToken() ? (
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setIsOpen(false)}
                  className="newmodal"
                  marginTop="50vh"
                  w="100%"
                  bgColor="green"
                >
                  <Flex
                    justifyContent="center"
                    w="100%" 
                    alignItems="center"
                    flexDirection="column"
                    gap="5"
                    height="100vh"
                  >
                    <Flex
                      flexDirection="column"
                      bgColor="#7E20C9"
                      px="20"
                      py="5"
                      borderRadius="15px"
                      gap="6"
                    >
                      <Text textAlign="center" color="white" fontSize="2xl">
                        Are you sure you want to <br></br>logout?
                      </Text>
                      <Flex w="100%" justifyContent="center" gap="3">
                        <Button
                          onClick={() => {
                            setIsOpen(false);
                            TokenService.removeLocalAccessToken();
                            TokenService.removeLocalRefreshToken();
                            history("/login");
                          }}
                          className="close-btn"
                          zIndex="99999"
                          color="white"
                          w="100%"
                          bgColor="#6a1ba9"
                          px="20"
                          borderRadius="20px"
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => setIsOpen(false)}
                          bgColor="white"
                          className="close-btn"
                          zIndex="99999"
                          color="#7E20C9"
                          w="10%"
                          px="20"
                          borderRadius="20px"
                        >
                          No
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Modal>
              ) : null}
            </Stack>
          </Flex>
        ) : null}

        {popup1Open ? (
          <Flex
            bgColor="black"
            borderBottomRightRadius="15"
            borderBottomLeftRadius="15"
            flexDirection="column"
            w={{ base: "30%", md: "10%" }}
            height="auto"
            gap="2"
            justifyContent="space-between"
            left={{ base: "70%", md: "90%" }}
            position="absolute"
            zIndex="999999"
          >
            <Stack my="6">
              <Link px="2" fontSize="xs" color="#716B76" href="/home">
                Home
              </Link>
              <Link px="2" fontSize="xs" color="#716B76" href="/profile">
                Profile
              </Link>
              <Link px="2" fontSize="xs" color="#716B76">
                War Room
              </Link>
              <Link
                px="2"
                fontSize="xs"
                color="#716B76"
                href="/leaderboards"
                // as={ReachLink}
                // to="/leaderboards"
                cursor="pointer"
              >
                Leadership Boards
              </Link>
              <Link px="2" fontSize="xs" color="#716B76">
                Support
              </Link>

              <Link
                px="2"
                fontSize="xs"
                color="#716B76"
                display="flex"
                justifyContent="space-between"
              >
                Language{" "}
                <HStack spacing={2} marginRight="1vw">
                  <Image src={flag} h="20px"></Image>
                  <HiChevronRight></HiChevronRight>
                </HStack>
              </Link>
            </Stack>
            <Stack>
              <Link href={TokenService.getLocalAccessToken() ? null : "/login"}>
                <Button
                  borderTopRightRadius="0"
                  borderTopLeftRadius="0"
                  borderBottomRightRadius="15"
                  borderBottomLeftRadius="15"
                  w="100%"
                  bgColor="#6a1ba9"
                  onClick={
                    TokenService.getLocalAccessToken()
                      ? () => setIsOpen(true)
                      : null
                  }
                  fontSize="xs"
                >
                  {TokenService.getLocalAccessToken() ? "Logout" : "Login"}
                </Button>
              </Link>
              {TokenService.getLocalAccessToken() ? (
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setIsOpen(false)}
                  className="newmodal"
                  marginTop="50vh"
                  w="100%"
                  bgColor="green"
                >
                  <Flex
                    justifyContent="center"
                    w="100%"
                    alignItems="center"
                    flexDirection="column"
                    gap="5"
                    height="100vh"
                  >
                    <Flex
                      flexDirection="column"
                      bgColor="#7E20C9"
                      px="20"
                      py="5"
                      borderRadius="15px"
                      gap="6"
                      w={{ base: "370px", md: "450px" }}
                    >
                      <Text textAlign="center" color="white" fontSize={{ base:"lg", md:"2xl"}}>
                        Ares you sure you want to <br></br>logout?
                      </Text>
                      <Flex w="100%" justifyContent="center" gap="3">
                        <Button
                          onClick={() => {
                            setIsOpen(false);
                            TokenService.removeLocalAccessToken();
                            TokenService.removeLocalRefreshToken();
                            history("/login");
                          }}
                          className="close-btn"
                          zIndex="99999"
                          color="white"
                          w="100%"
                          bgColor="#6a1ba9"
                          px="20"
                          borderRadius="20px"
                        >
                          Yes
                        </Button>
                        <Button
                          onClick={() => setIsOpen(false)}
                          bgColor="white"
                          className="close-btn"
                          zIndex="99999"
                          color="#7E20C9"
                          w="10%"
                          px="20"
                          borderRadius="20px"
                        >
                          No
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Modal>
              ) : null}
            </Stack>
          </Flex>
        ) : null}
      </>
    </Box>
  );
}
