// const close = document.getElementById("close");
// const open = document.getElementById("open");
// const modal = document.getElementById("modal");

// open.addEventListener("click", () => modal.classList.add("show-modal"));
// close.addEventListener("click", () => modal.classList.remove("show-modal"));

// window.addEventListener("click" , (e) => {
//     e.target === modal ? modal.classList.remove("show-modal") : false;
// });
// Get elements
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const modal = document.getElementById("modal");

// Open modal when clicking the "Sign Up" button
openButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal when clicking the close button
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Optional: Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

