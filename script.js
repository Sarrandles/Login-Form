// object user stores name, email, and password
// email coolguy@gmail.com, password:ILoveCoffee, name:Grant Chirpus
//clicking "sign in" button will execute a function called checkLogin
//the checkLogin function will check if the values of the email and password inputs
//match the email and password properties of the object "user" previously created
//if the condition is true, hide the sign in form and show welcome message container ((.welcomeMessage))
//if condition is false, alert the user that the sign in credentials are incorrect




//this is my object
var user = {
username:"Grant Chirpus",
Email:"coolguy@gmail.com",
password:"ILoveCoffee"
};

//clicking the sign in button should execute checkLogin();


function checkLogin(){
  var username = usernameTxt.value;
  //i think this is making it so unless the user is Grant Chirpus, the user can't log in at all. not understanding username.Txt.value
          (email === "coolguy@gmail.com"),
          (password === "ILoveCoffee"),
          (username === "Grant Chirpus")
      };
      console.log("User is signed in.");
      getElementsByClassName("welcomeMessage").display=block;
    } if else{
       console.log("No user is signed in.");
//this should trigger the success or fail message
//i feel like im close, but i can't figure this part out on my own and I think my if else statement is wrong...
    }
  });
}
