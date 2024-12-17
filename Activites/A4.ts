function fetchData(url: string): void {
    fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`);
        }
        return response.json();
    }).then((data) => {
        console.log('Fetched Data:', data);
    }).catch((error) => {
        console.error('Error:', error.message);
    });
}

const apiUrl = 'https://catfact.ninja/fact';
fetchData(apiUrl);
