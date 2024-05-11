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
