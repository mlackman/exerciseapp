<script lang="ts">
  import Button from './Button.svelte';
  import { Command } from './command';
  export let commands: Command[] = [];

</script>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
        text-align: center;
	}
    ul {
        padding-left: 1em;
        padding-right: 1em;
    }
    li {
        padding: 0.5em;
    }


</style>

<main>
	<h1>Treeni</h1>
  <ul>
      {#each commands as command}
      <li>
        <Button on:click={ () => command.execute() } value='{command.title}'/>
      </li>
      {/each}
  </ul>
</main>


