// Function to handle sign-up process
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert("This email is already registered.");
        return;
    }

    // Save the new user to localStorage
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to login page after successful sign-up
    alert("Account created successfully! You can now log in.");
    window.location.href = "login.html";
});
