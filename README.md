# iwritegoodcode.com

A modern portfolio and blog platform built with Svelte + Vite, featuring a multi-page navigation system for projects, blog posts, and software development guides.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```

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

### Adding Guides

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

#### Guide Field Descriptions

- **id** (string, required): Unique identifier (e.g., `guide-001`)
- **title** (string, required): The guide title
- **excerpt** (string, required): Description of the guide content
- **difficulty** (string, required): Skill level - `"Beginner"`, `"Intermediate"`, or `"Advanced"`
- **topics** (array, required): Array of relevant topic tags
- **readTime** (string, required): Estimated reading time

#### Example Guide Entry

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