export const database = {
  thomas927: {
    password: "password",
    username: "thomas927",
  },
};

export const errorMessages = {
  429: "Please wait a few minutes before you try again.",
  401: "Sorry, your password was incorrect. Please double-check your password.",
};

const loginCount = {};

export function checkExcessiveLogin(ip) {
  if (loginCount[ip] >= 5) {
    return true;
  }
  return false;
}

export function addLoginCount(ip) {
  if (loginCount.hasOwnProperty(ip)) {
    return loginCount[ip]++;
  }
  loginCount[ip] = 0;
}
