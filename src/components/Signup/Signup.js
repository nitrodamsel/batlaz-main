import React, { useState, useEffect } from "react";
import sectionBG from ".././assets/section-background.webp";
import PhoneInput from "react-phone-input-2";
import { useForm, Controller } from "react-hook-form";
import { Link as ReachLink } from "react-router-dom";
import AuthService from "../../services/user/auth";
import CountryService from "../../services/user/country";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import "./Signup.css";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";

import { DatePicker } from "@mantine/dates";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCalendarDate } from "react-icons/bs";

export default function Signup() {
  const [isHigherThan75Em] = useMediaQuery("(min-width: 75em)");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isEmailTaken, setEmailTaken] = useState(false);
  const [isMinor, setIsMinor] = useState(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const errorNotif = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const customStyles = {
    singleValue: (provided) => ({
      ...provided,
      color: "#716B76",
      backgroundColor: "black",
      outline: "none",
    }),
    control: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: "none",
      border: "none",
      boxShadow: "none",
      height: "100%",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };

  const options = countryCodes.map((country) => {
    const _countries = { value: country.code, label: country.name };
    return _countries;
  });

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      setButtonLoading(true);
      const res = await AuthService.signUp(values);
      if (res.status === 200) {
        setEmailTaken(false);
        setIsModalOpen(true);
      }
    } catch (err) {
      console.log(err);
      if (
        err.response.status === 400 &&
        err.response.data.message === "Email is already registered with Batlaz."
      ) {
        setEmailTaken(true);
        !isHigherThan75Em && errorNotif(err.response.data.message);
      }
      if (
        err.response.status === 400 &&
        err.response.data.message ===
          "You must be at least 18 years old to sign up."
      ) {
        setIsMinor(true);
        !isHigherThan75Em && errorNotif(err.response.data.message);
      }

      if (
        err.response.status === 400 &&
        err.response.data.message ===
          "Password must have at least have a number, an uppercase and lowercase character, and should be a minimum of 8 characters."
      ) {
        setPasswordIncorrect(true);
        !isHigherThan75Em && errorNotif(err.response.data.message);
      }

      if (err.response.status >= 401 && err.response.status <= 599) {
        errorNotif("Something went wrong.");
      }
    } finally {
      setButtonLoading(false);
    }
  };

  if (!isHigherThan75Em && errors.firstName) {
    errorNotif(errors.firstName?.message);
    toast.clearWaitingQueue();
  } else if (!isHigherThan75Em && errors.lastName) {
    errorNotif(errors.lastName?.message);
    toast.clearWaitingQueue();
  } else if (!isHigherThan75Em && errors.email) {
    errorNotif(errors.email?.message);
    toast.clearWaitingQueue();
  } else if (!isHigherThan75Em && errors.countryCode) {
    errorNotif(errors.countryCode?.message);
    toast.clearWaitingQueue();
  } else if (!isHigherThan75Em && errors.phoneNumber) {
    errorNotif(errors.phoneNumber?.message);
    toast.clearWaitingQueue();
  } else if (!isHigherThan75Em && errors.dateOfBirth) {
    errorNotif(errors.dateOfBirth?.message);
    toast.clearWaitingQueue();
  } else if (!isHigherThan75Em && errors.username) {
    errorNotif(errors.username?.message);
    toast.clearWaitingQueue();
  } else if (!isHigherThan75Em && errors.password) {
    errorNotif(errors.password?.message);
    toast.clearWaitingQueue();
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/home");
    }

    const fetchCountry = async () => {
      try {
        const res = await CountryService.getData();
        setCountryCodes(res.data);
      } catch (err) {
        errorNotif("Failed to fetch countries.");
        toast.clearWaitingQueue();
      }
    };
    fetchCountry();
  }, []);

  return (
    <Box
      bgImage={sectionBG}
      minHeight="100vh"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      overflow="hidden"
    >
      <ToastContainer limit="1" />
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
            color="#fff"
            mt="3.3rem"
            mb="1.5rem"
          >
            <Box fontWeight="bold" marginBottom="1rem">
              Your account has been created successfully!
            </Box>
            <Box fontWeight="bold">
              Go to Profile for full verification of your account
            </Box>
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
              Got It
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
      <Box display="block" marginBottom="3rem" marginTop="5vh">
        <Box
          className="min-lg-1:grid min-lg-1:grid-cols-2 gap-4"
          maxWidth="1200px"
          margin="auto"
        >
          <Box textAlign="center">
            <Box marginTop="2vh" marginBottom="3rem">
              <Heading
                fontWeight="400"
                fontSize="clamp(2rem, 1.2308rem + 4.9231vw, 4rem);"
                as="h1"
                color="hsla(0, 0%, 100%, 1)"
                marginBottom="clamp(2rem, 1rem + 5.3333vw, 3rem)"
              >
                Sign up on Batlaz <br />&{" "}
                <Text as="span" color="hsla(273, 73%, 46%, 1)">
                  Enjoy our battle
                </Text>
              </Heading>
              <Text className="min-lg-1:!block" color="#fff" display="none">
                Nunc tincidunt urna dui, in porttitor mauris congue et.{" "}
                <br></br>
                Proin ullamcorper purus quis tempor interdum.
              </Text>
            </Box>
          </Box>
          <Flex justifyContent="center" marginBottom="50px">
            <Box marginInline="auto" width="100%">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box margin="0 auto" maxWidth="400px">
                  <Box className="min-lg-1:!block" display="flex" gap="0.3rem">
                    <Tooltip
                      className="min-lg-1:!block"
                      display="none"
                      isOpen={errors.firstName}
                      hasArrow
                      label={errors.firstName?.message}
                      bg="red.600"
                      placement="left"
                    >
                      <HStack
                        bgColor="black"
                        borderRadius="6.5px"
                        border="2px solid"
                        borderColor={errors.firstName && "hsla(0, 67%, 51%, 1)"}
                        _hover={{
                          border: "2px solid ",
                          borderColor: "#7E20C9",
                        }}
                        cursor="pointer"
                        marginBottom="10px"
                      >
                        <Text
                          className="min-lg-1:!block"
                          display="none"
                          w="40%"
                          paddingLeft="12px"
                          color="#716B76"
                        >
                          First Name
                        </Text>
                        <Input
                          className="placeholder-gray-500 min-lg-1:!w-3/5"
                          type="text"
                          {...register("firstName", {
                            required: "First Name is required",
                          })}
                          _focus={{
                            color: "white",
                          }}
                          autoComplete="nope"
                          w="100%"
                          focusBorderColor="none"
                          border="none"
                          color="#716B76"
                          spellCheck="false"
                          placeholder={!isHigherThan75Em ? "First Name" : null}
                        />
                      </HStack>
                    </Tooltip>
                    <Tooltip
                      className="min-lg-1:!block"
                      display="none"
                      isOpen={errors.lastName}
                      hasArrow
                      label={errors.lastName?.message}
                      bg="red.600"
                      placement="left"
                    >
                      <HStack
                        bgColor="black"
                        borderRadius="6.5px"
                        border="2px solid"
                        borderColor={errors.lastName && "hsla(0, 67%, 51%, 1)"}
                        _hover={{
                          border: "2px solid ",
                          borderColor: "#7E20C9",
                        }}
                        cursor="pointer"
                        marginBottom="10px"
                      >
                        <Text
                          className="min-lg-1:!block"
                          display="none"
                          w="40%"
                          paddingLeft="12px"
                          color="#716B76"
                        >
                          Last Name
                        </Text>
                        <Input
                          className="placeholder-gray-500 min-lg-1:!w-3/5"
                          type="text"
                          {...register("lastName", {
                            required: "Last Name is required.",
                          })}
                          _focus={{
                            color: "white",
                          }}
                          autoComplete="nope"
                          w="100%"
                          focusBorderColor="none"
                          border="none"
                          color="#716B76"
                          spellCheck="false"
                          placeholder={!isHigherThan75Em ? "Last Name" : null}
                        />
                      </HStack>
                    </Tooltip>
                  </Box>
                  <Tooltip
                    className="min-lg-1:!block"
                    display="none"
                    isOpen={errors.email || isEmailTaken}
                    hasArrow
                    label={
                      errors.email?.message ||
                      (isEmailTaken
                        ? "Email is already registered with Batlaz."
                        : null)
                    }
                    bg="red.600"
                    placement="left"
                  >
                    <HStack
                      bgColor="black"
                      borderRadius="6.5px"
                      border="2px solid"
                      borderColor={
                        errors.email || isEmailTaken
                          ? "hsla(0, 67%, 51%, 1)"
                          : null
                      }
                      _hover={{ border: "2px solid ", borderColor: "#7E20C9" }}
                      cursor="pointer"
                      marginBottom="10px"
                    >
                      <Text
                        className="min-lg-1:!block"
                        display="none"
                        w="40%"
                        paddingLeft="12px"
                        color="#716B76"
                      >
                        Email Address
                      </Text>
                      <Input
                        className="placeholder-gray-500 min-lg-1:!w-3/5"
                        type="email"
                        {...register("email", {
                          required: "Email is required.",
                          onChange: () => {
                            setEmailTaken(false);
                          },
                        })}
                        _focus={{
                          color: "white",
                        }}
                        autoComplete="nope"
                        w="100%"
                        focusBorderColor="none"
                        border="none"
                        color="#716B76"
                        spellCheck="false"
                        placeholder={!isHigherThan75Em ? "Email Address" : null}
                      />
                    </HStack>
                  </Tooltip>

                  <Tooltip
                    className="min-lg-1:!block"
                    display="none"
                    isOpen={errors.countryCode}
                    hasArrow
                    label={errors.countryCode?.message}
                    bg="red.600"
                    placement="left"
                  >
                    <HStack
                      bgColor="black"
                      borderRadius="6.5px"
                      border="2px solid"
                      borderColor={errors.countryCode && "hsla(0, 67%, 51%, 1)"}
                      _hover={{ border: "2px solid ", borderColor: "#7E20C9" }}
                      cursor="pointer"
                      marginBottom="10px"
                    >
                      <Text
                        className="min-lg-1:!block"
                        display="none"
                        w="40%"
                        paddingLeft="12px"
                        color="#716B76"
                      >
                        Country
                      </Text>
                      <Box w="100%">
                        <Controller
                          name="countryCode"
                          control={control}
                          rules={{
                            required: "Country is required",
                          }}
                          render={({ field: { onChange } }) => (
                            <Select
                              className="placeholder-gray-500"
                              styles={customStyles}
                              options={options}
                              placeholder={!isHigherThan75Em ? "Country" : null}
                              onChange={(val) => onChange(val.value)}
                            />
                          )}
                        />
                      </Box>
                    </HStack>
                  </Tooltip>

                  <Tooltip
                    className="min-lg-1:!block"
                    display="none"
                    isOpen={errors.phoneNumber}
                    hasArrow
                    label={errors.phoneNumber?.message}
                    bg="red.600"
                    placement="left"
                  >
                    <HStack
                      bgColor="black"
                      borderRadius="6.5px"
                      border="2px solid"
                      borderColor={errors.phoneNumber && "hsla(0, 67%, 51%, 1)"}
                      _hover={{ border: "2px solid ", borderColor: "#7E20C9" }}
                      cursor="pointer"
                      marginBottom="10px"
                      minHeight="44px"
                    >
                      <Text
                        className="min-lg-1:!block"
                        display="none"
                        w="33%"
                        paddingLeft="12px"
                        color="#716B76"
                      >
                        Phone Number
                      </Text>
                      <Box className="min-lg-1:!w-2/3" w="100%">
                        <Controller
                          name="phoneNumber"
                          control={control}
                          rules={{
                            required: "Phone Number is required",
                          }}
                          render={({ field }) => (
                            <PhoneInput
                              buttonStyle={{
                                margin: "auto 0",
                                height: "80%",
                              }}
                              inputClass="signup-input--placeholder"
                              inputStyle={{
                                width: "100%",
                                height: "40px",
                                font: "inherit",
                              }}
                              placeholder={
                                !isHigherThan75Em ? "Phone Number" : null
                              }
                              {...field}
                            />
                          )}
                        />
                      </Box>
                    </HStack>
                  </Tooltip>

                  <Tooltip
                    className="min-lg-1:!block"
                    display="none"
                    isOpen={errors.dateOfBirth || isMinor}
                    hasArrow
                    label={
                      errors.dateOfBirth?.message ||
                      (isMinor
                        ? "You must be at least 18 years old to sign up."
                        : null)
                    }
                    bg="red.600"
                    placement="left"
                  >
                    <HStack
                      cursor="pointer"
                      bgColor="black"
                      borderRadius="6.5px"
                      border="2px solid"
                      borderColor={
                        errors.dateOfBirth || isMinor
                          ? "hsla(0, 67%, 51%, 1)"
                          : null
                      }
                      _hover={{ border: "2px solid ", borderColor: "#7E20C9" }}
                      marginBottom="10px"
                      onClick={() => setIsMinor(false)}
                    >
                      <Text
                        className="min-lg-1:!block"
                        display="none"
                        w="40%"
                        paddingLeft="12px"
                        color="#716B76"
                      >
                        Birthdate
                      </Text>

                      <Controller
                        name="dateOfBirth"
                        control={control}
                        rules={{
                          required: "Birthdate is required",
                        }}
                        render={({ field }) => (
                          <DatePicker
                            placeholder={!isHigherThan75Em ? "Birthdate" : null}
                            firstDayOfWeek="sunday"
                            icon={<BsCalendarDate size="1.5rem" />}
                            clearable={false}
                            onChange={(val) => {
                              field.onChange(format(val, "yyyy-MM-dd"));
                            }}
                          />
                        )}
                      />
                    </HStack>
                  </Tooltip>
                  {/* // max: {
                           value: format(
                             new Date(
                              now.getFullYear() - 18,
                               now.getMonth(),
                               now.getDate()
                            ),
                            "yyyy-MM-dd"
                           ),
                           message: "Must be 18 years old and above",
                         }, */}
                  <Tooltip
                    className="min-lg-1:!block"
                    display="none"
                    isOpen={errors.username}
                    hasArrow
                    label={errors.username?.message}
                    bg="red.600"
                    placement="left"
                  >
                    <HStack
                      bgColor="black"
                      borderRadius="6.5px"
                      border="2px solid"
                      borderColor={errors.username && "hsla(0, 67%, 51%, 1)"}
                      _hover={{ border: "2px solid ", borderColor: "#7E20C9" }}
                      cursor="pointer"
                      marginBottom="10px"
                    >
                      <Text
                        className="min-lg-1:!block"
                        display="none"
                        w="40%"
                        paddingLeft="12px"
                        color="#716B76"
                      >
                        Username
                      </Text>
                      <Input
                        className="placeholder-gray-500 min-lg-1:!w-3/5"
                        type="text"
                        placeholder={!isHigherThan75Em ? "Username" : null}
                        {...register("username", {
                          required: "Username is required",
                          minLength: {
                            value: 8,
                            message: "Minimum length should be 8 characters",
                          },
                        })}
                        _focus={{
                          color: "white",
                        }}
                        autoComplete="nope"
                        w="100%"
                        focusBorderColor="none"
                        border="none"
                        color="#716B76"
                        spellCheck="false"
                      />
                    </HStack>
                  </Tooltip>
                  <Tooltip
                    className="min-lg-1:!block"
                    display="none"
                    isOpen={errors.password || passwordIncorrect}
                    hasArrow
                    label={
                      errors.password?.message ||
                      (passwordIncorrect
                        ? "Password must have at least have a number, an uppercase and lowercase character, and should be a minimum of 8 characters."
                        : null)
                    }
                    bg="red.600"
                    placement="left"
                  >
                    <HStack
                      bgColor="black"
                      borderRadius="6.5px"
                      border="2px solid"
                      borderColor={
                        errors.password || passwordIncorrect
                          ? "hsla(0, 67%, 51%, 1)"
                          : null
                      }
                      _hover={{ border: "2px solid ", borderColor: "#7E20C9" }}
                      cursor="pointer"
                    >
                      <Text
                        className="min-lg-1:!block"
                        display="none"
                        w="40%"
                        paddingLeft="12px"
                        color="#716B76"
                      >
                        Password
                      </Text>
                      <Input
                        className="placeholder-gray-500 min-lg-1:!w-3/5"
                        type="password"
                        placeholder={!isHigherThan75Em ? "Password" : null}
                        {...register("password", {
                          required: "Password is required",
                          onChange: () => {
                            setPasswordIncorrect(false);
                          },
                        })}
                        // pattern: {
                        //   value:
                        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#$@!%&*?]{8,}$/,
                        //   message:
                        //     "Password must have at least a number, an uppercase and lowercase character, and should be a minimum of 8 characters.",
                        // },
                        _focus={{
                          color: "white",
                        }}
                        autoComplete="nope"
                        w="100%"
                        focusBorderColor="none"
                        border="none"
                        color="#716B76"
                      />
                    </HStack>
                  </Tooltip>

                  <Box>
                    <Flex marginTop="1.5rem" marginBottom="0.8rem">
                      <Checkbox isRequired size="lg" marginRight="0.5rem" />

                      <Text color="#ffffff">I am 18 years old and above</Text>
                    </Flex>

                    <Button
                      marginTop="0.5rem"
                      backgroundColor="hsla(273, 73%, 46%, 1)"
                      color="#FCFCFD"
                      isLoading={buttonLoading}
                      type="submit"
                      w="100%"
                      borderRadius="5.625rem"
                      marginBottom="0.8rem"
                      height="3rem"
                    >
                      Sign Up
                    </Button>
                    <Box textAlign={!isHigherThan75Em ? "center" : "start"}>
                      <Text color="hsla(0, 0%, 100%, 1)">
                        Already have an account?{" "}
                        <Link
                          as={ReachLink}
                          to="/login"
                          color="hsla(273, 73%, 46%, 1)"
                        >
                          Login here
                        </Link>
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </form>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
