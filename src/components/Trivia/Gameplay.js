import { React, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import sectionBG from ".././assets/bgGameplay.webp";

import Header from "../Header/Header";

import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import GamePlayProvider from "../../provider/gameplay";
import { setConnectionState } from "../../redux/features/triviaSlice";
import BattleStartCountdown from "./BattleStartCountdown";
import "./Daily.css";
import { getTimeConsumed } from "../../utilities/common";

const OverlayOne = () => (
  <ModalOverlay bg="blackAlpha.400" backdropFilter="blur(10px) " />
);

const gm = GamePlayProvider.getInstance();

export default function Gameplay() {
  const { findMatchData, matchData, questionsData, connectionState } =
    useSelector((state) => state.trivia);
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const gameId = searchParams.get("id");

  const findMatch = async (connection) => {
    var category = searchParams.get("category") ?? "multi";
    if (gameId) gm.findMatch(category, gameId);
    else navigate("/");
  };

  const findMatchDataRef = useRef(findMatchData);
  const matchDataRef = useRef(matchData);
  const questionsDataRef = useRef(questionsData);

  useEffect(() => {
    if (gm.getConnection()) {
      gm.destroyConnection();
      dispatch(setConnectionState(undefined));
    }

    if (userData.id && !gm.getConnection()) {
      gm.initializeConnection();
      const connection = gm.getConnection();
      connection
        .start()
        .then(() => console.log("SignalR is Connected"))
        .then(main)
        .then(() => findMatch());
      dispatch(setConnectionState(connection));

      function main() {
        gm.initializeEvents(
          dispatch,
          navigate,
          findMatchDataRef,
          matchDataRef,
          questionsDataRef,
          userData
        );
      }
    }
  }, [userData.id]);

  return gameId ? (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        h="100vh"
        py="0"
        bgImage={sectionBG}
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Multiplayer></Multiplayer>
        {matchData.allPlayersConfirmed === true && (
          <BattleStartCountdown></BattleStartCountdown>
        )}
        {/* {connectionState?._connectionState !== "Connected" ? (
          <SearchingOpponent />
        ) : (
          <Box py="0.5" w="100%">
            <Flex
              alignItems="center"
              height="auto"
              gap={otherPlayers().length > 1 ? "15vh" : ""}
              flexDirection="column"
              justifyContent="center"
            >
              <Text color="white" fontSize="5xl">
                Farm Animals Trivia Battle
              </Text>

              <Flex gap="2" w="100%" justifyContent="center" marginTop="-2vh">
                <Flex
                  color="#716B76"
                  bgColor="black"
                  w={{ md: "20%", lg: "17%", xl: "12%" }}
                  padding="1.5"
                  borderRadius="10px"
                  gap="2"
                >
                  <Box bgColor="#0E0D0F" borderRadius="15px" px="1.5" py="1">
                    <Image src={coin} height="38px"></Image>
                  </Box>
                  <Stack spacing={0}>
                    <Text color="#716B76" fontSize="xs">
                      PRIZE MONEY
                    </Text>
                    <Text color="white">$100,000</Text>
                  </Stack>
                </Flex>
                <Flex
                  color="#716B76"
                  bgColor="black"
                  w={{ md: "20%", lg: "17%", xl: "12%" }}
                  padding="1.5"
                  borderRadius="10px"
                  gap="2"
                >
                  <Box bgColor="#0E0D0F" borderRadius="15px" px="1.5" py="1">
                    <Image src={arrowdot} height="38px"></Image>
                  </Box>

                  <Stack spacing={0}>
                    <Text color="#716B76" fontSize="xs">
                      WAGER
                    </Text>
                    <Text color="white">$100</Text>
                  </Stack>
                </Flex>
              </Flex>
              {otherPlayers().length > 1 ? (
                <Multiplayer></Multiplayer>
              ) : (
                <>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    gap="20"
                    marginTop="5vh"
                  >
                    <Flex flexDirection="column" alignItems="center" gap="3">
                      <Box
                        border="3px solid"
                        borderColor={
                          playerOne?.confirmed ? "#7E20C9" : "#716B76"
                        }
                        px="1"
                        py="1"
                        borderRadius="50%"
                      >
                        <Box bgColor="#7E20C9" borderRadius="50%">
                          <Avatar
                            src={playerOne?.profileImage}
                            name={`${playerOne?.firstName} ${playerOne?.lastName}`}
                            size="2xl"
                            bgColor="#7E20C9"
                          />
                        </Box>
                      </Box>
                      <Stack textAlign="center">
                        <Text fontSize="2xl" fontWeight="bold" color="white">
                          {playerOne?.firstName} {playerOne?.lastName}
                        </Text>
                        <Text color="#716B76">@{playerOne?.username}</Text>
                      </Stack>
                      <HStack>
                        <Flag
                          className="!h-[50px] !w-[50px]"
                          code={playerOne?.countryCode}
                          fallback={<span>Unknown</span>}
                        />
                        <Text color="#716B76">{playerOne?.countryCode}</Text>
                      </HStack>
                    </Flex>

                    <Text fontSize="3xl" color="white">
                      VS
                    </Text>
                    {otherPlayers().map((otherPlayerData, index) => (
                      <Flex
                        key={index}
                        flexDirection="column"
                        alignItems="center"
                        gap="3"
                      >
                        <Box
                          border="3px solid"
                          borderColor={
                            otherPlayerData?.confirmed ? "#7E20C9" : "#716B76"
                          }
                          px="1"
                          py="1"
                          borderRadius="50%"
                        >
                          <Box bgColor="#7E20C9" borderRadius="50%">
                            <Avatar
                              src={otherPlayerData?.profileImage}
                              name={`${otherPlayerData?.firstName} ${otherPlayerData?.lastName}`}
                              size="2xl"
                              bgColor="#7E20C9"
                            />
                          </Box>
                        </Box>
                        <Stack textAlign="center">
                          <Text fontSize="2xl" fontWeight="bold" color="white">
                            {otherPlayerData?.firstName}{" "}
                            {otherPlayerData?.lastName}
                          </Text>
                          <Text color="#716B76">
                            @{otherPlayerData?.username}
                          </Text>
                        </Stack>
                        <HStack>
                          <Flag
                            className="!h-[50px] !w-[50px]"
                            code={otherPlayerData?.countryCode}
                            fallback={<span>Unknown</span>}
                          />
                          <Text color="#716B76">
                            {otherPlayerData?.countryCode}
                          </Text>
                        </HStack>
                      </Flex>
                    ))}
                  </Flex>
                  <Flex>
                    <Link
                      bgColor="#7E20C9"
                      color="white"
                      fontSize="xs"
                      px="14"
                      border="none"
                      onClick={startBattle}
                      borderRadius="20px"
                      py="3"
                      fontWeight="bold"
                    >
                      Start Battle
                    </Link>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent
                        marginTop="20%"
                        bg="#7E20C9"
                        borderRadius="10px"
                        border="1px solid"
                        borderColor="#7E20C9"
                        paddingTop="8"
                        paddingBottom="10"
                      >
                        <ModalHeader textAlign="center" color="white">
                          Prepare your battle
                        </ModalHeader>
                        <ModalCloseButton />
                        <Flex
                          justifyContent="center"
                          flexDirection="column"
                          alignItems="center"
                          gap="3"
                        >
                          <Flex
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            py="3"
                          >
                            <Text color="white">
                              You may now choose your questions for your
                              opponent{" "}
                            </Text>
                            <Text color="white">Time: 2 mins</Text>
                          </Flex>
                          <Link
                            color="#7E20C9"
                            as={ReachLink}
                            to="/war"
                            bg="white"
                            px="10"
                            borderRadius="20px"
                            py="2"
                            fontSize="xs"
                            fontWeight="bold"
                          >
                            Choose Questions
                          </Link>
                        </Flex>
                      </ModalContent>
                    </Modal>
                  </Flex>
                </>
              )}
            </Flex>
          </Box>
        )} */}
      </Flex>
      {/* Cancelled Match Modal */}
      <Modal isCentered isOpen={matchData.isCancelled}>
        {<OverlayOne />}
        <ModalContent bg="#7E20C9" py="8" px="10" w="60%">
          <ModalHeader textAlign="center" color="white">
            Match has been cancelled
          </ModalHeader>

          <ModalBody>
            <Text
              textAlign="center"
              fontSize="xs"
              fontWeight="bold"
              color="white"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </Text>
          </ModalBody>
          <Center spacing={5}>
            <Button
              onClick={() => window.location.reload(false)}
              fontSize="xs"
              bg="white"
              color="#7E20C9"
              w="40%"
              py="1"
              borderRadius="20px"
              mx="2"
            >
              Find New Match
            </Button>
          </Center>
        </ModalContent>
      </Modal>
    </Box>
  ) : (
    <></>
  );
}

function Multiplayer() {
  const { findMatchData, matchData } = useSelector((state) => state.trivia);
  const { userData } = useSelector((state) => state.user);

  const currentUserMatchData = matchData?.players
    ? matchData?.players.filter((e) => e.userId === userData.id)[0]
    : {};

  const startBattle = () => {
    gm.confirmMatch();
  };

  useEffect(() => {
    if (
      findMatchData.confirmMatchCountdown && /// if user not confirmed and confirm match countdown do not start
      !currentUserMatchData.confirmed
    ) {
      /// added timeout for showing the waiting time part (to be removed on future)
      setTimeout(() => {
        startBattle();
      }, Math.floor(Math.random() * 10000));
    }
  }, [findMatchData.confirmMatchCountdown, currentUserMatchData.confirmed]);

  return (
    <Box py="0.5" w="100%">
      <Flex
        alignItems="center"
        flexDirection="column"
        justifyContent="space-between"
        height="80vh"
      >
        <Text color="white" fontSize="5xl">
          Multiplayer Trivia Battle
        </Text>
        <Box
          border="3px solid"
          // borderColor={userData?.confirmed ? "#7E20C9" : "#716B76"}
          px="1"
          py="1"
          borderRadius="50%"
        >
          <Box bgColor="#7E20C9" borderRadius="50%">
            <Avatar
              src={userData?.profileImage}
              name={`${userData?.firstName} ${userData?.lastName}`}
              size="2xl"
              bgColor="#7E20C9"
              color="white"
            />
          </Box>
        </Box>
        <Box>
          {/* <Text fontSize="10px" color="#FFFFFF" align="center" mb="20px">
            {"Estimated Time Queue "}
            {getTimeConsumed(findMatchData.findMatchCountdown)}
          </Text> */}
          <Flex
            bg={"#1c1a1e"}
            borderRadius="10px"
            px={findMatchData.confirmMatchCountdown ? "14" : "7"}
            py="0.6rem"
            color="white"
            justifyContent="center"
            position="relative"
            alignItems="center"
            border={"1px"}
            borderColor={"white"}
          >
            <Box
              position="absolute"
              left="-20px"
              bg="#221E25"
              color={"#7E20C9"}
              borderRadius="50%"
              padding="6px"
              fontSize="xl"
              borderWidth="2px"
              borderColor={"#7E20C9"}
            >
              {currentUserMatchData.confirmed ? (
                <IoCheckmarkSharp color="white"></IoCheckmarkSharp>
              ) : (
                <IoCloseSharp color="white"></IoCloseSharp>
              )}
            </Box>
            <Text textAlign="center" fontWeight="bold" color={"#716b76"}>
              {findMatchData.confirmMatchCountdown
                ? `Waiting (${findMatchData.confirmMatchCountdown})`
                : `Finding Match (${getTimeConsumed(
                    findMatchData.findMatchCountdown
                  )})`}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
