document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://66e7e6bbb17821a9d9da7058.mockapi.io/article'; // Your API URL
    const userArticleContainer = document.querySelector('.user-article');

    
    function fetchArticles() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(articles => {
                displayArticles(articles);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }

    function displayArticles(articles) {
        userArticleContainer.innerHTML = ''; 
        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('container-art-section');

            const subject = document.createElement('h2');
            subject.classList.add('subject-of-article');
            subject.textContent = article.title; 

            const content = document.createElement('h3');
            content.textContent = article.text; 

            const deleteButton = document.createElement('button');
            deleteButton.style.marginTop = '20px'
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => deleteArticle(article.id, articleDiv));

            



            articleDiv.appendChild(subject);
            articleDiv.appendChild(document.createElement('hr'));
            articleDiv.appendChild(content);
            articleDiv.appendChild(deleteButton);

            userArticleContainer.appendChild(articleDiv);
        });
    }

    function deleteArticle(id, articleElement) {
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                
                articleElement.remove();
            } else {
                console.error('Error deleting article:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error deleting article:', error);
        });
    }

    
    fetchArticles();
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