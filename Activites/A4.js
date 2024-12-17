function fetchData(url) {
    fetch(url).then(function (response) {
        if (!response.ok) {
            throw new Error("Error! Status: ".concat(response.status));
        }
        return response.json();
    }).then(function (data) {
        console.log('Fetched Data:', data);
    }).catch(function (error) {
        console.error('Error:', error.message);
    });
}
var apiUrl = 'https://catfact.ninja/fact';
fetchData(apiUrl);
