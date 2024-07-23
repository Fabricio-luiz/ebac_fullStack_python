document.addEventListener('DOMContentLoaded', function(){
    const fotoPerfil = document.querySelector('#fotoPerfil');
    const nome = document.querySelector('#nome');
    const nomeUsuario = document.querySelector('#nome-usuario');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/Fabricio-luiz')
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            fotoPerfil.src = json.avatar_url;
            nome.innerText = json.name;
            nomeUsuario.innerText = json.login;
            repositorio.innerText = json.public_repos;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            link.href = json.html_url;
        })
})