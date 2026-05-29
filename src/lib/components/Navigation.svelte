<script>
  import { currentPage, navigateTo } from '../../stores/navigation';
</script>

<nav class="nav-container">
  <div class="nav-buttons">
    <button
      class="nav-button"
      class:active={$currentPage === 'projects'}
      on:click={() => navigateTo('projects')}
    >
      Projects
    </button>
    <button
      class="nav-button"
      class:active={$currentPage === 'blog'}
      on:click={() => navigateTo('blog')}
    >
      Blog
    </button>
    <button
      class="nav-button"
      class:active={$currentPage === 'guides'}
      on:click={() => navigateTo('guides')}
    >
      Guides
    </button>
  </div>
</nav>

<style>
  .nav-container {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--muted-border-color);
    padding-bottom: 1rem;
  }

  .nav-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .nav-button {
    padding: 0.75rem 1.5rem;
    background-color: transparent;
    border: 2px solid var(--muted-border-color);
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .nav-button:hover {
    border-color: var(--form-element-focus-border-color);
    background-color: var(--secondary-background);
  }

  .nav-button.active {
    background-color: var(--form-element-focus-border-color);
    border-color: var(--form-element-focus-border-color);
    color: white;
  }
</style>
