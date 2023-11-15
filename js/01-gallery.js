import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector("ul.gallery");

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
});

gallery.insertAdjacentHTML("beforeend", markup.join(""));

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" alt="${event.target.alt}" />`
    );
    instance.show();
  }
});
