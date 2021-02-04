<script lang="ts">
  import { onMount } from 'svelte';
  export let app;
  let ui;

  interface View {
    name: string;
    viewComponent: any;
    viewModel: any;
    viewController: any;
  }

  let application;
  let currentView;
  let currentViewModel;
  let currentViewController;

  class UI {
    private views: Record<string, View> = {};

    public showView(viewName: string, viewComponent, viewModel, viewController, addToHistory: boolean = true) {
      const view = { name: viewName, viewComponent, viewModel, viewController };
      this.views[viewName] = view;
      this.activateView(viewName);

      if (addToHistory) {
        const state = { viewName };
        console.log('Adding state to history: ', state);
        window.history.pushState(state, '', '');
      }
    }

    private activateView(viewName: string) {
      console.log(`Activating view: ${viewName}`);
      const view = this.views[viewName];
      if (!view) {
        throw new Error(`No such view ${viewName}`);
      }
      currentView = view.viewComponent;
      currentViewModel = view.viewModel;
      currentViewController = view.viewController;
    }
  }

  window.addEventListener('popstate', (event) => {
    console.log('Back pressed: ', event.state);
    const { viewName } = event.state;
    if (viewName) {
      ui.activateView(viewName);
    }
  });

  onMount(() => {
    ui = new UI()
    application = new app(ui);
    application.initComplete();
  });

</script>

<style>
</style>


<svelte:component this={ currentView } model={ currentViewModel } controller={ currentViewController } />


