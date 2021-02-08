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

/**
 * View
 */
class ViewController {
  protected viewComponent;
  protected viewModel;

  constructor(protected ui) {}

  public activate() {
    this.aboutToActivate();
    this.ui.showView('workoutView', this.viewComponent, this.viewModel, this);
  }

  protected aboutToActivate() {
  }
}


/**
 * Shows workouts and user selects one workout,
 * which user will go through
 */
class WorkoutsView extends ViewController {
  private program;
  private onWorkoutSelectedCallback: (workout)=> void = () => {};

  constructor(program, ui) {
    super(ui);
    this.program = program;
    this.viewComponent = CommandListView;
  }

  public onWorkoutSelected(fn: (workout)=>void) {
    this.onWorkoutSelectedCallback = fn;
  }

  protected aboutToActivate() {
    const cmds = this.program.workouts.map((workout) => new Command(workout.name, () => this.onWorkoutSelectedCallback(workout)));
    this.viewModel = new CommandListViewModel('WorkoutsView', cmds)
  }
}

class ExerciseView extends ViewController {
  protected viewComponent = CommandListView;
  private exercises;
  private onExerciseSelectedCallback: (exercise)=>void = () => {};

  public setExercises(exercises) {
    this.exercises = exercises;
  }

  public onExerciseSelected(fn: (exercise)=>void) {
    this.onExerciseSelectedCallback = fn;
  }

  protected aboutToActivate() {
    const cmds = this.exercises.map((exercise) => new Command(exercise.name, () => this.onExerciseSelectedCallback));
    this.viewModel = new CommandListViewModel('ExercisesView', cmds);
  }
}

class WorkoutApplication {
  private ui;
  private currentlySelectedWorkout;
  private currentlyExecutingSets;
  private currentlyExecutingSetIndex;
  private workoutsView;
  private exerciseView;

  constructor(ui) {
    this.ui = ui;
    this.workoutsView = new WorkoutsView(program, ui);
    this.exerciseView = new ExerciseView(ui);

    this.workoutsView.onWorkoutSelected((workout) => {
      console.log('Workout selected:', workout);

      this.exerciseView.setExercises(workout.exercises);
      this.exerciseView.activate();
    });
  }

  public initComplete() {
    this.workoutsView.activate();
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
