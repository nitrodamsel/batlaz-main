import { useCallback, useState, React } from "react";

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
  Textarea,
} from "@chakra-ui/react";

import { BiChevronRight } from "react-icons/bi";

import { BsDownload } from "react-icons/bs";

import image from "../../assets/recent1.webp";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";

import { BiMenu } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

export default function UserReport() {
  const [currentTab, setCurrentTab] = useState("home");

  const tabSwitcher = (tabName) => {
    setCurrentTab(tabName);
  };
  return (
    <Box position="relative" w="100%">
      {currentTab === "home" && <User tabSwitcher={tabSwitcher} />}
      {currentTab === "about" && <About tabSwitcher={tabSwitcher} />}
    </Box>
  );
}

function User({ tabSwitcher }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <Box>
      <Box className="pb-36" h="120vh" py="10" px="3">
        <Flex alignItems="center" justifyContent="space-between">
          <Text color="white" fontSize="2xl">
            User Feedback
          </Text>

          <Box
            alignItems="center"
            px="3"
            py="1px"
            borderRadius="7px"
            bgColor="#2f0c4b"
            w="30%"
            size="sm"
            display="flex"
          >
            <IoSearchSharp color="#716B76" fontSize="20px"></IoSearchSharp>
            <Input
              w="90%"
              pr="4.5rem"
              placeholder="Search"
              color="white"
              border="none"
              _selected={{ borderColor: "none", border: "none" }}
              _focus={{ boxShadow: "none" }}
            />
          </Box>
        </Flex>
        <Flex
          bgColor="black"
          w="100%"
          marginTop="10"
          px="0"
          borderRadius="15px"
          paddingBottom="2vh"
        >
          <Tabs w="100%" px="0" mx="0">
            <TabList paddingTop="5" paddingBottom="3" px="8" border="none">
              <Tab
                color="#716B76"
                _selected={{
                  color: "white",
                  borderBottom: "2px solid",
                  borderColor: "#7E20C9",
                }}
              >
                All
              </Tab>
              <Tab
                color="#716B76"
                _selected={{
                  color: "white",
                  borderBottom: "2px solid",
                  borderColor: "#7E20C9",
                }}
              >
                Resolved
              </Tab>
              <Tab
                color="#716B76"
                _selected={{
                  color: "white",
                  borderBottom: "2px solid",
                  borderColor: "#7E20C9",
                }}
              >
                Ongoing
              </Tab>
              <Tab
                color="#716B76"
                _selected={{
                  color: "white",
                  borderBottom: "2px solid",
                  borderColor: "#7E20C9",
                }}
              >
                Archived
              </Tab>
              <Tab
                color="#716B76"
                _selected={{
                  color: "white",
                  borderBottom: "2px solid",
                  borderColor: "#7E20C9",
                }}
              >
                Not Processed
              </Tab>
            </TabList>

            <TabPanels
              paddingBottom="0"
              px="0"
              className="pb-0"
              marginBottom="0px"
            >
              <TabPanel display="flex" w="100%" flexDirection="column" px="0">
                <Flex alignItems="center" px="8">
                  <Box w="50%" display="flex" alignItems="center">
                    <Text color="white">Feedback</Text>
                  </Box>

                  <Box w="50%" display="flex" justifyContent="end" gap="2">
                    <select className="w-auto py-2 px-2 rounded-lg bg-[#7E20C9] text-white">
                      <option selected className="bg-[#7E20C9] px-2 text-white">
                        Sort by
                      </option>
                      <option value="US">Option1</option>
                      <option value="CA">Option2</option>
                      <option value="FR">Option3</option>
                      <option value="DE">Option4</option>
                    </select>
                    <Flex
                      alignItems="center"
                      bgColor="#3F1064"
                      padding="5px"
                      borderRadius="5px"
                      gap="2"
                    >
                      <Box bgColor="#7E20C9" borderRadius="5px" padding="3px">
                        <BiMenu
                          color="white"
                          fontSize="20px"
                          padding="5px"
                        ></BiMenu>
                      </Box>
                      <BsGridFill color="#7E20C9"></BsGridFill>
                    </Flex>
                  </Box>
                </Flex>
                <Box
                  height="1vh"
                  borderBottom="1px solid"
                  borderColor="
                  #1C1A1E"
                  marginTop="1vh"
                  marginBottom="2vh"
                ></Box>
                <Flex flexDirection="column" marginTop="2vh" px="8">
                  <Flex>
                    <Flex w="100%">
                      <Box w="10%">
                        <Text color="#716B76">NO.</Text>
                      </Box>
                      <Box w="18%">
                        <Text color="#716B76">TITLE</Text>
                      </Box>
                      <Box w="18%">
                        <Text color="#716B76">DATE ISSUED</Text>
                      </Box>
                      <Box w="18%">
                        <Text color="#716B76">ISSUED BY</Text>
                      </Box>
                      <Box w="18%">
                        <Text color="#716B76">CATEGORY</Text>
                      </Box>
                      <Box w="18%">
                        <Text color="#716B76">STATUS</Text>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex flexDirection="column" marginTop="2vh" px="8">
                  {[...new Array(8)].map((item, index) => (
                    <Flex key={index} py="5px">
                      <Flex w="10%" alignItems="center">
                        <Text color="white" fontSize="xs">
                          1101
                        </Text>
                      </Flex>
                      <Flex w="18%" display="flex" alignItems="center" gap="2">
                        <Image
                          src={image}
                          height="33px"
                          borderRadius="50%"
                        ></Image>
                        <Text
                          color="white"
                          fontSize="xs"
                          onClick={() => {
                            tabSwitcher("about");
                          }}
                        >
                          Strike Eagle
                        </Text>
                      </Flex>
                      <Flex w="18%" alignItems="center">
                        <Text color="white" fontSize="xs">
                          06/20/22022
                        </Text>
                      </Flex>
                      <Flex w="18%" alignItems="center">
                        <Text color="white" fontSize="xs">
                          @strikeeagle
                        </Text>
                      </Flex>
                      <Flex w="18%" justifyContent="start" alignItems="center">
                        <Box
                          bgColor="#7E20C9"
                          px="7px"
                          py="1px"
                          borderRadius="3px"
                        >
                          <Text color="white" fontSize="xs">
                            DAILY
                          </Text>
                        </Box>
                      </Flex>
                      <Flex
                        w="18%"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        paddingRight="15px"
                      >
                        <Text color="white" fontSize="xs">
                          Ongoing
                        </Text>
                        <Flex gap="1">
                          <Box
                            bgColor="white"
                            borderRadius="50%"
                            height="5px"
                            w="5px"
                          ></Box>
                          <Box
                            bgColor="white"
                            borderRadius="50%"
                            height="5px"
                            w="5px"
                          ></Box>
                          <Box
                            bgColor="white"
                            borderRadius="50%"
                            height="5px"
                            w="5px"
                          ></Box>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>

                <Flex marginTop="7vh" justifyContent="space-between" px="8">
                  <Text color="#716B76">Showing 2 out of 25 entries</Text>
                  <Flex alignItems="center" w="25%" justifyContent="end">
                    <Flex alignItems="center">
                      <CgChevronDoubleLeft
                        color="white"
                        fontSize="25px"
                      ></CgChevronDoubleLeft>
                      <MdOutlineKeyboardArrowLeft
                        color="white"
                        fontSize="25px"
                      ></MdOutlineKeyboardArrowLeft>
                    </Flex>

                    <Flex alignItems="center" gap="1">
                      <Button
                        bgColor="transparent"
                        _hover={{ backgroundColor: "none" }}
                        color="white"
                      >
                        1
                      </Button>
                      <Button
                        bgColor="transparent"
                        _hover={{ backgroundColor: "none" }}
                        color="white"
                      >
                        2
                      </Button>
                      <Button
                        bgColor="transparent"
                        _hover={{ backgroundColor: "none" }}
                        color="white"
                      >
                        3
                      </Button>
                    </Flex>

                    <Flex>
                      <Flex>
                        <MdOutlineKeyboardArrowRight
                          color="white"
                          fontSize="25px"
                        ></MdOutlineKeyboardArrowRight>
                        <CgChevronDoubleRight
                          color="white"
                          fontSize="25px"
                        ></CgChevronDoubleRight>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </Box>
  );
}

function About({ tabSwitcher }) {
  return (
    <Box>
      <Box className="pb-36" h="120vh" py="10" px="24">
        <Text color="white" fontSize="2xl">
          User Management
        </Text>
        <Flex w="100%" marginTop="5" gap="5">
          <Flex
            w="30%"
            bgColor="black"
            borderRadius="15px"
            paddingTop="5"
            paddingLeft="5"
            paddingRight="5"
            paddingBottom="7vh"
            flexDirection="column"
            gap="6"
          >
            <Flex flexDirection="column" gap="3">
              <Text color="#939393">User Report /R101</Text>
              <Flex gap="5">
                <Image src={image} w="60px"></Image>
                <Flex justifyContent="center" flexDirection="column">
                  <Text color="white" fontSize="lg">
                    R101 - Batlaz Battle
                  </Text>
                  <Text fontSize="lg" color="white">
                    Game 101
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex w="100%">
              <Flex
                justifyContent="center"
                bgColor="#22272F"
                alignItems="center"
                w="85%"
                py="3"
                borderTopLeftRadius="10px"
                borderBottomLeftRadius="10px"
              >
                <Text color="white" fontSize="xs" fontWeight="500">
                  Ongoing
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                bgColor="#7E20C9"
                justifyContent="center"
                w="15%"
                borderTopRightRadius="10px"
                borderBottomRightRadius="10px"
              >
                <BiChevronRight color="white" fontSize="25px"></BiChevronRight>
              </Flex>
            </Flex>

            <Flex flexDirection="column" gap="3">
              <Flex w="100%">
                <Box w="40%">
                  <Text color="#716B76">NO.</Text>
                </Box>
                <Box w="60%">
                  <Text color="white">1101</Text>
                </Box>
              </Flex>
              <Flex w="100%">
                <Box w="40%">
                  <Text color="#716B76">DATE ISSUED</Text>
                </Box>
                <Box w="60%">
                  <Text color="white">06/20/22022</Text>
                </Box>
              </Flex>
              <Flex w="100%">
                <Box w="40%">
                  <Text color="#716B76">ISSUED BY</Text>
                </Box>
                <Box w="60%">
                  <Text color="white">@strikeeagle</Text>
                </Box>
              </Flex>
              <Flex w="100%">
                <Box w="40%">
                  <Text color="#716B76">CATEGORY</Text>
                </Box>
                <Box w="60%">
                  <Text color="white">DAILY</Text>
                </Box>
              </Flex>
              <Flex w="100%">
                <Box w="40%">
                  <Text color="#716B76">STATUS</Text>
                </Box>
                <Box w="60%">
                  <Text color="#FFE000" className="underline">
                    Ongoing
                  </Text>
                </Box>
              </Flex>
            </Flex>

            <Flex flexDirection="column" gap="12">
              <Flex w="100%" flexDirection="column">
                <Box textTransform="uppercase" color="#716B76">
                  Report Details
                </Box>
                <Box>
                  <Text color="white">Answer is not correct lorem ipsum</Text>
                </Box>
              </Flex>
              <Flex w="100%" flexDirection="column" gap="3">
                <Box textTransform="uppercase" color="#716B76">
                  attachments
                </Box>
                <Flex flexDirection="row">
                  <Flex w="50%">
                    <Image src={image} borderRadius="10px" w="60px"></Image>
                    <Text fontSize="xs" px="2" color="white">
                      image.webp
                    </Text>
                  </Flex>
                  <Flex justifyContent="end" w="50%">
                    <BsDownload color="white"></BsDownload>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w="70%"
            bgColor="black"
            borderRadius="15px"
            padding="5"
            flexDirection="column"
            gap="3"
          >
            <Text color="white">Report Activity</Text>
            <Stack bgColor="green" height="100%">
              <Flex height="90%" bgColor="pink">
                <Flex>sdsdsds</Flex>
              </Flex>
              <Flex height="auto" w="100%" bgColor="yellow" gap="5">
                <Box w="80%" position="relative">
                  <Textarea
                    w="100%"
                    bgColor="#1C1A1E"
                    alignItems="center"
                    borderRadius="15px"
                    px="4"
                    placeholder="Type a message"
                    minHeight="50px"
                    border="none"
                    _placeholder={{ color: "#716B76" }}
                    color="white"
                  />
                </Box>

                <Flex
                  w="20%"
                  bgColor="#7E20C9"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="15px"
                >
                  <Text fontSize="sm" color="white" fontWeight="500">
                    Send
                  </Text>
                </Flex>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
