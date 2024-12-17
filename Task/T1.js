var Register = document.getElementById('Register');
if (Register) {
    Register.addEventListener('click', function (event) {
        event.preventDefault();
        var register_Email = document.getElementById('register_Email');
        if (register_Email.value) {
            localStorage.setItem('Email', register_Email.value);
        }
        var register_Password = document.getElementById('register_Password');
        if (register_Password.value) {
            localStorage.setItem('Password', register_Password.value);
        }
        var register_Block = document.getElementById('register_Block');
        register_Block.classList.remove("flex");
        register_Block.classList.add("hidden");
        var login_Block = document.getElementById('login_Block');
        login_Block.classList.add('flex');
        login_Block.classList.remove('hidden');
        console.log("Registered ...");
    });
}
var Login = document.getElementById('Login');
if (Login) {
    Login.addEventListener('click', function (event) {
        event.preventDefault();
        var login_Email = document.getElementById('login_Email');
        if (login_Email.value === localStorage.getItem('Email')) {
            var login_Password = document.getElementById('login_Password');
            if (login_Password.value === localStorage.getItem('Password')) {
                location.href = "./dashboard.html";
            }
            else {
                console.log("Worng password");
            }
        }
    });
}
var switch_button = document.getElementById('switch_button');
switch_button.addEventListener('click', function (event) {
    event.preventDefault();
    var register_Block = document.getElementById('register_Block');
    var login_Block = document.getElementById('login_Block');
    if (switch_button.textContent === "Register") {
        switch_button.textContent = "Login";
        register_Block.classList.remove("hidden");
        register_Block.classList.add("flex");
        login_Block.classList.add('hidden');
        login_Block.classList.remove('flex');
    }
    else {
        switch_button.textContent = "Register";
        register_Block.classList.remove("flex");
        register_Block.classList.add("hidden");
        login_Block.classList.add('flex');
        login_Block.classList.remove('hidden');
    }
});
