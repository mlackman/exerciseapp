<script lang="ts">
  import Button from '../components/Button.svelte';
  import { CommandListViewModel } from '../viewmodel';
  export let model: CommandListViewModel;
  export let controller;
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
      {#each model.commands as command}
      <li>
        <Button disabled={ !command.enabled } on:click={ () => command.execute() } value='{command.title}' />
      </li>
      {/each}
  </ul>
</main>


