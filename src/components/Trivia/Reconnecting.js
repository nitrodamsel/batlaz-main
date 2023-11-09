import "./Reconnecting.css";
import React, { useState, useEffect, useRef } from "react";
import {
  chakra,
  Box,
  Flex,
  HStack,
  Button,
  Image,
  useDisclosure,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Center,
  Radio,
  Link,
  RadioGroup,
  Progress,
  CircularProgress,
  useCheckbox,
  ModalCloseButton,
} from "@chakra-ui/react";
import GamePlayProvider from "../../provider/gameplay";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setConnectionState } from "../../redux/features/triviaSlice";
import MatchService from "../../services/game_engine/match";
import TokenService from "../../services/token";

export default function Reconnecting() {
  const gm = GamePlayProvider.getInstance();

  const disconnect = useRef(false);

  const { findMatchData, matchData, questionsData, connectionState } =
    useSelector((state) => state.trivia);
  const { userData } = useSelector((state) => state.user);

  const findMatchDataRef = useRef(findMatchData);
  const matchDataRef = useRef(matchData);
  const questionsDataRef = useRef(questionsData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function isMatchOngoing() {
      const hasMatch = await MatchService.hasMatch();
      if (hasMatch) {
        onOpen();
        setTimeout(() => {
          if (!disconnect.current) reconnectToMatch();
        }, 1500);
      }
    }
    if (
      TokenService.getLocalAccessToken() &&
      TokenService.getLocalRefreshToken()
    ) {
      isMatchOngoing();
    }
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const reconnectToMatch = async () => {
    gm.initializeConnection();
    const connection = gm.getConnection();
    connection
      .start()
      .then(() => console.log("SignalR is Connected"))
      .then(main)
      .then(() => gm.reconnectMatch());
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
    onClose();
    navigate("/battle");
  };

  const abandon = async () => {
    disconnect.current = true;
    gm.initializeConnection();
    const connection = gm.getConnection();
    connection
      .start()
      .then(() => console.log("SignalR is Connected"))
      .then(main)
      .then(() => gm.reconnectMatch())
      .then(() => gm.abandonMatch());
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
    onClose();
    navigate("/");
  };

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
        }
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
              onClick={() => abandon()}
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
    </>
  );
}
