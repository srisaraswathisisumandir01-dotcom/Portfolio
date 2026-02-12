document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    fetch("http://127.0.0.1:5000/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, age: age })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("message").innerText = data.message;
        document.getElementById("studentForm").reset();
    })
    .catch(error => {
        document.getElementById("message").innerText = "Error connecting to server";
    });
});
