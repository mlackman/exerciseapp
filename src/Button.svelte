<script>
    export let value="defalt title";
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
</style>

<a on:click>{value}</a>
