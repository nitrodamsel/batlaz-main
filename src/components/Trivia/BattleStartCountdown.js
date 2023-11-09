import { React, useEffect } from "react";

import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./BattleStartCountdown.css";

export default function BattleStartCountdown() {
  const { matchData } = useSelector((state) => state.trivia);
  const navigate = useNavigate();

  useEffect(() => {
    if (matchData.matchCountdown === 0) {
      navigate("/battle");
    }
  }, [matchData]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backdropFilter="blur(20px)"
      background="rgba(0, 0, 0, 0.3)"
      w="100%"
      height="100%"
      position="absolute"
    >
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Text
          color="white"
          fontSize="5xl"
          fontWeight="bold"
          gap="2"
          display="flex"
        >
          BATTLE STARTS IN
        </Text>
        <h1 className="counter">{matchData.matchCountdown}</h1>
      </Flex>
    </Flex>
  );
}
