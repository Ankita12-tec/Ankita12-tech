// Basic interactivity for LinkedIn-like website

// Example: Toggle profile menu on click (if needed)
document.addEventListener('DOMContentLoaded', () => {
    const profileMenu = document.querySelector('.profile-menu');
    if (profileMenu) {
        profileMenu.addEventListener('click', () => {
            alert('Profile menu clicked! This can be expanded with more features.');
        });
    }
});
