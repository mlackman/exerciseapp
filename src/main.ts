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
          done: false,
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
          done: false,
          sets: [
            {
              name: "Leuanveto",
              repeats: 8,
              weight: 0,
            },
            {
              name: "Tauko",
              repeats: 2,
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
class WorkoutsViewController extends ViewController {
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

class ExercisesViewController extends ViewController {
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
    const cmds = this.exercises.map((exercise) => new Command(exercise.name, () => this.onExerciseSelectedCallback(exercise), !exercise.done));
    this.viewModel = new CommandListViewModel('ExercisesView', cmds);
  }
}

class ExerciseViewController extends ViewController {
  protected viewComponent = SetView;
  private exercise;
  private setIndex = 0;
  public onSetFinished: (exercise) => void = ()=>{};

  public setExercise(exercise) {
    this.exercise = exercise;
  }

  protected aboutToActivate() {
    this.viewModel = new SetViewModel(this.exercise.sets[this.setIndex].name, this.exercise.sets[this.setIndex]);
  }

  public setFinished() {
    // TODO: Not sure if this is good idea
    console.log('set finished');
    this.setIndex++;
    if (this.isSetFinished()) {
      this.onSetFinished(this.exercise);
    } else {
      this.activate();
    }
  }

  private isSetFinished(): boolean {
    return this.exercise.sets.length <= this.setIndex;
  }
};

class WorkoutApplication {
  private ui;
  private currentlySelectedWorkout;
  private currentlyExecutingSets;
  private currentlyExecutingSetIndex;
  private workoutsViewController;
  private exercisesViewController;
  private exerciseViewController;

  constructor(ui) {
    this.ui = ui;
    this.workoutsViewController = new WorkoutsViewController(program, ui);
    this.exercisesViewController = new ExercisesViewController(ui);
    this.exerciseViewController = new ExerciseViewController(ui);

    this.workoutsViewController.onWorkoutSelected((workout) => {
      console.log('Workout selected:', workout);
      this.exercisesViewController.setExercises(workout.exercises);
      this.exercisesViewController.activate();
    });

    this.exercisesViewController.onExerciseSelected((exercise) => {
      console.log('Exercise selected', exercise);
      this.exerciseViewController.setExercise(exercise);
      this.exerciseViewController.activate();
    });

    const self = this;
    this.exerciseViewController.onSetFinished = (exercise) => {
      console.log('Set finished from exercise', exercise);
      exercise.done = true;
      self.exercisesViewController.activate();
    };
  }

  public initComplete() {
    this.workoutsViewController.activate();
  }
}


const app = new App({
	target: document.body,
	props: {
    app: WorkoutApplication,
	}
});

export default app;
