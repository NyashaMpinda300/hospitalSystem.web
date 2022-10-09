function login(){

// e.preventDefault();


var email = document.getElementById("email_field").value;
var password = document.getElementById("password_field").value;



// if (email == "marly@queens.ac.mw" && password == "12345678") {
//   window.location.assign("NursePanel.htm");
//   console.log(email,password);
//   alert("Login Successful");
// }else{
//   alert("Invalid Login");
//   return;
// }
firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  window.location.assign("NursePanel.htm");
  console.log(email,password);
  alert("Login Successfully to Firebase account");
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("Invalid Login");
});


};


// const getElementVal = (id) => {
//   return document.getElementById(id).value;
  
//   };