<script>
    import { onMount } from "svelte";
    import Wordlist from "./Wordlist.svelte";
    import Keypad from "./Keypad.svelte";
    import { fetchWithProgress } from "./shared.js";

    let t9 = "";
    let wordlistLoading = true;
    let progress = 0;
    let wordlist = {};

    function updatet9(e) {
        t9 = e.detail.t9;
    }

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

    onMount(loadWordlist);
</script>

<div class="navbar bg-base-100 shadow">
    <div class="navbar-start">
        <a class="btn btn-square btn-ghost text-xl" href="/">
            <i class="fal fa-long-arrow-left"></i>
        </a>
    </div>
    <div class="navbar-center"></div>
    <div class="navbar-end"></div>
</div>

<div class="flex justify-center items-center flex-col">
    <Keypad on:update:t9={updatet9} />
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
        <Wordlist bind:t9 bind:wordlist />
    {/if}
</div>
