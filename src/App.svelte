<script>
    /*
    let exercises = [
        {
            "name": "Penkkipunnerrus",
            "repeats": "3 x 5 - 8",
            "weight": "50kg",
        },
        {
            "name": "Ylätalja",
            "repeats": "3 x 10 - 15",
            "weight": "30kg",
        },
        {
            "name": "Kyykky",
            "repeats": "3 x 5 - 8",
            "weight": "57,5kg",
        },
        {
            "name": "Jalan koukistus",
            "repeats": "3 x 10 - 15",
            "weight": "30kg",
        },
        {
            "name": "Käsipaino olkapääprässi",
            "repeats": "2 x 5 - 8",
            "weight": "12kg",
        },
        {
            "name": "Käsipaino Hauis vinopenkki",
            "repeats": "2 x 10 - 15",
            "weight": "10kg",
        },
        {
            "name": "Ojentaja talja",
            "repeats": "2 x 10 - 15",
            "weight": "25kg",
        },
    ]
    */
    /*
    let exercises = [
        {
            "name": "Penkkinpunnerrus käsipainoilla",
            "repeats": "3 x 10 - 15",
            "weight": "16kg",
        },
        {
            "name": "Alatalja soutu",
            "repeats": "3 x 15 - 20",
            "weight": "25kg",
        },
        {
            "name": "Jalkaprässi",
            "repeats": "3 x 10 - 15",
            "weight": "75kg",
        },
        {
            "name": "Suorinjaloin maastaveto",
            "repeats": "3 x 10 - 15",
            "weight": "40kg",
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
            "name": "Ojentajat päänyli",
            "repeats": "2 x 10 - 15",
            "weight": "16kg",
        },

    ]
    */


    let exercises = [
        {
            "name": "Rinta crossover",
            "repeats": "3 x 15 - 20",
            "weight": "7.5kg",
        },
        {
            "name": "Soutu käsipainoilla",
            "repeats": "3 x 5 - 8",
            "weight": "18kg",
        },
        {
            "name": "Jalan suoristus",
            "repeats": "3 x 15 - 20",
            "weight": "30kg",
        },
        {
            "name": "Jalan koukistus",
            "repeats": "3 x 15 - 20",
            "weight": "25kg",
        },
        {
            "name": "Bent over laterall raise",
            "repeats": "2 x 10 - 15",
            "weight": "6kg",
        },
        {
            "name": "Hauis tangolla",
            "repeats": "2 x 10 - 15",
            "weight": "17.5kg",
        },
        {
            "name": "Ojentajat tanko",
            "repeats": "2 x 10 - 15",
            "weight": "17.5kg",
        },
    ]

 </script>
<style>
	h1, main, ul {
        margin: 0;
        padding: 0;
	}
    ul {
        line-height: 1em;
        list-style: None;
    }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

    p {
        line-height: 1em;
        font-size: 1.5em;
    }

    .exercise-name {
        font-size: 2em;
    }
    .exercise-info {
        margin-left: 3em;
    }
    .exercise-info span {
        margin-left: 1em;
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

        <li>
            <p class="exercise-name">{exercise.name}<p>
            <p class="exercise-info">{exercise.repeats} <span>{exercise.weight}</span></p>
        </li>

        {/each}

    </ul>
</main>


