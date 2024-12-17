var titleElement = document.getElementById('title');
var buttonElement = document.getElementById('changeTextButton');
if (titleElement && buttonElement) {
    buttonElement.addEventListener('click', function (event) {
        event.preventDefault();
        titleElement.textContent = 'Welcome to TypeScript with Type Handling!';
    });
}
else {
    console.error('Elements not found. Check your HTML structure.');
}
