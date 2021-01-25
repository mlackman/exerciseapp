<script>
    /*
    let exercises = [
        {
            "name": "Penkkipunnerrus",
            "repeats": "10, 8, 8 ,6",
            "weight": "50,0kg",
        },
        {
            "name": "Vinopenkkipunnerrus tangolla (eteen)",
            "repeats": "8, 8, 6",
            "weight": "35kg",
        },
        {
            "name": "Vinopenkkipunnerrus tangolla (taakse)",
            "repeats": "8, 8, 6",
            "weight": "35kg",
        },
        {
            "name": "Vipunostot rinta",
            "repeats": "2 x 10",
            "weight": "12kg",
        },
        {
            "name": "Pullover käsipainolla",
            "repeats": "2 x 8",
            "weight": "12kg",
        },
        {
            "name": "Ojentajat taljassa, painoa lisäten",
            "repeats": "10, 8 ,8 , 6",
            "weight": "15.0kg",
        },
        {
            "name": "Ojentaja dippi",
            "repeats": "3 x 10",
            "weight": "keho",
        },
        {
            "name": "Ojentaja dippi penkillä",
            "repeats": "3 x 8",
            "weight": "keho",
        },
    ]
    */
    let exercises = [
        {
            "name": "leuanveto",
            "repeats": "2x8",
            "weight": "oma paino",
        },
        {
            "name": "Kulmasoutu käsipaino",
            "repeats": "3 x 8",
            "weight": "24 kg",
        },
        {
            "name": "soutu istuen",
            "repeats": "2 x 8",
            "weight": "40 kg",
        },
        {
            "name": "kulmasoutu levytangolla",
            "repeats": "2 x 8",
            "weight": "40 kg",
        },
        {
            "name": "Ylätalja",
            "repeats": "10, 10, 8",
            "weight": "42,5kg",
        },
        {
            "name": "Hauiskääntö levytangolla",
            "repeats": "8, 8, 6",
            "weight": "20kg",
        },
        {
            "name": "Hauis vinopenkki",
            "repeats": "8, 8, 6",
            "weight": "20kg",
        },
        {
            "name": "Hauiskääntö käsipainolla",
            "repeats": "2 x 10",
            "weight": "10kg",
        },
    ]


    /*
    let exercises = [
        {
            "name": "Penkkipunnerrus",
            "repeats": "3 x 5 - 8",
            "weight": "55,0kg",
        },
        {
            "name": "Ylätalja",
            "repeats": "3 x 10 - 15",
            "weight": "35kg",
        },
        {
            "name": "Kyykky",
            "repeats": "3 x 5 - 8",
            "weight": "65kg",
        },
        {
            "name": "Jalan koukistus",
            "repeats": "3 x 10 - 15",
            "weight": "37,5kg",
        },
        {
            "name": "Käsipaino olkapääprässi",
            "repeats": "2 x 5 - 8",
            "weight": "14kg",
        },
        {
            "name": "Käsipaino Hauis vinopenkki",
            "repeats": "2 x 10 - 15",
            "weight": "10kg",
        },
        {
            "name": "Ojentaja talja",
            "repeats": "2 x 10 - 15",
            "weight": "17kg",
        },
    ]
   */

    /*
    let exercises = [
        {
            "name": "Penkkinpunnerrus käsipainoilla",
            "repeats": "3 x 10 - 15",
            "weight": "18kg",
        },
        {
            "name": "Alatalja soutu",
            "repeats": "3 x 15 - 20",
            "weight": "30kg",
        },
        {
            "name": "Jalkaprässi",
            "repeats": "3 x 10 - 15",
            "weight": "90kg",
        },
        {
            "name": "Suorinjaloin maastaveto",
            "repeats": "3 x 10 - 15",
            "weight": "50kg",
        },
        {
            "name": "Vipunostot sivulle",
            "repeats": "2 x 10 - 15",
            "weight": "6kg",
        },
        {
            "name": "Hauis käsipainoilla",
            "repeats": "2 x 10 - 15",
            "weight": "9kg",
        },
        {
            "name": "Ojentajat päänyli",
            "repeats": "2 x 10 - 15",
            "weight": "16kg",
        },
    ]
    */
    /*
    let exercises = [
        {
            "name": "Rinta crossover",
            "repeats": "3 x 15 - 20",
            "weight": "7.5kg",
        },
        {
            "name": "Soutu käsipainoilla",
            "repeats": "3 x 5 - 8",
            "weight": "24kg",
        },
        {
            "name": "Jalan suoristus",
            "repeats": "3 x 15 - 20",
            "weight": "25kg",
        },
        {
            "name": "Jalan koukistus",
            "repeats": "3 x 15 - 20",
            "weight": "32,5kg",
        },
        {
            "name": "Bent over laterall raise",
            "repeats": "2 x 10 - 15",
            "weight": "6kg",
        },
        {
            "name": "Hauis tangolla",
            "repeats": "2 x 10 - 15",
            "weight": "22.5kg",
        },
        {
            "name": "Ojentajat tanko",
            "repeats": "2 x 10 - 15",
            "weight": "17.5kg",
        },
    ]
    */

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


