<script>
    import Wordlist from "./Wordlist.svelte";

    const t9 = {
        1: "_",
        2: "ABC",
        3: "DEF",
        4: "GHI",
        5: "JKL",
        6: "MNO",
        7: "PQRS",
        8: "TUV",
        9: "WXYZ",
    };

    let code = "";

    function addNumber(n) {
        if (n != 1) {
            code += n;
        }
    }
    function removeNumber() {
        code = code.substring(0, code.length - 1);
    }
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
    <div
        class="artboard phone-1 demo text-center flex flex-col overflow-hidden !h-[450px] mt-8 mb-8"
    >
        <label
            class="input input-bordered flex items-center gap-2 mt-16 w-[90%] min-h-[2rem] ml-auto mr-auto"
        >
            <input type="text" class="grow" bind:value={code} />
            {#if code.length > 0}
                <button
                    type="button"
                    class="btn btn-ghost btn-xs"
                    on:click={removeNumber}
                >
                    <i class="fal fa-backspace"></i>
                </button>
            {/if}
        </label>

        <div class="flex items-end h-full">
            <div class="grid grid-cols-3 w-full gap-[2rem] p-[2rem]">
                {#each Object.keys(t9) as key}
                    <button
                        class="btn btn-circle btn-outline btn-lg"
                        on:click={() => {
                            addNumber(key);
                        }}
                    >
                        {key} <br />
                        {t9[key]}
                    </button>
                {/each}
            </div>
        </div>
    </div>
    <Wordlist bind:t9={code} />
</div>

<style>
    .demo {
        border-radius: var(--rounded-box, 1rem);
        --tw-bg-opacity: 1;
        background-color: var(
            --fallback-b3,
            oklch(var(--b3) / var(--tw-bg-opacity))
        );
        --tw-text-opacity: 1;
        color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
        box-shadow:
            0 1px 3px #0000001a,
            0 1px 2px #0000000f;
    }
</style>
