document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();

   
    document.querySelectorAll('.error').forEach(el => {
        el.textContent = '';
    });
    document.querySelectorAll('input, textarea').forEach(el => {
        el.style.border = '';
    });

    let valid = true;


    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'This field is required';
        document.getElementById('name').style.border = '2px solid #e74c3c';
        valid = false;
    }

  
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'This field is required';
        document.getElementById('email').style.border = '2px solid #e74c3c';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'A valid email address is required';
        document.getElementById('email').style.border = '2px solid #e74c3c';
        valid = false;
    }


    const website = document.getElementById('website').value.trim();
    const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
    if (website === '') {
        document.getElementById('websiteError').textContent = 'This field is required';
        document.getElementById('website').style.border = '2px solid #e74c3c';
        valid = false;
    } else if (!urlPattern.test(website)) {
        document.getElementById('websiteError').textContent = 'A valid url is required';
        document.getElementById('website').style.border = '2px solid #e74c3c';
        valid = false;
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'This field is required';
        document.getElementById('message').style.border = '2px solid #e74c3c';
        valid = false;
    }

    
});