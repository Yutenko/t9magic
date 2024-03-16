<script>
    import { onMount } from "svelte";
    import Wordlist from "./Wordlist.svelte";

    export let code;

    const endpoint = `/api?code=${code}`;

    let data = {    };

    async function poll() {
        const response = await fetch(endpoint);
        const json = await response.json();

        data = json;
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
    <Wordlist bind:t9={data.t9} />
</div>
