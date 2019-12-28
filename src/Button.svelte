<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    const handleClick = () => dispatch('clicked');
</script>

<style>
    div {
        margin: 1em auto;
        width: 90%;

        border-radius: 0.25em;
        background-color: #FFFFFF;

        font-size: 4em;
        color: #00BAD3;

    }

</style>

<div on:click={handleClick}>
    <p><slot/><p>
</div>
