import { useState, React, useEffect, useRef, useMemo } from "react";

import { format } from "date-fns";

import PhoneInput from "react-phone-input-2";

import "./react-phone-number.css";

import { useSelector } from "react-redux";

import "react-circular-progressbar/dist/styles.css";

import profilePic from ".././assets/battlepic.webp";
import arrowleft from ".././assets/arrow-left.webp";
import iSave from ".././assets/iconSave.webp";
import iDiscard from ".././assets/iconDiscard.webp";
import camera from ".././assets/camera.webp";
import flag from ".././assets/us-flag.webp";
import edit from ".././assets/Edit.webp";
import { IoIosArrowUp } from "react-icons/io";

import Flag from "react-world-flags";

import "./Profile.css";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Container,
  Center,
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
  ModalCloseButton,
  ModalFooter,
  Collapse,
  FormControl,
  FormErrorMessage,
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
  TabList,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
  Span,
  Select,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Switch,
  ButtonSpinner,
  Wrap,
} from "@chakra-ui/react";

import AuthService from "../../services/user/auth";
import UserService from "../../services/user/user";
import CountryService from "../../services/user/country";
import EditProfileService from "../../services/user/editProfile";

const submitForm = (e) => {
  e.preventDefault();
};

export default function ProfileUser() {
  const [currentTab, setCurrentTab] = useState("home");

  const tabSwitcher = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <Box position="relative" w="100%">
      {currentTab === "home" && <Home tabSwitcher={tabSwitcher} />}
      {currentTab === "about" && <About tabSwitcher={tabSwitcher} />}
    </Box>
  );
}

