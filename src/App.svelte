<script>

    /*
    let exercises = [
        {
            "name": "Penkkipunnerrus",
            "repeats": "8, 8, 8, 8",
            "weight": "50kg. 52.5, 55.5, 57,5",
        },
        {
          "name": "ylätalja",
          "repeats": "8, 8, 8",
          "weight": "50kg",
        },
        {
            "name": "Vipu rinta laite",
            "repeats": "8, 8, 8",
            "weight": "49kg, 49kg, 49kg",
        },
        {
            "name": "Pystypunnerus painoilla",
            "repeats": "8, 8, 8",
            "weight": "12 kg",
        },
        {
          "name": "Käänteiset flyes kp",
          "repeats": "8, 8, 8",
          "weight": "8kg",
        },
        {
          "name": "vatsalihakset",
          "repeats": "12, 12, 12",
          "weight": "0kg",
        },
        {
            "name": "vipunostot sivulle/eteen",
            "repeats": "12, 12, 12",
            "weight": "8kg/5kg",
        },


      ]
      */

    /*
    let exercises = [
      {
        "name": "maastaveto",
        "repeats": "8, 8, 8",
        "weight": "80kg",
      },
      {
        "name": "Ojentaja dippi",
        "repeats": "10, 10, 10",
        "weight": "0kg",
      },
      {
          "name": "Hauiskääntö levytangolla",
          "repeats": "8, 8, 8",
          "weight": "35kg",
      },
      {
        "name": "jalankoukistus",
        "repeats": "8,8,8",
        "weight": "57.5kg",
      },
      {
        "name": "Ojentaja taljassa",
        "repeats": "8, 8, 8",
        "weight": "25kg",
      },
      {
        "name": "Hauis kp seisten",
        "repeats": "8, 8, 8",
        "weight": "15kg",
      },
      {
        "name": "pohje laitteessa",
        "repeats": "8, 8, 8",
        "weight": "35kg",
      },


    ];
    */

    let exercises = [
        {
          "name": "pystypunnerrus",
          "repeats": "8, 8, 8",
          "weight": "30kg",
        },
        {
          "name": "kulmasoutu tangolla",
          "repeats": "8, 8, 8",
          "weight": "55kg",
        },
        {
          "name": "Vinopenkkipunnerrus tangolla (eteen)",
          "repeats": "8, 8, 8",
          "weight": "40kg, 40kg, 40kg",
        },
        {
          "name": "pystysoutu tangolla",
          "repeats": "3 x 8",
          "weight": "24 kg",
        },
        {
          "name": "Kapea ote selkä vetolaiteessa",
          "repeats": "3 x 8",
            "weight": "24 kg",
        },
        {
          "name": "Penkki painoilla",
          "repeats": "3 x 8",
            "weight": "24 kg",
        },
        {
          "name": "vipunostot sivulle etunojassa",
          "repeats": "3 x 8",
          "weight": "7kg",
        },
        {
          "name": "Kohautukset käsipainolla",
          "repeats": "3 x 8",
            "weight": "24 kg",
        },
        {
          "name": "Vipunostot rinta",
          "repeats": "8, 8, 8",
          "weight": "12.5kg",
        },
        {
          "name": "vatsalihakset koneessa (crunch)",
          "repeats": "3 x 8",
          "weight": "49kg",
        },

      ]
  /*
    let exercises = [
        {
            "name": "Penkkipunnerrus",
            "repeats": "12, 12, 12",
            "weight": "50kg",
        },
        {
            "name": "Vinopenkkipunnerrus tangolla (eteen)",
            "repeats": "12, 12, 12",
            "weight": "35kg, 35kg, 35kg",
        },
        {
            "name": "Vipunostot rinta",
            "repeats": "12, 12, 12",
            "weight": "10kg, 10kg, 10kg",
        },
        {
            "name": "Pullover käsipainolla (rinta)",
            "repeats": "12 12 12",
            "weight": "17.5kg",
        },
        {
            "name": "Pystypunnerus painoilla",
            "repeats": "12, 12, 12",
            "weight": "10 kg",
        },
        {
            "name": "vipunostot sivulle/eteen",
            "repeats": "12, 12, 12",
            "weight": "7kg/5kg",
        },
      ]
      */

