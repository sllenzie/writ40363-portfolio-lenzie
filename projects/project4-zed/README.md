# 📚 Book Review Tracker

A modern, responsive web application for tracking and managing your book reviews with a beautiful interface and persistent storage.

## ✨ Features

### Core Functionality
- **Add Book Reviews**: Comprehensive form to add detailed book reviews
- **5-Star Rating System**: Interactive star rating with smooth hover animations
- **Genre Classification**: Organize books by 11 different genres
- **Keyword Tagging**: Add custom keywords to each review for better organization
- **Local Storage**: All reviews are automatically saved and persist between sessions

### Filtering & Search
- **Filter by Genre**: Quickly view books from specific genres
- **Keyword Search**: Search across titles, authors, reviews, and keywords
- **Combined Filters**: Use genre and keyword filters simultaneously
- **Clear Filters**: Reset all filters with one click

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Professional animations for cards, stars, and interactions
- **Visual Feedback**: Success messages and hover effects
- **Empty State**: Helpful message when no reviews exist
- **Delete Confirmation**: Prevent accidental deletions

## 🚀 Getting Started

### Installation
1. Clone or download this repository
2. No dependencies or build process required - just open `index.html` in a web browser

### Usage

#### Adding a Review
1. Fill in the book title (required)
2. Enter the author name (required)
3. Select a genre from the dropdown (required)
4. Optionally add the date you finished reading
5. Click stars to rate the book 1-5 stars (required)
6. Add comma-separated keywords (optional)
7. Write your review in the text area (required)
8. Click "Add Review" to save

#### Filtering Reviews
- **By Genre**: Select a genre from the "Filter by Genre" dropdown
- **By Keywords**: Type in the search box to filter by title, author, review text, or keywords
- **Clear All**: Click "Clear Filters" to reset and show all reviews

#### Managing Reviews
- **View**: All reviews are displayed as cards in a responsive grid
- **Delete**: Click the "Delete" button on any review card to remove it (confirmation required)

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup with form validation
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: No frameworks or libraries required
- **Local Storage API**: Persistent data storage

### File Structure
```
project5-bookreview/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # All styling and animations
├── js/
│   └── script.js       # Application logic and interactivity
└── README.md          # Documentation
```

### Key Features Implementation

#### Star Rating System
- Interactive hover effects with scale animations
- Click to select rating
- Visual feedback with color changes
- Smooth transitions using CSS transforms

#### Local Storage
- Reviews automatically saved on every addition/deletion
- Data persists across browser sessions
- Error handling for storage quota issues
- JSON serialization for complex data structures

#### Filtering Algorithm
- Real-time filtering without page reload
- Case-insensitive search
- Multi-field search (title, author, review, keywords)
- Efficient array filtering methods

## 🎨 Design Features

### Color Scheme
- Primary: Indigo/Purple gradient (#6366f1 to #764ba2)
- Accent: Amber (#f59e0b) for stars and highlights
- Professional color palette optimized for readability

### Animations
- Fade-in effects for page load
- Hover animations on cards
- Star pop animation on selection
- Success message slide-in
- Transform animations for buttons

### Responsive Breakpoints
- Desktop: 1200px max-width container
- Tablet: 768px and below
- Mobile: 480px and below

## 🔒 Data Privacy

All data is stored locally in your browser using the Local Storage API. No data is sent to any external servers. Your reviews are private and remain on your device.

## 🌟 Browser Compatibility

Compatible with all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

Requires JavaScript enabled and Local Storage support.

## 📝 Future Enhancement Ideas

- Export reviews to PDF or CSV
- Import reviews from files
- Star rating filtering
- Sort options (by date, rating, title)
- Dark mode toggle
- Reading statistics dashboard
- Cover image uploads
- Multiple user profiles

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

Created as part of the WRIT 40363 portfolio project.

---

**Enjoy tracking your reading journey!** 📖✨
