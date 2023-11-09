import React from "react";

import {
  chakra,
  Box,
  Flex,
  HStack,
  Button,
  Image,
  useDisclosure,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Center,
  Grid,
  GridItem,
  Radio,
  Link,
  Input,
  RadioGroup,
  Progress,
  CircularProgress,
  useCheckbox,
  ModalCloseButton,
  onClose,
} from "@chakra-ui/react";

import gamepic from ".././assets/gamepic1.webp";
import winloseBG from ".././assets/win-loseBG.webp";

import coin from ".././assets/coin.webp";
import arrowdot from ".././assets/arrowdot.webp";

import "./Cashout.css";

function Cashout() {
  const OverlayTwo = () => <ModalOverlay bg="none" backdropFilter="auto" />;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  return (
    <Box>
      <Text
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Cashout?
      </Text>
      <Modal isCentered isOpen={isOpen} onClose={onClose} w="100%" bg="blue">
        {overlay}
        <ModalContent
          bgImage={winloseBG}
          bgSize="cover"
          bgPosition="center"
          height="80vh"
          borderRadius="10px"
          border="2px solid #7E20C9"
          className="popup"
        >
          <ModalBody px="0" py="0">
            <Flex
              justifyContent="center"
              alignItems="center"
              height="100%"
              px="2"
              gap="4"
              borderTop="2px solid #1A181C"
              flexDirection="column"
            >
              <Text color="white" zIndex="99999" fontSize="2xl">
                Cashout your Prize!
              </Text>

              <Center gap="5" w="100%" zIndex="99999">
                <Stack zIndex="99999">
                  <Image
                    src={gamepic}
                    borderRadius="50%"
                    w="50px"
                    radius="50%"
                    border="2px solid white"
                  ></Image>
                  <Text color="white">Dan Kirk</Text>
                </Stack>
                <Flex flexDirection="column" gap="2">
                  <Flex
                    color="#716B76"
                    bgColor="black"
                    padding="1.5"
                    borderRadius="10px"
                    gap="2"
                    alignSelf="center"
                  >
                    <Box bgColor="#0E0D0F" borderRadius="15px" px="1.5" py="1">
                      <Image src={coin} height="27px"></Image>
                    </Box>
                    <Stack spacing={0}>
                      <Text color="#716B76" fontSize="10px">
                        PRIZE MONEY
                      </Text>
                      <Text color="white">$100,000</Text>
                    </Stack>
                  </Flex>
                  <Flex
                    color="#716B76"
                    bgColor="black"
                    padding="1.5"
                    borderRadius="10px"
                    gap="2"
                  >
                    <Box bgColor="#0E0D0F" borderRadius="15px" px="1.5" py="1">
                      <Image src={arrowdot} height="27px"></Image>
                    </Box>

                    <Stack spacing={0}>
                      <Text color="#716B76" fontSize="10px">
                        WAGER
                      </Text>
                      <Text color="white">$100</Text>
                    </Stack>
                  </Flex>
                </Flex>
              </Center>
              <Grid
                templateColumns="repeat(4, 1fr)"
                gap="0"
                w="100%"
                alignItems="center"
                zIndex="99999"
              >
                <GridItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  flexDirection="column"
                  gap="1"
                >
                  <Text fontSize="8px" color="white">
                    Match Score
                  </Text>
                  <Center
                    fontSize="xl"
                    color="white"
                    border="2px solid white"
                    w="60%"
                    borderRadius="4px"
                  >
                    1
                  </Center>
                </GridItem>
                <GridItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  flexDirection="column"
                  gap="1"
                >
                  <Text fontSize="8px" color="white">
                    Match Score
                  </Text>
                  <Center
                    fontSize="xl"
                    color="white"
                    border="2px solid white"
                    w="60%"
                    borderRadius="4px"
                  >
                    1
                  </Center>
                </GridItem>
                <GridItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  flexDirection="column"
                  gap="1"
                >
                  <Text fontSize="8px" color="white">
                    Match Score
                  </Text>
                  <Center
                    fontSize="xl"
                    color="white"
                    border="2px solid white"
                    w="60%"
                    borderRadius="4px"
                  >
                    1
                  </Center>
                </GridItem>
                <GridItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  flexDirection="column"
                  gap="1"
                >
                  <Text fontSize="8px" color="white">
                    Match Score
                  </Text>
                  <Center
                    fontSize="xl"
                    color="white"
                    border="2px solid white"
                    w="60%"
                    borderRadius="4px"
                  >
                    1
                  </Center>
                </GridItem>
              </Grid>
              <Button
                bg="white"
                fontSize="xs"
                color="#7E20C9"
                borderRadius="20px"
                px="10"
                fontWeight="bold"
                zIndex="99999"
              >
                Cashout
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Cashout;
