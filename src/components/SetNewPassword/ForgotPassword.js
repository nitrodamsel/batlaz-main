import React, { useState, useEffect } from "react";
import { useNavigate, Link as ReachLink } from "react-router-dom";
import sectionBG from ".././assets/section-background.webp";
import HeroCup from ".././assets/Hero-cup.webp";
import { useEmail } from "../../contexts/ResetPasswordContext";
import AuthService from "../../services/user/auth";
import "./ForgotPassword.css";
import {
  Box,
  Button,
  Image,
  Text,
  Link,
  Heading,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
} from "@chakra-ui/react";

export default function SetNewPassword() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isEmailUnregistered, setEmailUnregistered] = useState(false);
  const [isEmailInvalid, setEmailInvalid] = useState(false);

  const [myEmail, setIsEmail] = useEmail();
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    if (localStorage.getItem("accessToken")) navigate("/home");
  }, [localStorage.getItem("accessToken")]);

  const fetchForgotPassword = async () => {
    setButtonLoading(true);
    AuthService.resetPassword(inputEmail)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          setIsEmail(inputEmail);
          navigate("/verification");
        }
      })
      .catch((err) => {
        console.log(err.code);
        if (err.request.status === 400) {
          setEmailUnregistered(true);
        } else {
          alert(err.code);
        }
      });
    setButtonLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setButtonLoading(true);
    try {
      setEmailUnregistered(false);

      pattern.test(inputEmail)
        ? fetchForgotPassword() && setEmailInvalid(false)
        : setEmailInvalid(true);
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <Box
      minHeight="100vh"
      bgImage={sectionBG}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
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
      <Box
        className="min-lg-1:grid min-lg-1:grid-cols-2 min-lg-1:gap-8"
        margin="0 auto"
        maxWidth="1200px"
      >
        <Box maxWidth="500px" margin="0 auto">
          <Box marginTop="2rem">
            <Heading
              className="min-lg-1:!text-left"
              w="90%"
              as="h1"
              fontWeight="400"
              fontSize="clamp(2.3rem, 1.9842rem + 2.0211vw, 3.5rem)"
              color="white"
              textAlign="center"
              marginLeft="auto"
              marginRight="auto"
              marginBottom="0.3em"
            >
              Forgot Password?
            </Heading>

            <Text
              className="min-lg-1:!text-left"
              w="90%"
              textAlign="center"
              color="white"
              marginLeft="auto"
              marginRight="auto"
              marginBottom="1rem"
            >
              Nunc tincidunt urna dui, in porttitor mauris congue et. Proin
              ullamcorper purus quis tempor interdum.
            </Text>
            <form>
              <InputGroup display="flex" flexDirection="column">
                <FormControl
                  textAlign="center"
                  marginTop="1rem"
                  marginBottom="1rem"
                  isInvalid={isEmailUnregistered || isEmailInvalid}
                >
                  <Input
                    marginBottom="1rem"
                    className="!placeholder-gray-500"
                    type="text"
                    w="90%"
                    placeholder="Email Address"
                    bgColor="black"
                    focusBorderColor="#7E20C9"
                    border="none"
                    name="email"
                    value={inputEmail}
                    onChange={(e) => {
                      setInputEmail(e.target.value);
                    }}
                    autoComplete="off"
                    spellCheck="false"
                    _focus={{ color: "white" }}
                  />
                  {isEmailUnregistered && (
                    <FormErrorMessage
                      marginLeft="auto"
                      marginRight="auto"
                      w="90%"
                    >
                      Email is not yet registered.
                    </FormErrorMessage>
                  )}
                  {isEmailInvalid && (
                    <FormErrorMessage
                      marginLeft="auto"
                      marginRight="auto"
                      w="90%"
                    >
                      Email is Invalid.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Box
                  w="90%"
                  marginLeft="auto"
                  marginRight="auto"
                  marginBottom="0.5rem"
                >
                  <Button
                    type="submit"
                    bgColor="#7E20C9"
                    color="white"
                    border="none"
                    fontSize="sm"
                    isLoading={buttonLoading}
                    onClick={handleSubmit}
                  >
                    Send Code
                  </Button>
                </Box>
                <Text
                  marginLeft="auto"
                  marginRight="auto"
                  w="90%"
                  color="white"
                >
                  Have an account?{" "}
                  <Link as={ReachLink} to="/login" color="#7E20C9">
                    Go Back to Login
                  </Link>
                </Text>
              </InputGroup>
            </form>
          </Box>
        </Box>
        <Box className="min-lg-1:!block" maxWidth="500px" display="none">
          <Image src={HeroCup} />
        </Box>
      </Box>
    </Box>
  );
}
