/*document.addEventListener('DOMContentLoaded', function(){

    const fotoPerfil = document.querySelector('#fotoPerfil');
    const nome = document.querySelector('#nome');
    const nomeUsuario = document.querySelector('#nome-usuario');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/${}')
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
})*/

$(document).ready(function(){

    $('#btn-buscar-user').click(function(){
        const user = $('#user').val();
        const endpoint = `https://api.github.com/users/${user}`;
        const botao = $(this);
        const fotoPerfil = document.querySelector('#fotoPerfil');
        const nome = document.querySelector('#nome');
        const nomeUsuario = document.querySelector('#nome-usuario');
        const repositorio = document.querySelector('#repositorio');
        const seguidores = document.querySelector('#seguidores');
        const seguindo = document.querySelector('#seguindo');
        const link = document.querySelector('#link');
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        fetch(endpoint)
        .then(function(resposta){
            if (resposta.ok) {
                return resposta.json();
            } 
            else {
                $("#user").val("");
                throw new Error('Usuário não encontrado');
            }
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

        .catch(function(erro){
            alert("Usuário não encontrado, tente novamente.")
        })

        .finally(function(){
            setTimeout(function(){
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 0.5);                
        })
    })
})