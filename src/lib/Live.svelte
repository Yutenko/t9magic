<script>
    import { onMount, onDestroy } from "svelte";
    import Wordlist from "./Wordlist.svelte";
    import { fetchWithProgress } from "./shared.js";

    export let code;

    let wordlistLoading = true;
    let progress = 0;
    let wordlist = {};

    async function loadWordlist() {
        fetchWithProgress("/t9_german.json", (loaded, total) => {
            progress = parseInt((loaded * 100) / total);
        })
            .then(async (result) => {
                wordlist = await JSON.parse(result);
                wordlistLoading = false;
            })
            .catch((error) => {
                console.error("Download failed:", error);
            });
    }

    const endpoint = `/apifix?code=${code}`;

    let data = {};

    async function poll() {
        const response = await fetch(endpoint);
        const json = await response.json();

        data = json;
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

<div class="navbar bg-base-100 shadow">
    <div class="navbar-start">
        <a class="btn btn-square btn-ghost text-xl" href="/">
            <i class="fal fa-long-arrow-left"></i>
        </a>
    </div>
    <div class="navbar-center">
        <div class="text-5xl">{data.t9}</div>
    </div>
    <div class="navbar-end">
        <span class="text-3xl">
            <span class="indicator-item badge badge-error"></span>
            {code}</span
        >
    </div>
</div>

<div class="flex h-[100vh] items-center justify-center">
    {#if wordlistLoading}
        <div
            class="radial-progress"
            style="--value:{progress};"
            role="progressbar"
        >
            {progress}%
        </div>
        <p>Lade Wortliste ..</p>
    {:else}
        <Wordlist bind:t9={data.t9} bind:wordlist />
    {/if}
</div>
