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

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd url-shortener
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- Input original URLs and generate shortened versions.
- View detailed click statistics for each shortened URL.
- Custom logging middleware for better debugging.
- Input validation to ensure URLs are valid.
- Theme customization using Material-UI.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
