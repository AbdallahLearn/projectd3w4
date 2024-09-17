const url = 'https://66e7e6bbb17821a9d9da7058.mockapi.io/article';
const containerAdd = document.getElementById('container-add');
const inputSubject = document.getElementById('subject-id');
const inputText = document.getElementById('text-id');
const btnSend = document.getElementById('send');
const imgUrl = document.getElementById('url-id')


// Add event listener to the Send button
btnSend.addEventListener('click', () => {
    // Get values from input fields
    const subjectValue = inputSubject.value.trim();
    const textValue = inputText.value.trim();

    // Basic validation
    if (subjectValue === '' || textValue === '') {
        alert('Please fill in both fields');
        return;
    }

    // Prepare data for sending
    const data = {
        img: imgUrl.value,
        title: subjectValue,
        text: textValue
    };

    // Send POST request
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
        // Optionally clear the input fields or show a success message
        inputSubject.value = '';
        inputText.value = '';
        alert('Article added successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
