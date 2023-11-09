import React, { useEffect, useState } from "react";
import { useNavigate, Link as ReachLink } from "react-router-dom";
import sectionBG from ".././assets/section-background.webp";
import HeroCup from ".././assets/Hero-cup.webp";
import "./index.css";
import {
  Box,
  Button,
  Center,
  Image,
  Text,
  Link,
  Heading,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { useEmail } from "../../contexts/ResetPasswordContext";
import { useCode } from "../../contexts/ResetPasswordContext";
import AuthService from "../../services/user/auth";

export default function SetNewPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState({
    newPass: "",
    confirmPass: "",
  });
  const newPassPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const [errorSamePassword, setErrorSamePassword] = useState(false);
  const [isPasswordMatch, setPasswordMatch] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [myEmail] = useEmail();
  const [isCode] = useCode();
  const { onOpen } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (myEmail === undefined) {
      navigate("/forgotpassword");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) navigate("/home");
  }, []);

  function handleChange(event) {
    const { value, name } = event.target;

    setNewPassword((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setButtonLoading(true);

    if (newPassPattern.test(newPassword.newPass)) setPasswordValid(true);
    else {
      setPasswordValid(false);
      setErrorSamePassword(false);
    }

    if (newPassword.newPass === newPassword.confirmPass) setPasswordMatch(true);
    else {
      setPasswordMatch(false);
      setErrorSamePassword(false);
    }

    await fetch();

    setButtonLoading(false);
  }

  async function fetch() {
    if (
      newPassPattern.test(newPassword.newPass) &&
      newPassword.newPass === newPassword.confirmPass
    ) {
      await fetchSetNewPassword();
    }
  }

  const fetchSetNewPassword = async () => {
    AuthService.setNewPassword(isCode, myEmail, newPassword.newPass)
      .then((res) => {
        if (res.status === 200) {
          setErrorSamePassword(false);
          setIsModalOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
        console.log(err.response.data.message);
        if (err.response.data.message === "You cannot use the same password.") {
          setErrorSamePassword(true);
        } else {
          setErrorSamePassword(false);
        }
      });
  };

  return (
    <Box
      minHeight="100vh"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      overflow="hidden"
      bgImage={sectionBG}
    >
      <Modal isCentered isOpen={isModalOpen}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="hsla(273, 73%, 46%, 1)"
          textAlign="center"
        >
          <ModalHeader
            fontSize="2.5rem"
            position="relative"
            top="-8"
            padding="0"
            lineHeight="1.5"
            color="#fff"
            mb="0"
            textShadow="3px 0 hsla(273, 73%, 46%, 1), -3px 0 hsla(273, 73%, 46%, 1), 0 3px hsla(273, 73%, 46%, 1), 0 -3px hsla(273, 73%, 46%, 1),
               3px 3px hsla(273, 73%, 46%, 1), -3px -3px hsla(273, 73%, 46%, 1), 3px -3px hsla(273, 73%, 46%, 1), -3px 3px hsla(273, 73%, 46%, 1)"
          >
            AWESOME!
          </ModalHeader>
          <ModalBody
            position="relative"
            top="-7"
            padding="0"
            fontSize="1.2rem"
            color="#fff"
            mt="3.3rem"
            mb="1.5rem"
          >
            Your password has been changed.
          </ModalBody>
          <ModalFooter paddingTop="0">
            <Button
              className="!mx-auto"
              backgroundColor="white"
              color="hsla(273, 73%, 46%, 1)"
              mr={0}
              width="50%"
              borderRadius="20px"
              onClick={() => navigate("/login")}
            >
              Okay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Link
          as={ReachLink}
          to="/"
          color="white"
          fontSize="1.5rem"
          margin="2rem"
          display="inline-block"
        >
          Batlaz.
        </Link>
      </Box>
      <Box className="min-lg-1:grid min-lg-1:grid-cols-2">
        <Box className="mx-auto" maxWidth="480px" textAlign="center">
          <Box className="mb-8">
            <Heading
              w="90%"
              className="mt-3 mb-4 mx-auto min-lg-1:!text-start"
              as="h1"
              fontSize="clamp(2.5rem, 2rem + 2vw, 3.5rem)"
              color="white"
            >
              Set up a new<br></br>password
            </Heading>
            <Text
              color="white"
              width="90%"
              className="mx-auto min-lg-1:!text-start"
            >
              Nunc tincidunt urna dui, in porttitor mauris congue et. Proin
              ullamcorper purus quis tempor interdum.
            </Text>
          </Box>
          <form onSubmit={handleSubmit}>
            <InputGroup
              display="flex"
              flexDirection="column"
              gap="5"
              marginTop="2vh"
            >
              <FormControl
                isInvalid={
                  !isPasswordMatch || !isPasswordValid || errorSamePassword
                }
              >
                <Input
                  type="password"
                  placeholder="Password"
                  w="90%"
                  bgColor="black"
                  focusBorderColor="#7E20C9"
                  border="none"
                  name="newPass"
                  value={newPassword.newPass}
                  onChange={handleChange}
                  marginBottom="1rem"
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  w="90%"
                  bgColor="black"
                  focusBorderColor="#7E20C9"
                  border="none"
                  name="confirmPass"
                  value={newPassword.confirmPass}
                  onChange={handleChange}
                />
                {!isPasswordValid && (
                  <FormErrorMessage
                    width="90%"
                    className="mx-auto"
                    textAlign="start"
                  >
                    "Password must have at least have a number, an uppercase and
                    lowercase character, and should be a minimum of 8
                    characters."
                  </FormErrorMessage>
                )}
                {!isPasswordMatch && (
                  <FormErrorMessage width="90%" className="mx-auto">
                    "Password is not match."
                  </FormErrorMessage>
                )}
                {errorSamePassword && (
                  <FormErrorMessage width="90%" className="mx-auto">
                    "You cannot use existing password."
                  </FormErrorMessage>
                )}
              </FormControl>
            </InputGroup>
            <Button
              className="mx-auto mt-6"
              type="submit"
              bgColor="#7E20C9"
              w="90%"
              color="white"
              border="none"
              borderRadius="18px"
              fontSize="sm"
              fontWeight="bold"
              isLoading={buttonLoading ? true : false}
            >
              Submit
            </Button>
          </form>
        </Box>
        <Box className="min-lg-1:!block" maxWidth="540px" display="none">
          <Image src={HeroCup} />
        </Box>
      </Box>
    </Box>
  );
}
