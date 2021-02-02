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
  private ui;

  constructor(ui) {
    this.ui = ui;
  }

  public initComplete() {
    this.showWorkoutsView();
  }

  private showWorkoutsView() {
    const cmds = program.workouts.map((workout) => new Command(workout.name, () => this.showExerciseView(workout.exercises)));
    this.ui.showView('workoutView', CommandListView, new CommandListViewModel('WorkoutsView', cmds));
  }

  private showExerciseView(exercises) {
    const cmds = exercises.map((exercise) => new Command(exercise.name, () => this.showSetView(exercise.sets)));
    this.ui.showView('exerciseView', CommandListView, new CommandListViewModel('ExercisesView', cmds));
  }

  private showSetView(sets) {
  }

}


const app = new App({
	target: document.body,
	props: {
    app: WorkoutApplication,
	}
});

export default app;
