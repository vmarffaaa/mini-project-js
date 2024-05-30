function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const postId = getQueryParam('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {
        let postDetails = document.getElementById('post-details');
        postDetails.innerHTML = `
                    <h2>Post Details</h2>
                    <p><strong>ID:</strong> ${post.id}</p>
                    <p><strong>Title:</strong> ${post.title}</p>
                    <p><strong>Body:</strong> ${post.body}</p>
                `;

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => response.json())
            .then((comments) => {
                let commentsContainer = document.getElementById('comments-container');
                comments.forEach(comment => {
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');

                    let commentName = document.createElement('p');
                    commentName.innerHTML = `<strong>Name:</strong> ${comment.name}`;
                    commentDiv.appendChild(commentName);

                    let commentEmail = document.createElement('p');
                    commentEmail.innerHTML = `<strong>Email:</strong> ${comment.email}`;
                    commentDiv.appendChild(commentEmail);

                    let commentBody = document.createElement('p');
                    commentBody.innerHTML = `<strong>Comment:</strong> ${comment.body}`;
                    commentDiv.appendChild(commentBody);

                    commentsContainer.appendChild(commentDiv);
                });
            });
    });