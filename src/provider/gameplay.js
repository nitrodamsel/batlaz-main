import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr/dist/esm";
import axios from "axios";
import {
  setFindMatchData,
  setMatchData,
  setQuestionsData,
} from "../redux/features/triviaSlice";
import TokenService from "../services/token";
import UserService from "../services/user/user";

export default class GamePlayProvider {
  static myInstance = null;
  _connection = undefined;
  /**
   * @returns {GamePlayProvider}
   */
  static getInstance() {
    if (GamePlayProvider.myInstance == null) {
      GamePlayProvider.myInstance = new GamePlayProvider();
    }

    return this.myInstance;
  }

  initializeConnection() {
    this._connection = new HubConnectionBuilder()
      .withUrl(`${process.env.REACT_APP_GE_BASE_URL}/coordinator`, {
        accessTokenFactory: () => TokenService.getLocalAccessToken(),
      })
      .configureLogging(LogLevel.Information)
      .build();
  }

  findMatch(category, gameId) {
    console.log({ category, gameId });
    this._connection
      .invoke("FindMatch", { category, gameId })
      .catch(function (err) {
        return console.error(err.toString());
      });
  }

  confirmMatch() {
    this._connection.invoke("ConfirmMatch").catch(function (err) {
      return console.error(err.toString());
    });
  }

  reconnectMatch() {
    this._connection.invoke("Reconnect").catch(function (err) {
      return console.error(err.toString());
    });
  }

  abandonMatch() {
    this._connection.invoke("AbandonMatch").catch(function (err) {
      return console.error(err.toString());
    });
  }

  submitAnswer(choiceID) {
    this._connection
      .invoke("SubmitAnswer", { answerId: choiceID })
      .catch(function (err) {
        return console.error(err.toString());
      });
  }

  getConnection() {
    return this._connection;
  }

  destroyConnection() {
    if (this._connection) {
      this._connection.stop();
      this._connection = undefined;
    }
  }

