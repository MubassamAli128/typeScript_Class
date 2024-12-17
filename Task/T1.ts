let Register=document.getElementById('Register') as HTMLFormElement;


if(Register){
    Register.addEventListener('click',(event:Event)=>{
        event.preventDefault();
        let register_Email=document.getElementById('register_Email') as HTMLFormElement;
        if(register_Email.value){
            localStorage.setItem('Email',register_Email.value)
        }
        let register_Password=document.getElementById('register_Password') as HTMLFormElement;
        if(register_Password.value){
            localStorage.setItem('Password',register_Password.value)
        }
        let register_Block=document.getElementById('register_Block') as HTMLFormElement;
        register_Block.classList.remove("flex");
        register_Block.classList.add("hidden");
        let login_Block=document.getElementById('login_Block') as HTMLFormElement;
        login_Block.classList.add('flex');
        login_Block.classList.remove('hidden');
        console.log("Registered ...");
    });
}





let Login=document.getElementById('Login') as HTMLFormElement;
if(Login){
    Login.addEventListener('click',(event:Event)=>{
        event.preventDefault();
        let login_Email=document.getElementById('login_Email') as HTMLFormElement;
        if(login_Email.value===localStorage.getItem('Email')){
            let login_Password=document.getElementById('login_Password') as HTMLFormElement;
            if(login_Password.value===localStorage.getItem('Password')){
                location.href="./dashboard.html";
            }
            else{
                console.log("Worng password");
                
            }
        }
    });
}

let switch_button=document.getElementById('switch_button') as HTMLElement;

switch_button.addEventListener('click',(event:Event)=>{
    event.preventDefault();
    let register_Block=document.getElementById('register_Block') as HTMLFormElement;
    let login_Block=document.getElementById('login_Block') as HTMLFormElement;
    if(switch_button.textContent==="Register"){
        switch_button.textContent="Login";
        register_Block.classList.remove("hidden");
        register_Block.classList.add("flex");
        login_Block.classList.add('hidden');
        login_Block.classList.remove('flex');
    }else{
        switch_button.textContent="Register";
        register_Block.classList.remove("flex");
        register_Block.classList.add("hidden");
        login_Block.classList.add('flex');
        login_Block.classList.remove('hidden');
    }
});