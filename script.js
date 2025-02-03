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

// Login Modal Functionality
const loginModal = document.getElementById("login-modal");
const loginLink = document.getElementById("login-link");
const closeModal = document.querySelector(".close-modal");

// Open the modal when the login link is clicked
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "block";
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Close the modal when clicking outside the modal
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// Login Functionality
function loginUser(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if the email and password fields are filled
  if (email && password) {
    // For real-world applications, validate the login on the server
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect to the main website after successful login
  } else {
    alert("Please fill in both fields!"); // Show an alert if any field is empty
  }
}