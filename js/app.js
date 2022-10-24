var password = document.getElementById('password');
var password_eye = document.getElementById('password_eye');
var darkMode_icon = document.getElementById('mode');
var slideVar = document.getElementById('slideBars');


password_eye.addEventListener('click', function(){

    if(password.type === 'password'){
        password.type = 'text';
        password_eye.classList.add('fa-eye');
        password_eye.classList.remove('fa-eye-slash');
    }else{
        password.type = 'password';
        password_eye.classList.remove('fa-eye');
        password_eye.classList.add('fa-eye-slash');
    }
})


darkMode_icon.addEventListener('click', function(){
    document.body.classList.toggle('darkMode');

    if(darkMode_icon.classList.contains('fa-moon')){
        darkMode_icon.classList.add('fa-sun');
        darkMode_icon.classList.remove('fa-moon');
    }else{
        darkMode_icon.classList.remove('fa-sun');
        darkMode_icon.classList.add('fa-moon');
    }
});

slideVar.addEventListener('click', function(){
    document.getElementById('slide_menu').classList.toggle('active');
});