// Form validation and submission
const signupForm = document.getElementById('signupForm');
const signupBtn = document.getElementById('signupBtn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message
function showError(element, message) {
    element.textContent = message;
    element.classList.remove('hidden');
}

// Hide error message
function hideError(element) {
    element.classList.add('hidden');
}

// Real-time validation
nameInput.addEventListener('input', function() {
    const name = this.value.trim();
    if (name && name.length < 2) {
        showError(nameError, 'Name must be at least 2 characters');
    } else {
        hideError(nameError);
    }
});

emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    if (email && !isValidEmail(email)) {
        showError(emailError, 'Please enter a valid email address');
    } else {
        hideError(emailError);
    }
});

passwordInput.addEventListener('input', function() {
    const password = this.value;
    if (password && password.length < 8) {
        showError(passwordError, 'Password must be at least 8 characters');
    } else {
        hideError(passwordError);
    }

    // Re-validate confirm password if it has content
    if (confirmPasswordInput.value) {
        validatePasswordMatch();
    }
});

confirmPasswordInput.addEventListener('input', function() {
    validatePasswordMatch();
});

function validatePasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword && password !== confirmPassword) {
        showError(confirmPasswordError, "Passwords don't match");
    } else {
        hideError(confirmPasswordError);
    }
}

// Form submission
signupForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Reset errors
    hideError(nameError);
    hideError(emailError);
    hideError(passwordError);
    hideError(confirmPasswordError);

    let isValid = true;

    // Validate name
    if (!name) {
        showError(nameError, 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showError(nameError, 'Name must be at least 2 characters');
        isValid = false;
    }

    // Validate email
    if (!email) {
        showError(emailError, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError(emailError, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate password
    if (!password) {
        showError(passwordError, 'Password is required');
        isValid = false;
    } else if (password.length < 8) {
        showError(passwordError, 'Password must be at least 8 characters');
        isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword) {
        showError(confirmPasswordError, 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError(confirmPasswordError, "Passwords don't match");
        isValid = false;
    }

    if (!isValid) return;

    // Disable button and show loading
    signupBtn.disabled = true;
    signupBtn.textContent = 'Creating account...';

    try {
        // Simulate API call - replace with actual API endpoint
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            const data = await response.json();

            // Show success message
            alert('Registration successful! Please check your email to verify your account.');

            // Redirect to login page
            window.location.href = 'login.html';
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Registration failed');
        }
    } catch (error) {
        console.error('Signup error:', error);
        alert('Registration failed. Please try again.');
    } finally {
        // Re-enable button
        signupBtn.disabled = false;
        signupBtn.textContent = 'Create account';
    }
});
