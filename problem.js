// Problem-01 : Calculate the cash-out Charge__

// function cashOut(money) {
//   const cashOutCharge = 1.75;

//   if (money > 0 && typeof money === "number" && typeof money !== "string") {
//     const charge = (money * cashOutCharge) / 100;
//     const result = parseFloat(charge.toFixed(2));
//     return result;
//   } else {
//     return "Invalid";
//   }
// }

// const result = cashOut(100);

// Problem-02 : Detect email  valid or not__

function validEmail(email) {
  if (typeof email === "string") {
    const firstLetter = email[0];
    const spacialCharacters = [".", "-", "_", "+", "@"];

    if (!spacialCharacters.includes(firstLetter)) {
      if (email.includes("@") && !email.includes(" ")) {
        const lastFourDegitNum = email.length - 4;
        const lastDegitNum = email.length;

        const checkDomainName = email.slice(lastFourDegitNum, lastDegitNum);

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

const result = validEmail("he ro@alom.com");