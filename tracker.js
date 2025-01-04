// Check if the user is logged in
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (!loggedInUser) {
    alert("You must log in first.");
    window.location.href = "login.html";
}

// Log out functionality
document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
});

// Function to load transactions from localStorage
function loadTransactions() {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    const tableBody = document.getElementById("transaction-table").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    transactions.forEach((transaction, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.category}</td>
            <td><button onclick="deleteTransaction(${index})">Delete</button></td>
        `;
    });
}

// Function to save a transaction
function saveTransaction(transaction) {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    loadTransactions();
}

// Add transaction form event listener
document.getElementById("transaction-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (!date || !description || !amount) {
        alert("Please fill in all fields.");
        return;
    }

    const transaction = { date, description, amount, category };
    saveTransaction(transaction);

    document.getElementById("transaction-form").reset();
});

// Initial load of transactions
loadTransactions();
