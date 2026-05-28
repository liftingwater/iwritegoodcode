<script>
  import { currentPage } from './stores/navigation';
  import Navigation from './lib/components/Navigation.svelte';
  import Projects from './lib/pages/Projects.svelte';
  import Blog from './lib/pages/Blog.svelte';
  import Guides from './lib/pages/Guides.svelte';
</script>

<div class="app-container">
  <Navigation />

  <h1>👋 Welcome to <strong>iwritegoodcode.com</strong></h1>

  <div class="page-content">
    {#if $currentPage === 'projects'}
      <Projects />
    {:else if $currentPage === 'blog'}
      <Blog />
    {:else if $currentPage === 'guides'}
      <Guides />
    {/if}
  </div>
</div>

<style>
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .page-content {
    flex: 1;
  }
</style>