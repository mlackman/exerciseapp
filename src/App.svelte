<script lang="ts">
  import { onMount } from 'svelte';
  import CommandListView from './views/CommandListView.svelte';
  import SetView from './views/SetView.svelte';
  import { Command } from './command';
  import { CommandListViewModel, SetViewModel } from './viewmodel';

  let currentView;
  let currentViewModel;

  const views = {
    exercisesView: {
      viewComponent: CommandListView,
      createViewModel: (exercises) => {
        const cmds = exercises.map((exercise) => new Command(exercise.name, () => activateView('setView', exercise.sets[0])));
        return new CommandListViewModel('ExercisesView', cmds);
      }
    },
    workoutsView: {
      viewComponent: CommandListView,
      createViewModel: (workouts) => {
        const cmds = workouts.map((workout) => new Command(workout.name, () => activateView('exercisesView', workout.exercises)));
        return new CommandListViewModel('WorkoutsView', cmds);
      }
    },
    setView: {
      viewComponent: SetView,
      createViewModel: (set) => {
        return new SetViewModel('SetView', set);
      }
    }
  }

  function activateView(viewName: string, data, addToHistory: boolean = true) {
    const view = views[viewName];
    if (!view) { throw new Error(`No such view registered: ${viewName}`); }
    currentView = view.viewComponent;
    currentViewModel = view.createViewModel(data);

    if (addToHistory) {
      window.history.pushState({ viewName, data }, '', '');
    }
  }

  window.addEventListener('popstate', (event) => {
    const { viewName, data } = event.state;
    if (viewName) {
      activateView(viewName, data, false);
    }
  });

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
              sets: [
                {
                  name: "Penkkipunnerrus",
                  repeats: 5,
                  weight: 60,
                }
              ],
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
              sets: [
                {
                  name: "Leuanveto",
                  repeats: 8,
                  weight: 0,
                },
              ],
            },
          ]
        }
      ]
    }

    activateView('workoutsView', program.workouts);
  });

</script>

<style>
</style>


<svelte:component this={ currentView } view={ currentViewModel } />


