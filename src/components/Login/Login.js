import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link as ReachLink } from "react-router-dom";
import sectionBG from ".././assets/section-background.webp";
import HeroCup from ".././assets/Hero-cup.webp";
import gicon from ".././assets/iconG.webp";
import ficon from ".././assets/iconFB.webp";

import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/features/userDataSlice";
import AuthService from "../../services/user/auth";
import UserService from "../../services/user/user";
import "./Login.css";
import {
  Box,
  Center,
  Flex,
  HStack,
  Button,
  Image,
  Text,
  Link,
  Heading,
  Input,
  InputGroup,
  Grid,
  useMediaQuery,
} from "@chakra-ui/react";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHigherThan75Em] = useMediaQuery("(min-width: 75em)");
  const [errorMessage, setErrorMessage] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const [emailSelected, setEmailSelected] = useState(false);
  const [passwordSelected, setPasswordSelected] = useState(false);
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/home");
    }
  }, []);

  const fetchLogin = async () => {
    try {
      setButtonLoading(true);
      await AuthService.login(loginInput.email, loginInput.password);
      await fetchUserData();
      setErrorMessage(false);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setErrorMessage(true);
    } finally {
      setButtonLoading(false);
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await UserService.getData();
      dispatch(setUserData(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(event) {
    const { value, name } = event.target;

    setLoginInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Box
      minHeight="100vh"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      overflow="auto"
      bgImage={sectionBG}
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
        className="min-lg-1:grid min-lg-1:gap-8 min-lg-1:grid-cols-2"
        maxWidth="1200px"
        margin="auto"
        alignSelf="center"
      >
        <Box maxWidth="500px" margin="0 auto 1rem">
          <Box
            className="min-lg-1:!text-left"
            textAlign="center"
            width="95%"
            margin="0 auto"
          >
            <Heading
              as="h1"
              fontWeight="400"
              fontSize="clamp(2rem, 1.5263rem + 3.0316vw, 3.8rem)"
              color="white"
              marginBottom="2rem"
            >
              Ready to engage <br></br> with Batlaz?
            </Heading>
            <Text color="white">
              Nunc tincidunt urna dui, in porttitor mauris congue et. Proin
              ullamcorper purus quis tempor interdum.
            </Text>
          </Box>
          <Box margin="0 auto">
            <form onSubmit={handleSubmit}>
              <InputGroup className="label" display="block">
                <HStack
                  width="95%"
                  bgColor="black"
                  borderRadius="9px"
                  border={
                    errorMessage ? "2px solid #D62D2D" : "2px solid #1C1A1E"
                  }
                  _hover={{ border: "2px solid #7E20C9" }}
                  cursor="pointer"
                  onClick={() => inputEmailRef.current.focus()}
                  borderColor={emailSelected ? "#7E20C9" : "#1C1A1E"}
                  margin="1rem auto 6px"
                >
                  <Text
                    className="min-lg-1:!block"
                    display="none"
                    marginLeft="0.5rem"
                    w="30%"
                    paddingLeft="1vw"
                    color="#716B76"
                  >
                    Email Address
                  </Text>
                  <Input
                    type="email"
                    w={!isHigherThan75Em ? "100%" : "70%"}
                    bgColor="black"
                    focusBorderColor="none"
                    border="none"
                    _placeholder={{ color: "#716B76", marginLeft: "10px" }}
                    _focus={{
                      color: "white",
                      bgColor: "black",
                      cursor: "auto",
                    }}
                    onFocus={() => {
                      setEmailSelected(true);
                    }}
                    onBlur={() => {
                      setEmailSelected(false);
                    }}
                    color="#716B76"
                    onChange={handleChange}
                    name="email"
                    value={loginInput.email}
                    autoComplete="off"
                    spellCheck="false"
                    cursor="pointer"
                    ref={inputEmailRef}
                    placeholder={!isHigherThan75Em ? "Email Address" : null}
                  />
                </HStack>

                <HStack
                  width="95%"
                  bgColor="black"
                  borderRadius="9px"
                  _hover={{ border: "2px solid #7E20C9" }}
                  cursor="pointer"
                  border={
                    errorMessage ? "2px solid #D62D2D" : "2px solid #1C1A1E"
                  }
                  onClick={() => inputPasswordRef.current.focus()}
                  borderColor={passwordSelected ? "#7E20C9" : "#1C1A1E"}
                  margin="0 auto"
                >
                  <Text
                    className="min-lg-1:!block"
                    display="none"
                    w="30%"
                    marginLeft="0.5rem"
                    paddingLeft="1vw"
                    color="#716B76"
                  >
                    Password
                  </Text>
                  <Input
                    className=""
                    type="password"
                    w={!isHigherThan75Em ? "100%" : "70%"}
                    bgColor="black"
                    focusBorderColor="none"
                    border="none"
                    _placeholder={{ color: "#716B76", marginLeft: "10px" }}
                    _focus={{
                      color: "white",
                      bgColor: "black",
                      cursor: "auto",
                    }}
                    color="#716B76"
                    spellCheck="false"
                    isRequired
                    name="password"
                    autoComplete="off"
                    value={loginInput.password}
                    onChange={handleChange}
                    cursor="pointer"
                    ref={inputPasswordRef}
                    onFocus={() => {
                      setPasswordSelected(true);
                    }}
                    onBlur={() => {
                      setPasswordSelected(false);
                    }}
                    placeholder={!isHigherThan75Em ? "Password" : null}
                  />
                </HStack>
                <Text
                  marginTop="0.5rem"
                  color="hsla(0, 67%, 51%, 1)"
                  fontSize="1rem"
                  paddingLeft="1rem"
                  display={errorMessage ? "block" : "none"}
                >
                  Email or Password is Incorrect.
                </Text>
              </InputGroup>
              <Box>
                <Flex width="95%" margin="1rem auto" justifyContent="end">
                  <Box>
                    <Link as={ReachLink} to="/forgotpassword" color="#7E20C9">
                      Forgot Password?
                    </Link>
                  </Box>
                </Flex>
                <Center>
                  <Button
                    isLoading={buttonLoading}
                    className="btn-submit"
                    type="submit"
                    bgColor="#7E20C9"
                    w="95%"
                    color="white"
                    fontSize="1rem"
                    borderRadius="90px"
                    onClick={fetchLogin}
                  >
                    Login
                  </Button>
                </Center>

                <Flex flexDirection="column">
                  <Box
                    className="separator flex items-center gap-5"
                    width="95%"
                    margin="1rem auto"
                  >
                    <Box className="line"></Box>
                    <h2 className="text-[#B3B3B3]">Or login with</h2>
                    <Box className="line"></Box>
                  </Box>
                  <Grid
                    width="95%"
                    marginLeft="auto"
                    marginRight="auto"
                    gridTemplateColumns="1fr 1fr"
                    gap="1rem"
                  >
                    <Button
                      borderRadius="20px"
                      bgColor="transparent"
                      border="2px solid"
                      borderColor="#7E20C9"
                      color="white"
                      fontSize="xs"
                    >
                      <Image src={gicon} height="22px"></Image>
                      Google
                    </Button>
                    <Button
                      borderRadius="20px"
                      bgColor="transparent"
                      border="2px solid"
                      borderColor="#7E20C9"
                      color="white"
                      fontSize="xs"
                    >
                      <Image src={ficon} height="22px"></Image>
                      Facebook
                    </Button>
                  </Grid>
                </Flex>
                <Text
                  className="min-lg-1:!text-left"
                  textAlign="center"
                  color="white"
                  width="95%"
                  margin="1rem auto"
                >
                  Don’t have an account?{" "}
                  <Link as={ReachLink} to="/signup" color="#7E20C9">
                    Sign up here
                  </Link>
                </Text>
              </Box>
            </form>
          </Box>
        </Box>

        <Box className="min-lg-1:!block" display="none">
          <Image src={HeroCup} width="100%" display="block" />
        </Box>
      </Box>
    </Box>
  );
}
