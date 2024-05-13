document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const errorMessage = document.getElementById('errorMessage');

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const registerName = document.getElementById('registerName').value;
        const registerEmail = document.getElementById('registerEmail').value;
        const registerPassword = document.getElementById('registerPassword').value;

        // Perform client-side validation
        if (registerName.trim() === '' || registerEmail.trim() === '' || registerPassword.trim() === '') {
            errorMessage.textContent = 'Please fill in all fields.';
            errorMessage.style.display = 'block';
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: registerName,
                    email: registerEmail,
                    password: registerPassword
                })
            });

            if (response.ok) {
                // Registration successful, redirect to the home page
                window.location.href = 'Login.html';
            } else {
                // Registration failed, display error message
                const data = await response.json();
                errorMessage.textContent = data.message || 'An error occurred while processing your request.';
                errorMessage.style.display = 'block';
            }
        } catch (error) {
            console.error('Registration error:', error);
            errorMessage.textContent = 'An error occurred while processing your request.';
            errorMessage.style.display = 'block';
        }
    });
});

// frontend.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: loginEmail,
                    password: loginPassword
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Login successful
                const loginLink = document.getElementById('loginLink');
                if (loginLink) {
                    loginLink.href = '../Profile.html';
                    loginLink.textContent = ''; // Clear any existing text content
                    const img = document.createElement('img');
                    img.src = './img/avatar1.png';
                    img.alt = 'Avatar';
                    img.className = 'ml-4 ml-md-4 mr-2 mr-md-0 circle'; // Add the classes to the image
                    loginLink.appendChild(img);
                    loginLink.style.display = 'inline'; // Display the login link with the avatar image
                } else {
                    console.error('Login link not found');
                }

                // Redirect to the home page
                window.location.href = '../Home-with-avatar.html';
            } else {
                // Login failed, display error message
                errorMessage.textContent = data.message || 'An error occurred while processing your request.';
                errorMessage.style.display = 'block';
            }
        } catch (error) {
            console.error('Login error:', error);
            errorMessage.textContent = 'An error occurred while processing your request.';
            errorMessage.style.display = 'block';
        }
    });
});


