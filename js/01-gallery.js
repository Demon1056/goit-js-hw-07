import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryHtml= galleryItems.map(creatOneImage).join('')

function creatOneImage ({preview, original, description}){
    return `<div class="gallery__item">
   <a class="gallery__link" href = "large-image.jpg">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
 </a>
 </div>`; 
}


const galleryArea= document.querySelector ('.gallery')

function createGallery() {
  return galleryArea.insertAdjacentHTML('beforeend', galleryHtml)
}
createGallery()

galleryArea.addEventListener('click', getBigImage )

function getBigImage(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
  <img src= ${event.target.dataset.source} >
  `)
  instance.show ()
  }
  