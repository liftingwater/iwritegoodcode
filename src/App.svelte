<script>
  import ProjectPanel from './lib/ProjectPanel.svelte';

  /*
    import { onMount } from "svelte";
    import { db } from "./firebase"; // or comment this out if you're using apps.json
    import { collection, getDocs } from "firebase/firestore";

    let apps = [];
    let loading = true;

    onMount(async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "apps"));
        apps = querySnapshot.docs.map((doc) => doc.data());
      } catch (error) {
        console.error("Error loading apps:", error);
      } finally {
        loading = false;
      }
    });
  */

  // TODO: As long as we're using local JSON instead of Firebase, comment out the above and use this:
  import projects from './projects.json';
  let loading = false;
  
</script>

<main class="container">
  <header>
    <h1>👋 Welcome to <strong>iwritegoodcode.com</strong></h1>
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
          <div class="col">
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

  <footer>
    <hr />
    <p>
      Painstakingly crafted, bit by bit, by Alex Wheeldon.
    </p>
  </footer>
</main>