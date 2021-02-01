import App from './App.svelte';
import CommandListView from './views/CommandListView.svelte';
import SetView from './views/SetView.svelte';
import { Command } from './command';
import { CommandListViewModel, SetViewModel } from './viewmodel';

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


class WorkoutApplication {
  public views = {
    /**
     * Shows exercises and can select set
     */
    exercisesView: {
      viewComponent: CommandListView,
      createViewModel: (exercises, activateView) => {
        const cmds = exercises.map((exercise) => new Command(exercise.name, () => activateView('setView', exercise.sets[0])));
        return new CommandListViewModel('ExercisesView', cmds);
      }
    },

    /**
     * Shows workouts and can select exercise
     */
    workoutsView: {
      viewComponent: CommandListView,
      createViewModel: (workouts, activateView) => {
        const cmds = workouts.map((workout) => new Command(workout.name, () => activateView('exercisesView', workout.exercises)));
        return new CommandListViewModel('WorkoutsView', cmds);
      }
    },

    /**
     * Shows set from exercise
     */
    setView: {
      viewComponent: SetView,
      createViewModel: (set, activateView) => {
        return new SetViewModel('SetView', set);
      }
    },
  }

  constructor() {
  }

  public activateInitialView(activateView) {
    activateView('workoutsView', program.workouts);
    //activateView('setView', program.workouts[0].exercises[0].sets[0]);
  }
}


const app = new App({
	target: document.body,
	props: {
    app: new WorkoutApplication(),
	}
});

export default app;
