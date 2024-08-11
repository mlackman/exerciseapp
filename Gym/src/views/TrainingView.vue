<script setup lang="ts">

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

  const training: Training = {
    name: 'Penkki',
    serie: '1/5',
    weight: {
      amount: 50,
      unit: 'kg',
    },
    repeats: {
      min: 8,
      max: 12,
    },
  };
</script>

<template>
  <main>
    <h1>{{training.name}} {{training.serie}}</h1>

    <h2>{{training.weight.amount}} {{training.weight.unit}}</h2>

    <section>
      <h3>Toistot {{training.repeats.min}} - {{training.repeats.max}}</h3>
      <div class="container">
        <button class="repeat-btn"><</button>
        <p>{{training.repeats.min}}</p>
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
  }

  p {
    font-size: 20vw;
  }
  .repeat-btn {
    width: 1em;
    height: 1em;
    text-align: center;
    font-size: 5vh;
    line-height: 0px;
  }
  #rdy-btn {
    font-size: 5vh;
    margin: auto;
  }
</style>
