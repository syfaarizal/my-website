function toggleMenu() {
    const navItems = document.getElementById('navItems');
    if (navItems) {
        navItems.classList.toggle('show');
    } else {
        console.error("Element with ID 'navItems' not found.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navItems = document.querySelector(".navItems");

    hamburger.addEventListener("click", () => {
        navItems.classList.toggle("open"); // Toggle kelas "open" untuk menampilkan/menyembunyikan menu
    });
});
