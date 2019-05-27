function watchForm() {
    $(".search-form").submit(e => {
        e.preventDefault();
        user = $("#user-search-input").val();
        fetchRepos(user);
        $("#user-search-input").val("");
    })
}

function fetchRepos(user) {
    const url = `https://api.github.com/users/${user}/repos`
    fetch(url)
        .then(response => response.json())
        .then(data => renderRepos(data));
}

function renderRepos(repos) {
    console.log(repos);
    const reposString = repos.map(repo => {
        return `<P><a href="${repo.url}">${repo.name}</a></p>`
    }).join("")
    console.log(reposString);
    $(".repos").html(reposString);
}

$(function () {
    watchForm();

})