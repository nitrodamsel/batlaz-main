export function getNumberWithOrdinal(playersArray, playerData) {
  var n = playersArray
    .slice()
    .sort((a, b) => b.points - a.points)
    .findIndex((element) => element.userId === playerData.userId);
  n = n + 1;
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function getCrownColorByPlayersPoints(playersArray, playerData) {
  var n = playersArray
    .slice()
    .sort((a, b) => b.points - a.points)
    .findIndex((element) => element.userId === playerData.userId);
  n = n + 1;
  var s = ["#7E20C9", "#db7904", "#F05837", "#BBBBBB"];
  return n <= 3 ? s[n - 1] : s[3];
}

export function getHours(hours) {
  if (Number.isInteger(hours)) {
    hours = ("0" + hours).slice(-2);
    return hours.toString();
  }
  return "00";
}

export function getMinutes(minutes) {
  if (Number.isInteger(minutes)) {
    minutes = ("0" + minutes).slice(-2);
    return minutes.toString();
  }
  return "00";
}

export function getSeconds(seconds) {
  if (Number.isInteger(seconds)) {
    seconds = ("0" + seconds).slice(-2);
    return seconds.toString();
  }
  return "00";
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export const getTimeConsumed = (milliseconds) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  if (hours > 0) {
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds
    )}`;
  } else if (minutes > 0) {
    return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  } else {
    return `${padTo2Digits(seconds)}`;
  }
};
