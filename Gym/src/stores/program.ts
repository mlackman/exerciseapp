import { defineStore } from 'pinia'

type Weight = {
  amount: number;
  unit: string;
};

type Repeats = {
  min: number;
  max: number;
}

type Training = {
  name: string;
  serie: string;
  weight: Weight;
  repeats: Repeats;
};


export const useProgramStore = defineStore('program', () => {
  const training: Training = {
    name: 'Penkki',
    serie: '1/5',
    weight: {
      amount: 55,
      unit: 'kg',
    },
    repeats: {
      min: 8,
      max: 12,
    },
  };
  return training;
})
