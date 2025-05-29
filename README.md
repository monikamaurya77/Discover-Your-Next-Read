# 📚 Discover Your Next Read - Mini Book Search App

A responsive React.js app that helps users discover books using creative prompts like:
> “Books like Harry Potter”,  
> “Feel-good sci-fi from the 90s”,  
> “Books that make you cry”, and more.

Built for the KraftPixel Frontend Developer Assignment using the Open Library API.

---

## 🚀 Live Demo

🌐 [Click here to view live](https://your-vercel-link.vercel.app)

---

## 🔍 Features

- 🔎 Search books using prompts like mood, genre, author reference
- 🎲 "Surprise Me" button generates random searches
- 📖 View book cover, title, author, year, and subjects
- 📱 Fully responsive design
- 🎛️ Optional filters: year and language
- 💫 Smooth UX with loading states and transitions

---

## 🧠 Technologies Used

- React.js
- Open Library Search API
- CSS Grid/Flexbox for responsive UI
- Hosted on Vercel

---

## 🛠 How It Works

### 📚 API Used:
- [`https://openlibrary.org/search.json?q=...`](https://openlibrary.org/dev/docs/api/search)
- Dynamic prompts are used as keyword search terms directly with the API.

### 💬 Prompt to Query Handling:
The user’s search prompt is directly passed to the Open Library `q` parameter.
Example prompts you can use:

"Books that make you cry"

"Feel-good sci-fi from the 90s"

"Books like Harry Potter"

For example:
> "Books like Sherlock Holmes" → `?q=Books+like+Sherlock+Holmes`

---

## 🧪 Challenges Faced

- The API does not return structured genres, so prompts are used as full-text queries
- Filtering by language/year is supported, but limited
- Book descriptions are not always available in `search.json`

---

## 📁 Folder Structure

```
src/
├── App.jsx
├── App.css
├── index.js
└── components/
    ├── BookCard.jsx
    ├── BookList.jsx
    └── Filters.jsx
```

---

## ✨ Future Improvements

- Use AI/NLP to refine prompts into optimized keyword queries
- Add pagination and infinite scroll
- Add genre tag buttons (e.g., Romance, Sci-Fi)
- Use `works/OLID` API to get better book details

---

## 👩‍💻 Author

**Monika Maurya**  
[LinkedIn](https://www.linkedin.com/in/monika-maurya/)  
Email: monikamaurya120@gmail.com  
