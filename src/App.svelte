<script lang="ts">
  import { onMount } from 'svelte';
  import CommandListView from './CommandListView.svelte';
  import { Command } from './command';

  let currentView;
  let cmds: Command[] = [];

  function showExercisesView(exercises) {
    cmds = exercises.map((exercise) => new Command(exercise.name));
    currentView = CommandListView;
  }

  function showWorkoutsView(workouts) {
    cmds = workouts.map((workout) => new Command(workout.name, () => showExercisesView(workout.exercises)));
    currentView = CommandListView;
  }

  onMount(() => {
    const program = {
      workouts: [
        {
          id: 1,
          name: 'Rinta ja ojentajat',
          exercises: [
            {
              id: 1,
              name: "Penkkipunnerrus",
              sets: [],
            },
          ]
        },
        {
          id: 2,
          name: 'Selkä ja hauis',
          exercises: [
            {
              id: 2,
              name: "Leuanveto",
              sets: [],
            },
          ]
        }
      ]
    }

    showWorkoutsView(program.workouts);
  });

</script>

<style>
</style>


<svelte:component this={ currentView } commands={cmds} />


