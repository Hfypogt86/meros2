function encryptMessage() {
    let message = document.getElementById('inputMessage').value;
    let encrypted = btoa(message);
    document.getElementById('outputMessage').value = encrypted;
}

function decryptMessage() {
    let encrypted = document.getElementById('outputMessage').value;
    let decrypted = atob(encrypted);
    document.getElementById('inputMessage').value = decrypted;
}