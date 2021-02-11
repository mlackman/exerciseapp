<script>
  export let value="defalt title";
  export let disabled=false;
  console.log('disabled', disabled);
</script>

<style>
    a {
        display: inline-block;
        cursor: pointer;
        width: 100%;
        text-align: center;

        padding-top: 0.75em;
        padding-bottom: 0.75em;

        border: 1px solid #717171;
        border-radius: 0.45em;
    }
    a.disabled {
      text-decoration: line-through;
    }
</style>

<a class:disabled="{disabled}" on:click>{value}</a>
