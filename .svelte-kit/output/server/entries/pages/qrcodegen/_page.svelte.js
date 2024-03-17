import { c as create_ssr_component, f as add_attribute, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import "qrcode";
import "html2canvas-pro";
const QRCodeImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Hello World" } = $$props;
  let { generator = "node-qrcode" } = $$props;
  let { tagType = "img" } = $$props;
  let { displayType = "img" } = $$props;
  let { displayWidth = null } = $$props;
  let { displayHeight = null } = $$props;
  let { displayStyle = null } = $$props;
  let { altText = "QR Code" } = $$props;
  let { displayID = null } = $$props;
  let { displayClass = null } = $$props;
  let { margin = 4 } = $$props;
  let { scale = 4 } = $$props;
  let { width = void 0 } = $$props;
  let { errorCorrectionLevel = "M" } = $$props;
  let { version = void 0 } = $$props;
  let _generatedImgURL = "";
  let _canvasElement;
  let _imgTagID = displayID;
  let _canvasTagID = displayID;
  function getImageURL() {
    return _generatedImgURL;
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.generator === void 0 && $$bindings.generator && generator !== void 0)
    $$bindings.generator(generator);
  if ($$props.tagType === void 0 && $$bindings.tagType && tagType !== void 0)
    $$bindings.tagType(tagType);
  if ($$props.displayType === void 0 && $$bindings.displayType && displayType !== void 0)
    $$bindings.displayType(displayType);
  if ($$props.displayWidth === void 0 && $$bindings.displayWidth && displayWidth !== void 0)
    $$bindings.displayWidth(displayWidth);
  if ($$props.displayHeight === void 0 && $$bindings.displayHeight && displayHeight !== void 0)
    $$bindings.displayHeight(displayHeight);
  if ($$props.displayStyle === void 0 && $$bindings.displayStyle && displayStyle !== void 0)
    $$bindings.displayStyle(displayStyle);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  if ($$props.displayID === void 0 && $$bindings.displayID && displayID !== void 0)
    $$bindings.displayID(displayID);
  if ($$props.displayClass === void 0 && $$bindings.displayClass && displayClass !== void 0)
    $$bindings.displayClass(displayClass);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.errorCorrectionLevel === void 0 && $$bindings.errorCorrectionLevel && errorCorrectionLevel !== void 0)
    $$bindings.errorCorrectionLevel(errorCorrectionLevel);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0)
    $$bindings.version(version);
  if ($$props.getImageURL === void 0 && $$bindings.getImageURL && getImageURL !== void 0)
    $$bindings.getImageURL(getImageURL);
  return `${displayType === "img" ? `<img${add_attribute("src", _generatedImgURL, 0)}${add_attribute("alt", altText, 0)}${add_attribute("width", displayWidth, 0)}${add_attribute("height", displayHeight, 0)}${add_attribute("style", displayStyle, 0)}${add_attribute("id", _imgTagID, 0)}${add_attribute("class", displayClass, 0)}>` : `${displayType === "canvas" ? `<div><canvas${add_attribute("style", displayStyle, 0)}${add_attribute("width", displayWidth, 0)}${add_attribute("height", displayHeight, 0)}${add_attribute("id", _canvasTagID, 0)}${add_attribute("class", displayClass, 0)}${add_attribute("this", _canvasElement, 0)}></canvas>  <img src=""${add_attribute("alt", altText, 0)} style="position: absolute; top: 0; left: 0; opacity: 0;"></div>` : ``}`}`;
});
const QRGen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentItem;
  let qrcodes = [];
  let currentCodeIndex = 0;
  currentItem = qrcodes[currentCodeIndex];
  return `<div class="navbar bg-base-100 shadow"><div class="navbar-start" data-svelte-h="svelte-t7efjo"><a class="btn btn-square btn-ghost text-xl" href="/"><i class="fal fa-long-arrow-left"></i></a></div> <div class="navbar-center"></div> <div class="navbar-end"><button class="btn btn-square btn-ghost" data-svelte-h="svelte-14d1mrf"><i class="fal fa-plus"></i></button></div></div> <div class="container mx-auto p-4 mt-12">${qrcodes.length > 0 ? `<div class="flex flex-row justify-center items-center"><div class="card card-compact w-96"><div class="card-body justify-center text-center ml-auto mr-auto">${qrcodes.length > 1 ? `<button class="absolute left-0 btn btn-square z-10" data-svelte-h="svelte-14xrdes"><i class="fal fa-chevron-left"></i></button>` : ``} <div id="qr-code">${currentItem ? `<div class="flex justify-center">${validate_component(QRCodeImage, "QRCodeImage").$$render(
    $$result,
    {
      text: currentItem.url,
      width: "300",
      scale: "10"
    },
    {},
    {}
  )}</div> <p class="m-4">${escape(currentItem.pin)}</p>` : ``}</div> ${qrcodes.length > 1 ? `<button class="absolute right-0 btn btn-square z-10" data-svelte-h="svelte-1hbcpbi"><i class="fal fa-chevron-right"></i></button>` : ``}</div> <div class="card-actions justify-end"><button class="btn btn-primary" data-svelte-h="svelte-fwzfxz">Drucken</button></div></div></div>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(QRGen, "QRCodeGen").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