/*
    let exercises = [
      {
        "name": "kulmasoutu tangolla",
        "repeats": "12, 12, 12",
        "weight": "55kg",
      },
      {
        "name": "Pullover käsipainolla",
        "repeats": "12, 12, 12",
        "weight": "17.5kg, 17.5kg, 17.5kg",
      },
      {
        "name": "ylätalja",
        "repeats": "12, 12, 12",
        "weight": "42.5kg, 42.5kg, 42.5kg",
      },
      {
        "name": "Käänteiset flyes kp",
        "repeats": "12, 12, 12",
        "weight": "7kg, 7kg, 7kg",
      },
      {
        "name": "facepull taljassa",
        "repeats": "12, 12, 12",
        "weight": "17.5kg",
      },
      {
        "name": "Olan kohautukset",
        "repeats": "12, 12, 12",
        "weight": "22.5kg",
      },

    ];
    */
    /*
    // Arms and abs
    let exercises = [
      {
        "name": "Ojentaja dippi",
        "repeats": "12, 10, 12",
        "weight": "0kg",
      },
      {
          "name": "Hauiskääntö levytangolla",
          "repeats": "12, 12, 12",
          "weight": "30kg",
      },
      {
        "name": "vatsalihakset",
        "repeats": "12, 12, 12",
        "weight": "0kg",
      },
      {
        "name": "Kapea penkki",
        "repeats": "12, 10, 12",
        "weight": "35kg",
      },
      {
        "name": "Hauis kp seisten",
        "repeats": "12, 12, 12",
        "weight": "12.6kg",
      },
      {
        "name": "vatsalihakset koneessa (crunch)",
        "repeats": "12, 12, 12",
        "weight": "49kg",
      },
      {
        "name": "Ojentaja taljassa",
        "repeats": "12, 12, 12",
        "weight": "21.5kg",
      },
      {
        "name": "Hauiskääntö taljassa",
        "repeats": "12,12,12",
        "weight": "17.5kg",
      },
    ];
    */

