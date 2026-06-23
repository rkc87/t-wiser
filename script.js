document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-option");
    let currentIndex = 0;

    // Function to update the visual selection state
    function updateSelection() {
        menuItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Keyboard event listener
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
            // Move down, wrap to top if passing the limit
            currentIndex = (currentIndex + 1) % menuItems.length;
            updateSelection();
            event.preventDefault(); // Prevents full page scroll
            
        } else if (event.key === "ArrowUp") {
            // Move up, wrap to bottom if passing the limit
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            updateSelection();
            event.preventDefault();
            
        } else if (event.key === "Enter") {
            // Retrieve the action from the selected option (A, B, C, D, I)
            const selectedAction = menuItems[currentIndex].getAttribute("data-action");
            alert(`You executed action: ${selectedAction}`);
            
            // Logic to update image and narrative text will be added here
        }
    });

    // Initialize the first option as active
    updateSelection();
});