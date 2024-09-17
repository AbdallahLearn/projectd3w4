const url = 'https://66e7e6bbb17821a9d9da7058.mockapi.io/signup'

const inputEmail = document.getElementById('email')
const inputPass = document.getElementById('password')
const btnLogin = document.getElementById('btn-login')



function handleLogin(users) {
    btnLogin.addEventListener('click', function() {
        const email = inputEmail.value.trim();
        const password = inputPass.value.trim();

        
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        const user = users.find(user => user.email === email && user.psw === password);

        if (user) {
            localStorage.setItem('userName', user.fname);
            localStorage.setItem('userEmail', user.email);

            window.location.href = 'home.html';
        } else {
            alert('The email or password is incorrect');
        }
    });
}

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        handleLogin(data);
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
        alert('Failed to load user data. Please try again later.');
    });