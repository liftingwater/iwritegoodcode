<script>
    export let name;
    export let logo;
    export let url;
    export let tech = [];
  </script>
  
  <article style="border: 1px solid var(--muted-border); border-radius: 0.5rem; padding: 1rem;">
    <header style="display: flex; align-items: center; justify-content: space-between;">
      <h3 style="margin: 0;">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {logo} {name}
        </a>
      </h3>
    </header>
  
    <section style="margin-top: 0.5rem;">
      <strong>Built with:</strong>
      <ul style="list-style: none; padding-left: 0;">
        {#each tech as t}
          <li style="display: inline-block; margin-right: 0.5rem; background: var(--secondary-background); padding: 0.25rem 0.5rem; border-radius: 0.25rem;">
            {t}
          </li>
        {/each}
      </ul>
    </section>
  </article>