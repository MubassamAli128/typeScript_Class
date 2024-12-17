const titleElement = document.getElementById('title') as HTMLHeadingElement | null;

const buttonElement = document.getElementById('changeTextButton') as HTMLButtonElement | null;

if (titleElement && buttonElement) {
    buttonElement.addEventListener('click', (event:Event) => {
        event.preventDefault();
        titleElement.textContent = 'Welcome to TypeScript with Type Handling!';
    });
} else {
    console.error('Elements not found. Check your HTML structure.');
}
