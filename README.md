# Professional Portfolio Website - Stella Lenzie

## Project Overview
A comprehensive, fully responsive portfolio website showcasing my professional experience, education, and projects as a Theatre & Digital Culture professional. This portfolio serves as a central hub for potential employers, collaborators, and colleagues to learn about my dual expertise in the arts and data analytics.

## Features
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices with smooth animations
- **Dynamic Navigation**: Sticky navigation bar with smooth scrolling and active section highlighting
- **Hero Section**: Eye-catching introduction with professional headshot and call-to-action buttons
- **About Section**: Visual cards displaying education, theatre experience, and data analytics background
- **Experience Timeline**: Interactive timeline showcasing professional internships and theatre production work
- **Skills Showcase**: Card-based layout highlighting web development competencies
- **Project Portfolio**: Detailed descriptions of four web development projects with external links
- **Honors & Recognition**: Grid display of academic achievements and awards
- **Contact Section**: Easy-to-access contact information with multiple channels
- **Scroll Position Memory**: LocalStorage implementation to remember user's scroll position
- **Accessibility Features**: Keyboard navigation, focus states, semantic HTML, and ARIA labels

## Technologies Used
- **HTML5**: Semantic markup for improved accessibility and SEO
- **CSS3**: Custom properties (variables), Flexbox, CSS Grid, animations, and transitions
- **JavaScript**: DOM manipulation, Intersection Observer API, localStorage, event handling
- **Google Fonts**: Playfair Display and Poppins for elegant typography
- **GitHub Copilot**: AI-assisted development and code optimization

## Project Structure
```
writ40363-portfolio-lenzie/
├── index.html                 # Main portfolio page
├── css/
│   └── styles.css            # Comprehensive styling with responsive design
├── js/
│   └── script.js             # Interactive functionality and animations
├── images/                   # Portfolio images and icons
│   ├── new-headshot2025.jpeg
│   ├── book-monet-geminigenerated.png
│   ├── masks-monet-geminigenerated.png
│   └── graph-monet-geminigenerated.png
├── projects/                 # Individual course projects
│   ├── project1-original/    # Personal Portfolio
│   ├── project2-tracker/     # Local Favorites Tracker
│   ├── project3-dashboard/   # Data Dashboard
│   └── project4-zed/         # Book Review Tracker
└── README.md                 # This file
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection for Google Fonts

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sllenzie/writ40363-portfolio-lenzie.git
   ```
2. Navigate to the project directory:
   ```bash
   cd writ40363-portfolio-lenzie
   ```
3. Open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

### Usage
- **Navigation**: Click nav links to smoothly scroll to different sections
- **Mobile Menu**: On mobile devices, tap the hamburger menu to access navigation
- **Project Links**: Click project cards to open individual projects in new tabs
- **Scroll Position**: Return from project pages to resume at your previous scroll position
- **Theme Toggle**: Smooth animations enhance the browsing experience
- **Contact**: Use the contact section to reach out via email, phone, or Instagram

## Development Process

### AI-Assisted Development
This portfolio was enhanced with GitHub Copilot assistance. The AI helped with:
- Creating responsive CSS Grid and Flexbox layouts
- Implementing smooth scroll animations and transitions
- Developing localStorage functionality for scroll position memory
- Optimizing JavaScript for intersection observers and event handling
- Ensuring accessibility best practices throughout the codebase
- Debugging CSS specificity and responsive design issues
- Adding interactive hover effects and card animations

### Key Development Decisions
- **Pink Color Palette**: Chose soft pink gradients to create a professional yet approachable aesthetic that reflects both creative and technical aspects
- **Card-Based Layout**: Implemented consistent card components across sections for visual cohesion and reusability
- **Smooth Animations**: Added fade-in, slide-in, and scale animations with Intersection Observer to create engaging user experience
- **Mobile-First Approach**: Designed for mobile devices first, then enhanced for larger screens
- **localStorage Integration**: Implemented scroll position memory to improve navigation between portfolio and project pages
- **Semantic HTML**: Used proper heading hierarchy and ARIA labels for improved accessibility and SEO

## Challenges and Solutions
- **Challenge 1**: Scroll position reset when navigating between pages
  - **Solution**: Implemented localStorage to save and restore scroll position, providing seamless navigation experience
  
- **Challenge 2**: Sections initially invisible due to animation setup
  - **Solution**: Updated CSS to set proper initial opacity and removed visibility dependencies on JavaScript classes
  
- **Challenge 3**: Navigation bar overlapping content on smaller screens
  - **Solution**: Adjusted padding and margin calculations to account for fixed navbar height
  
- **Challenge 4**: Maintaining consistent styling across multiple project pages
  - **Solution**: Created reusable CSS patterns and added matching navigation bars to all sub-projects

## Future Improvements
- [ ] Add a blog section to share insights on theatre and data analytics
- [ ] Implement a contact form with backend integration
- [ ] Add project filtering by category or technology
- [ ] Create case studies for each professional internship experience
- [ ] Add animation toggle for accessibility preferences
- [ ] Implement dark mode theme option
- [ ] Add more interactive data visualizations for analytics work

## Lessons Learned
- **AI-Assisted Development**: GitHub Copilot significantly accelerated development but required careful review to ensure code quality and meet specific design requirements
- **Responsive Design**: Mobile-first approach and thorough testing across devices is crucial for user experience
- **CSS Custom Properties**: Using CSS variables made theme consistency and maintenance much more efficient
- **Accessibility Matters**: Implementing proper focus states, semantic HTML, and ARIA labels improves the experience for all users
- **Performance Optimization**: Lazy loading and efficient JavaScript improved page load times and smooth interactions
- **User Experience**: Small details like scroll position memory and smooth animations significantly enhance perceived quality

## Author
**Stella Lenzie**
- Email: stella.lenzie@gmail.com
- Phone: +1 310.926.3160
- Instagram: [@stella.lenzie](https://instagram.com/stella.lenzie)
- Course: WRIT 40363 - Digital Content Design and Analysis
- Semester: Fall 2025
- Institution: Texas Christian University

## Acknowledgments
- **GitHub Copilot**: AI pair programming assistant for code suggestions and optimization
- **Google Fonts**: Playfair Display and Poppins typefaces
- **TCU Theatre Department**: For the incredible production experiences
- **Fort Worth Opera & Van Cliburn Competition**: For professional internship opportunities
- **Professor**: WRIT 40363 course instruction and feedback

## License
This project is part of an academic portfolio for WRIT 40363. All rights reserved.

---

*This portfolio demonstrates modern web development practices, responsive design, and AI-assisted development workflows as part of the WRIT 40363 coursework at Texas Christian University.*