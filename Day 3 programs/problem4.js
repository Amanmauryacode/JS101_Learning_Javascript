let databaseUser = "aman1@gmail.com";
let databasePassword = "1234aman";

let username = "aman@gmail.com";
let password = "1234aman";

if (databaseUser == username) {
  if (databasePassword == password) {
    console.log("login Successfull.");
  } else {
    console.log("Incorrect Password.");
  }
} else {
  console.log("Incorrect Credentials");
}