# **Programming Challenges Collection**

Welcome to my **Programming Challenges** repository! This collection contains various coding challenges I have worked on, ranging from simple logic problems to more complex ones. Below are the challenges I've solved and their corresponding solutions. Feel free to explore, learn, and contribute!

---

### **1. Calculate Cash-out Charge**
**Problem**:  
Rahim needs to calculate the cash-out charge for transactions. Given an amount, the task is to calculate the charge based on a 1.75% rate.

**Solution**:  
The function `cashOut()` accepts the amount as input and calculates the cash-out charge.

```javascript
function cashOut(amount) {
  const charge = amount * 0.0175;  // 1.75% charge
  return charge;
}