<script>
    let exercises = [
        {
            "name": "Penkkipunnerrus",
            "repeats": "10, 8, 8, 6",
            "weight": "50,0kg 52,5kg 52,5kg 55,0kg ",
        },
        {
            "name": "Vinopenkkipunnerrus tangolla (eteen)",
            "repeats": "8, 8, 6",
            "weight": "40,0kg",
        },
        {
            "name": "Vinopenkkipunnerrus tangolla (taakse)",
            "repeats": "8, 8, 6",
            "weight": "35kg",
        },
        {
            "name": "Vipunostot rinta",
            "repeats": "2 x 10",
            "weight": "9kg",
        },
        {
            "name": "Pullover käsipainolla",
            "repeats": "2 x 8",
            "weight": "16kg",
        },
        {
            "name": "Ojentajat taljassa, painoa lisäten",
            "repeats": "10, 8 ,8 , 6",
            "weight": "15.0kg",
        },
        {
            "name": "Ojentaja dippi",
            "repeats": "3 x max",
            "weight": "keho",
        },
        {
            "name": "Ojentaja dippi penkillä",
            "repeats": "3 x 8",
            "weight": "keho",
        },
    ]
  /*
    let exercises = [
        {
            "name": "leuanveto",
            "repeats": "2x8",
            "weight": "oma paino",
        },
        {
            "name": "Kulmasoutu käsipaino",
            "repeats": "3 x 8",
            "weight": "22 kg",
        },
        {
            "name": "soutu istuen",
            "repeats": "2 x 8",
            "weight": "25 kg",
        },
        {
            "name": "kulmasoutu levytangolla",
            "repeats": "2 x 8",
            "weight": "45 kg",
        },
        {
            "name": "Ylätalja",
            "repeats": "10, 10, 8",
            "weight": "42,5kg",
        },
        {
            "name": "Hauiskääntö levytangolla",
            "repeats": "8, 8, 6",
            "weight": "22,5kg",
        },
        {
            "name": "Hauis vinopenkki",
            "repeats": "8, 8, 6",
            "weight": "22,5kg",
        },
        {
            "name": "Hauiskääntö käsipainolla istuen",
            "repeats": "2 x 10",
            "weight": "8kg",
        },
    ]
    */
    /*
    let exercises = [
        {
            "name": "pystypunnerrus smith istuen",
            "repeats": "3 x 10",
            "weight": "20 kg (ei tankgon painoa)",
        },
        {
            "name": "Käänteiset flyes käsipainoilla",
            "repeats": "3 x 8 - 10",
            "weight": "6 kg",
        },
        {
            "name": "Military Press",
            "repeats": "4 x 10",
            "weight": "22,5 kg",
        },
        {
            "name": "Vipunostot sivulle",
            "repeats": "2 x 10",
            "weight": "6 kg",
        },
        {
            "name": "Kohautukset käsipainolla",
            "repeats": "2 x 10",
            "weight": "20 kg",
        },
        {
            "name": "Pystysoutu tangolla alhaalta ylös",
            "repeats": "2 x 10",
            "weight": "25 kg",
        },
        {
            "name": "Rannekääntö levytangolla",
            "repeats": "8 x 10",
            "weight": "0",
        },
    ]

    /*
    let exercises = [
        {
            "name": "Kyykky",
            "repeats": "10, 8, 8 ,6 , 4",
            "weight": "60kg",
        },
        {
            "name": "Reiden ojennus",
            "repeats": "3 x 12",
            "weight": "35kg",
        },
        {
            "name": "Reiden koukistus",
            "repeats": "3 x 12",
            "weight": "40kg",
        },
        {
            "name": "Pohjenousu seisten",
            "repeats": "4 x 12",
            "weight": "57,5kg",
        },
        {
            "name": "Pohjenousu istuen",
            "repeats": "2 x 12",
            "weight": "25kg",
        },
    ]
    */

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


