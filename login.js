const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.getElementById("login");
const attempsDisplay = document.querySelector(".attempts");

let users = [{ username : "Yogith" , password: "shetty" }];

let attemptsRemaining = 5;

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(username.value === users[0].username && password.value === users[0].password){
        console.log(window.location.href);
        window.location.replace(`/home.html?username=${username.value}`);
        return false;
    } else{
        if(attemptsRemaining === 0){
            attempsDisplay.innerHTML = `No more attempts !`;
            loginBtn.ariaDisabled = true;
            return;
        }
        attemptsRemaining--;
        attempsDisplay.innerHTML = `${attemptsRemaining + 1} attempts remaining`;
    }

});