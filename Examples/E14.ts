const form:HTMLElement|null=document.getElementById('myform');
if(form){
    form.addEventListener('submit',handleSubmit);
}


interface FormSubmitionData{
    fname:string;
    lname:string;
    email:string;
}

function handleSubmit(event:Event){
    event.preventDefault();
    const form=document.getElementById('myForm')as HTMLFormElement;

    const formData:FormSubmitionData={
        fname:(form.elements.namedItem('fname')as HTMLInputElement).value,
        lname:(form.elements.namedItem('lname')as HTMLInputElement).value,
        email:(form.elements.namedItem('email')as HTMLInputElement).value,
    }

    console.log(`Form Data: ${formData}`);
}