<script>
  import ProjectPanel from "../ProjectPanel.svelte";
  import projects from "../../data/projects.json";

  let loading = false;
</script>

<main class="container">
  <header>
    <p>I build fun, useful apps for everyday problems. Check them out below:</p>
  </header>

  <section>
    {#if loading}
      <p>Loading apps...</p>
    {:else if projects.length === 0}
      <p><em>No projects yet. Check back soon!</em></p>
    {:else}
      <div class="grid">
        {#each projects as app}
          <div class="card">
            <ProjectPanel
              name={app.name}
              logo={app.logo}
              url={app.link}
              tech={app.tech_stack}
            ></ProjectPanel>
          </div>
        {/each}
      </div>
    {/if}
  </section>
</main>

<style>
  :global(.grid) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    gap: 1rem;
    max-width: 960px;
    margin: 0 auto;
  }

  :global(.card) {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :global(.card button) {
    width: 100%;
    text-overflow: ellipsis;
  }
</style>
