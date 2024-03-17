<script>
    import Keypad from "./Keypad.svelte";
    import { page } from "$app/stores";

    let t9 = "";

    function postNumber(e) {
        t9 = e.detail.t9;

        var code = $page.data.code;
        fetch("/apifix", {
            method: "POST",
            body: JSON.stringify({ t9, code }),
        });
    }
</script>

<div class="flex justify-center items-center flex-col h-[100vh]">
    <Keypad on:update:t9={postNumber} />
</div>
