fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        let userList = document.getElementById('user-list');
        users.forEach(user => {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');

            let userTitle = document.createElement('h2');
            userTitle.classList.add('user-title');
            userTitle.innerText = `User${user.id}`;
            userDiv.appendChild(userTitle);

            let userId = document.createElement('h3');
            userId.innerText = `ID: ${user.id}`;
            userDiv.appendChild(userId);

            let userName = document.createElement('h3');
            userName.innerText = `Name: ${user.name}`;
            userDiv.appendChild(userName);

            let detailsLink = document.createElement('a');
            detailsLink.href = `user-details.html?id=${user.id}`;
            detailsLink.innerText = 'More Details';
            userDiv.appendChild(detailsLink);

            userList.appendChild(userDiv);
        });
    });