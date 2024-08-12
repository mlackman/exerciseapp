
<script setup lang="ts">
  import { useProgramStore } from '../stores/program';
  import type { ExerciseSet } from '../stores/program';

  const workout = useProgramStore();

  const exercise = workout.exercises[0];
  const currentSet = exercise.sets[0] as ExerciseSet;


</script>

<template>
  <main>
    <h1>{{exercise.name}} 1/{{exercise.sets.length}}</h1>

    <h2>{{currentSet.weight.amount}} {{currentSet.weight.unit}}</h2>

    <section>
      <h3>Toistot </h3>
      <p>{{currentSet.repeats.min}} - {{currentSet.repeats.max}}</p>
      <div class="container">
        <button class="repeat-btn"><</button>
        <p>{{currentSet.repeats.min}}</p>
        <button class="repeat-btn">></button>
      </div>
    </section>

    <div class="container">
      <button id="rdy-btn">Valmis</button>
    </div>
  </main>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 20vw;
    text-align: center;
  }

  h3 {
    font-size: 10vw;
  }

  .container{
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 2em;
  }

  p {
    font-size: 20vw;
    text-align: center;
  }
  .repeat-btn {
    width: 1.5em;
    height: 1.5em;
    text-align: center;
    font-size: 5vh;
    line-height: 0px;
  }
  #rdy-btn {
    position: absolute;
    bottom: 0;
    font-size: 5vh;
    padding: 0.1em 0.5em;
    margin: auto;
    margin-bottom: 2em;
  }
</style>
