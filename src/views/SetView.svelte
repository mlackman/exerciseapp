<script lang="ts">
  import Button from '../components/Button.svelte';
  export let model;
  export let controller;
</script>

<style>
	h1 {
		color: #1e1e1e;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 200;
    text-align: center;
	}
</style>

<main>
  <h1>{ model.set.name }</h1>

  <p>toistot: { model.set.repeats }</p>
  <p>paino: { model.set.weight } kg</p>

  <Button on:click={ () => controller.setFinished() } value='Valmis' />

</main>
