<script>
    import Button from './Button.svelte';
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
            "weight": "20/puoli kg",
        },
        {
            "name": "kulmasoutu levytangolla",
            "repeats": "2 x 8",
            "weight": "45 kg",
        },
        {
            "name": "Ylätalja",
            "repeats": "10, 10, 8",
            "weight": "40,0kg",
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

 </script>
<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
        text-align: center;
	}
    ul {
        padding-left: 1em;
        padding-right: 1em;
    }
    li {
        padding: 0.5em;
    }


</style>

<main>
	<h1>Treeni</h1>
    <ul>
        {#each exercises as exercise}
        <li>
            <Button value='{exercise.name}'/>
        </li>
        {/each}
    </ul>
</main>


