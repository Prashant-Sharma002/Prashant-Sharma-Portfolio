// Function to set the active color theme
function setActiveStyle(colorClass) {
    // Remove existing color class
    const body = document.body;
    body.classList.remove('color-1', 'color-2', 'color-3', 'color-4', 'color-5');

    // Add new color class
    body.classList.add(colorClass);
}

// Function to toggle between light and dark mode
function toggleDayNightMode() {
    const body = document.body;
    const dayNightIcon = document.querySelector('.day-night');

    // Toggle light and dark mode classes
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        dayNightIcon.innerHTML = '🌙'; // Change to moon icon for light mode
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        dayNightIcon.innerHTML = '🌞'; // Change to sun icon for dark mode
    }
}

// Add event listener to the style switcher toggler
document.querySelector('.style-switcher-toggler').addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});

// Add event listener to the day-night toggler
document.querySelector('.day-night').addEventListener('click', toggleDayNightMode);

// Optional: Initialize the mode based on local storage or default value
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const dayNightIcon = document.querySelector('.day-night');

    if (body.classList.contains('dark-mode')) {
        dayNightIcon.innerHTML = '🌞'; // Change to sun icon for dark mode
    } else {
        dayNightIcon.innerHTML = '🌙'; // Change to moon icon for light mode
    }
});
