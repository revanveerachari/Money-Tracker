// Function to handle login process
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Store user session data
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // Redirect to money tracker page after successful login
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password.");
    }
});
