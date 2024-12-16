const users = [];
const results = {
    'student1@example.com': [
        { subject: 'Math', grade: 'A' },
        { subject: 'Science', grade: 'B+' }
    ],
    'student2@example.com': [
        { subject: 'Math', grade: 'B' },
        { subject: 'Science', grade: 'A-' }
    ]
};

function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Logged in as: ${email}`);
        showResults(email);
    } else {
        alert('Invalid email or password.');
    }
}

function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (users.some(user => user.email === email)) {
        alert('Email already registered.');
        return;
    }

    users.push({ name, email, password });
    alert('Registration successful!');
    toggleForm();
}

function showResults(email) {
    const resultsContainer = document.getElementById('results');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const resultsContent = document.getElementById('results-content');

    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    resultsContainer.style.display = 'block';

    const userResults = results[email] || [];
    resultsContent.innerHTML = userResults.map(result => `<p>${result.subject}: ${result.grade}</p>`).join('');
}

function logout() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}
