import {photoCard} from './data.js';

//Модуль отрисовки миниатюр

const pictures = document.querySelector('.pictures');
// console.log(pictures);
const template = document.querySelector('#picture').content.querySelector('.picture');

// Функция отрисовки одной фотографии

const drawingThumbnails = (userPhoto) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');
  image.src = userPhoto.url;
  image.alt = userPhoto.description;
  // Находим лайки
  thumbnail.querySelector('.picture__likes').textContent = userPhoto.likes;
  // Находим комментарии
  thumbnail.querySelector('.picture__comments').textContent = userPhoto.comments.length;

  return thumbnail;
};

const userCardFragment = document.createDocumentFragment();

const galleryPhotoCard = () => {
  // Цикл с помощью которого проходимся по массиву и итрисовывает максимальное количество фотографий
  photoCard.forEach((photos) => {
    const thumbnail = drawingThumbnails(photos);
    userCardFragment.appendChild(thumbnail);
  });
  pictures.appendChild(userCardFragment);
};

export { galleryPhotoCard };
