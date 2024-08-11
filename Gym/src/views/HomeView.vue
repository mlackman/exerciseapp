<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'

  const router = useRouter();

  function goToTrainingView() {
    router.push('/training');
  }

</script>

<template>
  <main>
    <ul>
      <li @click="goToTrainingView()">
        <h1>Penkki</h1>
      </li>
      <li>
        <h1>Vinopenkki</h1>
      </li>
      <li>
        <h1>Hauiskääntö</h1>
      </li>
    </ul>
  </main>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: None;
  }
  li {
    width: 100%;
    margin-top: 1em;
    padding: 0.5em;
    border: solid;
  }
</style>
