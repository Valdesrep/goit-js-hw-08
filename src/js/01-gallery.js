// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>        
        `;
    })
    .join(' ');
}

const gallery = document.querySelector('.gallery');

const galleryItemMarkup = createGalleryMarkup(galleryItems);
gallery.innerHTML = galleryItemMarkup;

const newLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
