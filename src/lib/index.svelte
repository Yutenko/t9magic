<script>
    import { onMount, onDestroy } from "svelte";
    import { fetchWithProgress } from "./shared.js";

    let endpoint = `/api`;

    let livecodes = [];
    let wordlistLoading = true;
    $: progress = 0;

    async function poll() {
        const response = await fetch(endpoint);
        const data = await response.json();

        livecodes = data.codes;
    }

    async function loadWordlist() {
        // Example usage
        fetchWithProgress("/t9_german.json", (loaded, total) => {
            progress = parseInt((loaded * 100) / total);
            console.log(progress);
        })
            .then((result) => {
                wordlistLoading = false;
            })
            .catch((error) => {
                console.error("Download failed:", error);
            });
    }

    let interval = null;
    onMount(async () => {
        loadWordlist();
        poll();
        interval = setInterval(poll, 1000);
    });

    onDestroy(() => {
        clearInterval(interval);
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
    {#if wordlistLoading}
        <div
            class="radial-progress"
            style="--value:{progress};"
            role="progressbar"
        >
            {progress}%
        </div>
    {:else}
        <a class="btn btn-ghost" href="/wordgen">WORDGEN</a>
    {/if}
</div>
