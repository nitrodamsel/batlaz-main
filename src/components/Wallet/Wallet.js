import { Link as ReachLink, useNavigate } from "react-router-dom";
import profilePic from ".././assets/recent1.webp";
import visa from ".././assets/visa.svg";

import {
  Box,
  Flex,
  Divider,
  Button,
  Grid,
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Th,
  Tr,
  Td,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Link,
} from "@chakra-ui/react";

import { BsBookmark } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export default function Wallet() {
  const navigate = useNavigate();

  return (
    <Grid
      className="!mx-auto mb-12 mt-32 place-content-center grid-cols-2 !px-auto gap-6"
      maxWidth="65rem"
    >
      <Box
        className="p-4"
        borderRadius="14px"
        height="200px"
        minWidth="300px"
        bgColor="hsla(0, 0%, 0%, 1)"
        color="#fff"
      >
        <Text className="m-1 mb-3" fontWeight="600">
          My Wallet
        </Text>
        <Divider />
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginTop="2rem"
        >
          <Flex flexDirection="column" gap="3">
            <Text fontWeight="400" fontSize="2.5rem">
              $326.54
            </Text>
            <Text color="hsla(273, 5%, 44%, 1)">Current Balance</Text>
          </Flex>
          <Flex flexDir="column" gap="4">
            <Link
              to="addmoney"
              as={ReachLink}
              style={{ textDecoration: "none" }}
            >
              <Button
                bgColor="hsla(273, 73%, 46%, 1)"
                borderRadius="20px"
                fontSize="13px"
              >
                <BsBookmark className="mr-1" />
                Add Money to Wallet
              </Button>
            </Link>
            <Link
              to="withdraw"
              as={ReachLink}
              style={{ textDecoration: "none" }}
            >
              <Button
                bgColor="hsla(274, 74%, 9%, 1)"
                borderRadius="20px"
                border="1px solid hsla(273, 73%, 46%, 1)"
                fontSize="13px"
                width="100%"
              >
                <AiOutlineMinusCircle className="mr-1" /> Withdraw
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Box
        className="p-4"
        fontWeight="600"
        borderRadius="14px"
        height="200px"
        minWidth="300px"
        bgColor="hsla(0, 0%, 0%, 1)"
        color="#fff"
      >
        <Flex justifyContent="space-between">
          <Box>
            <Text className="m-1 mb-3">My Cards</Text>
          </Box>
          <Flex
            alignItems="center"
            cursor="pointer"
            onClick={() => navigate("/wallet/cards")}
          >
            <Text color="hsla(273, 100%, 50%, 1)"> View All</Text>
            <Box marginLeft="0.5rem">
              <AiFillPlusCircle
                size="30px"
                color="hsla(273, 73%, 46%, 1)"
                bgColor="white"
              />
            </Box>
          </Flex>
        </Flex>
        <Divider />
        <Flex marginTop="1rem" flexDirection="column" gap="4">
          <Flex justifyContent="space-between">
            <Box fontWeight="normal">
              <Text>Ending in: *****1214</Text>
              <Text color="hsla(273, 5%, 44%, 1)">
                Last time used: Thu, Sept 14, 2022
              </Text>
            </Box>

            <Flex alignItems="center" gap="0.6rem">
              <Image w="3rem" src={visa} size="1rem" />
              <Box marginLeft="1.3rem">
                <FiEdit
                  size="20px"
                  color="hsla(273, 73%, 46%, 1)"
                  cursor="pointer"
                />
              </Box>

              <Box>
                <RiDeleteBin6Line
                  size="20px"
                  color="hsla(273, 73%, 46%, 1)"
                  cursor="pointer"
                />
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between">
            <Box fontWeight="normal">
              <Text>Ending in: *****1214</Text>
              <Text color="hsla(273, 5%, 44%, 1)">
                Last time used: Thu, Sept 14, 2022
              </Text>
            </Box>
            <Flex alignItems="center" gap="0.6rem">
              <Image w="3rem" src={visa} size="1rem" />
              <Box marginLeft="1.3rem">
                <FiEdit
                  size="20px"
                  color="hsla(273, 73%, 46%, 1)"
                  cursor="pointer"
                />
              </Box>

              <Box>
                <RiDeleteBin6Line
                  size="20px"
                  color="hsla(273, 73%, 46%, 1)"
                  cursor="pointer"
                />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box
        borderRadius="14px"
        className="col-span-2"
        minWidth="100px"
        bgColor="black"
        color="hsla(0, 0%, 100%, 1);"
      >
        <TableContainer borderRadius="14px">
          <Box className="m-5" fontSize="20px" fontWeight="500">
            Topup History
          </Box>

          <Tabs variant="unstyled">
            <TabList className="ml-6">
              <Tab
                paddingBlock="1rem"
                paddingInline="2rem"
                color="#ACA7AF"
                _selected={{
                  color: "white",
                  bg: "linear-gradient(180deg, rgba(0,0,0,0.31976540616246496) 20%, rgba(110,42,164,0.48503151260504207) 100%)",
                  borderBottom: "solid 3px hsla(273, 73%, 46%, 1)",
                }}
              >
                All
              </Tab>
              <Tab
                paddingBlock="1rem"
                paddingInline="2rem"
                color="#ACA7AF"
                _selected={{
                  color: "white",
                  bg: "linear-gradient(180deg, rgba(0,0,0,0.31976540616246496) 20%, rgba(110,42,164,0.48503151260504207) 100%)",
                  borderBottom: "solid 3px hsla(273, 73%, 46%, 1)",
                }}
              >
                Recent
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel className="!px-0">
                <Table
                  size="md"
                  variant="striped"
                  colorScheme="hsla(270, 8%, 8%, 1);"
                >
                  <Thead>
                    <Tr>
                      <Th>Transaction ID</Th>
                      <Th>Battle</Th>
                      <Th>Date and Time</Th>
                      <Th>Amount</Th>
                      <Th>Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>1515151515151</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Music Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>04 Apr 2022; 5:20pm</Td>
                      <Td>$20,000</Td>
                      <Td color="hsla(93, 73%, 46%, 1)">Success</Td>
                    </Tr>
                    <Tr>
                      <Td>1515151515151</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Music Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>04 Apr 2022; 5:20pm</Td>
                      <Td>$20,000</Td>
                      <Td color="hsla(0, 67%, 51%, 1)">Pending</Td>
                    </Tr>
                    <Tr>
                      <Td>1515151515151</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Music Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>04 Apr 2022; 5:20pm</Td>
                      <Td>$20,000</Td>
                      <Td color="hsla(93, 73%, 46%, 1)">Success</Td>
                    </Tr>
                    <Tr>
                      <Td>1515151515151</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Music Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>04 Apr 2022; 5:20pm</Td>
                      <Td>$20,000</Td>
                      <Td color="hsla(93, 73%, 46%, 1)">Success</Td>
                    </Tr>
                    <Tr>
                      <Td>1515151515151</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Music Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>04 Apr 2022; 5:20pm</Td>
                      <Td>$20,000</Td>
                      <Td color="hsla(0, 67%, 51%, 1)">Pending</Td>
                    </Tr>
                    <Tr>
                      <Td>1515151515151</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Music Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>04 Apr 2022; 5:20pm</Td>
                      <Td>$20,000</Td>
                      <Td color="hsla(93, 73%, 46%, 1)">Success</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel className="!px-0">
                <Table
                  size="md"
                  variant="striped"
                  colorScheme="hsla(270, 8%, 8%, 1);"
                >
                  <Thead>
                    <Tr>
                      <Th>Transaction ID</Th>
                      <Th>Battle</Th>
                      <Th>Date and Time</Th>
                      <Th>Amount</Th>
                      <Th>Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>262626262626</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Science Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>11 Nov 2023; 7:30pm</Td>
                      <Td>$40,000</Td>
                      <Td color="hsla(0, 67%, 51%, 1)">Pending</Td>
                    </Tr>
                    <Tr>
                      <Td>262626262626</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Science Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>11 Nov 2023; 7:30pm</Td>
                      <Td>$40,000</Td>
                      <Td color="hsla(93, 73%, 46%, 1)">Success</Td>
                    </Tr>
                    <Tr>
                      <Td>262626262626</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Science Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>11 Nov 2023; 7:30pm</Td>
                      <Td>$40,000</Td>
                      <Td color="hsla(0, 67%, 51%, 1)">Pending</Td>
                    </Tr>
                    <Tr>
                      <Td>262626262626</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Science Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>11 Nov 2023; 7:30pm</Td>
                      <Td>$40,000</Td>
                      <Td color="hsla(93, 73%, 46%, 1)">Success</Td>
                    </Tr>
                    <Tr>
                      <Td>262626262626</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Science Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>11 Nov 2023; 7:30pm</Td>
                      <Td>$40,000</Td>
                      <Td color="hsla(0, 67%, 51%, 1)">Pending</Td>
                    </Tr>
                    <Tr>
                      <Td>262626262626</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Image
                            src={profilePic}
                            className="rounded-full h-10 w-10 mr-4"
                          />
                          Science Trivia Challenge
                        </Flex>
                      </Td>
                      <Td>11 Nov 2023; 7:30pm</Td>
                      <Td>$40,000</Td>
                      <Td color="hsla(0, 67%, 51%, 1)">Pending</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </TableContainer>
      </Box>
    </Grid>
  );
}
