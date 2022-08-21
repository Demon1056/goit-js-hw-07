import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryHtml= galleryItems.map(creatOneImage).join('')

function creatOneImage ({preview, original, description}){
    return `<a class="gallery__item" href = "${original}">
     <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
     />
 </a>
 `; 
}
const galleryArea= document.querySelector ('.gallery')
function createGallery() {
  return galleryArea.insertAdjacentHTML('beforeend', galleryHtml)
}
createGallery()


let gallery = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay:250} );
