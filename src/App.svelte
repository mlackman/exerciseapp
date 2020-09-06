<script>
    let exercises = [
        {
            "name": "Penkkinpunnerrus käsipainoilla",
            "repeats": "3 x 10 - 15",
            "weight": "12kg",
        },
        {
            "name": "Alatalja soutu",
            "repeats": "3 x 15 - 20",
            "weight": "35kg",
        },
        {
            "name": "Jalkaprässi",
            "repeats": "3 x 10 - 15",
            "weight": "70kg",
        },
        {
            "name": "Suorinjaloin maastaveto",
            "repeats": "3 x 10 - 15",
            "weight": "25kg",
        },
        {
            "name": "Suorinjaloin maastaveto",
            "repeats": "3 x 10 - 15",
            "weight": "25kg",
        },
        {
            "name": "Vipunostot sivulle",
            "repeats": "2 x 10 - 15",
            "weight": "6kg",
        },
        {
            "name": "Hauis käsipainoilla",
            "repeats": "2 x 10 - 15",
            "weight": "8kg",
        },
        {
            "name": "Ojentajat päänylu",
            "repeats": "2 x 10 - 15",
            "weight": "15kg",
        },

    ]
</script>
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
    ul {
        line-height: 2em;
        list-style: None;
    }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Treeni</h1>

    <ul>
        {#each exercises as exercise}

        <li><span class="exercise-name">{exercise.name}</span> {exercise.repeats} <span>{exercise.weight}</span></li>

        {/each}

    </ul>
</main>


