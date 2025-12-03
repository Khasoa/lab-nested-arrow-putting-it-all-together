const login = createLoginTracker({username:"user1", password:"password123" })

function createLoginTracker (userInfo) {
let attemptCount = 3;

const attemptLogin = (passwordAttempt) => {
attemptCount++;

if(passwordAttempt===userInfo.password && attemptCount<=3) { 
  console.log("Status: Password matched");
  return "Login Successful";
}

if (passwordAttempt!==userInfo.password && attemptCount <=3){ 
  console.log("Status: Password did not match");
  return "Attempt " + attemptCount + ": Login failed";

}

if (passwordAttempt!==userInfo.password && attemptCount>=3) {
  console.log("Status: Account locked")
  return "Account locked due to too many failed login attempts";
}
};

return attemptLogin;

}

console.log(login("password"))


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};