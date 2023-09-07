const textInput = document.getElementById("text");
const submitBtn = document.getElementById("submit-btn");
const list = document.getElementById("list");

submitBtn.addEventListener("click", async () => {
    const postBody = textInput.value;

    // Create a payload with a malicious script
    // const maliciousPayload = `<img src=x onerror=alert('Stored XSS Attack') />`;

    const obj = { postBody };

    try {
        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });
        const responseJson = await response.json();
        alert(`Success response: ${responseJson}`);
    } catch (error) {
        console.log(error);
        alert(`Failed response: ${error}`);
    }
});



// Set a username in local storage
localStorage.setItem("username", "JohnDoe");




