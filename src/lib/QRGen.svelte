<script>
    import { QRCode } from "@castlenine/svelte-qrcode";
    import html2canvas from "html2canvas-pro";

    const DOMAIN = "https://zauberwilli.de";

    let qrcodes = [];
    let currentCodeIndex = 0;

    function generate4DigitPin() {
        return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    }

    function addQRCode() {
        const pin = generate4DigitPin();
        qrcodes = [...qrcodes, { url: `${DOMAIN}#keypad&pin=${pin}`, pin }];
        nextCode();
    }

    function nextCode() {
        currentCodeIndex = (currentCodeIndex + 1) % qrcodes.length;
    }
    function prevCode() {
        currentCodeIndex =
            (currentCodeIndex + qrcodes.length - 1) % qrcodes.length;
    }

    function printQRCode() {
        const captureElement = document.getElementById("qr-code");

        html2canvas(captureElement)
            .then((canvas) => {
                canvas.style.display = "none";
                document.body.appendChild(canvas);
                return canvas;
            })
            .then((canvas) => {
                const image = canvas.toDataURL("image/png");
                const a = document.createElement("a");
                a.setAttribute(
                    "download",
                    qrcodes[currentCodeIndex].pin + ".png",
                );
                a.setAttribute("href", image);
                a.click();
                canvas.remove();
            });
    }
</script>

<div class="navbar bg-base-100 shadow">
    <div class="navbar-start">
        <a class="btn btn-square btn-ghost text-xl" href="/">
            <i class="fal fa-long-arrow-left"></i>
        </a>
    </div>
    <div class="navbar-center"></div>
    <div class="navbar-end">
        <button class="btn btn-square btn-ghost" on:click={addQRCode}>
            <i class="fal fa-plus"></i>
        </button>
    </div>
</div>

<div class="container mx-auto p-4 mt-12">
    {#if qrcodes.length > 0}
        <div class="flex flex-row justify-center items-center">
            <div class="card card-compact w-96">
                <div class="card-body">
                    {#if qrcodes.length > 1}
                        <button
                            class="absolute left-0 btn btn-square z-10"
                            on:click={prevCode}
                        >
                            <i class="fal fa-chevron-left"></i>
                        </button>
                    {/if}
                    <div id="qr-code" style="margin:0 auto">
                        <QRCode
                            size={300}
                            content={qrcodes[currentCodeIndex].url}
                        ></QRCode>
                        <h2 class="text-xl text-center">
                            {qrcodes[currentCodeIndex].pin}
                        </h2>
                    </div>
                    {#if qrcodes.length > 1}
                        <button
                            class="absolute right-0 btn btn-square z-10"
                            on:click={nextCode}
                        >
                            <i class="fal fa-chevron-right"></i>
                        </button>
                    {/if}
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" on:click={printQRCode}
                            >Drucken</button
                        >
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>
