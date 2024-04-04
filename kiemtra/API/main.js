const postList = document.getElementById('postList');
const postsButton = document.getElementById('postsButton');
const albumsButton = document.getElementById('albumsButton');
const photosButton = document.getElementById('photosButton');

function getPosts() {
  
  albumsButton.classList.remove('active');
  photosButton.classList.remove('active');
  postsButton.classList.add('active');

  
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      postList.innerHTML = '';
      data.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        postList.appendChild(li); 
      });
    });
}

function getAlbums() {
  postsButton.classList.remove('active');
  photosButton.classList.remove('active');
  albumsButton.classList.add('active');

  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => {
      postList.innerHTML = '';
      data.forEach(album => {
        const li = document.createElement('li');
        li.textContent = album.title;
        postList.appendChild(li); 
      });
    });
}

function getPhotos() {

  postsButton.classList.remove('active');
  albumsButton.classList.remove('active');
  photosButton.classList.add('active');
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
      postList.innerHTML = '';
      data.forEach(photo => {
        const li = document.createElement('li');
        li.textContent = photo.title;
        postList.appendChild(li); 
      });
    });
}

getPosts();