import React, { useState, useEffect } from "react";
import { useNavigate, Link as ReachLink } from "react-router-dom";

import sectionBG from ".././assets/section-background.webp";

import "./Verification.css";
import {
  Box,
  HStack,
  Button,
  Stack,
  Text,
  Link,
  Heading,
  PinInput,
  PinInputField,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useEmail } from "../../contexts/ResetPasswordContext";
import { useCode } from "../../contexts/ResetPasswordContext";
import AuthService from "../../services/user/auth";

export default function Verification() {
  const navigate = useNavigate();
  const [pinCode, setPinCode] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [myEmail] = useEmail();
  const [isCode, setIsCode] = useCode();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/home");
    }
  }, []);

  useEffect(() => {
    if (myEmail === undefined) {
      navigate("/forgotpassword");
    }
  }, []);

  async function handleClick() {
    setButtonLoading(true);
    AuthService.verifyResetPasswordOTP(myEmail, pinCode)
      .then((res) => {
        if (res.status === 200) {
          setIsCode(pinCode);
          navigate("/setnewpassword");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(true);
      });
    setButtonLoading(false);
  }

  const fetchResendCode = () => {
    AuthService.resetPassword(myEmail)
      .then(() => {
        console.log("Code Resent");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.status === 400) {
          navigate("/forgotpassword");
        }
      });
  };

  return (
    <Box
      minHeight="100vh"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      bgImage={sectionBG}
      overflow="hidden"
    >
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
      <Box className="mx-auto">
        <Box textAlign="center" marginBottom="2rem">
          <Heading
            as="h1"
            fontWeight="400"
            fontSize="clamp(2.5rem, 1.5rem + 4vw, 3.5rem)"
            color="white"
            marginBottom="1.5rem"
          >
            Authentication Code
          </Heading>
          <Text color="white">
            Please confirm your account by entering authentication code sent to
            <br></br>
            {myEmail?.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2")}
          </Text>
        </Box>
        <Box className="mx-auto" textAlign="center">
          <Stack className="mx-auto" maxWidth="278px" marginBottom="2rem">
            <FormControl isInvalid={errorMessage} marginBottom="2rem">
              <HStack display="inline-block" gap="2rem">
                <PinInput
                  type="number"
                  otp
                  size="lg"
                  onChange={(e) => {
                    setPinCode(e);
                  }}
                  autoComplete="off"
                  isInvalid={errorMessage}
                >
                  <PinInputField
                    bgColor="black"
                    _placeholder={{ color: "white" }}
                    fontSize="3xl"
                    borderWidth="1px"
                    borderColor="#7E20C9"
                    _focus={{ color: "white" }}
                    autoComplete="off"
                    color="white"
                  />
                  <PinInputField
                    bgColor="black"
                    _placeholder={{ color: "white" }}
                    fontSize="3xl"
                    borderWidth="1px"
                    borderColor="#7E20C9"
                    _focus={{ color: "white" }}
                    autoComplete="off"
                    color="white"
                  />
                  <PinInputField
                    bgColor="black"
                    _placeholder={{ color: "white" }}
                    fontSize="3xl"
                    borderWidth="1px"
                    borderColor="#7E20C9"
                    _focus={{ color: "white" }}
                    autoComplete="off"
                    color="white"
                  />
                  <PinInputField
                    bgColor="black"
                    _placeholder={{ color: "white" }}
                    fontSize="3xl"
                    borderWidth="1px"
                    borderColor="#7E20C9"
                    _focus={{ color: "white" }}
                    autoComplete="off"
                    color="white"
                  />
                  <PinInputField
                    bgColor="black"
                    _placeholder={{ color: "white" }}
                    fontSize="3xl"
                    borderWidth="1px"
                    borderColor="#7E20C9"
                    _focus={{ color: "white" }}
                    autoComplete="off"
                    color="white"
                  />
                </PinInput>
              </HStack>
              {errorMessage ? (
                <FormErrorMessage textAlign={"center"}>
                  Authentication Code is Incorrect.
                </FormErrorMessage>
              ) : null}
            </FormControl>
            <Button
              fontSize="1rem"
              bgColor="#7E20C9"
              color="white"
              borderRadius="20px"
              isLoading={buttonLoading ? true : false}
              onClick={handleClick}
            >
              Submit
            </Button>
          </Stack>
          <Box>
            <Text color="white">
              It may take a minute to receive your code. <br></br>Haven’t
              received it?{" "}
              <Link onClick={() => fetchResendCode} color="#7E20C9">
                Resend a new code
              </Link>
              .
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
