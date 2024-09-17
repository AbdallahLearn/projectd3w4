document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const menu = document.querySelector('.ul-list');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});

let btnLogout = document.getElementById('btn-logout')

btnLogout.addEventListener('click', function(){
    window.location.href = 'index.html';
})

let btnAddArticle = document.getElementById('add-article')
btnAddArticle.addEventListener('click', function(){
    window.location.href = 'add-article.html'
})



const url = 'https://66e7e6bbb17821a9d9da7058.mockapi.io/article'; // Replace with your actual API endpoint
const containerBody = document.getElementById('container-body');


function createProfile(profile) {
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('profile-person');
    
    const link = document.createElement('a');
    link.href = `profile.html`; 
    link.style.color ='black'
    const subject = document.createElement('h2');
    subject.classList.add('subject');
    subject.textContent = profile.title; 
    
    const listImgNameDiv = document.createElement('div');
    listImgNameDiv.classList.add('list-img-name');
    
    const img = document.createElement('img');
    img.classList.add('profile-logo');
   
    if (profile.img && profile.img.trim() !== '') {
        img.src = profile.img; 
    } else {
        img.src = 'https://i.pinimg.com/564x/a4/87/8f/a4878f61d44a3d772e5dcd17ec6f4c4a.jpg'; // Default image URL
    }
    
     
    
    
    const name = document.createElement('h4');
    name.classList.add('name');
    name.textContent = profile.fname;
    // name.textContent =   localStorage.getItem('userName') 
    
    listImgNameDiv.appendChild(img);
    listImgNameDiv.appendChild(name);
    
    link.appendChild(subject);
    link.appendChild(listImgNameDiv);
    
    profileDiv.appendChild(link);
    
    return profileDiv;
}
fetch('https://66e7e6bbb17821a9d9da7058.mockapi.io/signup')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(profile => {
            const name = document.createElement('h4');
            const userName = document.getElementById('username')
            userName.textContent = localStorage.getItem('userName')
            name.classList.add('name');
            name.textContent = profile.fname;
            const profileElement = createProfile(profile);
            profileElement.appendChild(name)
            containerBody.appendChild(profileElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(profile => {
            const profileElement = createProfile(profile);
            containerBody.appendChild(profileElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
