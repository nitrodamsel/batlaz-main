import React, { useEffect, useState } from "react";
import sectionBG from ".././assets/section-background.webp";

import fb from ".././assets/fb-violet.webp";
import ig from ".././assets/ig-violet.webp";
import twitter from ".././assets/twitter-violet.webp";

import gamebox from ".././assets/gameroombox.webp";
import loseTrophy from ".././assets/losetrophy.webp";
import winloseBG from ".././assets/win-loseBG.webp";
import winTrophy from ".././assets/wintrophy.webp";

import arrowdot from ".././assets/arrowdot.webp";
import coin from ".././assets/coin.webp";

import { ReactComponent as Crown } from ".././assets/gameroom_crown.svg";

import Cashout from "./Cashout";
import Chat from "./Chat";

import { BsChatDots } from "react-icons/bs";
import { MdPersonAddAlt } from "react-icons/md";

import { AiOutlineCloseCircle } from "react-icons/ai";

import {
  Avatar,
  Box,
  Button,
  Center,
  chakra,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Stack,
  Text,
  useCheckbox,
  useDisclosure,
} from "@chakra-ui/react";
import "./GameRoom.css";

import categoryData from "./Data/CategoryData";

import { useSelector } from "react-redux";

import sandclock from ".././assets/sandclock.webp";

import { IoCheckmarkSharp, IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Flag from "react-world-flags";
import GamePlayProvider from "../../provider/gameplay";
import {
  getCrownColorByPlayersPoints,
  getNumberWithOrdinal,
  getTimeConsumed,
} from "../../utilities/common";

const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.400"
    zIndex={"999999"}
    backdropFilter="blur(10px) "
  />
);

