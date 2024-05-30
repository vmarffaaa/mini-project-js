function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const userId = getQueryParam('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
        let userDetails = document.getElementById('user-details');
        userDetails.innerHTML = `
                    <h2>User Details for User ${user.id}</h2>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}">${user.website}</a></p>
                    <h3>Address</h3>
                    <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Geo:</strong> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</p>
                    <h3>Company</h3>
                    <p><strong>Name:</strong> ${user.company.name}</p>
                    <p><strong>Catch Phrase:</strong> ${user.company.catchPhrase}</p>
                    <p><strong>BS:</strong> ${user.company.bs}</p>`;
    });

document.getElementById('load-posts').addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((response) => response.json())
        .then((posts) => {
            let postsContainer = document.getElementById('posts-container');
            postsContainer.innerHTML = '';
            posts.forEach(post => {
                let postDiv = document.createElement('div');
                postDiv.classList.add('post');

                let postTitle = document.createElement('p');
                postTitle.innerText = post.title;
                postDiv.appendChild(postTitle);

                let postLink = document.createElement('a');
                postLink.href = `post-details.html?id=${post.id}`;
                postLink.innerText = 'View Post';
                postDiv.appendChild(postLink);

                postsContainer.appendChild(postDiv);
            });
        });
});