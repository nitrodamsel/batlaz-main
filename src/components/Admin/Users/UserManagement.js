import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
  Image,
  Select,
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
  ListItem,
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
  UnorderedList,
  Option,
  List,
} from "@chakra-ui/react";

import image from "../../assets/Ellipse.webp";

import "./index.css";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";

import { BiMenu } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

import myData from "./Pagination/sample-data";

import PostsUserManagement from "./Pagination/Posts";

import PaginationUserManagement from "./Pagination/Pagination";

export default function UserManagement() {
  const [posts] = useState(myData);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     await axios.get("https://jsonplaceholder.typicode.com/posts")
  //       .then(res => setPosts(res.data))
  //       .catch(err => console.log(err));
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box>
      <Box className="pb-36" h="120vh" py="10" px="3">
        <Flex alignItems="center" justifyContent="space-between">
          <Text color="white" fontSize="2xl">
            User Management
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
                Requests
              </Tab>
              <Tab
                color="#716B76"
                _selected={{
                  color: "white",
                  borderBottom: "2px solid",
                  borderColor: "#7E20C9",
                }}
              >
                Active
              </Tab>
              <Tab
                color="#716B76"
                _selected={{
                  color: "white",
                  borderBottom: "2px solid",
                  borderColor: "#7E20C9",
                }}
              >
                Inactive
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
                    <Text color="white">Users</Text>
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
                    <Box w="10%">
                      <Text color="#716B76">NO.</Text>
                    </Box>
                    <Box w="22.5%">
                      <Text color="#716B76">NAME</Text>
                    </Box>
                    <Box w="22.5%">
                      <Text color="#716B76">DATE CREATED</Text>
                    </Box>
                    <Box w="22.5%">
                      <Text color="#716B76">STATUS</Text>
                    </Box>
                    <Box w="22.5%">
                      <Text color="#716B76">LEVEL</Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex flexDirection="column" marginTop="2vh" px="8">
                  {[...new Array(8)].map((item, index) => (
                    <Flex key={index} py="5px">
                      <Flex w="10%">
                        <Text color="white">1</Text>
                      </Flex>
                      <Flex w="22.5%" display="flex">
                        <Image src={image} height="33px"></Image>
                        <Box>
                          <Text color="white" fontSize="sm">
                            Strike Eagle
                          </Text>
                          <Text fontSize="8px" color="#716B76">
                            @strikeeagle
                          </Text>
                        </Box>
                      </Flex>
                      <Flex w="22.5%">
                        <Text color="white">06/20/22022</Text>
                      </Flex>
                      <Flex
                        w="22.5%"
                        justifyContent="start"
                        alignItems="center"
                        gap="3"
                      >
                        <Box
                          bgColor="#42C340"
                          borderRadius="50%"
                          height="5px"
                          w="5px"
                        ></Box>
                        <Text color="white">Active</Text>
                      </Flex>
                      <Flex
                        w="22.5%"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        paddingRight="15px"
                      >
                        <Text color="white">Level 150</Text>
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
                      <PaginationUserManagement
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                      />
                    </Flex>

                    <Flex>
                      <Flex>
                        <MdOutlineKeyboardArrowRight
                          onClick={() => currentPage + 1}
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
