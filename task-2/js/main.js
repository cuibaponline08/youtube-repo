function Main() {
    var githubService = new GitHubService();
    this.onInit = function () {
        githubService.getFunchalSubscriptions(loadDataToContainer);
    }

    function loadDataToContainer() {
        var data = JSON.parse(this.responseText);
        var container = document.getElementById('container');
        var template = '';
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            template += '<a class="card" href="' + item.homepage + '" target="_blank">'
            template += '<div class="image-container"><img src="https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png" /></div>'
            template += '<div class="name">' + item.name + '</div>';
            template += '<div class="full-name">' + item.full_name + '</div>';
            template += '</a>'
        }
        container.innerHTML = template;
    }
}

var main = new Main();
window.onload = function () {
    main.onInit();
}