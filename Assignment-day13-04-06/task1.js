function validateMobile() {
    const mobile = document.getElementById('mobile').value.trim();
    const result = document.getElementById('result');
    const mobilePattern = /^[0-9]{10}$/;

    if (mobilePattern.test(mobile)) {
        result.style.color = "green";
        result.textContent = "Valid Mobile Number";
    } else {
        result.style.color = "#e74c3c";
        result.textContent = "Invalid Mobile Number. Please enter a 10 digit number.";
    }
}