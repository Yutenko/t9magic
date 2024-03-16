<script>
    import Wordlist from "./Wordlist.svelte";
    import Keypad from "./Keypad.svelte";

    let t9 = "";

    function updatet9(e) {
        t9 = e.detail.t9;
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
    <Keypad on:update:t9={updatet9} />
    <Wordlist bind:t9 />
</div>
