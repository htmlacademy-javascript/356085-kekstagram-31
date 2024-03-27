import { photoCard } from './data.js';

//Модуль рисование миниатюр

const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const userCardFragment = document.createDocumentFragment();

// Функция отрисовки одной фотографии

const drawingThumbnails = (userPhoto) => {
  const thumbnail = template.cloneNode(true);

  const image = thumbnail.querySelector('.picture__img');
  image.src = userPhoto.url;
  image.alt = userPhoto.description;

  thumbnail.dataset.pictureId = userPhoto.id;
  // Находим лайки
  thumbnail.querySelector('.picture__likes').textContent = userPhoto.likes;
  // Находим комментарии
  thumbnail.querySelector('.picture__comments').textContent = userPhoto.comments.length;

  return thumbnail;
};

// Функция заполнения галереи

const galleryPhotoCard = () => {
  // Цикл с помощью которого проходимся по массиву и итрисовывает максимальное количество фотографий
  photoCard.forEach((photos) => {
    const thumbnail = drawingThumbnails(photos);
    userCardFragment.appendChild(thumbnail);
  });
  pictures.appendChild(userCardFragment);
};

const galleryPhotos = galleryPhotoCard();

export { galleryPhotos };
// export { drawingThumbnails };
