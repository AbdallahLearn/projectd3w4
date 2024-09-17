const url = 'https://66e7e6bbb17821a9d9da7058.mockapi.io/article';
const containerAdd = document.getElementById('container-add');
const inputSubject = document.getElementById('subject-id');
const inputText = document.getElementById('text-id');
const btnSend = document.getElementById('send');
const imgUrl = document.getElementById('url-id')



btnSend.addEventListener('click', () => {
    
    const subjectValue = inputSubject.value.trim();
    const textValue = inputText.value.trim();

    
    if (subjectValue === '' || textValue === '') {
        alert('Please fill in both fields');
        return;
    }

   
    const data = {
        img: imgUrl.value,
        title: subjectValue,
        text: textValue
    };

   
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        inputSubject.value = '';
        inputText.value = '';
        alert('Article added successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});


let btnMenu = document.getElementById('toggle')
btnMenu.addEventListener('click', function(){
    let ulList = document.getElementById('ul-list-mobile')
    if (ulList.style.display === 'block') {
        ulList.style.display = 'none';
    } else {
        ulList.style.display = 'block';
    }
})

function logout(){
    window.location.href = 'index.html';
}