// Book Review Tracker - Main JavaScript

// State management
let reviews = [];
let selectedRating = 0;

// DOM Elements
const reviewForm = document.getElementById('reviewForm');
const starRating = document.getElementById('starRating');
const stars = starRating.querySelectorAll('.star');
const ratingInput = document.getElementById('rating');
const reviewsContainer = document.getElementById('reviewsContainer');
const emptyState = document.getElementById('emptyState');
const filterGenre = document.getElementById('filterGenre');
const searchKeyword = document.getElementById('searchKeyword');
const clearFiltersBtn = document.getElementById('clearFilters');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadReviewsFromLocalStorage();
    displayReviews();
    setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
    // Star rating interaction
    stars.forEach(star => {
        star.addEventListener('click', handleStarClick);
        star.addEventListener('mouseenter', handleStarHover);
    });

    starRating.addEventListener('mouseleave', () => {
        updateStarDisplay(selectedRating);
    });

    // Form submission
    reviewForm.addEventListener('submit', handleFormSubmit);

    // Filter and search
    filterGenre.addEventListener('change', applyFilters);
    searchKeyword.addEventListener('input', applyFilters);
    clearFiltersBtn.addEventListener('click', clearFilters);
}

// Star Rating Functions
function handleStarClick(e) {
    const rating = parseInt(e.target.dataset.rating);
    selectedRating = rating;
    ratingInput.value = rating;
    updateStarDisplay(rating);
}

function handleStarHover(e) {
    const rating = parseInt(e.target.dataset.rating);
    updateStarDisplay(rating, true);
}

function updateStarDisplay(rating, isHover = false) {
    stars.forEach((star, index) => {
        star.classList.remove('active', 'hover');
        if (index < rating) {
            star.classList.add(isHover ? 'hover' : 'active');
        }
    });
}

// Form Submission Handler
function handleFormSubmit(e) {
    e.preventDefault();

    // Validate rating
    if (!selectedRating) {
        alert('Please select a rating');
        return;
    }

    // Gather form data
    const newReview = {
        id: Date.now(),
        title: document.getElementById('bookTitle').value.trim(),
        author: document.getElementById('author').value.trim(),
        genre: document.getElementById('genre').value,
        dateRead: document.getElementById('dateRead').value,
        rating: selectedRating,
        keywords: document.getElementById('keywords').value
            .split(',')
            .map(kw => kw.trim())
            .filter(kw => kw !== ''),
        review: document.getElementById('review').value.trim()
    };

    // Add review to state
    reviews.unshift(newReview); // Add to beginning of array

    // Save to local storage
    saveReviewsToLocalStorage();

    // Reset form
    reviewForm.reset();
    selectedRating = 0;
    ratingInput.value = '';
    updateStarDisplay(0);

    // Update display
    displayReviews();

    // Show success feedback
    showSuccessMessage('Review added successfully!');
}

// Display Reviews
function displayReviews(filteredReviews = reviews) {
    reviewsContainer.innerHTML = '';

    if (filteredReviews.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    filteredReviews.forEach(review => {
        const reviewCard = createReviewCard(review);
        reviewsContainer.appendChild(reviewCard);
    });
}

// Create Review Card
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.dataset.reviewId = review.id;

    // Format date
    const dateDisplay = review.dateRead 
        ? new Date(review.dateRead).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })
        : 'Date not specified';

    // Create star display
    const starDisplay = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

    // Create keywords HTML
    const keywordsHTML = review.keywords.length > 0
        ? `<div class="keywords">
            ${review.keywords.map(kw => `<span class="keyword-tag">${kw}</span>`).join('')}
           </div>`
        : '';

    card.innerHTML = `
        <div class="review-header">
            <h3>${escapeHtml(review.title)}</h3>
            <p class="author">by ${escapeHtml(review.author)}</p>
        </div>
        <div class="review-meta">
            <span class="genre-tag">${review.genre}</span>
            <span class="date-tag">${dateDisplay}</span>
        </div>
        <div class="review-rating">
            <div class="review-stars">${starDisplay}</div>
        </div>
        <div class="review-text">
            ${escapeHtml(review.review)}
        </div>
        ${keywordsHTML}
        <div class="review-actions">
            <button class="btn btn-danger" onclick="deleteReview(${review.id})">Delete</button>
        </div>
    `;

    return card;
}

// Delete Review
function deleteReview(id) {
    if (confirm('Are you sure you want to delete this review?')) {
        reviews = reviews.filter(review => review.id !== id);
        saveReviewsToLocalStorage();
        applyFilters();
        showSuccessMessage('Review deleted successfully!');
    }
}

// Filter and Search Functions
function applyFilters() {
    const genreFilter = filterGenre.value;
    const keywordSearch = searchKeyword.value.toLowerCase().trim();

    let filteredReviews = reviews;

    // Filter by genre
    if (genreFilter) {
        filteredReviews = filteredReviews.filter(review => review.genre === genreFilter);
    }

    // Filter by keyword
    if (keywordSearch) {
        filteredReviews = filteredReviews.filter(review => {
            const titleMatch = review.title.toLowerCase().includes(keywordSearch);
            const authorMatch = review.author.toLowerCase().includes(keywordSearch);
            const reviewMatch = review.review.toLowerCase().includes(keywordSearch);
            const keywordMatch = review.keywords.some(kw => 
                kw.toLowerCase().includes(keywordSearch)
            );
            
            return titleMatch || authorMatch || reviewMatch || keywordMatch;
        });
    }

    displayReviews(filteredReviews);
}

function clearFilters() {
    filterGenre.value = '';
    searchKeyword.value = '';
    displayReviews();
}

// Local Storage Functions
function saveReviewsToLocalStorage() {
    try {
        localStorage.setItem('bookReviews', JSON.stringify(reviews));
    } catch (error) {
        console.error('Error saving to local storage:', error);
        alert('Failed to save reviews. Please check your browser settings.');
    }
}

function loadReviewsFromLocalStorage() {
    try {
        const storedReviews = localStorage.getItem('bookReviews');
        if (storedReviews) {
            reviews = JSON.parse(storedReviews);
        }
    } catch (error) {
        console.error('Error loading from local storage:', error);
        reviews = [];
    }
}

// Utility Functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showSuccessMessage(message) {
    // Create temporary success message
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
    successDiv.textContent = message;

    document.body.appendChild(successDiv);

    // Remove after 3 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => successDiv.remove(), 300);
    }, 3000);
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
