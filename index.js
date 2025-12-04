const login = createLoginTracker({username:"user1", password:"password123" })

function createLoginTracker (userInfo) {
let attemptCount = 0;

const attemptLogin = (passwordAttempt) => {

//first, check if already locked
if (attemptCount>=3) {
  console.log("Status: Account locked")
  return "Account locked due to too many failed login attempts";
}
//When correct password is used
if(passwordAttempt===userInfo.password) { 
  console.log("Status: Password matched");
  return "Login Successful";
}
//Increase attempts when wrong passwords are used
attemptCount++;
if (passwordAttempt!==userInfo.password){ 
  console.log("Status: Password did not match");
  return "Attempt " + attemptCount + ": Login failed";

}


};

return attemptLogin;

}

console.log(login("password123"))


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};