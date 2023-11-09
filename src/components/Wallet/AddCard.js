import { useNavigate } from "react-router-dom";
import mastercard from ".././assets/mastercard.svg";
import visa from ".././assets/visa.svg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function AddCard() {
  const navigate = useNavigate();

  return (
    <Box className="mx-auto" maxWidth="70rem">
      <Flex w="100%" marginTop="17vh" marginBottom="0.5rem" gap="4">
        <Flex alignItems="center">
          <IoArrowBackCircleOutline
            onClick={() => navigate(-1)}
            size="2.5rem"
            color="hsla(0, 0%, 100%, 1)"
            opacity="0.4"
            cursor="pointer"
          />
        </Flex>
        <Text color="white" fontSize="4xl">
          Add Card
        </Text>
      </Flex>
      <Flex
        alignItems="start"
        gap="5"
        marginBottom="30vh"
        height="auto"
        w="100%"
      >
        <Box
          flexDirection="column"
          bgColor="black"
          padding="1.5rem"
          borderRadius="15px"
          w="55%"
        >
          <Box marginBottom="1rem">
            <Text color="#fff" fontSize="18px" fontWeight="500">
              Add Card
            </Text>
          </Box>
          <Box>
            <Stack>
              <Box>
                <Stack gap="0.3rem">
                  <Box
                    bgColor="hsla(270, 8%, 8%, 1)"
                    w="100%"
                    padding="1rem"
                    color="#fff"
                  >
                    <FormControl marginBottom="1rem">
                      <Flex justifyContent="space-between" alignItems="center">
                        <FormLabel>Card Number</FormLabel>
                        <Flex gap="3">
                          <Image boxSize="35px" src={visa}></Image>
                          <Image boxSize="35px" src={mastercard}></Image>
                        </Flex>
                      </Flex>
                      <Input
                        borderColor="#1C1A1E"
                        borderWidth="2px"
                        bgColor="#000000"
                        placeholder="Type Here"
                      />
                    </FormControl>
                    <Stack direction="row" gap="1rem" marginBottom="1rem">
                      <FormControl>
                        <FormLabel>Expiry Date</FormLabel>
                        <Input
                          borderColor="#1C1A1E"
                          borderWidth="2px"
                          bgColor="#000000"
                          placeholder="Expiry Date"
                        />
                      </FormControl>
                      <FormControl w="55%">
                        <FormLabel>CVV</FormLabel>
                        <Input
                          borderColor="#1C1A1E"
                          borderWidth="2px"
                          bgColor="#000000"
                          placeholder="CVV"
                        />
                      </FormControl>
                    </Stack>
                    <FormControl marginBottom="1rem">
                      <FormLabel>Name on Card</FormLabel>
                      <Input
                        borderColor="#1C1A1E"
                        borderWidth="2px"
                        bgColor="#000000"
                        placeholder="Name"
                      />
                    </FormControl>
                  </Box>
                  <Flex gap="2" justifyContent="end" className="!mt-3">
                    <Button
                      width="6rem"
                      border="2px solid #7E20C9"
                      borderRadius="90px"
                      color="#fff"
                      bgColor="rgba(25, 6, 40, 0.2)"
                    >
                      Cancel
                    </Button>
                    <Button
                      width="6rem"
                      borderRadius="90px"
                      bgColor="hsla(274, 73%, 31%, 1)"
                      color="whiteAlpha.800"
                    >
                      Save
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box
          fontWeight="600"
          borderRadius="14px"
          bgColor="hsla(0, 0%, 0%, 1)"
          color="#fff"
          padding="1.5rem"
          width="45%"
        >
          <Box>
            <Box>
              <Text className="mb-3">My Cards</Text>
            </Box>
          </Box>
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
      </Flex>
    </Box>
  );
}
