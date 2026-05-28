<script>
  export let title = "";
  export let excerpt = "";
  export let author = undefined;
  export let date = undefined;
  export let category = undefined;
  export let difficulty = undefined;
  export let topics = [];
  export let readTime = "";
</script>

<article class="article-card">
  <div class="article-header">
    <h3>{title}</h3>
    <div class="article-meta">
      {#if date}
        <span class="meta-item">
          📅 {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      {/if}
      {#if author}
        <span class="meta-item">✍️ {author}</span>
      {/if}
      {#if difficulty}
        <span class="meta-item difficulty" class:beginner={difficulty === 'Beginner'} class:intermediate={difficulty === 'Intermediate'} class:advanced={difficulty === 'Advanced'}>
          📚 {difficulty}
        </span>
      {/if}
      {#if readTime}
        <span class="meta-item">⏱️ {readTime}</span>
      {/if}
    </div>
  </div>

  <p class="excerpt">{excerpt}</p>

  <div class="article-footer">
    <div class="tags">
      {#if category}
        <span class="tag category-tag">{category}</span>
      {/if}
      {#each topics as topic}
        <span class="tag topic-tag">{topic}</span>
      {/each}
    </div>
  </div>
</article>

<style>
  .article-card {
    padding: 1.5rem;
    border: 1px solid var(--muted-border-color);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .article-card:hover {
    border-color: var(--form-element-focus-border-color);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .article-header {
    margin-bottom: 1rem;
  }

  .article-header h3 {
    margin: 0 0 0.75rem 0;
    font-size: 1.5rem;
  }

  .article-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.9rem;
    color: var(--muted-color);
  }

  .meta-item {
    display: inline-block;
  }

  .meta-item.difficulty {
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    color: var(--contrast);
  }

  .meta-item.difficulty.beginner {
    background-color: rgba(34, 197, 94, 0.2);
  }

  .meta-item.difficulty.intermediate {
    background-color: rgba(59, 130, 246, 0.2);
  }

  .meta-item.difficulty.advanced {
    background-color: rgba(239, 68, 68, 0.2);
  }

  .excerpt {
    margin: 0 0 1rem 0;
    line-height: 1.6;
    color: var(--muted-color);
  }

  .article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid var(--muted-border-color);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .category-tag {
    background-color: var(--secondary-background);
    color: var(--muted-color);
  }

  .topic-tag {
    background-color: var(--form-element-focus-border-color);
    color: var(--primary-focus);
  }
</style>
