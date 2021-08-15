var eye = document.getElementById("eye");        // eye icon which is near password field is selected 

// when submit button is clicked the this is executed
document.getElementById("submit").addEventListener("click", function (e) {
     e.preventDefault();

     // items are selected which are use to check or manipulation the content in the webpage
     var email = document.getElementById("email");   
     var password = document.getElementById("password");
     var passLengthMessage = document.getElementById("passLengthMessage");
     var emailBlankMessage = document.getElementById("emailBlankMessage");
     var emailInvalidMessage = document.getElementById("emailInvalidMessage");
     var emailOperatorMissingMessage = document.getElementById("emailOperatorMissingMessage");


     //condition if any of the input field is empty
     if (email.value == '' || password.value == '') {
          alert("Fill all the input fields")
     } 
     else {                                                        //if the input field are not empty
          setInterval(emailChecking, 500);                         //once the form is submitted the it is checked for the conditions executed in every 500ms so   that when condition becomes true then border bottom becomes green
          setInterval(passwordChecking, 500);                     
     }
})

//Executed for checking of email address contains symbols like @ and . or not 
function emailChecking() {
     // console.log("Email is checkked here");
     //if email not contain @ or . then this is executed
     if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {  //if any of the symvol is not present then indexOf returns -1
          email.style.borderBottom = "3px solid red";
          emailOperatorMissingMessage.style.display = "inline";
     } else {                                            //executed when email contains both the symbols
          if (email.value.indexOf('@') > 0 && email.value.indexOf('.') > email.value.indexOf("@")) {   //checks the order of symbol used i.e . comes after @ or not
               email.style.borderBottom = "3px solid green";
               emailOperatorMissingMessage.style.display = "none";
               emailInvalidMessage.style.display='none';
          } else {                                        //if symbols are not in correct order then this block is executed
               email.style.borderBottom = "3px solid red";
               emailInvalidMessage.style.display = "inline";
          }
     }
}

//checks the condition of the password
function passwordChecking() {
     // console.log("Password is checked here");
     if (password.value.length > 7) {                       //if the password contains more than 7 characters
          password.style.borderBottom = "3px solid green";
          passLengthMessage.style.display = "none";
     } else if (password.value.length <= 7) {               //if the password does not contains more than 7 characters
          password.style.borderBottom = "3px solid red";
          passLengthMessage.style.display = "inline";
     }
}

//for hiding and unhiding the password by changing its type
eye.addEventListener("click", function () {
     if(eye.classList.contains("fa-eye-slash")){      // if the type is of password
          password.type = "text";                     //change the type of input field
          eye.classList.remove("fa-eye-slash");       //remove the slahed icon
          eye.classList.add("fa-eye")                  //adding the non slashed icon
     }
     else if(eye.classList.contains("fa-eye")){    // if the type is password again
          password.type ="password";              //change the type of input field
          eye.classList.remove("fa-eye");         //removing the eye icon
          eye.classList.add("fa-eye-slash");      //adding the slashed eye icon
     }
     // console.log("slash eye is clicked");
})