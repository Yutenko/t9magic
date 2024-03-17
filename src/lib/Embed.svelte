<script>
    import Keypad from "./Keypad.svelte";

    let t9 = "";

    function postNumber(e) {
        t9 = e.detail.t9;

        const code = getParam("code");
        
        fetch("/apifix", {
            method: "POST",
            body: JSON.stringify({ t9, code }),
        });
    }

    function getParam(name) {
        return new URL(location.href).searchParams.get(name);
    }
</script>

<div class="flex justify-center items-center flex-col h-[100vh]">
    <Keypad on:update:t9={postNumber} />
</div>
