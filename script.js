// Dark Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Load theme from local storage
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }
};

// Rating System
const stars = document.querySelectorAll('.stars span');
const ratingOutput = document.getElementById('rating-output');
let rating = 0;

stars.forEach((star) => {
    star.addEventListener('click', () => {
        rating = star.getAttribute('data-value');
        ratingOutput.textContent = `Rating: ${rating}/5`;
        highlightStars(rating);
    });
});

function highlightStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = 'gold';
        } else {
            star.style.color = '';
        }
    });
}

// Category Filter
const categoryFilter = document.getElementById('category-filter');
const blogPosts = document.querySelectorAll('.blog-post');

categoryFilter.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;

    blogPosts.forEach(post => {
        const postCategory = post.getAttribute('data-category');
        if (selectedCategory === 'all' || postCategory === selectedCategory) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});
