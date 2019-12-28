<script>
    export let name;
    export let repeats;
</script>

<style>
	.serie h1 {
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 400;
	}

    .serie p {
        text-align: center;
        font-size: 4em;
    }
</style>

<div class="serie">
    <h1>{name}</h1>
    <p>{repeats}</p>
</div>

