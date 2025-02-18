# Welcome to my **Basic Programming Challenges** repository!

This repository is a collection of various coding challenges I have worked on as a beginner. It includes a wide range of problems—from simple logic challenges to more complex ones. Whether you're looking for the best solution or a simpler, step-by-step approach, you'll find both here.

- The challenges and their corresponding solutions are organized below.
- For simpler, more beginner-friendly solutions, feel free to check out my `problem.js` file.

Feel free to explore, learn, and contribute!

---

### **1. Calculate Cash-out Charge**

**Problem**:  
Rahim needs to calculate the cash-out charge for transactions. Given an amount, the task is to calculate the charge based on a 1.75% rate.

**Solution**:  
The function `cashOut()` accepts the amount as input and calculates the cash-out charge.

```javascript
function cashOut(amount) {
  const charge = amount * 0.0175; // 1.75% charge
  return charge;
}
```

### **2. Validate Email Address**

**Problem**:  
Given an email address, check if it is valid based on the following rules:

- It should not start with special characters like `.`, `-`, `_`, `+`, or `@`.
- It must contain `@` in the middle.
- It should not contain any spaces.
- It should end with `.com`.

**Solution**:  
The function `validEmail()` validates an email address based on the rules mentioned.

```javascript
function validEmail(email) {
  const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
```

### **3. Election Result**

**Problem**:  
In a political election between the Mango Party and the Banana Party, the task is to calculate the winner based on the votes array.

**Solution**:  
The function `electionResult()` processes an array of votes and declares the winning party.

```javascript
function electionResult(votes) {
  const mangoVotes = votes.filter((vote) => vote === "Mango");
  const bananaVotes = votes.filter((vote) => vote === "Banana");

  if (mangoVotes.length > bananaVotes.length) {
    return "Mango Party Wins!";
  } else if (bananaVotes.length > mangoVotes.length) {
    return "Banana Party Wins!";
  } else {
    return "It's a Tie!";
  }
}
```

### **4. True Friendship Check**

**Problem**:  
Given data for two friends, check if they are true best friends based on mutual friendship values.

**Solution**:  
The function `isBestFriend()` checks if both friends have their `bestFriend` value matching the other person's `roll`.

```javascript
function isBestFriend(friend1, friend2) {
  return (
    friend1.bestFriend === friend2.roll && friend2.bestFriend === friend1.roll
  );
}
```

### **5. Calculate Watch Time**

**Problem**:  
Subah spends a lot of time watching videos on TikTok. The task is to calculate the total watch time in hours, minutes, and seconds from an array of seconds.

**Solution**:  
The function `calculateWatchTime()` takes an array of seconds and converts it into hours, minutes, and seconds.

```javascript
function calculateWatchTime(timeArray) {
  const totalSeconds = timeArray.reduce((acc, curr) => acc + curr, 0);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds };
}
```

---

## **Thank You for Checking Out!**

I hope you found this repository helpful and that the solutions were easy to understand. Feel free to explore, contribute, or raise any issues if you encounter any. Happy coding! 😊

---

## **Contact**

For any questions or collaboration opportunities, feel free to reach out to me via GitHub or any other platforms listed below.

---
