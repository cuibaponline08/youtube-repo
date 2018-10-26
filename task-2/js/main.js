// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    const searchButton = document.getElementById('search-button');
    searchButton.removeAttribute('disabled');
}

// Search for a specified string.
function search() {
    const q = document.getElementById('query').value;
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });

    request.execute(function (response) {
        var str = JSON.stringify(response.result);
        const container = document.getElementById('search-container').value;
        container.innerHTML = '<pre>' + str + '</pre>';
    });
}