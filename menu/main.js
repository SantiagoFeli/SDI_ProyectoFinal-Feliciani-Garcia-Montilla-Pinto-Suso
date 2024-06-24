document.addEventListener('DOMContentLoaded', function()) {
    var loginBtn = document.querySelector('.iniciar button');
    var loginModal = document.getElementById('loginModal');
    var closeLogin = document.getElementById('closeLogin');


    var registerBtn = document.querySelector('.registrate button');
    var registerModal = document.getElementById('registerModal');
    var closeRegister = document.getElementById('closeRegister');
    
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    closeLogin.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    registerBtn.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });

    closeRegister.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

}