
var password = document.getElementById('password');
var password_check = document.getElementById('password_check');

password_check.addEventListener('click', function(){

    if(password.type === 'password'){
        password.type = 'text';
    }else{
        password.type = 'password';
    }
})

let themeButtons = document.querySelectorAll('.theame-buttons');

themeButtons.forEach(color =>{
    color.addEventListener('click', function(){
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--primaryColor', dataColor);
    });
});


// function changeColor(color){
//     document.body.style.background = color;
// }

// document.getElementsByTagName('span').addEventListener('click', function(color){
//     document.body.style.background = color;
// })
