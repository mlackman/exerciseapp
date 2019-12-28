<script>
    import SerieView from './SerieView.svelte';
    import PauseView from './PauseView.svelte';

    let exercise = {
        current_training: 0,
        trainings: [
            {
                current_serie: 0,
                series: [
                    {
                        type: 'serie',
                        name: 'Penkkipunnerrus',
                        repeats: 12,
                        weight: 60,
                    },
                    {
                        type: 'pause',
                        rest: 120,
                    }
                ]
            }
        ]
    }
    let currentTrainingIndex = 0;
    let currentSerieIndex = 0;
    let currentSerie = exercise.trainings[currentTrainingIndex].series[currentSerieIndex];


    function serieDone() {
        currentSerieIndex += 1;
        currentSerie = exercise.trainings[currentTrainingIndex].series[currentSerieIndex];
    }

</script>

<style>
</style>

{#if currentSerie.type == 'serie'}
<SerieView on:done={serieDone} serie={currentSerie}/>
{:else}
<PauseView />
{/if}
