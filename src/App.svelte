<script lang="ts">
  import { onMount } from 'svelte';
  export let views;

  let currentView;
  let currentViewModel;

  function activateView(viewName: string, data, addToHistory: boolean = true) {
    const view = views[viewName];
    if (!view) { throw new Error(`No such view registered: ${viewName}`); }
    currentView = view.viewComponent;
    currentViewModel = view.createViewModel(data, activateView);

    if (addToHistory) {
      window.history.pushState({ viewName, data }, '', '');
    }
  }

  window.addEventListener('popstate', (event) => {
    const { viewName, data } = event.state;
    if (viewName) {
      activateView(viewName, data, false);
    }
  });

  onMount(() => {
    console.log(views);
    views.activateInitialView(activateView);
  });

</script>

<style>
</style>


<svelte:component this={ currentView } view={ currentViewModel } />


