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
            {
              name: "Tauko",
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
  private currentlySelectedWorkout;
  private currentlyExecutingSets;
  private currentlyExecutingSetIndex;

  constructor(ui) {
    this.ui = ui;
  }

  public initComplete() {
    this.showWorkoutsView();
  }

  private workoutSelected(workout) {
    this.currentlySelectedWorkout = workout;
    this.showExerciseView(workout.exercises);
  }

  private exerciseSelected(exercise) {
    console.log(`Exercise selected: ${exercise.name}`);
    this.currentlyExecutingSets = exercise.sets;
    this.currentlyExecutingSetIndex = 0;
    this.showSetView();
  }

  private showWorkoutsView() {
    const cmds = program.workouts.map((workout) => new Command(workout.name, () => this.workoutSelected(workout)));
    this.ui.showView('workoutView', CommandListView, new CommandListViewModel('WorkoutsView', cmds), this);
  }

  private showExerciseView(exercises) {
    const cmds = exercises.map((exercise) => new Command(exercise.name, () => this.exerciseSelected(exercise)));
    this.ui.showView('exerciseView', CommandListView, new CommandListViewModel('ExercisesView', cmds), this);
  }

  private showSetView(putToHistory: boolean = true) {
    this.ui.showView('setView', SetView, new SetViewModel('SetView', this.currentlyExecutingSets[this.currentlyExecutingSetIndex]), this, putToHistory);
  }

  private setFinished() {
    console.log(`Set finished: ${this.currentlyExecutingSets[this.currentlyExecutingSetIndex].name}`);
    this.currentlyExecutingSetIndex += 1;
    if (this.currentlyExecutingSets.length >= this.currentlyExecutingSetIndex) {
      this.showExerciseView(this.currentlySelectedWorkout.exercises);
    } else {
      this.showSetView(false);
    }
  }
}


const app = new App({
	target: document.body,
	props: {
    app: WorkoutApplication,
	}
});

export default app;
