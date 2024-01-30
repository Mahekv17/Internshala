document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });
});
