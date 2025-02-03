// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Cart Functionality (Example)
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart-count");

let count = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
  });
});

// login functionality (already in script.js)
function loginUser(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the email and password fields are filled
    if (email && password) {
        // For real-world applications, validate the login on the server
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to the main website after successful login
    } else {
        alert("Please fill in both fields!"); // Show an alert if any field is empty
    }
}


