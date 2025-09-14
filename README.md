Football News Feed App
Overview
The Football News Feed App is a single-page React application built with Vite that displays a scrollable feed of football news, including general and European football updates (e.g., UEFA, Premier League, La Liga, Serie A, Bundesliga, Ligue 1). It fetches articles from the NewsAPI and presents them in a clean, responsive, and centered card-based layout. Each card includes an article image, title, description, source, and a link to the full article. The API key is stored securely in a .env file, and the app is styled with custom CSS for a modern, user-friendly experience across devices.
Features

Fetches real-time football news using NewsAPI.
Displays articles in a centered, scrollable feed with responsive cards.
Includes article images, titles, descriptions, sources, and external links.
Uses environment variables to manage the API key securely.
Styled with CSS for a clean and modern UI.
Responsive design for mobile and desktop.

Tech Stack

Frontend: React, Vite
Dependencies: axios (for API requests), react-icons (for football icon)
API: NewsAPI (free tier, 100 requests/day)
Styling: Custom CSS
Environment: Node.js (v16 or higher recommended)

Prerequisites

Node.js and npm installed (v16 or higher recommended).
A valid NewsAPI key (free tier available).
Git for cloning the repository (optional).

Installation

Clone the Repository (or create a new project directory):
git clone <repository-url>
cd football-news-app

Alternatively, create a new Vite project:
npm create vite@latest football-news-app -- --template react
cd football-news-app


Install Dependencies:
npm install
npm install axios react-icons


Set Up Environment Variables:

Create a .env file in the project root.
Add your NewsAPI key:VITE_NEWS_API_KEY=your-news-api-key-here


Ensure .env is added to .gitignore to prevent committing the API key:.env




Add Source Files:

Ensure src/App.jsx and src/App.css match the provided code (see project files or repository).
App.jsx fetches news and renders the feed.
App.css styles the app with a centered feed layout.



Running the App

Start the Development Server:npm run dev


Open http://localhost:5173 in your browser to view the app.
Verify the news feed loads with football articles. Check the browser console for errors (e.g., invalid API key or network issues).

Project Structure
football-news-app/
├── public/                 # Static assets
├── src/                    # Source files
│   ├── App.jsx             # Main React component for news feed
│   ├── App.css             # Styles for centered feed and cards
│   └── main.jsx            # Entry point for React
├── .env                    # Environment variables (API key)
├── .gitignore              # Ignore .env and node_modules
├── package.json            # Project dependencies and scripts
└── README.md               # This file

Usage

The app displays a feed of football news articles, focusing on European football (e.g., UEFA, Premier League).
Each card shows the article's image, title, description, source, and a link to the full article.
If the feed fails to load, check:
The API key in .env is correct.
The NewsAPI rate limit (100 requests/day on free tier) hasn’t been exceeded.
Your internet connection is stable.



Security Notes

The API key is stored in .env with the VITE_ prefix, making it accessible in client-side code. This is suitable for development but not secure for production, as the key is exposed in bundled JavaScript.
For production, consider setting up a backend proxy (e.g., Node.js with Express) to hide the API key. See this guide for details (or request additional documentation).
When deploying, configure the API key in your hosting platform’s environment variables (e.g., Vercel, Netlify).

Deployment
To deploy the app:

Build the project:npm run build


Deploy the dist folder to a hosting platform (e.g., Vercel, Netlify).
Set the VITE_NEWS_API_KEY environment variable in the hosting platform’s dashboard.

Limitations

NewsAPI Free Tier: Limited to 100 requests/day with a 24-hour delay on articles. For real-time or higher volume, consider upgrading to a paid plan or using alternatives like RapidAPI’s Football API.
Client-Side API Key: The .env approach exposes the key in client-side code. Use a backend proxy for production security.
Basic Features: The app displays a simple feed. Future enhancements could include pagination, search, or league filters.

Potential Enhancements

Add pagination or infinite scroll using NewsAPI’s page and pageSize parameters.
Implement a search bar to filter articles by keywords (e.g., "Real Madrid").
Add a dropdown to filter by specific leagues (e.g., Premier League, La Liga).
Use a backend proxy for secure API requests.
Integrate skeleton loading states with react-loading-skeleton.

Troubleshooting

Feed Not Loading: Check the browser console for errors. Verify the API key in .env and ensure you haven’t hit the NewsAPI rate limit.
Styling Issues: Ensure App.css is correctly linked in App.jsx and no conflicting styles exist.
CORS Errors: If testing locally, ensure the NewsAPI endpoint is accessible (no VPN or firewall blocking).

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.

License
This project is licensed under the MIT License.
Acknowledgments

Built with React and Vite.
Powered by NewsAPI for football news data.
Uses react-icons for icons.
