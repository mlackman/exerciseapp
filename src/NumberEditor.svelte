<script>
    export let value;
    export let stepAmount = 1;

    function increaseValue() {
        value += stepAmount;
    }

    function decreaseValue() {
        value -= stepAmount;;
    }
</script>

<style>

    .container {
        display: flex;
        flex-direction: column;
    }
    .container div {
        margin: 0 auto;
        height: 4em;
        width: 70%;
        background-color: #dedede;
    }
    .container input {
        margin: 0.25em 0.25em;
        padding: 0;
        width: 3em;
        height: 2em;

        border: none;
        border-radius: 0.25em;

        font-size: 3em;
        text-align: center;
    }
</style>

<div class="container">
    <div on:click={increaseValue}></div>
    <input type=number bind:value={value}/>
    <div on:click={decreaseValue}></div>
</div>
