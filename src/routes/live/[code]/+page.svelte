<script>
    import Live from "$lib/Live.svelte";
    export let data;
</script>

<Live code={data.params.code} />
