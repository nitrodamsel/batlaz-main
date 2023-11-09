import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mastercard from ".././assets/mastercard.svg";
import paypal from ".././assets/paypal.svg";
import visa from ".././assets/visa.svg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function AddMoney() {
  const navigate = useNavigate();
  const [addMoneyModal, setAddMoneyModal] = useState(false);
  const [addCardShown, setAddCardShown] = useState(false);

  return (
    <Box className="mx-auto" maxWidth="65rem">
      <Modal isOpen={addMoneyModal}>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          className="py-6"
          borderRadius="20px"
          textAlign="center"
          color="#fff"
          maxWidth="38rem"
          bgColor="hsla(273, 73%, 46%, 1)"
        >
          <ModalHeader fontSize="4xl" fontWeight="400">
            Confirm your Add Money to <br /> your Wallet
          </ModalHeader>
          <ModalBody fontSize="1rem">
            Are you sure you want to continue this transaction?
          </ModalBody>
          <ModalFooter width="100%" marginTop="2rem">
            <Center w="100%" gap="1rem">
              <Button
                onClick={() => setAddMoneyModal(false)}
                borderRadius="90px"
                color="#7E20C9"
                width="40%"
              >
                Cancel
              </Button>
              <Button
                bgColor="rgba(25, 6, 40, 0.2)"
                borderRadius="90px"
                width="40%"
              >
                Continue
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
          Add Money to Wallet
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
          w="70%"
          flexDirection="column"
          bgColor="black"
          padding="7"
          borderRadius="15px"
        >
          <Box marginBottom="1.8rem">
            <Text
              color="#fff"
              fontSize="18px"
              fontWeight="500"
              marginBottom="1rem"
            >
              Amount
            </Text>
            <InputGroup w="50%">
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="$"
              />
              <Input
                borderColor="hsla(273, 73%, 46%, 1)"
                color="hsla(0, 0%, 100%, 1)"
                placeholder="Enter amount"
              />
            </InputGroup>
          </Box>
          <Box>
            <Text color="#fff" fontSize="18px" fontWeight="500">
              Select Payment Method
            </Text>
            <RadioGroup>
              <Stack>
                <Box>
                  <Radio
                    marginBlock="0.5rem"
                    value="card"
                    colorScheme="hsla(273, 73%, 46%, 1)"
                  >
                    <Text color="#fff">Card</Text>
                  </Radio>
                </Box>
                <Box marginLeft="1rem !important" maxWidth="35rem">
                  <Stack gap="0.3rem">
                    <RadioGroup gap="0.3rem">
                      <Stack gap="0.3rem">
                        <Box
                          paddingInline="1rem"
                          paddingBlock="0.2rem"
                          bgColor="hsla(270, 8%, 8%, 1)"
                          w="100%"
                        >
                          <Radio
                            value="mastercard"
                            colorScheme="hsla(273, 73%, 46%, 1)"
                          >
                            <Flex alignItems="center" gap="14rem">
                              <Box
                                fontSize="14px"
                                color="#fff"
                                paddingLeft="1rem"
                              >
                                <Box>Ending in: *****1214</Box>
                                <Box color="hsla(273, 5%, 44%, 1)">
                                  Last time used: Thu, Sept 14, 2022
                                </Box>
                              </Box>
                              <Box>
                                <Image
                                  display="block"
                                  boxSize="3rem"
                                  src={mastercard}
                                />
                              </Box>
                            </Flex>
                          </Radio>
                        </Box>
                        <Box
                          paddingInline="1rem"
                          paddingBlock="0.2rem"
                          bgColor="hsla(270, 8%, 8%, 1)"
                        >
                          <Radio
                            value="visa"
                            colorScheme="hsla(273, 73%, 46%, 1)"
                          >
                            <Flex alignItems="center" gap="14rem">
                              <Box
                                fontSize="14px"
                                color="#fff"
                                paddingLeft="1rem"
                              >
                                <Box>Ending in: *****1214</Box>
                                <Box color="hsla(273, 5%, 44%, 1)">
                                  Last time used: Thu, Sept 14, 2022
                                </Box>
                              </Box>
                              <Box>
                                <Image boxSize="3rem" src={mastercard} />
                              </Box>
                            </Flex>
                          </Radio>
                        </Box>
                      </Stack>
                    </RadioGroup>
                    <Center
                      gap="2"
                      color="hsla(273, 73%, 46%, 1)"
                      marginTop="0.7rem !important"
                    >
                      {!addCardShown ? (
                        <Flex
                          onClick={() => setAddCardShown(true)}
                          cursor="pointer"
                          alignItems="center"
                          gap="0.5rem"
                        >
                          <AiOutlinePlus />
                          <Text>Add Card</Text>
                        </Flex>
                      ) : null}
                      {addCardShown ? (
                        <Box
                          isOpen="false"
                          bgColor="hsla(270, 8%, 8%, 1)"
                          w="100%"
                          padding="1rem"
                          color="#fff"
                        >
                          <Text>Add Card</Text>
                          <Divider
                            borderColor="hsl(270, 7%, 25%)"
                            marginBlock="1rem"
                          />
                          <FormControl marginBottom="1rem">
                            <Flex
                              justifyContent="space-between"
                              alignItems="center"
                            >
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
                          <Divider
                            borderColor="hsl(270, 7%, 25%)"
                            marginBlock="1rem"
                          />
                          <Flex gap="2" justifyContent="end">
                            <Button
                              width="6rem"
                              border="2px solid #7E20C9"
                              borderRadius="90px"
                              color="#fff"
                              bgColor="rgba(25, 6, 40, 0.2)"
                              onClick={() => setAddCardShown(false)}
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
                        </Box>
                      ) : null}
                    </Center>
                  </Stack>
                </Box>
                <Box>
                  <Radio value="paypal" colorScheme="hsla(273, 73%, 46%, 1)">
                    <Image src={paypal} boxSize="4rem" />
                  </Radio>
                </Box>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Flex
          w="30%"
          bgColor="black"
          padding="7"
          borderRadius="15px"
          flexDirection="column"
          gap="5"
        >
          <Text color="white">Battle Summary</Text>
          <Text color="white" fontSize="sm">
            Vestibulum felis sapien, tristique vitae finibus et, aliquam quis
            turpis. Nam euismod nisi in mauris convallis tempor. Vestibulum
            felis sapien, tristique vitae finibus et, aliquam quis turpis. Nam
            euismod nisi in mauris convallis tempor.
          </Text>
          <Flex>
            <Flex w="100%" flexDirection="column">
              <Checkbox
                size="lg"
                colorScheme="#7E20C9"
                color="white"
                defaultChecked
              >
                <Text fontSize="sm">I agree to terms and conditions</Text>
              </Checkbox>
            </Flex>
          </Flex>
          <Button
            bgColor="#7E20C9"
            color="white"
            fontSize="xs"
            borderRadius="20px"
            onClick={() => setAddMoneyModal(true)}
          >
            Continue
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
