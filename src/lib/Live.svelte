<script>
    import { onMount } from "svelte";
    import Wordlist from "./Wordlist.svelte";

    export let code;

    const DOMAIN = "https://zauberwilli.de";
    let endpoint = `${DOMAIN}/t9magic/codes/${code}.json`;

    let data = {
        time: 1710517952688,
        t9: "486335673",
    };

    async function poll() {
        const response = await fetch(endpoint);
        const json = await response.json();

        data = json;
    }

    let interval = null;

    onMount(async () => {
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
