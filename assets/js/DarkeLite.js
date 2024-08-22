


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
  
    // Apply the saved theme
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  
    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
  
      // Save the user's preference in localStorage
      const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
    });
  });
  