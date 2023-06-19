import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryElements = document.querySelector(".gallery");
console.log(galleryElements);
const markapGalery = galleryItems
    .map(
        ({ description, original, preview }) =>
            `<li class="gallery__item">
  <a class="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
galleryElements.insertAdjacentHTML("beforeend", markapGalery);
galleryElements.addEventListener("click", onClickGalery);
function onClickGalery(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const getgetAttribut = e.target.getAttribute("data-source");
    const instance = basicLightbox.create(`
    <img src="${getgetAttribut}" width="800" height="600">
`);

    instance.show();
    window.addEventListener("keydown", closeGalery);

    function closeGalery(e) {
        if (e.key === "Escape") {
            console.log("close");

            instance.close(window.removeEventListener("keydown", closeGalery));

        }
    }
}