/*
    let exercises = [
      {
        "name": "maastaveto",
        "repeats": "12, 10, 12",
        "weight": "70kg, 70kg, 70kg",
      },
      {
        "name": "jalankoukistus",
        "repeats": "12, 10, 12",
        "weight": "52.5kg",
      },
      {
        "name": "Jalkakyykky käsipainoilla",
        "repeats": "12, 12, 12",
        "weight": "15kg",
      },
      {
        "name": "kyykky",
        "repeats": "12, 12, 12",
        "weight": "55.0kg",
      },
      {
        "name": "jalan suoristus",
        "repeats": "12, 12, 12",
        "weight": "52.5kg",
      },
      {
        "name": "sivu kyykky",
        "repeats": "12, 12, 12",
        "weight": "10kg",
      },
      {
        "name": "pohje laitteessa",
        "repeats": "12, 12, 12",
        "weight": "30kg",
      },
      {
        "name": "pohje pressissä",
        "repeats": "12, 12, 12",
        "weight": "130kg",
      },
    ];
    */
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
            "weight": "24 kg",
        },
        {
            "name": "soutu istuen",
            "repeats": "2 x 8",
            "weight": "30 kg",
        },
        {
            "name": "kulmasoutu levytangolla",
            "repeats": "2 x 8",
            "weight": "50,0kg",
        },
        {
            "name": "Ylätalja",
            "repeats": "10, 10, 8",
            "weight": "45kg",
        },
        {
            "name": "Hauiskääntö levytangolla",
            "repeats": "8, 8, 6",
            "weight": "30.0kg",
        },
        {
            "name": "Hauis vinopenkki",
            "repeats": "8, 8, 6",
            "weight": "25kg",
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
            "weight": "4 kg",
        },
        {
            "name": "Military Press",
            "repeats": "4 x 10",
            "weight": "25 kg",
        },
        {
            "name": "Vipunostot sivulle",
            "repeats": "2 x 10",
            "weight": "7.5 kg",
        },
        {
            "name": "Kohautukset käsipainolla",
            "repeats": "2 x 10",
            "weight": "24 kg",
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
    */

    /*

    let exercises = [
        {
            "name": "Kyykky",
            "repeats": "10, 8, 8 ,6 , 4",
            "weight": "65,0kg",
        },
        {
            "name": "Reiden ojennus",
            "repeats": "3 x 12",
            "weight": "35kg",
        },
        {
            "name": "Reiden koukistus",
            "repeats": "3 x 12",
            "weight": "42,5kg",
        },
        {
            "name": "Pohjenousu seisten",
            "repeats": "4 x 12",
            "weight": "60,0kg",
        },
        {
            "name": "Pohjenousu istuen",
            "repeats": "2 x 12",
            "weight": "32,5kg",
        },
    ]
  */

  /*
    let exercises = [
        {
            "name": "Penkkipunnerrus",
            "repeats": "10, 8, 8, 6",
            "weight": "55,0kg 57,5kg 60.0kg 62.5kg ",
        },
        {
            "name": "Kyykky",
            "repeats": "10, 8, 8 ,6 , 4",
            "weight": "70.0, 72.5, 75, 77,5, 80",
        },
        {
            "name": "Ylätalja",
            "repeats": "10, 10, 8",
            "weight": "55kg, 60kg",
        },
        {
            "name": "Jalan koukistus",
            "repeats": "3 x 10 - 15",
            "weight": "40,0kg",
        },
        {
            "name": "Käsipaino olkapääprässi",
            "repeats": "3 x 5 - 8",
            "weight": "14kg, 16kg, 16kg",
        },
        {
            "name": "Käsipaino Hauis",
            "repeats": "3 x 10",
            "weight": "14kg",
        },
        {
            "name": "Ojentajat taljassa, painoa lisäten",
            "repeats": "10, 8 ,8 , 6",
            "weight": "17.5kg",
        },
    ]
    */
    /*
      let exercises = [
        {
            "name": "leuanveto",
            "repeats": "3 x n",
            "weight": "oma paino",
        },
        {
            "name": "Vinopenkkipunnerrus tangolla (eteen)",
            "repeats": "8, 8, 6",
            "weight": "45kg, 50kg",
        },
        {
            "name": "kulmasoutu levytangolla",
            "repeats": "4 x 8",
            "weight": "50kg, 55kg, 60kg, 50kg",
        },
        {
            "name": "maastaveto",
            "repeats": "4 x 5-8",
            "weight": "70kg, 80kg,100kg, 110kg",
        },
        {
            "name": "Pullover käsipainolla",
            "repeats": "3 x 8",
            "weight": "18kg",
        },
        {
            "name": "Vipunostot sivulle",
            "repeats": "3 x 10",
            "weight": "8kg",
        },
        {
            "name": "Kapea penkkipunnerrus",
            "repeats": "3 x 10",
            "weight": "20,0kg",
        },
        {
            "name": "Pohjenousu laitteessa ",
            "repeats": "4 x 12",
            "weight": "20kg, 30.0kg",
        },
    ]
    */
    /*
    let exercises = [
        {
            "name": "Military Press",
            "repeats": "4 x 10",
            "weight": "30, 35, 40, 30 ",
        },
        {
            "name": "Leuanveto selällä",
            "repeats": "3 x max",
            "weight": "keho",
        },
        {
            "name": "Ojentaja dippi",
            "repeats": "3 x max",
            "weight": "keho + 5kg",
        },
        {
            "name": "Vipunostot rinta",
            "repeats": "3 x 10",
            "weight": "14kg, 14kg, 16kg",
        },
        {
            "name": "Käänteiset flyes",
            "repeats": "3 x 12",
            "weight": "8kg",
        },
        {
            "name": "Hauiskääntö levytangolla",
            "repeats": "8, 8, 6",
            "weight": "30.0kg 30.0kg, 32.5kg",
        },
        {
            "name": "Kohautukset käsipainolla",
            "repeats": "3 x 10",
            "weight": "28 kg",
        },
        {
            "name": "Jalan koukistus",
            "repeats": "3 x 10 - 15",
            "weight": "50,0kg",
        },
        {
            "name": "Jalan suoristus",
            "repeats": "3 x 10 - 15",
            "weight": "50,0kg",
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


