
const url = 'https://66e7e6bbb17821a9d9da7058.mockapi.io/signup';


const fname = document.getElementById('name');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const btnSignup = document.getElementById('btn-signup');


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



function addAccount() {
    
    if (!fname.value || fname.value.length < 5) {
        alert('The name must be at least 5 characters long.');
        return; 
    }
    if (!email.value || !emailRegex.test(email.value)) {
        alert('Please enter a valid email address.');
        return; 
    }
    if (!psw.value || psw.value.length <= 8) {
        alert('The password must be more than 8 chara.');
        return; 
    }

    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            fname: fname.value,
            email: email.value,
            psw: psw.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        
        localStorage.setItem('userName', data.fname);
        window.location.href = 'home.html';
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('An error occurred while signing up. Please try again.');
    });
}


btnSignup.addEventListener('click', addAccount);

