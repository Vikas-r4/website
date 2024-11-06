document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        e.target.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
