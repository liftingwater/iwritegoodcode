<script>
  import ArticleCard from "../components/ArticleCard.svelte";
  import guides from "../../data/guides.json";

  let loading = false;
  let selectedDifficulty = "all";

  $: filteredGuides = selectedDifficulty === "all"
    ? guides
    : guides.filter(guide => guide.difficulty === selectedDifficulty);

  $: difficulties = ["all", ...new Set(guides.map(g => g.difficulty))];
</script>

<main class="container">
  <header>
    <p>Comprehensive guides on software development best practices, tools, and techniques.</p>
  </header>

  <section class="filters">
    <div class="filter-buttons">
      {#each difficulties as difficulty}
        <button
          class="filter-button"
          class:active={selectedDifficulty === difficulty}
          on:click={() => (selectedDifficulty = difficulty)}
        >
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </button>
      {/each}
    </div>
  </section>

  <section>
    {#if loading}
      <p>Loading guides...</p>
    {:else if filteredGuides.length === 0}
      <p><em>No guides yet. Check back soon!</em></p>
    {:else}
      <div class="guides-list">
        {#each filteredGuides as guide (guide.id)}
          <ArticleCard
            title={guide.title}
            excerpt={guide.excerpt}
            difficulty={guide.difficulty}
            topics={guide.topics}
            readTime={guide.readTime}
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

  .guides-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