  initializeEvents(
    dispatch,
    navigate,
    findMatchDataRef,
    matchDataRef,
    questionsDataRef,
    userData
  ) {
    this._connection.on("CoordinatorStatusUpdate", function (data) {
      console.log("CoordinatorStatusUpdate: ", data);
    });

    this._connection.on("CoordinatorFindMatchStatus", function (data) {
      console.log("CoordinatorFindMatchStatus: ", data);
      if (data.status.includes("Finding Match")) {
        var interval = setInterval(() => {
          setFindMatchCountdown(interval);
        }, 1000);
      }
    });

    this._connection.on("CoordinatorFoundMatch", function (data) {
      console.log("CoordinatorFoundMatch: ", data);
      fetchProfileOverview(data);
    });

    this._connection.on("CoordinatorMatchStatus", function (data) {
      console.log("CoordinatorMatchStatus: ", data);
      coordinatorMatchStatusTrigger(data);
    });

    this._connection.on("CoordinatorConfirmMatchCountdown", function (data) {
      console.log("CoordinatorConfirmMatchCountdown: ", data);
      setConfirmMatchCountdown(data.remainSeconds);
    });

    this._connection.on("CoordinatorMatchCountdown", function (data) {
      console.log("CoordinatorMatchCountdown: ", data);
      setMatchCountdown(data);
    });

    this._connection.on("CoordinatorQuestionCountdown", function (data) {
      console.log("CoordinatorQuestionCountdown: ", data);
      setQuestionCountdown(data);
    });

    this._connection.on("CoordinatorProvidedQuestion", function (data) {
      console.log("CoordinatorProvidedQuestion: ", data);
      setQuestion(data);
    });

    this._connection.invoke("CheckCoordinator").catch(function (err) {
      return console.error(err.toString());
    });

    this._connection.on("CoordinatorVerifiedAnswer", function (data) {
      console.log("CoordinatorVerifiedAnswer: ", data);
      // console.log(
      //   "CoordinatorVerifiedAnswers: ",
      //   questionsDataRef.current.id,
      //   data.questionId
      // );
      setQuestionAnswer(data);
    });

    this._connection.on("CoordinatorMatchPointsUpdate", function (data) {
      console.log("CoordinatorMatchPointsUpdate: ", data);
      setPoints(data);
    });

    this._connection.on("CoordinatorCompletedMatch", function (data) {
      console.log("CoordinatorCompletedMatch: ", data);
      setCompletedMatchValues(data);
    });

    function coordinatorMatchStatusTrigger(data) {
      const { type, players } = data;
      switch (type) {
        case "ConfirmedMatch":
          /// if all players is confirmed a match then navigate to battle page
          if (players.length >= matchDataRef.current.players.length) {
            const allPlayersConfirmed = true;
            matchDataRef.current = {
              ...matchDataRef.current,
              allPlayersConfirmed,
            };
            dispatch(setMatchData(matchDataRef.current));
          } else if (players.length > 0) {
            /// apply players data
            setPlayersConfirmStatus(players);
          }
          break;
        case "BattleStart":
          /// if all players is confirmed a match then navigate to battle page
          matchDataRef.current = {
            ...matchDataRef.current,
            matchCountdown: 0,
          };
          dispatch(setMatchData(matchDataRef.current));
          break;
        case "WaitingToFinish":
          /// if all players is done on trivia question then set
          const waitingToFinishOpponent = true;
          matchDataRef.current = {
            ...matchDataRef.current,
            waitingToFinishOpponent,
          };
          dispatch(setMatchData(matchDataRef.current));
          break;
        case "CancelledMatch":
          /// if match has been cancelled
          const isCancelled = true;
          matchDataRef.current = {
            ...matchDataRef.current,
            isCancelled,
          };
          dispatch(setMatchData(matchDataRef.current));
          break;
        case "DisconnectedMatch":
          /// if other player disconnect
          const isPlayerDisconnect = true;
          matchDataRef.current = {
            ...matchDataRef.current,
            isPlayerDisconnect,
          };
          dispatch(setMatchData(matchDataRef.current));
          break;
        case "PlayerAbandon":
          /// if other player abandon
          const isPlayerAbandon = true;
          matchDataRef.current = {
            ...matchDataRef.current,
            isPlayerAbandon,
          };
          dispatch(setMatchData(matchDataRef.current));
          break;

        default:
          break;
      }
    }

    function setPlayersConfirmStatus(playersIDS) {
      var playerTempArray = [];
      matchDataRef.current.players.forEach((players, index) => {
        var playerTempData = { ...players };
        const isSameID = playersIDS.filter((e) => e === players.userId)[0];
        if (isSameID) {
          playerTempData.confirmed = true;
        }
        playerTempArray.push(playerTempData);
      });
      matchDataRef.current = {
        ...matchDataRef.current,
        players: playerTempArray,
      };
      dispatch(setMatchData(matchDataRef.current));
    }

    function setFindMatchCountdown(interval) {
      if (findMatchDataRef.current.findMatchCountdown > 0) {
        const findMatchCountdown =
          findMatchDataRef.current.findMatchCountdown - 1000;
        findMatchDataRef.current = {
          ...findMatchDataRef.current,
          findMatchCountdown,
        };
        dispatch(setFindMatchData(findMatchDataRef.current));
      } else {
        const findMatchCountdown = 180000;
        findMatchDataRef.current = {
          ...findMatchDataRef.current,
          findMatchCountdown,
        };
        dispatch(setFindMatchData(findMatchDataRef.current));
        clearInterval(interval);
        interval = setInterval(() => {
          setFindMatchCountdown(interval);
        }, 1000);
      }
    }

    function setConfirmMatchCountdown(seconds) {
      const confirmMatchCountdown = seconds;
      findMatchDataRef.current = {
        ...findMatchDataRef.current,
        confirmMatchCountdown,
      };
      dispatch(setFindMatchData(findMatchDataRef.current));
    }

    function setMatchCountdown(data) {
      const matchCountdown = data.remainSeconds;
      const matchCountdownCompleted = true;
      matchDataRef.current = {
        ...matchDataRef.current,
        matchCountdown,
        matchCountdownCompleted,
      };
      dispatch(setMatchData(matchDataRef.current));
    }

    function setQuestionCountdown(data) {
      questionsDataRef.current = {
        ...questionsDataRef.current,
        countdown: data.remainSeconds,
      };
      dispatch(setQuestionsData(questionsDataRef.current));
    }

    function setQuestion(data) {
      questionsDataRef.current = {
        ...data,
        correctAnswerId: null,
        userAnswerId: null,
      };
      dispatch(setQuestionsData(questionsDataRef.current));
    }
    function setQuestionAnswer(data) {
      if (questionsDataRef.current.id === data.questionId) {
        questionsDataRef.current = {
          ...questionsDataRef.current,
          correctAnswerId: data.correctAnswerId,
          userAnswerId: data.userAnswerId,
        };
        dispatch(setQuestionsData(questionsDataRef.current));
      }
    }

    function fetchProfileOverview(data) {
      axios
        .all([
          ...data.players.map((e) => UserService.getDataOverview(e.userId)),
        ])
        .then((response) => {
          const players = [...setPlayersProfileData(data.players, response)];
          matchDataRef.current = {
            ...data,
            players,
          };
          console.log(matchDataRef.current);
          dispatch(setMatchData(matchDataRef.current));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function setPoints(data) {
      var newcurrentPlayersDataArray = [];
      const currentPlayersDataArray = matchDataRef.current.players;
      const incomingPlayersPointsDataArray = data.playerScores;
      const incomingPlayerUserId = data.userId;
      const incomingPlayerPointsEarned = data.pointsEarned;
      currentPlayersDataArray.forEach((currentPlayerData) => {
        incomingPlayersPointsDataArray.forEach((incomingPlayerPointsData) => {
          if (currentPlayerData.userId === incomingPlayerPointsData.userId)
            newcurrentPlayersDataArray.push({
              ...currentPlayerData,
              previousPoints: currentPlayerData.points ?? 0,
              points: incomingPlayerPointsData.totalPoints,
              ...(incomingPlayerUserId === currentPlayerData.userId && {
                pointsEarned: incomingPlayerPointsEarned,
              }),
            });
        });
      });
      matchDataRef.current = {
        ...matchDataRef.current,
        players: newcurrentPlayersDataArray,
      };
      dispatch(setMatchData(matchDataRef.current));
    }

    function setCompletedMatchValues(data) {
      var newcurrentPlayersDataArray = [];
      const currentPlayersDataArray = matchDataRef.current.players;
      const incomingPlayersDataArray = data.players;
      currentPlayersDataArray.forEach((currentPlayerData) => {
        incomingPlayersDataArray.forEach((incomingPlayerDataArray) => {
          if (currentPlayerData.userId === incomingPlayerDataArray.userId)
            newcurrentPlayersDataArray.push({
              ...currentPlayerData,
              ...incomingPlayerDataArray,
            });
        });
      });
      const waitingToFinishOpponent = false;
      matchDataRef.current = {
        ...matchDataRef.current,
        ...data,
        players: newcurrentPlayersDataArray,
        waitingToFinishOpponent,
      };
      dispatch(setMatchData(matchDataRef.current));
    }

    function setPlayersProfileData(playersArray, response) {
      const playersArrTemporary = playersArray;
      playersArray.forEach((e, index) => {
        playersArrTemporary[index] = {
          ...e,
          ...response.filter((player) => player.data.id === e.userId)[0].data,
        };
      });
      return playersArrTemporary;
    }

    function getPlayerOneData(playersArray) {
      return playersArray.filter((player) => player.userId === userData.id)[0];
    }

    function getPlayerTwoData(playersArray) {
      return playersArray.filter((player) => player.userId !== userData.id)[0];
    }
  }
}
