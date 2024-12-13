// function toggleDarkMode() {
//   document.documentElement.classList.toggle("dark");
//   const icon = document.getElementById("dark-mode-icon");
//   if (document.documentElement.classList.contains("dark")) {
//     icon.classList.remove("fa-moon");
//     icon.classList.add("fa-sun");
//   } else {
//     icon.classList.remove("fa-sun");
//     icon.classList.add("fa-moon");
//   }
// }



const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference, if any, on initial load
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('dark-mode', 'disabled');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    }
});