function Home({ tabSwitcher }) {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const {
    isOpen: isOpenNew,
    onToggle: onToggleNew,
    onClose: onToggleClose,
  } = useDisclosure();

  const { userData, userStats } = useSelector((state) => state.user);
  const win_rate = ((userStats.wins / userStats.totalBattles) * 100).toFixed(2);
  const lose_rate = ((userStats.loss / userStats.totalBattles) * 100).toFixed(
    2
  );

  return (
    <Box w="100%">
      <Flex gap="5" flexDirection={{ base: "column", md:"row" }} w="100%">
        <Box
          w={{ base:"100%", md:"35%"}}
          display={{ base:"none", md:"flex"}}
          gap="5"
          flexDirection="column"
          zIndex="999"
        >
          <Box
            w="100%"
            gap="5"
            display="flex"
            flexDirection="column"
            bgColor="black"
            padding="5"
            borderRadius="15"
          >
            <Flex flexDirection="column">
              <Flex justifyContent="space-between">
                <Flex gap="6">
                  <Box
                    display="flex"
                    justifyContent="center"
                    position="relative"
                  >
                    <Avatar
                      src={userData?.profileImage}
                      bgColor="#7E20C9"
                      color="white"
                      type="lazy"
                      size="xl"
                      border="2px solid #7E20C9"
                      name={`${userData?.firstName} ${userData?.lastName}`}
                    />
                  </Box>
                  <Flex alignItems="start" flexDirection="column" gap="2">
                    <Text
                      color="white"
                      fontSize={{ lg: "md", xl: "xl" }}
                      fontWeight="bold"
                    >
                      {userData.firstName} {userData.lastName}
                    </Text>
                    <Text color="#716B76" fontSize="xs">
                      @{userData.username ?? "unknown"}
                    </Text>
                    <Flex gap="2">
                      <Flag
                        code={userData?.countryCode}
                        fallback={<span>Unknown</span>}
                      />
                      <Text fontSize="xs" color="#716B76">
                        {userData?.countryCode}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>

              <Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                  bgColor="#190628"
                  borderRadius="10px"
                  marginBottom="1vh"
                ></Flex>
              </Flex>
            </Flex>

            <Box gap="2" display="flex" flexDirection="column">
              <Stack spacing={1}>
                <Text color="#716B76" fontSize="xs">
                  Email Address
                </Text>

                <Flex alignItems="center" gap="5">
                  <Text color="white">{userData.email}</Text>
                  <Text color="#8B00FF" fontSize="xs">
                    Verify
                  </Text>
                </Flex>
              </Stack>
              <Stack spacing={1}>
                <Text color="#716B76" fontSize="xs">
                  Account Status
                </Text>
                <Flex alignItems="center" gap="5">
                  <Text color="#BC0000">Not Approveds</Text>
                </Flex>
              </Stack>
            </Box>

            <Flex
              alignItems="center"
              position="relative"
              w="100%"
              justifyContent="center"
              type="submit"
              value="Discard Changes"
              bgColor="#190628"
              _placeholder={{ color: "white" }}
              _focus={{ color: "white" }}
              zIndex="10"
              color="white"
              fontSize="xs"
              fontWeight="bold"
              borderRadius="50px"
              border="1px solid"
              borderColor="#7E20C9"
              cursor="pointer"
              py="5"
              onClick={() => {
                tabSwitcher("about");
              }}
            >
              <Flex
                position="absolute"
                alignItems="center"
                justifyContent="center"
                gap="3"
              >
                <Image
                  src={edit}
                  zIndex="999"
                  height="16px"
                  w="16px"
                  fontSize="xs"
                  fontWeight="500"
                ></Image>
                <Text>Edit Profile</Text>
              </Flex>
            </Flex>
          </Box>

          <Security></Security>
        </Box>

        <Box w="65%" display={{base: "none", md:"block"}}>
          <Box w="100%" display="flex" flexDirection="column" borderRadius="15">
            <Box bgColor="black" borderRadius="15" marginBottom="1rem">
              <Text color="white" py="4" px="5">
                Statistics
              </Text>
              <Flex
                flexDirection="column"
                borderTop="1px solid"
                borderBottom="1px solid"
                borderColor="#1C1A1E"
                py="5"
              >
                <Flex flexDirection="column" px="5">
                  <Flex w="100%" px="5">
                    <Flex w="40%"></Flex>
                    <Flex
                      w="60%"
                      justifyContent="center"
                      alignItems="center"
                      gap="4"
                    >
                      <Flex alignItems="center" justifyContent="center">
                        <Text color="#716B76" fontSize="xs">
                          WINS
                        </Text>
                        <Text
                          className="text-[#42C340] font-bold"
                          fontSize="lg"
                        >
                          &nbsp;&nbsp;
                          {isNaN(parseInt(win_rate)) ? "0%" : `${win_rate}%`}
                        </Text>
                      </Flex>

                      <Flex alignItems="center">
                        <Text color="#716B76" fontSize="xs">
                          LOSS
                        </Text>
                        <Text
                          className="text-[#BC0000] font-bold"
                          fontSize="lg"
                        >
                          &nbsp;&nbsp;
                          {isNaN(parseInt(lose_rate)) ? "0%" : `${lose_rate}%`}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>

                  <Box display="flex" justifyContent="center" gap="5" w="100%">
                    <Flex w="100%" bgColor="#1A181C" borderRadius="20px">
                      <Box
                        height="20px"
                        w={`${win_rate}%`}
                        bgColor="#7E20C9"
                        borderLeftRadius="20px"
                      ></Box>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>

              <Flex
                borderTop="1px solid"
                borderBottom="1px solid"
                borderColor="#1C1A1E"
                py="5"
                px="5"
              >
                <Flex flexDirection="column" gap="1" w="33.33%">
                  <Text color="#716B76">Total Battles</Text>
                  <Text color="white" fontWeight="600" fontSize="lg">
                    {userStats.totalBattles ?? 0}
                  </Text>
                </Flex>
                <Flex flexDirection="column" gap="1" w="33.33%">
                  <Text color="#716B76">Total XP Points</Text>
                  <Text color="white" fontWeight="600" fontSize="lg">
                    {userStats.totalExperience ?? 0}
                  </Text>
                </Flex>
                <Flex flexDirection="column" gap="1" w="33.33%">
                  <Text color="#716B76">Total Prize Winnings</Text>
                  <Text color="white" fontWeight="600" fontSize="lg">
                    ${userStats.totalPrizeWinnings ?? 0}
                  </Text>
                </Flex>
              </Flex>

              <Flex borderRadius="20px" px="5" py="5">
                <Flex flexDirection="column" gap="1" w="33.33%">
                  <Text color="#716B76">Grandwinner</Text>
                  <Text color="white" fontWeight="600" fontSize="lg">
                    {userStats.grandWinner ?? 0}
                  </Text>
                </Flex>
                <Flex flexDirection="column" gap="1" w="33.33%">
                  <Text color="#716B76">Level</Text>
                  <Text color="white" fontWeight="600" fontSize="lg">
                    {userStats.level ?? 0}
                  </Text>
                </Flex>
              </Flex>
            </Box>

            <Box
              bgColor="black"
              borderRadius="15"
              marginBottom="3vh"
              paddingBottom="3vh"
              height="100%"
            >
              <Text color="white" my="4" mx="4">
                Friend List
              </Text>
              <Flex py="3" px="5">
                <Box w="50%">
                  <Text color="#716B76">Username</Text>
                </Box>
                <Box w="25%">
                  <Text color="#716B76">Country</Text>
                </Box>
                <Box w="25%"></Box>
              </Flex>
              {[...new Array(5)].map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="center"
                  padding="2"
                  className={(index + 1) % 2 == 0 ? "bg-black" : "bg-gray"}
                  alignItems="center"
                >
                  <Flex
                    alignItems="center"
                    w="50%"
                    color="white"
                    py="1"
                    px="3"
                    gap="3"
                  >
                    <Image
                      src={profilePic}
                      height="33px"
                      borderRadius="50%"
                      border="1px solid"
                      borderColor="#7C20C6"
                    />
                    <Text fontSize="xs">User101</Text>
                  </Flex>
                  <Flex w="25%" alignItems="center" gap="3">
                    <Text align="left" color="white" fontSize="xs">
                      USA
                    </Text>
                    <Image w="22px" src={flag}></Image>
                  </Flex>
                  <Box w="25%">
                    <Button
                      py="1"
                      px={{ lg: "5", xl: "8" }}
                      fontSize="xs"
                      color="white"
                      bgColor="#7E20C9"
                      height="3.5vh"
                      borderRadius="15px"
                    >
                      View Profile
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box display={{ base:"block", md:"none"}} px="0">
            <Center>
            <Tabs display="flex" flexDirection="column" px="0">
              
              <TabPanels px="0">
                <TabPanel px="0">
                  <Box
                      w="100%"
                      gap="5"
                      display="flex"
                      flexDirection="column"
                      bgColor="black"
                      padding="5"
                      borderRadius="15"
                      mb="5"
                    >
                      <Flex flexDirection="column">
                        <Flex justifyContent="space-between">
                          <Flex gap="6">
                            <Box
                              display="flex"
                              justifyContent="center"
                              position="relative"
                            >
                              <Avatar
                                src={userData?.profileImage}
                                bgColor="#7E20C9"
                                color="white"
                                type="lazy"
                                size="xl"
                                border="2px solid #7E20C9"
                                name={`${userData?.firstName} ${userData?.lastName}`}
                              />
                            </Box>
                            <Flex alignItems="start" flexDirection="column" gap="2">
                              <Text
                                color="white"
                                fontSize={{ lg: "md", xl: "xl" }}
                                fontWeight="bold"
                              >
                                {userData.firstName} {userData.lastName}
                              </Text>
                              <Text color="#716B76" fontSize="xs">
                                @{userData.username}
                              </Text>
                              <Flex gap="2">
                                <Flag
                                  code={userData?.countryCode}
                                  fallback={<span>Unknown</span>}
                                />
                                <Text fontSize="xs" color="#716B76">
                                  {userData?.countryCode}
                                </Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>

                        <Flex>
                          <Flex
                            justifyContent="center"
                            alignItems="center"
                            w="100%"
                            bgColor="#190628"
                            borderRadius="10px"
                            marginBottom="1vh"
                          ></Flex>
                        </Flex>
                      </Flex>

                      <Box gap="2" display="flex" flexDirection="column">
                        <Stack spacing={1}>
                          <Text color="#716B76" fontSize="xs">
                            Email Address
                          </Text>

                          <Flex alignItems="center" gap="5">
                            <Text color="white">{userData.email}</Text>
                            <Text color="#8B00FF" fontSize="xs">
                              Verify
                            </Text>
                          </Flex>
                        </Stack>
                        <Stack spacing={1}>
                          <Text color="#716B76" fontSize="xs">
                            Account Status
                          </Text>
                          <Flex alignItems="center" gap="5">
                            <Text color="#BC0000">Not Approveds</Text>
                          </Flex>
                        </Stack>
                      </Box>

                      <Flex
                        alignItems="center"
                        position="relative"
                        w="100%"
                        justifyContent="center"
                        type="submit"
                        value="Discard Changes"
                        bgColor="#190628"
                        _placeholder={{ color: "white" }}
                        _focus={{ color: "white" }}
                        zIndex="10"
                        color="white"
                        fontSize="xs"
                        fontWeight="bold"
                        borderRadius="50px"
                        border="1px solid"
                        borderColor="#7E20C9"
                        cursor="pointer"
                        py="5"
                        onClick={() => {
                          tabSwitcher("about");
                        }}
                      >
                        <Flex
                          position="absolute"
                          alignItems="center"
                          justifyContent="center"
                          gap="3"
                        >
                          <Image
                            src={edit}
                            zIndex="999"
                            height="16px"
                            w="16px"
                            fontSize="xs"
                            fontWeight="500"
                          ></Image>
                          <Text>Edit Profile</Text>
                        </Flex>
                      </Flex>
                  </Box>
                  <Security></Security>
                </TabPanel>
                <TabPanel>
                  <Box w="100%">
                      <Box w="100%" display="flex" flexDirection="column" borderRadius="15">
                        <Box bgColor="black" borderRadius="15" marginBottom="1rem">
                          <Text color="white" py="4" px="5">
                            Statistics
                          </Text>
                          <Flex
                            flexDirection="column"
                            borderTop="1px solid"
                            borderBottom="1px solid"
                            borderColor="#1C1A1E"
                            py="5"
                          >
                            <Flex flexDirection="column" px="5">
                              <Flex w="100%" px="5">
                                <Flex w="40%"></Flex>
                                <Flex
                                  w="60%"
                                  justifyContent="center"
                                  alignItems="center"
                                  gap="4"
                                >
                                  <Flex alignItems="center" justifyContent="center">
                                    <Text color="#716B76" fontSize="xs">
                                      WINS
                                    </Text>
                                    <Text
                                      className="text-[#42C340] font-bold"
                                      fontSize="lg"
                                    >
                                      &nbsp;&nbsp;
                                      {`${win_rate}%`}
                                    </Text>
                                  </Flex>

                                  <Flex alignItems="center">
                                    <Text color="#716B76" fontSize="xs">
                                      LOSS
                                    </Text>
                                    <Text
                                      className="text-[#BC0000] font-bold"
                                      fontSize="lg"
                                    >
                                      &nbsp;&nbsp;{`${lose_rate}%`}
                                    </Text>
                                  </Flex>
                                </Flex>
                              </Flex>

                              <Box display="flex" justifyContent="center" gap="5" w="100%">
                                <Flex w="100%" bgColor="#1A181C" borderRadius="20px">
                                  <Box
                                    height="20px"
                                    w={`${win_rate}%`}
                                    bgColor="#7E20C9"
                                    borderLeftRadius="20px"
                                  ></Box>
                                </Flex>
                              </Box>
                            </Flex>
                          </Flex>

                          <Flex
                            borderTop="1px solid"
                            borderBottom="1px solid"
                            borderColor="#1C1A1E"
                            py="5"
                            px="5"
                          >
                            <Flex flexDirection="column" gap="1" w="33.33%">
                              <Text color="#716B76">Total Battles</Text>
                              <Text color="white" fontWeight="600" fontSize="lg">
                                {userStats.totalBattles}
                              </Text>
                            </Flex>
                            <Flex flexDirection="column" gap="1" w="33.33%">
                              <Text color="#716B76">Total XP Points</Text>
                              <Text color="white" fontWeight="600" fontSize="lg">
                                {userStats.totalExperience}
                              </Text>
                            </Flex>
                            <Flex flexDirection="column" gap="1" w="33.33%">
                              <Text color="#716B76">Total Prize Winnings</Text>
                              <Text color="white" fontWeight="600" fontSize="lg">
                                ${userStats.totalPrizeWinnings}
                              </Text>
                            </Flex>
                          </Flex>

                          <Flex borderRadius="20px" px="5" py="5">
                            <Flex flexDirection="column" gap="1" w="33.33%">
                              <Text color="#716B76">Grandwinner</Text>
                              <Text color="white" fontWeight="600" fontSize="lg">
                                {userStats.grandWinner}
                              </Text>
                            </Flex>
                            <Flex flexDirection="column" gap="1" w="33.33%">
                              <Text color="#716B76">Level</Text>
                              <Text color="white" fontWeight="600" fontSize="lg">
                                {userStats.level}
                              </Text>
                            </Flex>
                          </Flex>
                        </Box>

                        <Box
                          bgColor="black"
                          borderRadius="15"
                          marginBottom="3vh"
                          paddingBottom="3vh"
                          height="100%"
                        >
                          <Text color="white" my="4" mx="4">
                            Friend List
                          </Text>
                          <Flex py="3" px="5">
                            <Box w="50%">
                              <Text color="#716B76">Username</Text>
                            </Box>
                            <Box w="25%">
                              <Text color="#716B76">Country</Text>
                            </Box>
                            <Box w="25%"></Box>
                          </Flex>
                          {[...new Array(5)].map((item, index) => (
                            <Box
                              key={index}
                              display="flex"
                              justifyContent="center"
                              padding="2"
                              className={(index + 1) % 2 == 0 ? "bg-black" : "bg-gray"}
                              alignItems="center"
                            >
                              <Flex
                                alignItems="center"
                                w="50%"
                                color="white"
                                py="1"
                                px="3"
                                gap="3"
                              >
                                <Image
                                  src={profilePic}
                                  height="33px"
                                  borderRadius="50%"
                                  border="1px solid"
                                  borderColor="#7C20C6"
                                />
                                <Text fontSize="xs">User101</Text>
                              </Flex>
                              <Flex w="25%" alignItems="center" gap="3">
                                <Text align="left" color="white" fontSize="xs">
                                  USA
                                </Text>
                                <Image w="22px" src={flag}></Image>
                              </Flex>
                              <Box w="25%">
                                <Button
                                  py="1"
                                  px={{ lg: "5", xl: "8" }}
                                  fontSize="xs"
                                  color="white"
                                  bgColor="#7E20C9"
                                  height="3.5vh"
                                  borderRadius="15px"
                                >
                                  View Profile
                                </Button>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                  </Box>  
                </TabPanel>
                <TabPanel>
                  <p></p>
                </TabPanel>
              </TabPanels>

              <TabList border="none"  disabled="flex" justifyContent="center">
                <Tab >
                  <ul >
                    <li className="test"></li>
                  </ul>
                </Tab>
                <Tab>
                  <ul >
                    <li className="test"></li>
                  </ul>
                </Tab>
                <Tab>
                  <ul >
                    <li className="test"></li>
                  </ul>
                </Tab>
              </TabList>

            </Tabs>
            </Center>
        </Box>
      </Flex>
    </Box>
  );
}

function Security() {
  const [currentTabPassword, setCurrentTabPassword] = useState("password");
  const tabSwitcherPassword = (tabName) => {
    setCurrentTabPassword(tabName);
    // console.log(tabName);
  };
  return (
    <Box
      w="100%"
      gap="5"
      display="flex"
      flexDirection="column"
      bgColor="black"
      py="5"
      borderRadius="15"
    >
      {currentTabPassword === "password" && (
        <Password tabSwitcherPassword={tabSwitcherPassword} />
      )}
      {currentTabPassword === "changePassword" && (
        <ChangePassword tabSwitcherPassword={tabSwitcherPassword} />
      )}
    </Box>
  );
}

function Password({ tabSwitcherPassword }) {
  return (
    <Box bgColor="" height="auto">
      <Flex borderBottom="1px solid" borderColor="#1C1A1E">
        <Text color="white" fontWeight="bold" fontSize="lg" mx="5">
          Security and Logins
        </Text>
      </Flex>
      <Flex flexDirection="column" gap="3">
        <Stack mx="5" my="5">
          <Text color="white" fontSize="sm">
            Change your current password
          </Text>
          <Text color="#716B76" fontSize="xs">
            Maecenas sit amet urna ornare ligula faucibus consectetur nec vitae
            augue. Quisque dolor leo.
          </Text>
        </Stack>

        <Stack mx="5">
          <Input
            className="btn-submit"
            type="submit"
            value="Change Password"
            bgColor="#7E20C9"
            _placeholder={{ color: "white" }}
            fontWeight="500"
            _focus={{ color: "white" }}
            zIndex="10"
            w="100%"
            color="white"
            fontSize="sm"
            onClick={() => {
              tabSwitcherPassword("changePassword");
            }}
            border="1px solid"
            borderColor="#7E20C9"
            borderRadius="35px"
          />
        </Stack>
      </Flex>
    </Box>
  );
}

function ChangePassword({ tabSwitcherPassword }) {
  const [buttonLoading, setButtonLoading] = useState(false);
  const newPassPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const [passwordChangeError, setPasswordChangeError] = useState(false);
  const [newPassword, setNewPassword] = useState({
    existingPassword: "",
    newPassword: "",
  });

  function handlePasswordChange(e) {
    const { value, name } = e.target;

    setNewPassword((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const handleClick = async () => {
    try {
      setButtonLoading(true);
      await AuthService.changePassword(newPassword);
      setPasswordChangeError(false);
      window.location.reload();
    } catch (err) {
      console.log(err.status);
      console.log(err.message);
      setPasswordChangeError(true);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <Box bgColor="" height="auto">
      <Flex borderBottom="1px solid" borderColor="#1C1A1E">
        <Text color="white" fontWeight="bold" fontSize="lg" mx="5">
          Security and Login
        </Text>
      </Flex>

      <Flex flexDirection="column" gap="3">
        <Stack mx="5" my="5">
          <Text color="white" fontSize="sm">
            Change your current password
          </Text>
          <Text color="#716B76" fontSize="xs">
            Maecenas sit amet urna ornare ligula faucibus consectetur nec vitae
            augue. Quisque dolor leo.
          </Text>
        </Stack>
      </Flex>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormControl isInvalid={passwordChangeError}>
          <Stack spacing={3} mx="5" marginBottom="5">
            <Input
              color="#716B76"
              border="1px solid"
              borderColor="#716B76"
              placeholder="Existing Password"
              _placeholder={{ color: "inherit", fontSize: "xs" }}
              onChange={handlePasswordChange}
              name="existingPassword"
              value={newPassword.existingPassword}
              autoComplete="off"
            />
            <Input
              color="#716B76"
              border="1px solid"
              borderColor="#716B76"
              placeholder="New Password"
              _placeholder={{ color: "inherit", fontSize: "xs" }}
              onChange={handlePasswordChange}
              name="newPassword"
              value={newPassword.newPassword}
              autoComplete="off"
            />
          </Stack>
          <Stack
            px="5"
            borderTop="1px solid"
            borderColor="#1C1A1E"
            paddingTop="4"
            paddingBottom="2"
          >
            <Button
              className="btn-submit"
              type="submit"
              value="Update"
              bgColor="#7E20C9"
              _placeholder={{ color: "white" }}
              fontWeight="500"
              _focus={{ color: "white" }}
              zIndex="10"
              w="100%"
              color="white"
              fontSize="sm"
              onClick={handleClick}
              border="1px solid"
              borderColor="#7E20C9"
              borderRadius="35px"
              isLoading={buttonLoading ? true : false}
            >
              Update
            </Button>
            <Button
              className="btn-submit"
              border="none"
              // _placeholder={{ color: "white" }}
              fontWeight="500"
              // _focus={{ color: "white" }}
              zIndex="10"
              w="100%"
              color="white"
              fontSize="sm"
              onClick={() => {
                tabSwitcherPassword("password");
              }}
              borderRadius="35px"
              backgroundColor="black"
              _hover={{
                border: "1px solid",
                // borderColor: "#7E20C9",
              }}
            >
              Cancel
            </Button>
            {passwordChangeError && (
              <FormErrorMessage>Password is Incorrect</FormErrorMessage>
            )}
          </Stack>
        </FormControl>
      </form>
    </Box>
  );
}

function About({ tabSwitcher }) {
  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newProfileImage, setProfileImage] = useState(null);
  const imageUploadRef = useRef();

  const {
    isOpen: popup1Open,
    onOpen: popup1OnOpen,
    onClose: popup1OnClose,
  } = useDisclosure();
  const breakpoints = {
    sm: "20em",
    md: "60em",
    lg: "90em",
  };
  const {
    isOpen: isOpenNew,
    onToggle: onToggleNew,
    onClose: onToggleClose,
  } = useDisclosure();

  const [firstNameSelected, setFirstNameSelected] = useState(false);
  const [lastNameSelected, setlastNameSelected] = useState(false);
  const [emailSelected, setemailSelected] = useState(false);
  const [countrySelected, setcountrySelected] = useState(false);
  const [phoneSelected, setphoneSelected] = useState(false);
  const [birthSelected, setbirthSelected] = useState(false);
  const [unameSelected, setunameSelected] = useState(false);
  const [add1Selected, setadd1Selected] = useState(false);
  const [add2Selected, setadd2Selected] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    countryCode: "",
    phoneNumber: "",
    dateOfBirth: "",
    addressLine1: "",
    addressLine2: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchCountry = await CountryService.getData();
        const fetchUserProfile = await UserService.getData();
        const [country, userData] = await Promise.all([
          fetchCountry,
          fetchUserProfile,
        ]);
        setCountryCodes(country.data);
        setUserInfo(userData.data);
      } catch (error) {
        console.log(error);
      }
    }

    (async () => {
      await fetchData();
    })();
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = async () => {
    try {
      setIsLoading(true);

      const fetchPutProfile = await EditProfileService.editProfileData(
        userInfo
      );

      const fetchPutProfileImage = await EditProfileService.editProfileImage(
        newProfileImage
      );
      // const fetch = [fetchPutProfile];

      // if (newProfileImage !== null) fetch.push(fetchPutProfileImage);
      // console.log(fetch);
      // console.log(userInfo);

      Promise.all([fetchPutProfile, fetchPutProfileImage]);

      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed");
    } finally {
      setIsLoading(false);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setProfileImage(base64);
  };

  return (
    <Flex gap="2" bgColor="black" borderRadius="20px" flexDirection="column">
      <Flex alignItems="center" gap="2" marginLeft="1vw">
        <Flex
          alignItems="center"
          gap="2"
          onClick={() => {
            tabSwitcher("home");
          }}
          cursor="pointer"
        >
          <Image src={arrowleft} height="17px" w="18px"></Image>
          <Text color="white">Edit Profile</Text>
        </Flex>

        <Modal isOpen={popup1Open} onClose={popup1OnClose}>
          <ModalOverlay />
          <ModalContent bgColor="black" padding="5">
            <ModalHeader>
              <Text align="center" color="white">
                Discard Changes?
              </Text>
            </ModalHeader>

            <ModalBody>
              <Text align="center" color="white">
                Changes will be unsaved. Do you want to proceed?
              </Text>
            </ModalBody>

            <ModalFooter
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                colorScheme="blue"
                mr={3}
                onClick={popup1OnClose}
                bgColor="white"
                color="#7E20C9"
                borderRadius="20px"
              >
                Cancel
              </Button>
              <Button
                variant="ghost"
                bgColor="#7E20C9"
                color="white"
                borderRadius="20px"
                onClick={() => {
                  tabSwitcher("home");
                }}
              >
                Discard
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>

      <Flex borderTop="1px solid" borderColor="#1C1A1E">
        <Box w="35%" borderRight="1px solid" borderColor="#1C1A1E">
          <Box
            w="100%"
            gap="10"
            display="flex"
            flexDirection="column"
            bgColor="black"
            padding="5"
            borderRadius="15"
          >
            <Box height="100%">
              <Box display="flex" justifyContent="center" position="relative">
                <Avatar
                  mt="2rem"
                  src={newProfileImage ?? userInfo?.profileImage}
                  size="2xl"
                  name={`${userInfo?.firstName} ${userInfo?.lastName}`}
                  border="2px solid #7E20C9"
                  bgColor="#7E20C9"
                  color="white"
                  type="lazy"
                />

                <Flex
                  padding="3px"
                  h="2.5rem"
                  w="2.5rem"
                  bgColor="#7E20C9"
                  borderRadius="50%"
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  top="70%"
                  left="58%"
                  border="2px solid"
                  borderColor="white"
                  onClick={onToggleNew}
                  cursor="pointer"
                >
                  <Image src={camera} w="24px"></Image>
                </Flex>
              </Box>
            </Box>

            <Flex
              justifyContent="center"
              alignItems="center"
              w="100%"
              bgColor="#190628"
              borderRadius="10px"
              marginBottom="4vh"
            >
              <Collapse in={isOpenNew} animateOpacity>
                <Flex
                  w="100%"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                  gap="2"
                >
                  <Text color="#716B76" fontSize="10px" py="2">
                    jpg. , and .webp only
                  </Text>

                  <form
                    className="flex flex-col justify-center items-center gap-3"
                    onSubmit={submitForm}
                    id="testForm"
                  >
                    <Flex justifyContent="center">
                      <Flex justifyContent="center">
                        <input
                          type="file"
                          name="test"
                          id="testFile"
                          accept=".jpg, .jpeg"
                          onChange={handleImageChange}
                          display="none"
                          ref={imageUploadRef}
                          max-size="2000"
                        />
                        <Button
                          bgColor="#7E20C9"
                          color="white"
                          fontSize="xs"
                          borderRadius="20px"
                          px="20"
                          id="editPhoto"
                          w="90%"
                          onClick={() => imageUploadRef.current.click()}
                        >
                          Edit Photo
                        </Button>
                      </Flex>
                    </Flex>
                  </form>
                </Flex>
                <Center my="2">
                  <IoIosArrowUp
                    onClick={onToggleClose}
                    color="white"
                    cursor="pointer"
                  ></IoIosArrowUp>
                </Center>
              </Collapse>
            </Flex>

            <Box
              display="flex"
              gap="4"
              borderRadius="35px"
              flexDirection="column"
            >
              <Button
                alignItems="center"
                position="relative"
                w="100%"
                justifyContent="center"
                type="submit"
                value="Discard Changes"
                bgColor="#7E20C9"
                _placeholder={{ color: "white" }}
                _focus={{ color: "white" }}
                zIndex="10"
                color="white"
                fontSize="xs"
                fontWeight="bold"
                borderRadius="50px"
                onClick={handleClick}
                cursor="pointer"
                py="5"
                isLoading={isLoading ? true : false}
              >
                {/* <Flex
                  position="absolute"
                  alignItems="center"
                  justifyContent="center"
                  gap="3"
                > */}
                <Image
                  src={iSave}
                  zIndex="999"
                  height="16px"
                  w="16px"
                  fontSize="xs"
                  fontWeight="500"
                ></Image>
                Save Changes
                {/* </Flex> */}
              </Button>

              <Flex
                alignItems="center"
                position="relative"
                w="100%"
                justifyContent="center"
                type="submit"
                value="Discard Changes"
                bgColor="#190628"
                _placeholder={{ color: "white" }}
                _focus={{ color: "white" }}
                zIndex="10"
                color="white"
                fontSize="xs"
                fontWeight="bold"
                borderRadius="50px"
                border="1px solid"
                borderColor="#7E20C9"
                onClick={popup1OnOpen}
                cursor="pointer"
                py="5"
              >
                <Flex
                  position="absolute"
                  alignItems="center"
                  justifyContent="center"
                  gap="3"
                >
                  <Image
                    src={iDiscard}
                    zIndex="999"
                    height="16px"
                    w="16px"
                    fontSize="xs"
                    fontWeight="500"
                  ></Image>
                  <Text>Discard Changes</Text>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>

        <Box
          bgColor="black"
          w="65%"
          borderRadius="15px"
          height="100%"
          paddingBottom="5"
        >
          <Box w="100%" display="flex" flexDirection="column" borderRadius="15">
            <Flex flexDirection="column" padding="20px 0px 0px 0px" gap="5">
              <Text color="white" fontWeight="bold" mx="30">
                Profile information
              </Text>

              <Stack spacing={3} w="70%" mx="30" marginBottom="3vh">
                <HStack
                  bgColor="black"
                  w="100%"
                  className="outDiv"
                  borderRadius="6.5px"
                  border="2px solid"
                  borderColor={firstNameSelected ? "#7E20C9" : "#1C1A1E"}
                  _hover={{ borderColor: "#7E20C9" }}
                >
                  <Text
                    w="30%"
                    paddingLeft="1vw"
                    color="#716B76"
                    fontSize={{ lg: "12px", xl: "16px" }}
                  >
                    First Name
                  </Text>

                  <Input
                    className=""
                    type="text"
                    w="70%"
                    focusBorderColor="none"
                    border="none"
                    _placeholder={{ color: "#716B76", marginLeft: "10px" }}
                    _focus={{
                      color: "white",
                    }}
                    color="#716B76"
                    height="6.5vh"
                    autoComplete="off"
                    name="firstName"
                    defaultValue={userInfo?.firstName}
                    onChange={handleChange}
                  />
                </HStack>

                <HStack
                  bgColor="black"
                  w="100%"
                  className="outDiv"
                  borderRadius="6.5px"
                  border="2px solid"
                  borderColor={lastNameSelected ? "#7E20C9" : "#1C1A1E"}
                  _hover={{ borderColor: "#7E20C9" }}
                >
                  <Text
                    w="30%"
                    paddingLeft="1vw"
                    color="#716B76"
                    fontSize={{ lg: "12px", xl: "16px" }}
                  >
                    Last Name
                  </Text>

                  <Input
                    className=""
                    type="text"
                    w="70%"
                    bgColor="black"
                    focusBorderColor="none"
                    border="none"
                    _placeholder={{ color: "#716B76", marginLeft: "10px" }}
                    _focus={{
                      color: "white",
                    }}
                    color="#716B76"
                    height="6.5vh"
                    autoComplete="off"
                    name="lastName"
                    defaultValue={userInfo?.lastName}
                    onChange={handleChange}
                  />
                </HStack>

                <HStack
                  bgColor="black"
                  w="100%"
                  className="outDiv"
                  borderRadius="6.5px"
                  border="2px solid"
                  borderColor={emailSelected ? "#7E20C9" : "#1C1A1E"}
                  _hover={{ borderColor: "#7E20C9" }}
                >
                  <Text
                    w="30%"
                    paddingLeft="1vw"
                    color="#716B76"
                    fontSize={{ lg: "12px", xl: "16px" }}
                  >
                    Email Address
                  </Text>

                  <Input
                    className=""
                    type="email"
                    w="70%"
                    bgColor="black"
                    focusBorderColor="none"
                    border="none"
                    _placeholder={{ color: "#716B76", marginLeft: "10px" }}
                    _focus={{
                      color: "white",
                    }}
                    color="#716B76"
                    height="6.5vh"
                    name="email"
                    autoComplete="off"
                    defaultValue={userInfo?.email}
                    onChange={handleChange}
                  />
                </HStack>

                <HStack
                  bgColor="black"
                  w="100%"
                  className="outDiv"
                  borderRadius="6.5px"
                  border="2px solid"
                  borderColor={unameSelected ? "#7E20C9" : "#1C1A1E"}
                  _hover={{ borderColor: "#7E20C9" }}
                >
                  <Text
                    w="30%"
                    paddingLeft="1vw"
                    color="#716B76"
                    fontSize={{ lg: "12px", xl: "16px" }}
                  >
                    Username
                  </Text>

                  <Input
                    className=""
                    type="text"
                    w="70%"
                    bgColor="black"
                    focusBorderColor="none"
                    border="none"
                    _placeholder={{ color: "#716B76", marginLeft: "10px" }}
                    height="6.5vh"
                    autoComplete="off"
                    _focus={{
                      color: "white",
                    }}
                    color="#716B76"
                    name="username"
                    defaultValue={userInfo?.username}
                    onChange={handleChange}
                  />
                </HStack>

                <HStack
                  bgColor="black"
                  w="100%"
                  className="outDiv"
                  borderRadius="6.5px"
                  border="2px solid"
                  borderColor={unameSelected ? "#7E20C9" : "#1C1A1E"}
                  _hover={{ borderColor: "#7E20C9" }}
                >
                  <Text
                    w="40%"
                    paddingLeft="1vw"
                    color="#716B76"
                    fontSize={{ lg: "12px", xl: "16px" }}
                  >
                    Country
                  </Text>
                  <Select
                    variant="filled"
                    fontSize={{ lg: "12px", xl: "16px" }}
                    w="100%"
                    outline="none"
                    bgColor="black"
                    border="none"
                    height="6.5vh"
                    name="countryCode"
                    _hover={{ bgColor: "#000000" }}
                    value={userInfo?.countryCode}
                    onChange={handleChange}
                  >
                    {countryCodes.map((country) => {
                      return (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      );
                    })}
                  </Select>
                </HStack>

                <HStack
                  bgColor="black"
                  w="100%"
                  className="outDiv"
                  borderRadius="6.5px"
                  border="2px solid"
                  borderColor={add1Selected ? "#7E20C9" : "#1C1A1E"}
                  _hover={{ borderColor: "#7E20C9" }}
                >
                  <Text
                    w="40%"
                    // w="46%"
                    paddingLeft="1vw"
                    color="#716B76"
                    fontSize={{ lg: "12px", xl: "16px" }}
                  >
                    Phone Number
                  </Text>

                  {/* <PhoneInput specialLabel={""} country={"th"} /> */}

                  <Input
                    className=""
                    type="number"
                    w="100%"
                    bgColor="black"
                    focusBorderColor="none"
                    border="none"
                    _placeholder={{ color: "#716B76", marginLeft: "10px" }}
                    _focus={{
                      color: "white",
                    }}
                    color="#716B76"
                    onKeyDown={(e) =>
                      ["e", "E", "-"].includes(e.key) && e.preventDefault()
                    }
                    height="6.5vh"
                    autoComplete="off"
                    defaultValue={userInfo?.firstName}
                    onChange={handleChange}
                  />
                </HStack>

                <HStack
                  bgColor="black"
                  w="100%"
                  className="outDiv"
                  borderRadius="6.5px"
                  border="2px solid"
                  borderColor={unameSelected ? "#7E20C9" : "#1C1A1E"}
                  _hover={{ borderColor: "#7E20C9" }}
                >
                  <Text
                    w="40%"
                    paddingLeft="1vw"
                    color="#716B76"
                    fontSize={{ lg: "12px", xl: "16px" }}
                  >
                    Birthdate
                  </Text>

                  <Input
                    className=""
                    type="date"
                    placeholder="Date Of Birth"
                    w="100%"
                    bgColor="black"
                    focusBorderColor="none"
                    _placeholder={{ color: "#716B76" }}
                    _focus={{
                      color: "white",
                    }}
                    color="#716B76"
                    border="none"
                    height="6.5vh"
                    paddingRight="0"
                    fontSize={{ lg: "12px", xl: "16px" }}
                    name="dateOfBirth"
                    value={format(
                      userInfo.dateOfBirth !== ""
                        ? new Date(userInfo?.dateOfBirth)
                        : new Date(),
                      "yyyy'-'MM'-'dd"
                    )}
                    onChange={handleChange}
                  />
                </HStack>

                <HStack
                  bgColor="black"
                  w="100%"
                  className="outDiv"
                  borderRadius="6.5px"
                  border="2px solid"
                  borderColor={add1Selected ? "#7E20C9" : "#1C1A1E"}
                  _hover={{ borderColor: "#7E20C9" }}
                >
                  <Text
                    w="30%"
                    paddingLeft="1vw"
                    color="#716B76"
                    fontSize={{ lg: "12px", xl: "16px" }}
                  >
                    Address Line 1
                  </Text>

                  <Input
                    className=""
                    type="text"
                    w="70%"
                    bgColor="black"
                    focusBorderColor="none"
                    border="none"
                    _focus={{
                      color: "white",
                    }}
                    color="#716B76"
                    height="6.5vh"
                    autoComplete="off"
                    name="addressLine1"
                    defaultValue={userInfo?.addressLine1}
                    onChange={handleChange}
                  />
                </HStack>

                <HStack
                  bgColor="black"
                  w="100%"
                  className="outDiv"
                  borderRadius="6.5px"
                  border="2px solid"
                  borderColor={add2Selected ? "#7E20C9" : "#1C1A1E"}
                  _hover={{ borderColor: "#7E20C9" }}
                >
                  <Text
                    w="30%"
                    paddingLeft="1vw"
                    color="#716B76"
                    fontSize={{ lg: "12px", xl: "16px" }}
                  >
                    Address Line 2
                  </Text>

                  <Input
                    className=""
                    type="text"
                    w="70%"
                    bgColor="black"
                    focusBorderColor="none"
                    border="none"
                    _placeholder={{ color: "#716B76", marginLeft: "10px" }}
                    _focus={{
                      color: "white",
                    }}
                    color="#716B76"
                    height="6.5vh"
                    autoComplete="off"
                    name="addressLine2"
                    defaultValue={userInfo?.addressLine2}
                    onChange={handleChange}
                  />
                </HStack>
              </Stack>
              <Flex
                borderTop="1px solid"
                borderColor="#1C1A1E"
                px="30px"
                paddingTop="3vh"
                paddingBottom="2vh"
                gap="3"
                alignItems="center"
              >
                <Flex flexDirection="column" gap="2" w="60%">
                  <Text color="white" fontWeight="bold">
                    ID Verification
                  </Text>

                  <Text color="white" fontSize="xs">
                    Upload Your Government ID
                  </Text>
                  <Text color="#716B76" fontSize="xs">
                    Maecenas sit amet urna ornare ligula faucibus consectetur
                    nec vitae augue. Quisque dolor leo.
                  </Text>
                </Flex>
                <Flex
                  w="40%"
                  justifyContent="center"
                  py="3.5vh"
                  border="2px dashed"
                  borderColor="#7E20C9"
                  borderRadius="10px"
                  flexDirection="column"
                  alignItems="center"
                  gap="3"
                >
                  <Text color="#716B76" fontSize="10px">
                    jpg. , and .webp only
                  </Text>

                  <form
                    className="flex flex-col justify-center items-center gap-3"
                    onSubmit={submitForm}
                    id="testForm"
                  >
                    <Flex justifyContent="center">
                      <Flex w={{ md: "42%", lg: "44%", xl: "70%" }}>
                        <input
                          type="file"
                          name="test"
                          id="testFile"
                          // placehoder="Upload a file"
                          // className="bg-[#7E20C9] text-white"
                        />
                      </Flex>
                    </Flex>
                    <Button
                      bgColor="#7E20C9"
                      color="white"
                      fontSize="xs"
                      borderRadius="20px"
                      px="10"
                      id="testFile"
                      w={{ md: "42%", lg: "44%", xl: "70%" }}
                    >
                      Upload File
                    </Button>
                  </form>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

function FileUploadButton() {
  return (
    <Box>
      <input
        ref="fileInput"
        type="file"
        style={{ display: "none" }}
        // multiple={false}
      />
      <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
    </Box>
  );
}
