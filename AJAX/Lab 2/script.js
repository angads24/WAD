document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        number: document.getElementById("number").value,
        city: document.getElementById("city").value,
        pass: document.getElementById("pass").value
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(userData);

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "list.html";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(userData));
});
