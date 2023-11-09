import React from "react";

import { Spinner } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Countdown from "react-countdown";

import {
  Box,
  Flex,
  keyframes,
  usePrefersReducedMotion,
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
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
} from "@chakra-ui/react";

export default function SearchingOpponent() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation1 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot1} infinite 1s linear`;
  const animation2 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot2} infinite 1s linear`;
  const animation3 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot3} infinite 1s linear`;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backdropFilter="blur(20px)"
      background="rgba(0, 0, 0, 0.6)"
      w="100%"
      height="100%"
    >
      <Flex justifyContent="center" height="90px" gap="2">
        <Flex alignItems="end">
          <Text
            color="white"
            fontSize="5xl"
            fontWeight="bold"
            gap="2"
            display="flex"
          >
            Searching for opponent{" "}
          </Text>
          <HStack marginBottom="15px" marginLeft="10px">
            <Box style={styles.dot1} animation={animation1} />
            <Box style={styles.dot2} animation={animation2} />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

const keyframe_dot1 = keyframes`
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1.5);
    }
    50% {
      transform: scale(1, 0.67);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `;
const keyframe_dot2 = keyframes`
   0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 1.5);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `;
const keyframe_dot3 = keyframes`
   0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 0.67);
    }
    75% {
      transform: scale(1, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  `;

const styles = {
  dot1: {
    position: "relative",
    width: "6px",
    height: "5px",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "#97144D",
    display: " inline-block",
    margin: "0 2px",
  },
  dot2: {
    width: "6px",
    height: "5px",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "#97144D",
    display: "inline-block",
    margin: "0 2px",
  },

  dot3: {
    width: "5px",
    height: "5px",
    borderRadius: "5px",
    backgroundColor: "white",
    display: "inline-block",
    margin: "0 2px",
  },
};

function WaitingOpponent() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation1 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot1} infinite 1s linear`;
  const animation2 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot2} infinite 1s linear`;
  const animation3 = prefersReducedMotion
    ? undefined
    : `${keyframe_dot3} infinite 1s linear`;
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backdropFilter="blur(20px)"
      background="rgba(0, 0, 0, 0.6)"
      w="100%"
      height="100%"
    >
      <Flex justifyContent="center" height="90px" gap="2">
        <Flex alignItems="end">
          <Text
            color="white"
            fontSize="5xl"
            fontWeight="bold"
            gap="2"
            display="flex"
          >
            Waiting for opponent{" "}
            <HStack marginTop="4.2vh">
              <Box style={styles.dot1} animation={animation1} />
              <Box style={styles.dot2} animation={animation2} />
            </HStack>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

function SearchingOpponent3() {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Text color="white" fontSize="2xl" fontWeight="bold">
          {seconds}
        </Text>
      );
    }
  };
  return (
    <Container
      height="100vh"
      w="100%"
      maxWidth="100%"
      padding="0"
      margin="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        justifyContent="center"
        bgGradient="linear(to-r, #181125, #25203a)"
        borderRadius="10"
        w={{ base: "100%", md: "40%", lg: "40%" }}
        padding={{ base: "5", md: "20", lg: "20" }}
        height="auto"
      >
        <Box
          padding="6"
          w="100%"
          boxShadow="lg"
          bgGradient="linear(to-r, #2d2d40, #eaeaeb)"
          borderRadius="10px"
        >
          <SkeletonCircle size="10" />
          <Countdown date={Date.now() + 5000} renderer={renderer} />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </Flex>
    </Container>
  );
}
