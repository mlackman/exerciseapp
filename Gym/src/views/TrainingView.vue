<script setup lang="ts">

</script>

<template>
  <main>
    <h1>Penkki 1/5</h1>

    <h2>50 kg</h2>

    <section>
      <h3>Toistot</h3>
      <div class="container">
        <button class="repeat-btn"><</button>
        <p>8</p>
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
