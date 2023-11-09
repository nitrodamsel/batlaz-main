import React from "react";
import { useNavigate } from "react-router-dom";
import mask from "../.././assets/maskTrivia.webp";
import arrow from "../.././assets/arrowdot.webp";
import coin from "../.././assets/coin.webp";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Box, Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import "./B2B.css";
import lock from "../.././assets/padlock.webp";

export default function B2B() {
  const navigate = useNavigate();

  return (
    <Flex flexDirection="column" gap="1.2rem">
      <Flex
        height="14rem"
        borderRadius="20px"
        bgColor="#141215"
        alignItems="center"
        justifyContent="center"
      >
        <Flex gap="1.3rem" alignItems="center" flexDirection="column">
          <Box>
            <AiOutlinePlusCircle
              cursor="pointer"
              size="4rem"
              color="#fff"
              className="mx-auto"
              onClick={() => navigate("/createbattle")}
            />
          </Box>
          <Box>
            <Button
              className="py-6"
              color="#fff"
              bgColor="hsla(273, 73%, 46%, 1)"
              borderRadius="90px"
              width="16rem"
              onClick={() => navigate("/createbattle")}
            >
              Create your Own Battles
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Box color="#fff">
        <Stack
          paddingLeft="1.5rem"
          borderTopRightRadius="20px"
          bgImage={mask}
          height="8rem"
        >
          <Flex height="50%" alignItems="center">
            <Box>
              <Text fontSize="2xl" fontWeight="600">
                Farm Animals Trivia Battle
              </Text>
            </Box>
          </Flex>
          <Flex height="50%" alignItems="center" gap="3rem">
            <Flex gap="0.4rem">
              <Text>Prize Money</Text>
              <Image src={coin} height="22px" />
              <Text fontWeight="bold">$100,000</Text>
            </Flex>
            <Flex gap="0.4rem">
              <Text>Wager</Text>
              <Image src={arrow} height="22px" />
              <Text fontWeight="bold">$100</Text>
            </Flex>
          </Flex>
        </Stack>
        <Flex
          borderBottomRadius="20px"
          bgColor="#000000"
          height="7rem"
          alignItems="center"
          justifyContent="space-between"
          paddingLeft="1.5rem"
          paddingRight="1.5rem"
        >
          <Flex alignItems="center" gap="1rem">
            <Text fontWeight="bold">Battle Starts In &#128293;</Text>
            <Flex gap="1rem">
              <Stack>
                <Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    0
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    bgColor="#1A181C"
                    width="0.40rem"
                  >
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderBottomRadius="60px"
                    ></Box>
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderTopRadius="60px"
                    ></Box>
                  </Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    2
                  </Box>
                </Flex>
                <Text color="hsla(273, 5%, 44%, 1)">DAYS</Text>
              </Stack>
              <Stack>
                <Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    0
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    bgColor="#1A181C"
                    width="0.40rem"
                  >
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderBottomRadius="60px"
                    ></Box>
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderTopRadius="60px"
                    ></Box>
                  </Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    2
                  </Box>
                </Flex>
                <Text color="hsla(273, 5%, 44%, 1)">HOURS</Text>
              </Stack>
              <Stack>
                <Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    0
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    bgColor="#1A181C"
                    width="0.40rem"
                  >
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderBottomRadius="60px"
                    ></Box>
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderTopRadius="60px"
                    ></Box>
                  </Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    2
                  </Box>
                </Flex>
                <Text color="hsla(273, 5%, 44%, 1)">MINUTES</Text>
              </Stack>
              <Stack>
                <Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    0
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    bgColor="#1A181C"
                    width="0.40rem"
                  >
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderBottomRadius="60px"
                    ></Box>
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderTopRadius="60px"
                    ></Box>
                  </Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    2
                  </Box>
                </Flex>
                <Text color="hsla(273, 5%, 44%, 1)">SECONDS</Text>
              </Stack>
            </Flex>
          </Flex>
          <Stack
            borderRadius="10px"
            border="2px solid #7E20C9"
            direction="row"
            alignItems="center"
            gap="1rem"
            bgColor="hsla(270, 8%, 8%, 1)"
            paddingRight="1rem"
          >
            <Input
              type="text"
              borderRadius="10px"
              border="none"
              placeholder="Enter Code to Enter"
              _focusVisible="none"
              width="10.8rem"
            />
            <Box>131APW</Box>
            <Box whiteSpace="nowrap">
              <Text color="#7E20C9" fontWeight="bold">
                Enter Now
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Box>
      <Box color="#fff">
        <Stack
          paddingLeft="1.5rem"
          borderTopRightRadius="20px"
          bgImage={mask}
          height="8rem"
        >
          <Flex height="50%" alignItems="center">
            <Box>
              <Text fontSize="2xl" fontWeight="600">
                Farm Animals Trivia Battle
              </Text>
            </Box>
          </Flex>
          <Flex height="50%" alignItems="center" gap="3rem">
            <Flex gap="0.4rem">
              <Text>Prize Money</Text>
              <Image src={coin} height="22px" />
              <Text fontWeight="bold">$100,000</Text>
            </Flex>
            <Flex gap="0.4rem">
              <Text>Wager</Text>
              <Image src={arrow} height="22px" />
              <Text fontWeight="bold">$100</Text>
            </Flex>
          </Flex>
        </Stack>
        <Flex
          borderBottomRadius="20px"
          bgColor="#000000"
          height="7rem"
          alignItems="center"
          justifyContent="space-between"
          paddingLeft="1.5rem"
          paddingRight="1.5rem"
        >
          <Flex alignItems="center" gap="1rem">
            <Text fontWeight="bold">Battle Starts In &#128293;</Text>
            <Flex gap="1rem">
              <Stack>
                <Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    0
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    bgColor="#1A181C"
                    width="0.40rem"
                  >
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderBottomRadius="60px"
                    ></Box>
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderTopRadius="60px"
                    ></Box>
                  </Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    2
                  </Box>
                </Flex>
                <Text color="hsla(273, 5%, 44%, 1)">DAYS</Text>
              </Stack>
              <Stack>
                <Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    0
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    bgColor="#1A181C"
                    width="0.40rem"
                  >
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderBottomRadius="60px"
                    ></Box>
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderTopRadius="60px"
                    ></Box>
                  </Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    2
                  </Box>
                </Flex>
                <Text color="hsla(273, 5%, 44%, 1)">HOURS</Text>
              </Stack>
              <Stack>
                <Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    0
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    bgColor="#1A181C"
                    width="0.40rem"
                  >
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderBottomRadius="60px"
                    ></Box>
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderTopRadius="60px"
                    ></Box>
                  </Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    2
                  </Box>
                </Flex>
                <Text color="hsla(273, 5%, 44%, 1)">MINUTES</Text>
              </Stack>
              <Stack>
                <Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    0
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    bgColor="#1A181C"
                    width="0.40rem"
                  >
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderBottomRadius="60px"
                    ></Box>
                    <Box
                      bgColor="hsla(0, 0%, 0%, 1)"
                      height="30%"
                      borderTopRadius="60px"
                    ></Box>
                  </Flex>
                  <Box
                    paddingLeft="0.8rem"
                    paddingRight="0.8rem"
                    bgColor="#1A181C"
                    borderRadius="8px"
                    fontSize="2rem"
                    alignSelf="center"
                  >
                    2
                  </Box>
                </Flex>
                <Text color="hsla(273, 5%, 44%, 1)">SECONDS</Text>
              </Stack>
            </Flex>
          </Flex>
          <Stack
            borderRadius="10px"
            border="2px solid #7E20C9"
            direction="row"
            alignItems="center"
            gap="1rem"
            bgColor="hsla(270, 8%, 8%, 1)"
            paddingRight="1rem"
          >
            <Input
              type="text"
              borderRadius="10px"
              border="none"
              placeholder="Enter Code to Enter"
              _focusVisible="none"
              width="10.8rem"
            />
            <Box>131APW</Box>
            <Box whiteSpace="nowrap">
              <Text color="#7E20C9" fontWeight="bold">
                Enter Now
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}
