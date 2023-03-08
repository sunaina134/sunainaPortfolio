// Simple contact form validation in javascript with XMLHttpRequest;

const contactForm = () => {
    const Fname = document.querySelector('#Fname');
    const Lname = document.querySelector('#Lname');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    const submit = document.querySelector('#submit');
    const error = document.querySelector('.error');
    const success = document.querySelector('.success');
    const ownerEmail = 'sunainaa662@gmail.com'; 
    // Please enter a correct email other wise someone else can receive your email.

    // XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // submit the form, if any data was entered
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (Fname.value !== '' && Lname.value !== '' && email.value !== '' && message.value !== '') {
            success.innerHTML = "Please Wait Sending...";
            xhr.open('POST', 'https://enally.in/functions/Contact-CDN.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    error.style.display = 'none';
                    success.style.display = 'block';
                    success.innerHTML = xhr.responseText;
                    form.reset();
                } else {
                    error.style.display = 'block';
                    error.innerHTML = 'Something went wrong';
                }
            }
            xhr.send(`Fname=${Fname.value}&Lname=${Lname.value}&email=${email.value}&message=${message.value}&ownerEmail=${ownerEmail}`);
        } else {
            error.style.display = 'block';
            error.innerHTML = 'Please fill out all fields';
        }
    }
    );

}
contactForm();