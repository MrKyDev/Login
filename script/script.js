const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBox = document.querySelector(".login-box");
const note = document.querySelector(".note");
const maxOffsetX = loginBox.clientWidth / 2;
const maxOffsetY = loginBox.clientHeight / 2 + 50;

note.addEventListener("mouseover", function () {
    note.textContent = "Username: admin, Password: admin123";
});

note.addEventListener("mouseout", function () {
    note.textContent = "Hover for a hint...";
});

loginBtn.addEventListener("mouseover", function () {
    if (usernameInput.value !== "Admin" || passwordInput.value !== "Admin123") {
        let offsetX = (Math.random() - 0.5) * maxOffsetX;
        let offsetY = (Math.random() - 0.5) * maxOffsetY;
        loginBtn.style.left = `calc(50% + ${offsetX}px)`;
        loginBtn.style.top = `calc(100% + ${offsetY}px)`;
    }
});

loginBtn.addEventListener("click", function () {
    if (usernameInput.value === "Admin" && passwordInput.value === "Admin123") {
        document.body.innerHTML = '<div class="welcome-screen">Welcome, Admin!</div>';
        document.body.style.background = 'url(https://c.tenor.com/6F9QMEDcN2IAAAAC/scary-haunted.gif) no-repeat center center/cover';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.height = '100vh';
        document.body.style.color = 'white';
        document.body.style.fontSize = '2rem';
        document.body.style.fontFamily = 'Arial, sans-serif';
    } else {
        alert("Wrong Credentials! Try Again!");
    }
});