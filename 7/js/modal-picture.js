// Модуль отрисовки окна с полноразмерным изображением.
import { photoCard } from './data.js';
import { onModalEscKeydown } from './util.js';
import './drawing-thumbnails.js';
import { clearCommentClose, commentRender } from './modal-comments.js';

const gallery = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPicturerImgOpen = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const openModalBigPhoto = (photoId) => {
  // Найдем текущую фотографию
  const selectedPhoto = photoCard.find((photo) => photo.id === Number(photoId));

  bigPicturerImgOpen.setAttribute('src', selectedPhoto.url);
  bigPicturerImgOpen.setAttribute('alt', selectedPhoto.description);
  bigPicture.querySelector('.social__caption').textContent = selectedPhoto.description;
  bigPicture.querySelector('.likes-count').textContent = selectedPhoto.likes;

  commentRender(selectedPhoto.comments);

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};

const closeModalBigPhoto = () => {
  clearCommentClose();
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  // Закрытие окна по кнопке
  document.addEventListener('keydown', onModalEscKeydown);
};

gallery.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if(currentPicture) {
    evt.preventDefault();
    //Открытие большой фотографии с помощью data атрибута
    openModalBigPhoto(currentPicture.dataset.pictureId);
  }
});

bigPictureCancel.addEventListener('click', () => {
  closeModalBigPhoto();
});

export { closeModalBigPhoto };