export default function GameRoom() {
  const navigate = useNavigate();
  const gm = GamePlayProvider.getInstance();

  const { matchData, questionsData, connectionState } = useSelector(
    (state) => state.trivia
  );
  const { userData } = useSelector((state) => state.user);

  const playerOne = matchData?.players
    ? matchData?.players?.filter((e) => e.userId === userData.id)[0]
    : {};

  const allPlayersData = () => {
    return [...matchData?.players]?.sort((a, b) => b.points - a.points);
  };

  const [showPlayerTotalPoints, setshowPlayerTotalPoints] = useState([]);

  useEffect(() => {
    matchData?.players?.forEach((matchDataPlayers) => {
      if (
        matchDataPlayers.points !== matchDataPlayers.previousPoints &&
        matchDataPlayers.points > 0
      ) {
        setshowPlayerTotalPoints((oldArray) => [
          ...oldArray,
          matchDataPlayers.userId,
        ]);
        setTimeout(() => {
          setshowPlayerTotalPoints([]);
        }, 2000);
      }
    });
  }, [matchData?.players]);

  useEffect(() => {
    if (
      matchData.winner !== userData.id &&
      matchData.allPlayersDoneWithTrivia
    ) {
      onOpenLosePopup();
    } else if (
      matchData.winner === userData.id &&
      matchData.allPlayersDoneWithTrivia
    ) {
      onOpenWinPopup();
      // navigate(`/gameplay?id=${matchData.id}`);
    }
  }, [matchData]);

  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Flex alignItems="center" gap="2">
          <Text color="white" fontSize="md" fontWeight="bold">
            {minutes}:{seconds}
          </Text>
          {seconds <= 59 && minutes == 0 ? (
            <>
              <Text color="white" fontSize="sm">
                seconds remaining
              </Text>
            </>
          ) : (
            <>
              <Text color="white" fontSize="sm">
                minutes remaining
              </Text>
            </>
          )}
        </Flex>
      );
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenReconnecting,
    onOpen: onOpenReconnecting,
    onClose: onCloseReconnecting,
  } = useDisclosure();

  const {
    isOpen: isOpenDisconnected,
    onOpen: onOpenDisconnected,
    onClose: onCloseDisconnected,
  } = useDisclosure();

  const {
    isOpen: isOpenReconnection,
    onOpen: onOpenReconnection,
    onClose: onCloseReconnection,
  } = useDisclosure();

  const {
    isOpen: isOpenWinPopup,
    onOpen: onOpenWinPopup,
    onClose: onCloseWinPopup,
  } = useDisclosure();

  const {
    isOpen: isOpenLosePopup,
    onOpen: onOpenLosePopup,
    onClose: onCloseLosePopup,
  } = useDisclosure();

  const {
    isOpen: isOpenTournamentResultPopup,
    onOpen: onOpenTournamentResultPopup,
    onClose: onCloseTournamentResultPopup,
  } = useDisclosure();

  // const [question, setQuestion] = useState(mockAPI);
  const [max, setmax] = useState(0);

  useEffect(() => {
    if (!max) setmax(questionsData.countdown);
  }, [questionsData.countdown]);

  const getCategoryImage = () => {
    return categoryData?.filter(
      (e) => e.text.toLowerCase() === questionsData.category?.toLowerCase()
    )[0]?.image;
  };

  const CustomCheckbox = (props) => {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props);

    return (
      <chakra.label
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridColumnGap={2}
        borderColor="green.500"
        rounded="lg"
        cursor="pointer"
        {...htmlProps}
        w="100%"
        borderRadius="15px"
        py="2"
        px="3"
        justifyContent="start"
        bg="#141215"
        my="3"
      >
        <input {...getInputProps()} hidden />
        <Flex
          alignItems="center"
          justifyContent="center"
          border="2px solid"
          borderColor="white"
          borderRadius="50%"
          w={4}
          h={4}
          {...getCheckboxProps()}
        >
          {state.isChecked && (
            <Box w={2} h={2} bg="#7E20C9" borderRadius="50%" />
          )}
        </Flex>
        <Text color="white" mx="4" {...getLabelProps()}>
          Click me
        </Text>
      </chakra.label>
    );
  };

  const isCorrectAnswerAndUserAnswerSame = () => {
    return questionsData.correctAnswerId != null &&
      questionsData.userAnswerId != null
      ? questionsData.correctAnswerId === questionsData.userAnswerId
      : null;
  };

  return (
    <Box>
      <Flex
        flexDirection="column"
        h="100vh"
        px={{ md: "17", lg: "22", xl: "24" }}
        bgImage={sectionBG}
        bgPosition="center"
        bgRepeat="no-repeat"
        alignItems="center"
        justifyContent="center"
        w="100%"
        maxHeight="1050px"
        overflowY="scroll"
      >
        <Flex w="100%" justifyContent="end" py="5" maxWidth="1490px">
          {/* Waiting Modal */}
          <Modal isCentered isOpen={matchData.waitingToFinishOpponent}>
            {<OverlayOne />}
            <ModalContent bg="#7E20C9" py="8" px="10" w="60%">
              <ModalHeader textAlign="center" color="white">
                Answers Completed!
              </ModalHeader>

              <ModalBody>
                <HStack>
                  <Image
                    src={sandclock}
                    className="sandclock"
                    height="3vh"
                  ></Image>
                  <Text
                    textAlign="center"
                    fontSize="xs"
                    fontWeight="bold"
                    color="white"
                  >
                    Waiting for opponent to complete answering..
                  </Text>
                </HStack>
              </ModalBody>
              <Center spacing={5}></Center>
            </ModalContent>
          </Modal>

          {/* Left Modal */}
          <Modal isCentered isOpen={matchData.isPlayerAbandon}>
            {<OverlayOne />}
            <ModalContent bg="#7E20C9" py="8" px="10" w="60%">
              <ModalHeader textAlign="center" color="white">
                Opponent has left
              </ModalHeader>

              <ModalBody>
                <Text
                  textAlign="center"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </Text>
              </ModalBody>
              <Center spacing={5}>
                <Link
                  fontSize="xs"
                  bg="white"
                  color="#7E20C9"
                  w="40%"
                  borderRadius="20px"
                  mx="2"
                  href="/trivia"
                  textAlign="center"
                  py="2"
                  fontWeight="bold"
                >
                  Exit Battle
                </Link>
              </Center>
            </ModalContent>
          </Modal>

          {/* Disconnected Modal */}
          {/* <Modal isCentered isOpen={matchData.isPlayerDisconnect}>
            {<OverlayOne />}
            <ModalContent bg="#7E20C9" py="8" px="10" w="60%">
              <ModalHeader textAlign="center" color="white">
                Opponent has been disconnected
              </ModalHeader>
              <ModalBody>
                <Text
                  textAlign="center"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </ModalBody>
              <Center spacing={5}>
                <Link
                  // onClick={onCloseReconnecting}
                  fontSize="xs"
                  bg="white"
                  color="#7E20C9"
                  w="40%"
                  borderRadius="20px"
                  mx="2"
                  href="/trivia"
                  textAlign="center"
                  py="2"
                  fontWeight="bold"
                >
                  Exit Battle
                </Link>
              </Center>
            </ModalContent>
          </Modal> */}

          {/* Reconnecting Modal */}
          <Modal
            isCentered
            isOpen={isOpenReconnecting}
            onClose={onCloseReconnecting}
          >
            {<OverlayOne />}
            <ModalContent bg="#7E20C9" py="8" px="12" w="60%">
              <ModalHeader textAlign="center" color="white">
                Disconnected
              </ModalHeader>

              <ModalBody>
                <Text
                  textAlign="center"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                >
                  Reconnecting...
                </Text>
              </ModalBody>
              <Center spacing={5}>
                <Button
                  onClick={onCloseReconnecting}
                  fontSize="xs"
                  bg="white"
                  color="#7E20C9"
                  w="40%"
                  py="1"
                  borderRadius="20px"
                  mx="2"
                >
                  Exit Battle
                </Button>
              </Center>
            </ModalContent>
          </Modal>

          {/* Exiting Modal */}
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {<OverlayOne />}
            <ModalContent bg="#7E20C9" py="8" px="12" w="60%">
              <ModalHeader textAlign="center" color="white">
                Exit Battle
              </ModalHeader>

              <ModalBody>
                <Text
                  textAlign="center"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                >
                  Are you sure you want to end the battle? You will
                  automatically lose the game.
                </Text>
              </ModalBody>
              <Center spacing={5}>
                <Button
                  onClick={onClose}
                  fontSize="xs"
                  bg="white"
                  color="#7E20C9"
                  w="40%"
                  py="1"
                  borderRadius="20px"
                  mx="2"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    gm.abandonMatch();
                    navigate("/trivia");
                  }}
                  fontSize="xs"
                  bg="#6a1ba9"
                  px="12"
                  py="1"
                  w="40%"
                  borderRadius="20px"
                  mx="2"
                  color="white"
                >
                  Exit
                </Button>
              </Center>
            </ModalContent>
          </Modal>

          <Button
            color="white"
            fontSize="xs"
            fontWeight="bold"
            border="1px solid"
            borderColor="#7E20C9"
            bg="transparent"
            py="3"
            px="12"
            borderRadius="20px"
            onClick={() => {
              onOpenReconnection();
            }}
          >
            End Battle
          </Button>

          {/* <Button
            onClick={() => {
              onOpenWin();
            }}
          >
            WINs
          </Button>

          <Button
            onClick={() => {
              onOpenLose();
            }}
          >
            LOSEs
          </Button> */}
        </Flex>

        <Flex
          color="white"
          w={allPlayersData().length > 1 ? { lg: "60%", xl: "67%" } : "60%"}
          alignSelf="start"
          justifyContent="end"
          position="relative"
          bg="green"
          maxWidth="1490px"
        >
          {allPlayersData().length > 1 ? (
            <>
              <Stack
                bg="#AF68E7"
                color="white"
                px={{ lg: "2", xl: "10" }}
                borderRadius="10px"
                gap="0"
                spacing="0"
                py="2"
                position="absolute"
                marginTop="1.5vh"
                zIndex="999"
              >
                <Text textAlign="center" my="0" py="0" fontWeight="bold">
                  Score
                </Text>
                <Text
                  fontSize="2xl"
                  textAlign="center"
                  fontWeight="bold"
                  my="0"
                  py="0"
                >
                  {playerOne.points}
                </Text>
              </Stack>
            </>
          ) : (
            <></>
          )}
        </Flex>

        <Flex
          w="100%"
          height="64vh"
          maxHeight="600px"
          alignItems={allPlayersData().length > 1 ? "start" : "center"}
          justifyContent="center"
          gap="16"
          marginTop="2vh"
          py="0"
          px="0"
        >
          {allPlayersData().length > 1 ? (
            <></>
          ) : (
            <>
              <Flex
                w="20%"
                gap="2"
                flexDirection="column"
                alignItems="center"
                position="relative"
              >
                <Flag
                  width="100px"
                  borderRadius="10px"
                  className="flagcountry"
                  code={playerOne?.countryCode}
                  fallback={<span>Unknown</span>}
                />
                <Text color="white" fontSize="2xl" textAlign="center">
                  {playerOne?.firstName} &nbsp;
                  {playerOne?.lastName}
                </Text>
                <Text color="white" fontSize="lg">
                  @{playerOne?.username}
                </Text>
                {allPlayersData().map((playerData, index) => (
                  <HStack key={index}>
                    <Text color="white" fontSize="xs">
                      Asked by {playerData?.username}
                    </Text>
                    <Flag
                      width="25px"
                      code={playerData?.countryCode}
                      fallback={<span>Unknown</span>}
                    />
                  </HStack>
                ))}
                <Box
                  py="2"
                  px="10"
                  borderRadius="5px"
                  color="white"
                  fontWeight="bold"
                  bg="#551587"
                >
                  {playerOne.points}
                </Box>
                <Text
                  className="transition-opacity	duration-500	"
                  color="#7CFC00"
                  fontWeight="700"
                  fontSize="18px"
                  position="absolute"
                  bottom="-10"
                  opacity={
                    showPlayerTotalPoints?.filter(
                      (e) => e === playerOne.userId
                    )[0] != null
                      ? "1"
                      : "0"
                  }
                >
                  + {playerOne?.pointsEarned} pts
                </Text>
              </Flex>
            </>
          )}

          <Flex
            bg={
              isCorrectAnswerAndUserAnswerSame() === true
                ? "#7CFC00"
                : isCorrectAnswerAndUserAnswerSame() === false
                ? "#d62d2d"
                : ""
            }
            className="shape-outer pentagon"
            w={allPlayersData().length > 1 ? { lg: "60%", xl: "67%" } : "60%"}
            height="100%"
            alignSelf="start"
            my="0"
            mx="0"
            maxWidth="1100px"
            maxHeight="550px"
          >
            <Flex
              alignItems="center"
              className="shape-inner pentagon midbox"
              justifyContent="center"
              w="99.7%"
              bgImage={gamebox}
              zIndex="9999999"
            >
              <Flex
                flexDirection="column"
                w="90%"
                gap="3"
                className="inner-div"
              >
                <Flex alignItems="center" gap="2">
                  <Text color="white" fontSize="md" fontWeight="bold">
                    {questionsData.countdown}
                  </Text>
                  <Text color="white" fontSize="sm">
                    seconds remaining
                  </Text>
                </Flex>
                <Progress
                  value={questionsData.countdown}
                  max={max}
                  borderRadius="5px"
                />

                <Stack key={questionsData.id} zIndex="99999" w="90%">
                  <Flex flexDirection="column" w="100%" zIndex="99999" gap="2">
                    <HStack spacing={4}>
                      <Image src={getCategoryImage()} w="48px"></Image>
                      <Text color="white" fontSize="2xl">
                        {questionsData.category}
                      </Text>
                    </HStack>
                    <Text color="white">{questionsData.question}</Text>
                  </Flex>
                  <Flex my="3" justifyContent="end">
                    <Text color="white" fontWeight="bold">
                      Question {questionsData.currentQuestionNumber}/
                      {questionsData.totalQuestions}
                    </Text>
                  </Flex>
                  <Choices></Choices>
                </Stack>
              </Flex>
            </Flex>
          </Flex>

          {allPlayersData().length > 1 ? (
            <>
              {/* Multiplayers / Tournaments*/}
              <TournamentLeaderboards
                allPlayersData={allPlayersData()}
                showPlayerTotalPoints={showPlayerTotalPoints}
              ></TournamentLeaderboards>
            </>
          ) : (
            <Flex w="20%" flexDirection="column" alignItems="center">
              {allPlayersData().map((playerData, index) => (
                <Flex
                  key={index}
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="space-between"
                  gap="3"
                  w="100%"
                  position="relative"
                  px="4"
                >
                  <Flag
                    width="100px"
                    className="flagcountry"
                    code={playerData?.countryCode}
                    fallback={<span>Unknown</span>}
                  />
                  <Text color="white" fontSize="2xl">
                    {playerData?.firstName} &nbsp;
                    {playerData?.lastName}
                  </Text>
                  <Text color="white" fontSize="lg">
                    @{playerData?.username}
                  </Text>
                  <Text color="#F09C37" fontSize="xs">
                    {playerData?.useremail}
                  </Text>
                  <Flag
                    width="25px"
                    borderRadius="2px"
                    code={playerData?.countryCode}
                    fallback={<span>Unknown</span>}
                  />
                  <Box
                    py="2"
                    px="3"
                    borderRadius="5px"
                    color="white"
                    fontWeight="bold"
                    bg="#551587"
                  >
                    {playerData.points}
                  </Box>
                  <Text
                    className="transition-opacity	duration-500	"
                    color="#7CFC00"
                    fontWeight="700"
                    fontSize="18px"
                    position="absolute"
                    bottom="-10"
                    opacity={
                      showPlayerTotalPoints?.filter(
                        (e) => e === playerData.userId
                      )[0] != null
                        ? "1"
                        : "0"
                    }
                  >
                    + {playerData?.pointsEarned} pts
                  </Text>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
      <WinPopup
        isOpenWinPopup={isOpenWinPopup}
        onOpenWinPopup={onOpenWinPopup}
        onCloseWinPopup={() => {
          onOpenTournamentResultPopup();
          onCloseWinPopup();
        }}
      ></WinPopup>

      <LosePopup
        isOpenLosePopup={isOpenLosePopup}
        onOpenLosePopup={onOpenLosePopup}
        onCloseLosePopup={() => {
          onOpenTournamentResultPopup();
          onCloseLosePopup();
        }}
      ></LosePopup>
      <TournamentResultPopup
        isOpenTournamentResultPopup={isOpenTournamentResultPopup}
        onOpenTournamentResultPopup={onOpenTournamentResultPopup}
        onCloseTournamentResultPopup={onCloseTournamentResultPopup}
      ></TournamentResultPopup>
    </Box>
  );
}

function Choices() {
  const gm = GamePlayProvider.getInstance();

  const { questionsData } = useSelector((state) => state.trivia);

  const onAnswer = (choiceID) => {
    gm.submitAnswer(choiceID);
  };

  const isCorrectAnswerAndUserAnswerSame = () => {
    return questionsData.correctAnswerId != null &&
      questionsData.userAnswerId != null
      ? questionsData.correctAnswerId === questionsData.userAnswerId
      : null;
  };

  const isCorrectAnswerAndChoiceSame = (choice) => {
    return questionsData.correctAnswerId === choice.id;
  };

  const isUserAnswerAndChoiceSame = (choice) => {
    return questionsData.userAnswerId === choice.id;
  };

  const setChoiceBgValue = (choice) => {
    return isCorrectAnswerAndUserAnswerSame() !== false &&
      isCorrectAnswerAndChoiceSame(choice)
      ? "#7CFC00"
      : isCorrectAnswerAndUserAnswerSame() === false &&
        isUserAnswerAndChoiceSame(choice)
      ? "#d62d2d"
      : "#141215";
  };

  const setChoiceBorderColor = (choice) => {
    return (isCorrectAnswerAndUserAnswerSame() === true &&
      isCorrectAnswerAndChoiceSame(choice)) ||
      (isCorrectAnswerAndUserAnswerSame() === false &&
        isCorrectAnswerAndChoiceSame(choice))
      ? "#7CFC00"
      : isCorrectAnswerAndUserAnswerSame() === false &&
        isUserAnswerAndChoiceSame(choice)
      ? "#d62d2d"
      : "#141215";
  };

  const setChoiceIconComponent = (choice) => {
    return isCorrectAnswerAndUserAnswerSame() === false &&
      isCorrectAnswerAndChoiceSame(choice) ? (
      <Box className="bg-[#7CFC00] rounded-full p-[1px]">
        <IoCheckmarkSharp color="white" size={15}></IoCheckmarkSharp>
      </Box>
    ) : isCorrectAnswerAndUserAnswerSame() === true &&
      isCorrectAnswerAndChoiceSame(choice) ? (
      <Box className="bg-[#141215] rounded-full p-[1px]">
        <IoCheckmarkSharp color="#7CFC00" size={15}></IoCheckmarkSharp>
      </Box>
    ) : isCorrectAnswerAndUserAnswerSame() === false &&
      isUserAnswerAndChoiceSame(choice) ? (
      <IoCloseCircleSharp color="white" size={20}></IoCloseCircleSharp>
    ) : (
      <Box className="h-[15px] w-[15px] border-[1px] border-white rounded-full"></Box>
    );
  };

  const setChoiceTextColor = (choice) => {
    return isCorrectAnswerAndUserAnswerSame() === true &&
      (isCorrectAnswerAndChoiceSame(choice) ||
        isUserAnswerAndChoiceSame(choice))
      ? "#141215"
      : "white";
  };

  const setChoiceTextMessageColor = (choice) => {
    return isCorrectAnswerAndUserAnswerSame() === false &&
      isCorrectAnswerAndChoiceSame(choice)
      ? "#6bc920"
      : isCorrectAnswerAndUserAnswerSame() === false &&
        isUserAnswerAndChoiceSame(choice)
      ? "white"
      : "#141215";
  };

  const setChoiceVerifiedAnswerTextValue = (choice) => {
    return isCorrectAnswerAndChoiceSame(choice)
      ? "Correct Answer!"
      : isCorrectAnswerAndUserAnswerSame() === false &&
        isUserAnswerAndChoiceSame(choice)
      ? "Incorrect!"
      : "";
  };

  return (
    <Flex flexDirection="column" gap="3" position="relative">
      {questionsData?.choices?.map((choice, index) => {
        return (
          <Flex
            onClick={() => onAnswer(choice.id)}
            key={index}
            alignItems="center"
            w="100%"
            borderRadius="15px"
            borderWidth={1}
            borderColor={setChoiceBorderColor(choice)}
            py="2"
            px="3"
            justifyContent="start"
            bg={setChoiceBgValue(choice)}
            cursor="pointer"
          >
            {setChoiceIconComponent(choice)}
            <Text marginLeft="1vw" color={setChoiceTextColor(choice)}>
              {choice.text}
            </Text>
            <Text
              marginLeft="20px"
              fontWeight="bold"
              color={setChoiceTextMessageColor(choice)}
            >
              {setChoiceVerifiedAnswerTextValue(choice)}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
}

function TournamentLeaderboards({ allPlayersData, showPlayerTotalPoints }) {
  const { userData } = useSelector((state) => state.user);

  return (
    <Flex flexDirection="column" alignItems="center" w="32%" maxWidth="430px">
      <Flex
        bg="black"
        py="4"
        w="100%"
        borderTopLeftRadius="15px"
        borderTopRightRadius="15px"
      >
        <Text alignSelf="start" color="white" px="4" fontWeight="bold">
          Leaderboards
        </Text>
      </Flex>
      {allPlayersData?.map((playerData, index) => {
        /// if index is less than 10
        const isIndexLessThan10 = index < 10;

        /// if allPlayersData length is greater than 10
        const isAllPlayersDataGreaterThan10 = allPlayersData.length > 10;

        /// if playerData.userId is equal to userData.id
        const isPlayerDataIdEqualToUserId = playerData.userId === userData.id;

        /// if current user position is outside on the 10th limit
        const isCurrentUserPositionOutside =
          index > 10 &&
          isAllPlayersDataGreaterThan10 &&
          isPlayerDataIdEqualToUserId;

        /// if playerData index is less than 10 OR if allPlayersData length is greater than 10 and playerData.userId is equal to userData.id
        if (
          isIndexLessThan10 ||
          (isAllPlayersDataGreaterThan10 && isPlayerDataIdEqualToUserId)
        ) {
          return (
            <Flex
              key={index}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              gap="3"
              w="100%"
              position="relative"
              borderTop={isCurrentUserPositionOutside ? "2px" : "0px"}
              borderTopColor="#404040"
              px="4"
              py="3"
              className={
                playerData.userId === userData.id
                  ? "bg-[#190628]"
                  : (index + 1) % 2 === 0
                  ? "bg-[#141215]"
                  : "bg-black"
              }
            >
              <Box position="relative">
                <Crown
                  fill={getCrownColorByPlayersPoints(
                    allPlayersData,
                    playerData
                  )}
                  height="40px"
                  width="40px"
                />
                <Text
                  position="absolute"
                  color="white"
                  fontSize="13px"
                  bottom="0"
                  left="0"
                  right="0"
                  margin="auto"
                  textAlign="center"
                >
                  {getNumberWithOrdinal(allPlayersData, playerData)}
                </Text>
              </Box>

              <HStack w="60%" gap="0">
                <Avatar
                  src={playerData?.profileImage}
                  name={`${playerData?.firstName} ${playerData?.lastName}`}
                  size="xs"
                  bgColor="#7E20C9"
                  color="white"
                />
                <Text color="white" fontSize="xs" mx="0">
                  {playerData?.username}
                </Text>
              </HStack>

              <HStack>
                <Text color="#716B76" fontSize="xs">
                  {playerData?.countryCode}
                </Text>
                <Flag
                  width="25px"
                  code={playerData?.countryCode}
                  fallback={<span>Unknown</span>}
                />
              </HStack>

              <Center
                py="2"
                w="12%"
                borderRadius="5px"
                color="#F09C37"
                fontWeight="bold"
              >
                {playerData.points}
              </Center>
              <Text
                className="transition-opacity	duration-500	"
                color="#7CFC00"
                fontWeight="700"
                fontSize="18px"
                position="absolute"
                bottom="0"
                opacity={
                  showPlayerTotalPoints?.filter(
                    (e) => e === playerData.userId
                  )[0] != null
                    ? "1"
                    : "0"
                }
              >
                + {playerData?.pointsEarned} pts
              </Text>
            </Flex>
          );
        }
        return <Box key={index}></Box>;
      })}
    </Flex>
  );
}

function ResultsPopup() {
  const { matchData } = useSelector((state) => state.trivia);
  const { userData } = useSelector((state) => state.user);

  const playerOne = matchData?.players
    ? matchData?.players?.filter((e) => e.userId === userData.id)[0]
    : {};

  const isWinner = (data) => {
    return matchData.winner === data ? true : false;
  };

  const winnerColor = "#6BC920";
  const loserColor = "#D62D2D";

  const {
    isOpen: isOpenContinue,
    onOpen: onOpenContinue,
    onClose: onCloseContinue,
  } = useDisclosure();

  return (
    <>
      <Modal isCentered isOpen={isOpenContinue} onClose={onCloseContinue}>
        {<OverlayOne />}
        <ModalContent bg="#7E20C9" py="8" px="12" w="60%" position="relative">
          <Flex position="absolute" left="90%">
            <AiOutlineCloseCircle
              cursor="pointer"
              color="#D62D2D"
              fontSize="24px"
              onClick={onCloseContinue}
            ></AiOutlineCloseCircle>
          </Flex>
          <ModalHeader textAlign="center" color="white">
            Continue Playing?
          </ModalHeader>

          <ModalBody>
            <Text
              textAlign="center"
              fontSize="xs"
              fontWeight="bold"
              color="white"
            >
              Do you want to request a Rematch, or search for New Opponent?
            </Text>
          </ModalBody>
          <Center spacing={5}>
            <Button
              onClick={onCloseContinue}
              fontSize="xs"
              bg="white"
              color="#7E20C9"
              w="40%"
              py="1"
              borderRadius="20px"
              mx="2"
            >
              Rematch? (09 sec.)
            </Button>
            <Button
              onClick={onCloseContinue}
              fontSize="xs"
              bg="#6a1ba9"
              px="12"
              py="1"
              w="40%"
              borderRadius="20px"
              mx="2"
              color="white"
            >
              New Opponent
            </Button>
          </Center>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        isOpen={
          matchData.winner && matchData.allPlayersDoneWithTrivia ? true : false
        }
        marginLeft="0px"
        marginRight="0px"
        position="relative"
      >
        {<OverlayOne />}

        <ModalContent
          bg="transparent"
          display="flex"
          alignItems="center"
          w="100%"
          maxWidth="100%"
          marginBottom="0px"
          paddingBottom="5vh"
        >
          <Flex
            flexDirection="column"
            bgImage={winloseBG}
            bgSize="cover"
            bgPosition="center"
            height={"72%"}
            w={"60%"}
            position="relative"
            borderRadius="10px"
            className={"popup"}
            border="3px solid"
            borderColor="#7E20C9"
            zIndex="99999"
            maxWidth={"50%"}
          >
            <ModalHeader
              textAlign="center"
              color={isWinner(userData.id) ? winnerColor : loserColor}
              zIndex="99999"
              fontWeight="bold"
            >
              {isWinner(userData.id) ? "YOU WIN!!!" : "YOU LOSE!"}
            </ModalHeader>
            <ModalBody
              display="flex"
              flexDirection={"row"}
              alignItems="start"
              justifyContent="center"
              zIndex="99999"
              gap="2"
              borderBottom="1px solid #141215"
              py="3"
            >
              <Flex
                w={"33.3%"}
                justifyContent="start"
                flexDirection={"column"}
                alignItems="center"
                gap="4"
                zIndex="99999"
                position="relative"
              >
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  w="100%"
                  borderRadius="10px"
                  className={"popup-inner"}
                  justifyContent="space-between"
                  gap="4"
                >
                  <Flex
                    flexDirection={"column"}
                    alignItems="center"
                    gap="1"
                    py="3"
                    w="100%"
                    justifyContent="space-between"
                    px="5"
                  >
                    <Flex
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      gap="1"
                    >
                      <Box
                        border="2px solid white"
                        zIndex="99999"
                        borderRadius="50%"
                      >
                        <Box bgColor="#7E20C9" color="white" borderRadius="50%">
                          <Avatar
                            src={playerOne?.profileImage}
                            name={`${playerOne?.firstName} ${playerOne?.lastName}`}
                            size="xl"
                            color="white"
                            bgColor="#7E20C9"
                          />
                        </Box>
                      </Box>
                      <Flex flexDirection="column" alignItems="center" gap="1">
                        <Text color="white" fontWeight="bold" zIndex="99999">
                          {playerOne?.firstName} {playerOne?.lastName}
                        </Text>

                        <Flag
                          className="!w-[30px] z-[99999]"
                          code={playerOne?.countryCode}
                          fallback={<span>Unknown</span>}
                        />

                        <Text color="#E6E5E7" fontSize="xs" zIndex="99999">
                          Level 118
                        </Text>
                        <Box
                          bg={isWinner(userData.id) ? winnerColor : loserColor}
                          borderRadius="5px"
                          px="4"
                          py="0"
                          zIndex="99999"
                        >
                          <Text color="white" fontSize="2xl" fontWeight="bold">
                            {playerOne.points}
                          </Text>
                        </Box>

                        <Text fontSize="9px" color="#E6E5E7" zIndex="99999">
                          Time Consumed
                        </Text>
                        <Text
                          fontSize="9px"
                          color={
                            isWinner(userData.id) ? winnerColor : loserColor
                          }
                          zIndex="99999"
                        >
                          {getTimeConsumed(
                            playerOne.totalElapsedTimeInMilliseconds
                          )}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>

                  <Stack>
                    <Button
                      borderRadius="20px"
                      fontSize="11px"
                      color="#7E20C9"
                      w="100%"
                    >
                      <Cashout></Cashout>
                    </Button>
                    <Button
                      onClick={() => {
                        onOpenContinue();
                      }}
                      borderRadius="20px"
                      fontSize="11px"
                      color="white"
                      bg="#7E20C9"
                      _hover="none"
                      w="100%"
                    >
                      Continue Battle
                    </Button>
                  </Stack>
                </Flex>
              </Flex>
              <Flex
                flexDirection="column"
                alignItems="center"
                gap="2"
                zIndex="99999"
                mx="3"
              >
                {isWinner(userData.id) ? (
                  <Image src={winTrophy} className="wintrophy"></Image>
                ) : (
                  <Image src={loseTrophy} className="lose"></Image>
                )}
                <Stack spacing={0}>
                  <Text
                    fontSize="9px"
                    textAlign="center"
                    color={isWinner(userData.id) ? winnerColor : loserColor}
                  >
                    Match Score
                  </Text>
                  <Box
                    textAlign="center"
                    border="2px solid"
                    borderColor={
                      isWinner(userData.id) ? winnerColor : loserColor
                    }
                    w="5vw"
                    py="0"
                    color={isWinner(userData.id) ? winnerColor : loserColor}
                    borderRadius="10px"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    45
                  </Box>
                </Stack>
                <Stack spacing={0}>
                  <Text
                    fontSize="9px"
                    textAlign="center"
                    color={isWinner(userData.id) ? winnerColor : loserColor}
                  >
                    Match Score
                  </Text>
                  <Box
                    textAlign="center"
                    border="2px solid"
                    borderColor={
                      isWinner(userData.id) ? winnerColor : loserColor
                    }
                    w="5vw"
                    py="0"
                    color={isWinner(userData.id) ? winnerColor : loserColor}
                    borderRadius="10px"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    45
                  </Box>
                </Stack>
                <Stack spacing={0}>
                  <Text
                    fontSize="9px"
                    textAlign="center"
                    color={isWinner(userData.id) ? winnerColor : loserColor}
                  >
                    Match Score
                  </Text>
                  <Box
                    textAlign="center"
                    border="2px solid"
                    borderColor={
                      isWinner(userData.id) ? winnerColor : loserColor
                    }
                    w="5vw"
                    py="0"
                    color={isWinner(userData.id) ? winnerColor : loserColor}
                    borderRadius="10px"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    45
                  </Box>
                </Stack>
                <Stack spacing={0}>
                  <Text
                    fontSize="9px"
                    textAlign="center"
                    color={isWinner(userData.id) ? winnerColor : loserColor}
                  >
                    Match Score
                  </Text>
                  <Box
                    textAlign="center"
                    border="2px solid"
                    borderColor={
                      isWinner(userData.id) ? winnerColor : loserColor
                    }
                    w="5vw"
                    py="0"
                    color={isWinner(userData.id) ? winnerColor : loserColor}
                    borderRadius="10px"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    45
                  </Box>
                </Stack>
              </Flex>
            </ModalBody>
            <ModalFooter padding="0px">
              <Center
                spacing={5}
                bg="black"
                py="6"
                w={"100%"}
                borderBottomRadius="10px"
                zIndex="99999"
              >
                <Stack>
                  <Text color="white">Share this link via</Text>
                  <HStack w="100%">
                    <Flex
                      w="100%"
                      alignItems="center"
                      justifyContent="center"
                      gap="1.5"
                    >
                      <Image src={fb} height="20px"></Image>
                      <Image src={twitter} height="20px"></Image>
                      <Image src={ig} height="20px"></Image>
                    </Flex>
                  </HStack>
                </Stack>
              </Center>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

function TournamentResultPopup({
  isOpenTournamentResultPopup,
  onOpenTournamentResultPopup,
  onCloseTournamentResultPopup,
}) {
  const { matchData } = useSelector((state) => state.trivia);
  const { userData } = useSelector((state) => state.user);

  const allPlayersData = () => {
    return [...matchData?.players]?.sort((a, b) => b.points - a.points);
  };

  const isWinner = (data) => {
    return matchData.winner === data ? true : false;
  };

  const winnerColor = "#6BC920";
  const loserColor = "#D62D2D";

  const {
    isOpen: isOpenList,
    onOpen: onOpenList,
    onClose: onCloseList,
  } = useDisclosure();

  return (
    <>
      {/* <Modal isCentered isOpen={isOpen} onClose={onCloseContinue}>
        {<OverlayOne />}
        <ModalContent bg="#7E20C9" py="8" px="12" w="60%" position="relative">
          <Flex position="absolute" left="90%">
            <AiOutlineCloseCircle
              cursor="pointer"
              color="#D62D2D"
              fontSize="24px"
              onClick={onCloseContinue}
            ></AiOutlineCloseCircle>
          </Flex>
          <ModalHeader textAlign="center" color="white">
            Continue Playing?
          </ModalHeader>

          <ModalBody>
            <Text
              textAlign="center"
              fontSize="xs"
              fontWeight="bold"
              color="white"
            >
              Do you want to request a Rematch, or search for New Opponent?
            </Text>
          </ModalBody>
          <Center spacing={5}>
            <Button
              onClick={onCloseContinue}
              fontSize="xs"
              bg="white"
              color="#7E20C9"
              w="40%"
              py="1"
              borderRadius="20px"
              mx="2"
            >
              Rematch? (09 sec.)
            </Button>
            <Button
              onClick={onCloseContinue}
              fontSize="xs"
              bg="#6a1ba9"
              px="12"
              py="1"
              w="40%"
              borderRadius="20px"
              mx="2"
              color="white"
            >
              New Opponent
            </Button>
          </Center>
        </ModalContent>
      </Modal> */}

      <Modal
        isCentered
        isOpen={isOpenTournamentResultPopup}
        marginLeft="0px"
        marginRight="0px"
        position="relative"
      >
        {<OverlayOne />}

        <ModalContent
          bg="transparent"
          display="flex"
          alignItems="center"
          w="100%"
          maxWidth="100%"
          marginBottom="0px"
          paddingBottom="5vh"
        >
          <Flex
            zIndex="99999999"
            w="100%"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            marginTop="10vh"
            marginBottom="2vh"
            gap="3"
          >
            <Text color="white" fontSize="3xl">
              Farm Animals Trivia Battle
            </Text>
            <Center gap="3" w="100%">
              <Flex
                color="#716B76"
                bgColor="black"
                w={{ md: "20%", lg: "17%", xl: "12%" }}
                padding="1.5"
                borderRadius="10px"
                gap="2"
                alignSelf="center"
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
            </Center>
          </Flex>

          <Flex
            flexDirection="column"
            bgSize="cover"
            bgPosition="center"
            height={"auto"}
            w={"80%"}
            position="relative"
            borderRadius="10px"
            border="3px solid"
            borderColor="#7E20C9"
            zIndex="99999"
            maxWidth={"100%"}
            bg={"black"}
          >
            <ModalHeader
              textAlign="center"
              color={isWinner(userData.id) ? winnerColor : loserColor}
              zIndex="99999"
              fontWeight="bold"
              borderBottom={"3px solid"}
              borderColor={"#141215"}
            >
              <Text textAlign="left" color="white">
                Players
              </Text>
            </ModalHeader>
            <ModalBody
              display="flex"
              flexDirection={"column"}
              alignItems="start"
              justifyContent="center"
              zIndex="99999"
              gap="2"
              borderBottom="1px solid #141215"
              py="3"
            >
              {allPlayersData().map((playerData, index) => (
                <Flex
                  key={index}
                  w={"100%"}
                  justifyContent="start"
                  flexDirection="column"
                  alignItems="center"
                  gap="4"
                  zIndex="99999"
                  position="relative"
                >
                  <Flex
                    // className={"bg-[#141215]"}
                    background={
                      playerData.userId === userData.id ? "#f48705" : "#141215"
                    }
                    flexDirection={"row"}
                    alignItems="center"
                    justifyContent="space-between"
                    gap="1"
                    py="3"
                    w="100%"
                    borderRadius="10px"
                    px="5"
                  >
                    <Box position="relative">
                      <Crown
                        fill={getCrownColorByPlayersPoints(
                          allPlayersData(),
                          playerData
                        )}
                      />
                      <Text
                        position="absolute"
                        color="white"
                        fontSize="13px"
                        bottom="0"
                        left="0"
                        right="0"
                        margin="auto"
                        textAlign="center"
                      >
                        {getNumberWithOrdinal(allPlayersData(), playerData)}
                      </Text>
                    </Box>
                    <Flex w="24%" alignItems="center" gap="4">
                      <Box
                        border="3px solid white"
                        zIndex="99999"
                        borderRadius="50%"
                      >
                        <Box bgColor="#7E20C9" borderRadius="50%">
                          <Avatar
                            src={playerData?.profileImage}
                            name={`${playerData?.firstName} ${playerData?.lastName}`}
                            size="lg"
                            bgColor="#7E20C9"
                            color="white"
                          />
                        </Box>
                      </Box>
                      <Stack>
                        <Text
                          fontWeight="bold"
                          textAlign="left"
                          zIndex="99999"
                          color={"white"}
                        >
                          {playerData?.firstName}
                        </Text>

                        <HStack>
                          <Flag
                            className="!w-[30px] z-[99999]"
                            code={playerData?.countryCode}
                            fallback={<span>Unknown</span>}
                          />
                          <Text fontSize="xs" fontWeight="bold" color="#716B76">
                            {playerData?.countryCode}
                          </Text>
                        </HStack>
                      </Stack>
                    </Flex>

                    <Stack>
                      <Text
                        color="#E6E5E7"
                        fontSize="xs"
                        zIndex="99999"
                        fontWeight="bold"
                      >
                        XP
                      </Text>
                      <Text
                        color={
                          playerData.userId === userData.id ? "black" : "white"
                        }
                        fontSize="2xl"
                        fontWeight="bold"
                      >
                        {playerData.points}
                      </Text>
                    </Stack>
                    <Stack>
                      <Text
                        color="#E6E5E7"
                        fontSize="xs"
                        zIndex="99999"
                        fontWeight="bold"
                      >
                        Winnings
                      </Text>
                      <Text
                        color={
                          playerData.userId === userData.id
                            ? "black"
                            : "#f48705"
                        }
                        fontSize="2xl"
                        fontWeight="bold"
                      >
                        ${playerData.points}
                      </Text>
                    </Stack>
                    {/* <Stack>
                      <Text fontSize="xs" color="#E6E5E7" zIndex="99999">
                        Time Consumed
                      </Text>
                      <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color={
                          !isWinner(userData.id) ? winnerColor : loserColor
                        }
                        zIndex="99999"
                        marginBottom="4px"
                      >
                        {getTimeConsumed(
                          playerData.totalElapsedTimeInMilliseconds
                        )}
                      </Text>
                    </Stack> */}
                    <Flex
                      bg="white"
                      height="38px"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="50%"
                      px="7px"
                      cursor="pointer"
                      onClick={onOpenList}
                      position="relative"
                    >
                      <Modal
                        isOpen={isOpenList}
                        onClose={onCloseList}
                        position="absolute"
                      >
                        <ModalContent
                          w="150px"
                          left="23%"
                          top="12%"
                          bg="#000000"
                        >
                          {/* <Modal Openlist /> */}
                          <ModalBody
                            display="flex"
                            flexDirection="column"
                            px="4"
                            py="3"
                          >
                            <Link
                              color="#716B76"
                              _hover={{
                                color: "#7E20C9",
                                fontWeight: "bold",
                              }}
                              fontSize="xs"
                            >
                              View Profile
                            </Link>
                            <Link color="#716B76" fontSize="xs">
                              Report
                            </Link>
                            <Link color="#716B76" fontSize="xs">
                              Add Friends
                            </Link>
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                      <Text fontSize="35px" color="black" marginTop="-20px">
                        ...
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </ModalBody>
            <ModalFooter padding="0px">
              <Center
                spacing={5}
                bg="black"
                py="6"
                w={"100%"}
                borderBottomRadius="10px"
                zIndex="99999"
              >
                <Stack>
                  <Center>
                    <Link
                      bg="#7E20C9"
                      color="white"
                      fontWeight="bold"
                      fontSize="xs"
                      px="7"
                      py="3"
                      borderRadius="10px"
                      href="/"
                    >
                      Leave
                    </Link>
                  </Center>
                </Stack>
              </Center>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

function WinPopup({ isOpenWinPopup, onOpenWinPopup, onCloseWinPopup }) {
  return (
    <>
      {/* Win Modal */}
      <Modal isOpen={isOpenWinPopup} isCentered>
        <OverlayOne />
        <ModalContent position="relative" bg="#7E20C9" py="8" px="10" w="60%">
          <Text
            id="modalAbsoluteHeader"
            position="absolute"
            top="-30px"
            left="0"
            right="0"
            margin="auto"
            textAlign="center"
            color="white"
            fontSize="30px"
          >
            YOU WIN
          </Text>
          <ModalBody>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="5"
            >
              <Text
                textAlign="center"
                fontSize="xs"
                fontWeight="bold"
                color="white"
              >
                Waiting for opponent to complete answering..
              </Text>
              <Button
                borderRadius="50px"
                color="#7E20C9"
                width="200px"
                onClick={() => {
                  onCloseWinPopup();
                }}
              >
                Okay
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function LosePopup({ isOpenLosePopup, onOpenLosePopup, onCloseLosePopup }) {
  return (
    <>
      {/* Lose Modal */}
      <Modal isOpen={isOpenLosePopup} isCentered>
        <OverlayOne />
        <ModalContent position="relative" bg="#7E20C9" py="8" px="10" w="60%">
          <Text
            id="modalAbsoluteHeader"
            position="absolute"
            top="-30px"
            left="0"
            right="0"
            margin="auto"
            textAlign="center"
            color="white"
            fontSize="30px"
          >
            YOU LOSE
          </Text>
          <ModalBody>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="5"
            >
              <Text
                textAlign="center"
                fontSize="xs"
                fontWeight="bold"
                color="white"
              >
                Waiting for opponent to complete answering..
              </Text>
              <Button
                borderRadius="50px"
                color="#7E20C9"
                width="200px"
                onClick={() => {
                  onCloseLosePopup();
                }}
              >
                Okay
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
