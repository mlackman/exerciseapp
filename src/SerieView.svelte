<script>
    import { createEventDispatcher } from 'svelte';

    import Serie from './Serie.svelte';
    import NumberEditor from './NumberEditor.svelte';
    import Button from './Button.svelte';

    export let serie;

    let repeats = serie.repeats;
    let weight = serie.weight;

    const dispatch = createEventDispatcher();
    const done = () => dispatch('done');
</script>

<style>
    .serie-editor {
        display: flex;
        padding-top: 4em;
        justify-content: center;
        align-items: center;
    }
    .serie-editor p {
        font-size: 4em;
    }


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<header>
    <nav>
    </nav>
    <Serie name={serie.name} repeats={serie.repeats + ' X ' + serie.weight} />
</header>

<main>
    <div class="serie-editor">
        <NumberEditor value={repeats}/>
        <p>X</p>
        <NumberEditor value={weight} stepAmount={0.5}/>
    </div>
    <Button on:clicked={done}>Suoritettu</Button>
</main>


