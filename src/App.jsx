import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFootballBall } from 'react-icons/fa'; // Icon for football theme
import './App.css'; // We'll style this next

function App() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Replace with your actual NewsAPI key
    const API_KEY = 'de9f0daf85f8488998f633f8db9f68da';
    const API_URL = `https://newsapi.org/v2/everything?q=football&sortBy=publishedAt&apiKey=${API_KEY}`;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(API_URL);
                setNews(response.data.articles);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch news. Check your API key or network.');
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    if (loading) return <div className="loading">Loading football news...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="app">
            <header className="header">
                <FaFootballBall className="icon" />
                <h1>Football News Feed</h1>
            </header>
            <div className="feed">
                {news.map((article, index) => (
                    <div key={index} className="news-card">
                        {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="image" />}
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <span className="source">Source: {article.source.name}</span>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="link">
                            Read Full Article
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;