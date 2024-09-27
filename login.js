const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy login logic
    if (username === 'admin' && password === 'password') {
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';
        window.location.href = 'index.html';  // Redirect to blog page after login
    } else {
        loginMessage.textContent = 'Invalid username or password';
        loginMessage.style.color = 'red';
    }
});
