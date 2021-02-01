<script lang="ts">
  import Button from '../components/Button.svelte';
  export let view;
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
  <h1>{ view.set.name }</h1>

  <p>toistot: { view.set.repeats }</p>
  <p>paino: { view.set.weight } kg</p>

  <Button on:click={ () => view.setFinished() } value='Valmis' />

</main>
