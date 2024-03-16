<script>
    import { onMount } from "svelte";

    let endpoint = `/api`;

    let livecodes = [];

    async function poll() {
        const response = await fetch(endpoint);
        const data = await response.json();

        livecodes = data.codes;
    }

    let interval = null;

    onMount(async () => {
        poll();
        setInterval(poll, 1000);
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });
</script>

<div class="container mx-auto p-4 flex justify-start">
    {#each livecodes as live}
        <div class="card card-compact shadow">
            <div class="card-body">
                <a href={`/live/${live}`} class="text-5xl">{live}</a>
            </div>
        </div>
    {/each}
</div>

<div class="absolute right-5 bottom-5">
    <a class="btn btn-ghost" href="/qrcodegen">QR</a>
    <a class="btn btn-ghost" href="/wordgen">WORDGEN</a>
</div>
