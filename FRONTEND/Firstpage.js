const text = "Choose Gender"; // The text you want to display
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function type() {
    if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index); // Add next character
        index++;
        setTimeout(type, 100); // Delay between each character (in milliseconds)
    }
}

// Delay starting the typewriter effect after the images appear
setTimeout(type, 2000); // Adjust the delay (2000ms = 2 seconds)

// Add event listeners for the images to redirect to the respective pages
document.getElementById("menImage").addEventListener("click", function() {
    window.location.href = "men.html"; // Redirect to men.html
});

document.getElementById("womenImage").addEventListener("click", function() {
    window.location.href = "women.html"; // Redirect to women.html
});

// Add event listeners for the login and signup forms
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Validate and process login (add your logic here)
    console.log("Login:", username, password);
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    // Validate and process signup (add your logic here)
    console.log("Signup:", username, password);
});
