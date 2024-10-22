document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.querySelector('.login');
    const registerBtn = document.querySelector('.register');
    const guestBtn = document.querySelector('.guest');

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault(); 
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    registerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    guestBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('以訪客身份進入網站！'); 
    });
});
