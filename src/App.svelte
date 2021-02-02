<script lang="ts">
  import { onMount } from 'svelte';
  export let app;

  let application;
  let currentView;
  let currentViewModel;

  class UI {

    public showView(viewComponent, viewModel) {
      currentView = viewComponent;
      currentViewModel = viewModel;
    }

    public activateView(viewName: string, data, addToHistory: boolean = true) {
      const view = application.views[viewName];
      if (!view) { throw new Error(`No such view registered: ${viewName}`); }
      currentView = view.viewComponent;
      currentViewModel = view.createViewModel(data);

      if (addToHistory) {
        window.history.pushState({ viewName, data }, '', '');
      }
    }
  }

  window.addEventListener('popstate', (event) => {
    const { viewName, data } = event.state;
    if (viewName) {
      activateView(viewName, data, false);
    }
  });

  onMount(() => {
    const ui = new UI()
    application = new app(ui);
    application.initComplete();
  });

</script>

<style>
</style>


<svelte:component this={ currentView } view={ currentViewModel } />


