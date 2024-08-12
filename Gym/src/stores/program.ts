import { defineStore } from 'pinia'

type Workout = {
  name: string;
  exercises: Exercise[];
}

type Exercise = {
  name: string;
  sets: (ExerciseSet | Rest)[]
}

export type ExerciseSet = {
  name: string;
  repeats: Repeats;
  weight: Weight;
}

type Rest = {
  min: number; // seconds
  max: number;
}

type Weight = {
  amount: number;
  unit: string;
};

type Repeats = {
  min: number;
  max: number;
}

export const useProgramStore = defineStore('program', () => {
  const workout: Workout = {
    name: 'Push day',
    exercises: [
      {
        name: 'Tricep Pushdown',
        sets: [
          {
            name: 'Tricep Pushdown',
            repeats: { min: 8, max: 12 },
            weight: { amount: 22.5, unit: 'kg' },
          },
          { min: 60, max: 120 }
        ],
      }
    ],
  };
  return workout;

})
