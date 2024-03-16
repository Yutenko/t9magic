<script>
    import { onMount } from "svelte";

    const DOMAIN = "https://zauberwilli.de";
    let endpoint = `${DOMAIN}/t9magic/api.php`;

    let livecodes = [];

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

<div class="container mx-auto p-4 flex justify-start">
    {#each livecodes as live}
        <div class="card card-compact shadow">
            <div class="card-body">
                <a href={`/live/${live.t9}`} class="text-5xl">{live.t9}</a>
            </div>
        </div>
    {/each}
</div>

<div class="absolute right-5 bottom-5">
    <a class="btn btn-ghost" href="/qrcodegen">QR</a>
    <a class="btn btn-ghost" href="/keypad">KEYPAD</a>
</div>
