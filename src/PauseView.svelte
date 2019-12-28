<script>
    import Serie from './Serie.svelte';

    export let serie = {
        name: 'Penkkipunnerrus',
        repeats: 20,
        weight: 65
    }
</script>

<style>
	h1 {
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 400;
	}

</style>

<header>
    <nav>
    </nav>
    <Serie name={'Seuraavaksi\n' + serie.name} repeats={serie.repeats + ' X ' + serie.weight} />
</header>

<main>
</main>

