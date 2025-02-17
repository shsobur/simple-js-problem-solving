// Problem-01 : Calculate the cash-out Charge__

function cashOut(money) {
  const cashOutCharge = 1.75;

  if (money > 0 && typeof money === "number" && typeof money !== "string") {
    const charge = (money * cashOutCharge) / 100;
    const result = parseFloat(charge.toFixed(2));
    return result;
  } else {
    return "Invalid";
  }
}

const result = cashOut(100);
console.log(result);