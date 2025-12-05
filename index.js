const login = createLoginTracker({username:"user1", password:"password123" })

function createLoginTracker (userInfo) {
let attemptCount = 0;

const attemptLogin = (passwordAttempt) => {

  //Allow correct Login immediately or after failed attempts
if(passwordAttempt === userInfo.password) { 
  console.log("Status: Password matched");
  return "Login Successful";
}
//if wrong password is used, increase attempt count
attemptCount++;
console.log("Status: Password did not match");

//lock account after 3 failed attempts
if(attemptCount >= 3) {
  console.log("Status: Account locked");
  return "Account locked due to too many failed login attempts";
}
//otherwise, return failed attempt
return "Attempt " + attemptCount + ": Login failed";
}

return attemptLogin;
};



console.log(login("password123"))


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};