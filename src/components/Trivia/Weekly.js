import React, { useEffect, useState } from "react";

import clock from ".././assets/clock.webp";

import arrow from ".././assets/arrowdot.webp";
import coin from ".././assets/coin.webp";
import mask from ".././assets/maskTrivia.webp";

import { AiFillFire } from "react-icons/ai";

import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import "./Daily.css";

import { intervalToDuration } from "date-fns";
import { useQuery } from "react-query";
import GameService from "../../services/game_engine/games";
import { getHours, getMinutes, getSeconds } from "../../utilities/common";

export default function Weekly() {
  const [weeklyGames, setweeklyGames] = useState();
  const { isSuccess, refetch } = useQuery(
    "weekly games",
    () => GameService.getData("weekly"),
    {
      skip: true,
      onSuccess: (data) => setweeklyGames(data?.data),
    }
  );

  const registerToTriviaGame = async (gameID) => {
    await GameService.register(gameID);
    refetch();
  };

  useEffect(() => {
    if (isSuccess) {
      function setGamesData() {
        setweeklyGames((prevData) => {
          const tempArr = [];
          for (let idx = 0; idx < prevData?.length; idx++) {
            const batStartDuration =
              new Date(prevData[idx].battleStart) - new Date() < 0
                ? {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                  }
                : intervalToDuration({
                    end: new Date(prevData[idx].battleStart),
                    start: new Date(),
                  });

            const regEndDuration =
              new Date(prevData[idx].registrationDeadline) - new Date() < 0
                ? {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                  }
                : intervalToDuration({
                    end: new Date(prevData[idx].registrationDeadline),
                    start: new Date(),
                  });
            tempArr.push({
              ...prevData[idx],
              battleStartDuration: batStartDuration,
              registrationDeadlineDuration: regEndDuration,
            });
          }
          return tempArr;
        });
        setTimeout(() => {
          setGamesData();
        }, 1000);
      }
      setGamesData();
    }
  }, [isSuccess]);

  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      gap="5"
      px="0"
      position="relative"
    >
      {weeklyGames?.map((weeklyGamesData, index) => (
        <Box
          key={index}
          w="100%"
          display="flex"
          flexDirection="column"
          borderRadius="16"
        >
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              bgColor="black"
              padding="5"
              borderTopLeftRadius="18"
              borderTopRightRadius="18"
              bgImage={mask}
              objectFit="cover"
              height="17vh"
            >
              <Flex gap="5">
                <Flex flexDirection="column" gap="4">
                  <Text color="white" fontSize="lg">
                    {weeklyGamesData.name}
                  </Text>
                  <Flex gap="10">
                    <Flex alignItems="center" padding="0" margin="0" gap="2">
                      <Flex>
                        <Text color="#716B76" fontSize="xs">
                          Prize Money
                        </Text>
                      </Flex>
                      <Flex gap="1">
                        <Image src={coin} height="22px"></Image>
                        <Text color="white" fontWeight="bold">
                          ${weeklyGamesData.prizeMoney}
                        </Text>
                      </Flex>
                    </Flex>

                    <Flex alignItems="center" padding="0" margin="0" gap="2">
                      <Flex>
                        <Text color="#716B76" fontSize="xs">
                          Wager
                        </Text>
                      </Flex>
                      <Flex gap="1">
                        <Image src={arrow} height="22px"></Image>
                        <Text color="white" fontWeight="bold">
                          ${weeklyGamesData.wager}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap="5" flexDirection="row" alignItems="center">
                <Flex justifyContent="center"></Flex>
              </Flex>
            </Box>
          </Box>

          <Flex flexDirection="column" w="100%" marginTop="-11vh">
            <Flex justifyContent="end">
              <Flex
                w={{ md: "45%", lg: "40%", xl: "40%" }}
                bgColor="black"
                alignItems="center"
                justifyContent="center"
                gap={{ md: "4", lg: "6", xl: "7" }}
                py="4"
                className="newpoly"
                marginBottom="-1px"
              >
                <Flex alignItems="center" gap="2">
                  <Image src={clock} height="4"></Image>
                  <Text color="white" fontSize={{ md: "xs" }}>
                    9:00 AM GMT
                  </Text>
                </Flex>
                {weeklyGamesData?.isAlreadyRegistered ? (
                  <Link
                    bgColor="#6BC920"
                    fontSize="xs"
                    color="white"
                    marginLeft="10px"
                    borderRadius="20px"
                    px={{ md: "5", lg: "10", xl: "12" }}
                    href="/gameplay"
                    py="3"
                    fontWeight="bold"
                  >
                    Enter Battle
                  </Link>
                ) : (
                  <Link
                    bgColor="#6BC920"
                    fontSize="xs"
                    color="white"
                    marginLeft="10px"
                    borderRadius="20px"
                    px={{ md: "5", lg: "10", xl: "12" }}
                    py="3"
                    fontWeight="bold"
                    onClick={() => registerToTriviaGame(weeklyGamesData?.id)}
                  >
                    Register Now
                  </Link>
                )}
              </Flex>
            </Flex>
            <Flex
              bgColor="black"
              borderBottomLeftRadius="18"
              borderBottomRightRadius="18"
            >
              <Flex
                w="60%"
                flexDirection="row"
                gap="1"
                alignItems="center"
                px="5"
                py="5"
              >
                <Flex w="20%" alignItems="center" gap="1">
                  <Text color="white" fontWeight="bold" fontSize="sm">
                    Battle Starts In
                  </Text>
                  <AiFillFire color="orange"></AiFillFire>
                </Flex>
                <Flex flexDirection="column" gap="1" w="80%">
                  <Flex gap="0">
                    <Flex w="15%" gap="1" color="#716B76" fontSize="xs">
                      {getHours(weeklyGamesData?.battleStartDuration?.hours)
                        .split("")
                        .map((digit, index) => (
                          <Text
                            key={index}
                            fontSize="lg"
                            bgColor="#1A181C"
                            px="2"
                            py="1"
                            borderRadius="5"
                            color="white"
                          >
                            {digit}
                          </Text>
                        ))}
                    </Flex>
                    <Flex w="15%" gap="1" color="#716B76" fontSize="xs">
                      {getMinutes(weeklyGamesData?.battleStartDuration?.minutes)
                        .split("")
                        .map((digit, index) => (
                          <Text
                            key={index}
                            fontSize="lg"
                            bgColor="#1A181C"
                            px="2"
                            py="1"
                            borderRadius="5"
                            color="white"
                          >
                            {digit}
                          </Text>
                        ))}
                    </Flex>
                    <Flex w="15%" gap="1" color="#716B76" fontSize="xs">
                      {getSeconds(weeklyGamesData?.battleStartDuration?.seconds)
                        .split("")
                        .map((digit, index) => (
                          <Text
                            key={index}
                            fontSize="lg"
                            bgColor="#1A181C"
                            px="2"
                            py="1"
                            borderRadius="5"
                            color="white"
                          >
                            {digit}
                          </Text>
                        ))}
                    </Flex>
                  </Flex>
                  <Flex>
                    <Flex w="15%" color="#716B76" fontSize="xs">
                      HOURS
                    </Flex>
                    <Flex w="15%" color="#716B76" fontSize="xs">
                      MINUTES
                    </Flex>
                    <Flex w="15%" color="#716B76" fontSize="xs">
                      SECONDS
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex w="40%" flexDirection="row" gap="1" paddingRight="5" py="3">
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  w="30%"
                >
                  <Text color="white" fontWeight="bold" fontSize="sm">
                    Registration Ends in
                  </Text>
                </Flex>
                <Flex flexDirection="column" gap="1" w="70%">
                  <Flex gap="3">
                    <Flex w="15%" gap="1" color="#716B76" fontSize="xs">
                      {getHours(
                        weeklyGamesData?.registrationDeadlineDuration?.hours
                      )
                        .split("")
                        .map((digit, index) => (
                          <Text
                            key={index}
                            fontSize="lg"
                            bgColor="#1A181C"
                            px="2"
                            py="1"
                            borderRadius="5"
                            color="white"
                          >
                            {digit}
                          </Text>
                        ))}
                    </Flex>
                    <Flex w="15%" gap="1" color="#716B76" fontSize="xs">
                      {getMinutes(
                        weeklyGamesData?.registrationDeadlineDuration?.minutes
                      )
                        .split("")
                        .map((digit, index) => (
                          <Text
                            key={index}
                            fontSize="lg"
                            bgColor="#1A181C"
                            px="2"
                            py="1"
                            borderRadius="5"
                            color="white"
                          >
                            {digit}
                          </Text>
                        ))}
                    </Flex>
                    <Flex w="15%" gap="1" color="#716B76" fontSize="xs">
                      {getSeconds(
                        weeklyGamesData?.registrationDeadlineDuration?.seconds
                      )
                        .split("")
                        .map((digit, index) => (
                          <Text
                            key={index}
                            fontSize="lg"
                            bgColor="#1A181C"
                            px="2"
                            py="1"
                            borderRadius="5"
                            color="white"
                          >
                            {digit}
                          </Text>
                        ))}
                    </Flex>
                  </Flex>
                  <Flex gap="3">
                    <Flex w="15%" color="#716B76" fontSize="xs">
                      HOURS
                    </Flex>
                    <Flex w="15%" color="#716B76" fontSize="xs">
                      MINUTES
                    </Flex>
                    <Flex w="15%" color="#716B76" fontSize="xs">
                      SECONDS
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      ))}
    </Box>
  );
}
