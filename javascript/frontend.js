// frontend.js
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const registerName = document.getElementById('registerName').value;
        const registerEmail = document.getElementById('registerEmail').value;
        const registerPassword = document.getElementById('registerPassword').value;

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
            const data = await response.json();
            console.log('User registered successfully:', data);
        } else {
            console.error('Failed to register user');
        }
    });
});

// frontend.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

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

        if (response.ok) {
            const data = await response.json();
            console.log('Login successful:', data.message);
            // Redirect or perform any other action upon successful login
        } else {
            const errorMessage = await response.json();
            console.error('Login failed:', errorMessage.message);
            // Display error message to the user
        }
    });
});

