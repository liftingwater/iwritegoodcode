# iwritegoodcode.com

A modern portfolio and blog platform built with Svelte + Vite, featuring a multi-page navigation system for projects, blog posts, and software development guides.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Firebase project (optional, for database functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/liftingwater/iwritegoodcode.git
cd iwritegoodcode
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
cp .env.example .env.local
```

Then edit `.env.local` with your Firebase credentials. If you don't have Firebase set up yet, you can skip this step and the site will still work with local JSON data.

### Development

Start the development server:
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Firebase Configuration

This project uses Firebase for potential database functionality. Firebase credentials are stored as environment variables for security.

### Setting Up Firebase

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Add your Firebase credentials to `.env.local`:
   - `VITE_FIREBASE_API_KEY` - Your API key
   - `VITE_FIREBASE_AUTH_DOMAIN` - Your auth domain
   - `VITE_FIREBASE_PROJECT_ID` - Your project ID
   - `VITE_FIREBASE_STORAGE_BUCKET` - Your storage bucket
   - `VITE_FIREBASE_MESSAGING_SENDER_ID` - Your messaging sender ID
   - `VITE_FIREBASE_APP_ID` - Your app ID

4. Never commit `.env.local` to version control (it's in `.gitignore`)

## Adding Blog Posts

Blog posts are managed through the `src/data/blog.json` file. To add a new blog post, add an entry to the JSON array with the following structure:

```json
{
  "id": "blog-001",
  "title": "Your Blog Post Title",
  "excerpt": "A brief summary of your blog post that appears in the listing...",
  "author": "Your Name",
  "date": "2024-05-15",
  "category": "Best Practices",
  "readTime": "5 min"
}
```

### Field Descriptions

- **id** (string, required): Unique identifier for the blog post (e.g., `blog-001`, `blog-002`)
- **title** (string, required): The title of your blog post
- **excerpt** (string, required): A brief summary (100-150 characters recommended) that appears in the blog listing
- **author** (string, required): Name of the author
- **date** (string, required): Publication date in `YYYY-MM-DD` format
- **category** (string, required): Topic category for filtering (e.g., "Best Practices", "Testing", "Architecture")
- **readTime** (string, required): Estimated reading time (e.g., "5 min", "10 min")

### Example Blog Post Entry

```json
{
  "id": "blog-007",
  "title": "Mastering Async/Await in JavaScript",
  "excerpt": "Learn how to write clean, readable asynchronous code using async/await patterns and error handling strategies.",
  "author": "Alex Wheeldon",
  "date": "2024-05-22",
  "category": "Best Practices",
  "readTime": "7 min"
}
```

## Adding Guides

Guides follow a similar structure but with different fields. Add entries to `src/data/guides.json`:

```json
{
  "id": "guide-001",
  "title": "Your Guide Title",
  "excerpt": "A comprehensive description of what this guide covers...",
  "difficulty": "Beginner",
  "topics": ["Topic1", "Topic2", "Topic3"],
  "readTime": "10 min"
}
```

### Guide Field Descriptions

- **id** (string, required): Unique identifier (e.g., `guide-001`)
- **title** (string, required): The guide title
- **excerpt** (string, required): Description of the guide content
- **difficulty** (string, required): Skill level - `"Beginner"`, `"Intermediate"`, or `"Advanced"`
- **topics** (array, required): Array of relevant topic tags
- **readTime** (string, required): Estimated reading time

### Example Guide Entry

```json
{
  "id": "guide-009",
  "title": "Introduction to Web Accessibility",
  "excerpt": "Learn the fundamentals of building accessible web applications that work for everyone.",
  "difficulty": "Beginner",
  "topics": ["Accessibility", "Web Development", "Best Practices"],
  "readTime": "8 min"
}
```

## Deployment

This application is deployed to Sevalla as a Static Site:

1. Connect your GitHub repository to Sevalla
2. Select "Static Site" as the deployment type
3. Configure the following settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy!

## Starting Locally

To test the production build locally:

```bash
npm run build
npm start
```

The application will be available at `http://localhost:8080`