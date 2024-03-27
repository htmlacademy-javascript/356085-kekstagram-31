// Модуль отрисовки окна с полноразмерным изображением.
import { photoCard } from './data.js';
import { onModalEscKeydown } from './util.js';
import './drawing-thumbnails.js';

const gallery = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPicturerImgOpen = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialCommentsList = bigPicture.querySelector('.social__comments');
const socialCommentsTemplate = bigPicture.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.comments-loader');


const openModalBigPhoto = (photoId) => {
  // Найдем текущую фотографию
  const selectedPhoto = photoCard.find((photo) => photo.id === Number(photoId));
  const photoCommentFragment = document.createDocumentFragment();

  bigPicturerImgOpen.setAttribute('src', selectedPhoto.url);
  bigPicturerImgOpen.setAttribute('alt', selectedPhoto.description);
  bigPicture.querySelector('.likes-count').textContent = selectedPhoto.likes;
  // socialCommentCount.querySelector('.social__comment-shown-count').textContent = selectedPhoto.comments.length;
  // socialCommentCount.querySelector('.social__comment-total-count').textContent = selectedPhoto.comments.length;
  photoCommentFragment.innerHTML = '';

  selectedPhoto.comments.forEach((comment) => {
    const cloneSocialComment = socialCommentsTemplate.cloneNode(true);
    cloneSocialComment.querySelector('.social__picture').src = comment.avatar;
    cloneSocialComment.querySelector('.social__picture').alt = comment.name;
    cloneSocialComment.querySelector('.social__text').textContent = comment.message;

    photoCommentFragment.appendChild(cloneSocialComment);
  });
  // socialCommentsList.appendChild(photoCommentFragment);
  photoCommentFragment.appendChild(socialCommentsList);
  bigPicture.querySelector('.social__caption').textContent = selectedPhoto.description;
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);

};

const closeModalBigPhoto = () => {
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

