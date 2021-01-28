<script>
  import Exercises from './Exercises.svelte';

  const routes = {
    '/exercises': { pageHandler: Exercises }
  };

</script>

<style>
</style>


<svelte:component this={ Exercises } />;


