function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const useChars = document.getElementById('chars').checked;
    const useNums = document.getElementById('nums').checked;

    let chars = '';
    if (useChars) chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{},.<>?/|;:'\"";
    if (useNums) chars += "0123456789";
    if (!chars) {
        document.getElementById('password').value = '';
        return;
    }

    let pwd = '';
    for (let i = 0; i < length; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('password').value = pwd;
}

document.getElementById('length').oninput = function() {
    document.getElementById('lengthValue').textContent = "Length " + this.value;
    generatePassword();
};
document.getElementById('chars').onchange = generatePassword;
document.getElementById('nums').onchange = generatePassword;

document.getElementById('copyBtn').onclick = function() {
    const pwd = document.getElementById('password');
    pwd.select();
    pwd.setSelectionRange(0, 999);
    document.execCommand('copy');
};

window.onload = generatePassword;