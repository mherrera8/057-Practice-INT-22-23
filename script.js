// set the correct username and password combination below
let correctUsername = ("Hi");
let correctPassword = ("Bye");
let button = document.querySelector("button");

button.onclick = function() {
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    let message = document.querySelector(".message");

    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
    if(username === correctUsername && password === correctPassword){
      message.innerHTML = "Big success!";
    }
    // else{
    //   message.innerHTML = "WRONG";
    // }

    if(username === correctUsername && password !== correctPassword){
      message.innerHTML = "wrong password";
    }else if (username !== correctUsername && password === correctPassword){
      message.innerHTML = "wrong username";
    }

    if(username !== correctUsername || password !== correctPassword){
      message.innetHTML = "incorrect username and password";
    }

    if(username === "" || password === ""){
      message.innerHTML = "please enter a username and/or password";
    }
};