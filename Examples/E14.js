var form = document.getElementById('myform');
if (form) {
    form.addEventListener('submit', handleSubmit);
}
function handleSubmit(event) {
    event.preventDefault();
    var form = document.getElementById('myForm');
    var formData = {
        fname: form.elements.namedItem('fname').value,
        lname: form.elements.namedItem('lname').value,
        email: form.elements.namedItem('email').value,
    };
    console.log("Form Data: ".concat(formData));
}
