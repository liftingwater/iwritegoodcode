<script>
  import ArticleCard from "../components/ArticleCard.svelte";
  import articles from "../../data/blog.json";

  let loading = false;
  let selectedCategory = "all";

  $: filteredArticles = selectedCategory === "all"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  $: categories = ["all", ...new Set(articles.map(a => a.category))];
</script>

<main class="container">
  <header>
    <p>Essays on software development, code quality, and building better products.</p>
  </header>

  <section class="filters">
    <div class="filter-buttons">
      {#each categories as category}
        <button
          class="filter-button"
          class:active={selectedCategory === category}
          on:click={() => (selectedCategory = category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      {/each}
    </div>
  </section>

  <section>
    {#if loading}
      <p>Loading articles...</p>
    {:else if filteredArticles.length === 0}
      <p><em>No articles yet. Check back soon!</em></p>
    {:else}
      <div class="articles-list">
        {#each filteredArticles as article (article.id)}
          <ArticleCard
            title={article.title}
            excerpt={article.excerpt}
            author={article.author}
            date={article.date}
            category={article.category}
            readTime={article.readTime}
          />
        {/each}
      </div>
    {/if}
  </section>
</main>

<style>
  .filters {
    margin: 2rem 0;
    text-align: center;
  }

  .filter-buttons {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .filter-button {
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid var(--muted-border-color);
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  .filter-button:hover {
    border-color: var(--form-element-focus-border-color);
  }

  .filter-button.active {
    background-color: var(--form-element-focus-border-color);
    border-color: var(--form-element-focus-border-color);
    color: var(--primary-focus);
  }

  .articles-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
