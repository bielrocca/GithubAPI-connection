document.addEventListener('DOMContentLoaded', function() {
    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const userElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repos');
    const followerElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    const endpoint = ('https://api.github.com/users/bielrocca');

    fetch(endpoint)
        .then(function(answer) {
            return answer.json();
        })
        .then(function(json) {
            avatarElement.src = json.avatar_url;
            nameElement.innerHTML = json.name;
            userElement.innerHTML = json.login;
            reposElement.innerHTML = json.public_repos;
            followerElement.innerHTML = json.followers;
            followingElement.innerHTML = json.following;
            linkElement.href = json.html_url;
        }) .catch(function(erro) {
            alert('O servidor API REST está temporariamente inativa por motivos ded segurança, aguarde alguns instantes para retornamos a ativa :)')
        })
})