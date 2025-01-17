document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    menuButton.addEventListener("click", () => {
        const isMenuVisible = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isMenuVisible ? "none" : "block";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const userButton = document.getElementById("userButton");
    const userDropdown = document.getElementById("userDropdown");

    userButton.addEventListener("click", () => {
        // Toggle the visibility of the dropdown
        const isVisible = userDropdown.style.display === "block";
        userDropdown.style.display = isVisible ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!userButton.contains(event.target) && !userDropdown.contains(event.target)) {
            userDropdown.style.display = "none";
        }
    });
});
function toggleDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

// Function to switch active tabs
function selectTab(tab) {
    // Remove active class from all tabs
    document.querySelector('.everything').classList.remove('active');
    document.querySelector('.images').classList.remove('active');

    // Add active class to the selected tab
    document.querySelector(`.${tab}`).classList.add('active');
}
