// Problem-01 : Calculate the cash-out Charge__

function cashOut(money) {
  const cashOutCharge = 1.75;

  if (money >= 0 && typeof money === "number" && typeof money !== "string") {
    const charge = (money * cashOutCharge) / 100;
    const result = parseFloat(charge.toFixed(2));
    return result;
  } else {
    return "Invalid";
  }
}

// Problem-02 : Detect email  valid or not__

function validEmail(email) {
  if (typeof email === "string") {
    const firstLetter = email[0];
    const spacialCharacters = [".", "-", "_", "+", "@"];

    if (!spacialCharacters.includes(firstLetter)) {
      if (email.includes("@") && !email.includes(" ")) {
        const lastFourDegit = email.length - 4;
        const lastDegit = email.length;

        const checkDomainName = email.slice(lastFourDegit, lastDegit);

        if (checkDomainName === ".com") {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

// Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana )__

function electionResult(votes) {
  if (Array.isArray(votes)) {
    let politicalParty1 = [];
    let politicalParty2 = [];

    for (const vote of votes) {
      if (vote === "mango") {
        politicalParty1.push(vote);
      } else if (vote === "banana") {
        politicalParty2.push(vote);
      }
    }

    if (politicalParty1.length > politicalParty2.length) {
      return "Mango";
    } else if (politicalParty1.length < politicalParty2.length) {
      return "Banana";
    } else if (politicalParty1.length === politicalParty2.length) {
      return "Draw";
    }
  } else {
    return "Invalid";
  }
}

// Problem-04: Detect The Perfect Best Friend__

function isBestFriend(f1, f2) {
  if (typeof f1 === "object" && typeof f2 === "object") {
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

// Problem-05: Let’s Calculate Video watch Time__

function calculateWatchTime(times) {
  let totalSecond = 0;

  for (const time of times) {
    if (typeof time === "number") {
      totalSecond += time;
    } else {
      return "Invalid";
    }
  }

  const hours = Math.floor(totalSecond / 3600);

  const remainingMinutes = totalSecond % 3600;

  const minutes = Math.floor(remainingMinutes / 60);

  const seconds = remainingMinutes % 60;

  const totalTimeWast = {
    hour: hours,
    minute: minutes,
    second: seconds,
  };

  return totalTimeWast;
}