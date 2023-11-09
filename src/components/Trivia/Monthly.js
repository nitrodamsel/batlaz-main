import React, { useEffect, useState } from "react";

import clock from ".././assets/clock.webp";

import arrow from ".././assets/arrowdot.webp";
import coin from ".././assets/coin.webp";
import mask from ".././assets/maskMonthly.webp";

import { AiFillFire } from "react-icons/ai";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./Daily.css";

import { intervalToDuration } from "date-fns";
import { useQuery } from "react-query";
import GameService from "../../services/game_engine/games";
import { getHours, getMinutes, getSeconds } from "../../utilities/common";

export default function Monthly() {
  const [monthlyGames, setmonthlyGames] = useState();
  const { isSuccess } = useQuery(
    "monthly games",
    () => GameService.getData("monthly"),
    {
      skip: true,
      onSuccess: (data) => setmonthlyGames(data?.data),
    }
  );

  useEffect(() => {
    if (isSuccess) {
      function setGamesData() {
        setmonthlyGames((prevData) => {
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
      {monthlyGames?.map((monthlyGamesData, index) => (
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
              padding="5"
              borderTopLeftRadius="5"
              borderTopRightRadius="5"
              bgImage={mask}
              objectFit="cover"
              height="44vh"
            >
              <Flex gap="5" w="100%" justifyContent="center">
                <Flex
                  flexDirection="column"
                  gap="2"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text color="white" fontSize="2xl" fontWeight="bold">
                    {monthlyGamesData.name}
                  </Text>
                  <Flex gap="10" flexDirection="row">
                    <Flex alignItems="center" padding="0" margin="0" gap="2">
                      <Flex>
                        <Text color="#716B76" fontSize="xs">
                          Rewards
                        </Text>
                      </Flex>
                      <Flex gap="1">
                        <Image src={coin} height="22px"></Image>
                        <Text color="white" fontWeight="bold">
                          ${monthlyGamesData.prizeMoney}
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
                          {monthlyGamesData.wager}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex gap="1">
                    <Image src={clock}></Image>
                    <Text color="white" fontWeight="bold">
                      June 30th 9:00AM GMT
                    </Text>
                  </Flex>
                  <Flex flexDirection="column" alignItems="center">
                    <Text fontWeight="bold" color="#FFC81C" fontSize="4xl">
                      $123.13
                    </Text>
                    <Text color="#716B76" fontSize="xl">
                      Jackpot Prize
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap="5" flexDirection="row" alignItems="center">
                <Flex justifyContent="center"></Flex>
              </Flex>
            </Box>
          </Box>

          <Flex flexDirection="column" w="100%">
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
                      {getHours(monthlyGamesData?.battleStartDuration?.hours)
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
                        monthlyGamesData?.battleStartDuration?.minutes
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
                        monthlyGamesData?.battleStartDuration?.seconds
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
                <Flex
                  flexDirection="column"
                  gap="1"
                  w="70%"
                  justifyContent="center"
                >
                  <Flex gap="10">
                    <Flex w="15%" gap="1" color="#716B76" fontSize="xs">
                      {getHours(
                        monthlyGamesData?.registrationDeadlineDuration?.hours
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
                        monthlyGamesData?.registrationDeadlineDuration?.minutes
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
                        monthlyGamesData?.registrationDeadlineDuration?.seconds
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
                  <Flex gap="10">
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
