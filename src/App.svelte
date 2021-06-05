<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition"
  import { attachListeners, sendMessage } from "./PostMessage/postMessage";

  import { loaderLayoutComplete, canSpin } from "./store/settings";

  import Construct from "./Construct/Construct.svelte";
  import ListResults from "./Component/ListResults.svelte";

  let construct3: HTMLIFrameElement;
  let autoPlay = true;
  let showStats = true;

  onMount(() => {
    attachListeners();
  });


  function setAutoplay() {
	  sendMessage(construct3, { type: "set", content: autoPlay ? "AutoPlay=YES" : "AutoPlay=NO" });
  }


</script>

<main class="grid-container">
  <div class="title">
    <h2>Petits Chevaux</h2>
    <p>
      A gambling game based on the ancient Petits Chevaux (French game). In
      other words, a miniature roulette made with Construct 3 and Svelte
    </p>
  </div>
  <div class="roulette" transition:fade>
    <Construct bind:construct3 />
  </div>

  {#if $loaderLayoutComplete}
    <div class="settings" transition:fade>
      <div class="autoplay">
        <label>
          <input type="checkbox" bind:checked={autoPlay} on:change={setAutoplay}/>
          AutoPlay
        </label>

        {#if !autoPlay}
          <button
		  	disabled={!$canSpin}
            on:click={() =>
              sendMessage(
                construct3,
                { type: "status", content: "SPIN" },
                "*"
              )}>Spin</button
          >
        {/if}
      </div>
      <div class="statistics">
        <label>
          <input type="checkbox" bind:checked={showStats} />
          Show Stats
        </label>
        {#if showStats}
          <p>...</p>
        {/if}
      </div>
    </div>

    <div class="results" transition:fade>
      <ListResults />
	  </div>
  {/if}
</main>

<style>
  .grid-container {
    max-width: 800px;
    max-height: 800px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 0px 0px;
    grid-template-areas:
      "title title title"
      "results roulette settings"
  }

  .title {
    grid-area: title;
  }

  .roulette {
    grid-area: roulette;
  }

  .results {
	  grid-area: results;
    max-height: 512px;
  }

  .settings {
    grid-area: settings;
    display: flex;
    flex-direction: column;
  }

  .title {
    text-align: center;
  }
  h2 {
    color: var(--title);
  }
</style>
