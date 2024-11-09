window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const header = document.querySelector('.travel-header'); // Assuming your header element is <header>
    const heroSectionRect = heroSection.getBoundingClientRect();
    // Check if the bottom of the hero section is completely scrolled past the viewport
    if (heroSectionRect.bottom <= 0) {
        header.style.backgroundColor = 'white'; // Add the background color to the header
        header.style.color = 'black';
    }
    else {
        header.style.backgroundColor = 'transparent'; // Remove the background color when not fully scrolled
        header.style.color = 'white';
    }
});
const navIcon = document.querySelector('.nav-icon');
const navList = document.querySelector('.li-list');
navIcon.addEventListener('click', () => {
    if (navList.style.left === '-600px') {
        navList.style.left = '-100px';
    }
    else {
        navList.style.left = '-600px';
    }
});
export {};