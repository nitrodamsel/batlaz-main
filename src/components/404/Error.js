import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link as ReachLink } from "react-router-dom";

import error from ".././assets/404.png";
import errorLeft from ".././assets/error-left.png";
import errorRight from ".././assets/error-right.png";

import "./Error.css";
import { Box, Flex, Image, Text, Link, Heading } from "@chakra-ui/react";

export default function Error() {
  return (
    <Box className="items-center flex w-full" h="100vh" bgColor="white">
      <Flex
        alignItems="center"
        position="relative"
        className="flex-col md:flex-row gap-10 w-full h-full items-center justify-center"
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          zIndex="99999"
          className="px-10 md:px-0 pt-7"
        >
          <Image src={error} />
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          gap="5"
          display="flex"
          flexDirection="column"
          paddingLeft="5vw"
          zIndex="99999"
          alignItems={{ base: "center", md: "start" }}
        >
          <Heading
            className="mainfont"
            as="h2"
            size="3xl"
            color="#7E20C9"
            fontWeight="bold"
          >
            Ooops!
          </Heading>
          <Text color="#7E20C9" fontSize="2xl">
            Seems like the page you<br></br> are looking for could<br></br> not
            be found
          </Text>

          <Flex flexDirection="column" w="80%" gap="4">
            <Link
              to="/home"
              as={ReachLink}
              alignSelf={{ base: "center", md: "start" }}
              bg="#7E20C9"
              color="white"
              marginTop="0"
              py="2"
              px="8"
              borderRadius="20px"
              fontSize="xs"
              fontWeight="bold"
            >
              Back to Home
            </Link>
          </Flex>
        </Box>
        <Flex
          position="absolute"
          top="0%"
          justifyContent={{ base: "end", md: "space-between" }}
          // bg="red"
          w="100%"
          height="100vh"
        >
          <Image src={errorLeft} className="hidden md:block"></Image>
          <Image src={errorRight}></Image>
        </Flex>
      </Flex>
    </Box>
  );
}
