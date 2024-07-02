function validateForm() {
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let comment = document.getElementById('comment');
    let valid = true;

    if (!phone.value) {
        document.getElementById('phoneError').style.display = 'inline';
        phone.classList.add('invalid');
        valid = false;
    }

    if (!email.value || !email.checkValidity()) {
        document.getElementById('emailError').style.display = 'inline';
        email.classList.add('invalid');
        valid = false;
    }

    if (comment.value.length > 100) {
        document.getElementById('commentError').style.display = 'inline';
        comment.classList.add('invalid');
        valid = false;
    }

    return valid;
}