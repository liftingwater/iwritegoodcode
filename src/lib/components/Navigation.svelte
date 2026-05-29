<script>
  import { currentPage, navigateTo } from '../../stores/navigation';
  import { theme } from '../../stores/theme';
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
    <button
      class="theme-toggle"
      on:click={() => theme.toggle()}
      aria-label="Toggle theme"
      title="Toggle light/dark mode"
    >
      {#if $theme === 'light'}
        🌙
      {:else}
        ☀️
      {/if}
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
    color: var(--form-element-focus-border-color);
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
    color: var(--primary-focus);
  }

  .theme-toggle {
    padding: 0.75rem 1rem;
    background-color: transparent;
    border: 2px solid var(--muted-border-color);
    border-radius: 0.5rem;
    color: var(--form-element-focus-border-color);
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }

  .theme-toggle:hover {
    border-color: var(--form-element-focus-border-color);
    background-color: var(--secondary-background);
  }
</style>
