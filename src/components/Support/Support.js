import React from "react";

import sectionBG from ".././assets/bgTrivia2.webp";
import messageIcon from ".././assets/chatIcon.webp";

import FooterGeneralGray from "../Footer/FooterGeneralGray";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  ScaleFade,
  Slide,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Textarea,
  UnorderedList,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

export default function Support() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <ScaleFade initialScale={0} in={isOpen}>
        <Box
          position="fixed"
          bottom="120px"
          right="50px"
          bgColor="hsla(0, 0%, 0%, 1)"
          width="20rem"
          padding="1.5rem"
          border="1px solid hsla(273, 73%, 46%, 1)"
          borderRadius="20px"
          color="#ACA7AF"
          zIndex="1"
        >
          <Text
            color="#fff"
            fontWeight="bold"
            marginBottom="1rem"
            fontSize="1.1rem"
          >
            Send a message
          </Text>
          <Flex flexDirection="column" gap="1rem">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Type Here" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="text" placeholder="Type Here" />
            </FormControl>
            <Box>
              <Text mb="8px">Message</Text>
              <Textarea borderRadius="8px" placeholder="Type Here" />
            </Box>
          </Flex>
        </Box>
      </ScaleFade>
      <Button
        borderRadius="50%"
        height="80px"
        width="80px"
        position="fixed"
        bottom="30px"
        right="50px"
        bgColor="#7E20C9"
        boxShadow="0px 20px 40px rgba(126, 32, 201, 0.35)"
        zIndex="1"
        _focus={{ outline: "none" }}
        _focusVisible={{ boxShadow: "none" }}
        onClick={onToggle}
      >
        <Image src={messageIcon} boxSize="1.8rem" />
      </Button>

      <Box
        flex="1"
        pt="24"
        px="24"
        bgImage={sectionBG}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex justifyContent="center" gap="2.5rem">
          <Box
            bgColor="#000000"
            maxWidth="28rem"
            color="#fff"
            borderRadius="20px"
            marginBottom="10rem"
          >
            <Stack spacing="1rem" padding="1.3rem">
              <Text fontSize="3xl" color="hsla(0, 0%, 100%, 1)">
                Need some help?
              </Text>
              <Stack
                border="2.4px solid #1C1A1E"
                borderRadius="12px"
                direction="row"
                spacing="0"
              >
                <Input
                  width="75%"
                  borderRadius="12px 0 0 12px"
                  border="none"
                  placeholder="Where you having trouble with?"
                  _focusVisible={{ boxShadow: "none" }}
                />
                <Button
                  bgColor="#7E20C9"
                  borderRadius="0 10px 10px 0"
                  width="25%"
                >
                  Get Help
                </Button>
              </Stack>

              <Text color="hsla(277, 5%, 67%, 1)" lineHeight="1.75rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                posuere viverra in faucibus{" "}
                <Text as="span" color="hsla(273, 73%, 46%, 1)" cursor="pointer">
                  click here
                </Text>
              </Text>
            </Stack>
            <Divider />
            <Stack spacing="1rem" padding="1.3rem">
              <Text fontSize="xl" fontWeight="bold">
                Help Center
              </Text>
              <Text lineHeight="1.75rem" color="hsla(0, 0%, 100%, 1)">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                posuere viverra in faucibus click here
              </Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={BsFillArrowRightCircleFill} />
                  <Text as="span" fontWeight="bold" cursor="pointer">
                    Quick Start
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFillArrowRightCircleFill} />
                  <Text as="span" fontWeight="bold" cursor="pointer">
                    Client Guide
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFillArrowRightCircleFill} />
                  <Text as="span" fontWeight="bold" cursor="pointer">
                    Privacy Policy
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={BsFillArrowRightCircleFill} />
                  <Text as="span" fontWeight="bold" cursor="pointer">
                    Terms of Services
                  </Text>
                </ListItem>
              </List>
            </Stack>
          </Box>
          <Box color="#fff" width="38rem">
            <Text fontSize="1.7rem" fontWeight="bold" marginBottom="1rem">
              FAQs
            </Text>
            <Accordion allowToggle>
              <Stack spacing="1rem">
                <AccordionItem border="none">
                  <Text>
                    <AccordionButton
                      _hover="none"
                      _focus={{ outline: "none" }}
                      bgColor="#000000"
                      display="flex"
                      justifyContent="space-between"
                      padding="1rem"
                    >
                      <Box color="hsla(277, 5%, 67%, 1)">
                        How do I get started?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel bgColor="#000000">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque posuere viverra in faucibus click hereLorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Neque posuere
                    viverra in faucibus click hereLorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Neque posuere viverra in
                    faucibus click here
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border="none">
                  <Text>
                    <AccordionButton
                      _hover="none"
                      _focus={{ outline: "none" }}
                      bgColor="#000000"
                      display="flex"
                      justifyContent="space-between"
                      padding="1rem"
                    >
                      <Box color="hsla(277, 5%, 67%, 1)">
                        Why do I need an account manager?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel bgColor="#000000">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque posuere viverra in faucibus click hereLorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Neque posuere
                    viverra in faucibus click hereLorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Neque posuere viverra in
                    faucibus click here
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border="none">
                  <Text>
                    <AccordionButton
                      _hover="none"
                      _focus={{ outline: "none" }}
                      bgColor="#000000"
                      display="flex"
                      justifyContent="space-between"
                      padding="1rem"
                    >
                      <Box color="hsla(277, 5%, 67%, 1)">
                        How can I stop receiving estimated bills?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel bgColor="#000000">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque posuere viverra in faucibus click hereLorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Neque posuere
                    viverra in faucibus click hereLorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Neque posuere viverra in
                    faucibus click here
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border="none">
                  <Text>
                    <AccordionButton
                      _hover="none"
                      _focus={{ outline: "none" }}
                      bgColor="#000000"
                      display="flex"
                      justifyContent="space-between"
                      padding="1rem"
                    >
                      <Box color="hsla(277, 5%, 67%, 1)">
                        What makes you different from others?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel bgColor="#000000">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque posuere viverra in faucibus click hereLorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Neque posuere
                    viverra in faucibus click hereLorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Neque posuere viverra in
                    faucibus click here
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border="none">
                  <Text>
                    <AccordionButton
                      _hover="none"
                      _focus={{ outline: "none" }}
                      bgColor="#000000"
                      display="flex"
                      justifyContent="space-between"
                      padding="1rem"
                    >
                      <Box color="hsla(277, 5%, 67%, 1)">
                        How do I add money?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel bgColor="#000000">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque posuere viverra in faucibus click hereLorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Neque posuere
                    viverra in faucibus click hereLorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Neque posuere viverra in
                    faucibus click here
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem border="none">
                  <Text>
                    <AccordionButton
                      _hover="none"
                      _focus={{ outline: "none" }}
                      bgColor="#000000"
                      display="flex"
                      justifyContent="space-between"
                      padding="1rem"
                    >
                      <Box color="hsla(277, 5%, 67%, 1)">
                        How do I withdraw my money?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel bgColor="#000000">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Neque posuere viverra in faucibus click hereLorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Neque posuere
                    viverra in faucibus click hereLorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Neque posuere viverra in
                    faucibus click here
                  </AccordionPanel>
                </AccordionItem>
              </Stack>
            </Accordion>
          </Box>
        </Flex>
      </Box>
      <FooterGeneralGray />
    </Flex>
  );
}
