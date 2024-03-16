<script>
    import t9_german from "$lib/t9_german.json";

    export let t9;
</script>

<div class="grid grid-cols-1 gap-8">
    {#if t9_german[t9]}
        {#each t9_german[t9] as word, index}
            <div
                class="text-center"
                class:text-9xl={index === 0}
                class:text-8xl={index === 1}
                class:text-6xl={index === 2}
                class:text-5xl={index === 3}
                class:text-4xl={index === 4}
                class:text-3xl={index === 5}
                class:text-2xl={index === 6}
                class:text-xl={index === 7}
            >
                {word}
            </div>
        {/each}
    {/if}
</div>
