<script lang="ts">
  import { flip } from 'svelte/animate';

  import { resultsBoule } from "../store/results";

  import getColorBoule from "../Utility/getColorBoule";

  // for (let i = 0; i <= 50; i++) {
  //   const num =  `${getRandomInt(1,9)}`;
  //   const distance = getRandomInt(3000,9000);
  //   resultsBoule.addResult({num, distance});
  // }

  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max+1);
  //   return Math.floor(Math.random() * (max - min) + min);
  // }
</script>

<table>
  <thead>
    <tr>
      <th>Boil</th>
      <th>Distance</th>
    </tr>
  </thead>
  <tbody class="scrollable">
    {#each $resultsBoule as result (result.id)}
      <tr animate:flip class="{getColorBoule(result.num)}">
        <td><strong>{result.num}</strong></td>
        <td>{result.distance}</td>
      </tr>
    {/each}
  </tbody>
</table>


<style>
  table {
    width: 100%;
    max-height: 512px;
    text-align: center;
    border-collapse: collapse;
  }

  thead { 
    display:block;
    font-weight: bolder;
    color: var(--title);
    border-bottom: 1px solid var(--title);
    width: 100%;
  }


  tbody tr:hover {
    background: var(--gray)
  }

  tbody {
    display:block;
    overflow:auto;
    height: 500px;
    width:100%;

  }

  .scrollable::-webkit-scrollbar {
    width: 11px;
  }
  .scrollable {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }
  .scrollable::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  .scrollable::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG) ;
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
  }

  th, td {
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
  }

  .red {
    color: var(--red);
  }

  .blue {
    color: var(--blue);
  }

  .green {
    color: var(--green);
  }
</style>