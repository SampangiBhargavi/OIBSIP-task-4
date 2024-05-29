let signUpBtn = document.querySelection('.signupbtn');
let signInBtn = document.querySelection('.signinbtn');
let nameField = document.querySelection('.namefield');
let title = document.querySelection('.title');
let underline = document.querySelection('.underline');
let text = document.querySelection('.text');


signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML = 'sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translatex(35px)';
});
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'sign Up';
    text.innerHTML = 'password suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translatex(0)';
});