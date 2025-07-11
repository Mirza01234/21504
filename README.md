# URL Shortener Project

This project is a URL shortener application built with React. It allows users to input original URLs, generate shortened versions, and view analytics related to the shortened URLs.

## Project Structure

```
url-shortener/
├── public/
│   └── index.html                # Main HTML entry point
├── src/
│   ├── components/               # Reusable components
│   │   ├── URLInputForm.jsx      # Form for inputting URLs
│   │   ├── URLResultCard.jsx     # Displays shortened URL and expiry info
│   │   ├── ClickStatsTable.jsx   # Table for showing click statistics
│   │   └── Navbar.jsx            # Navigation bar
│   ├── pages/                    # Application pages
│   │   ├── ShortenerPage.jsx     # Main page for URL shortening
│   │   ├── StatisticsPage.jsx    # Page for viewing analytics
│   │   └── RedirectPage.jsx      # Handles redirection
│   ├── middleware/                # Middleware functions
│   │   └── logger.js             # Custom logging middleware
│   ├── utils/                    # Utility functions
│   │   ├── validators.js         # Input validation helpers
│   │   ├── generateShortcode.js  # Shortcode generation logic
│   │   └── storage.js            # Data storage/retrieval logic
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Entry point for the application
│   └── theme.js                  # Theme customization
├── vite.config.js                # Vite configuration
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
```
