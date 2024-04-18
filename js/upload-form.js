import { onModalEscKeydown } from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = uploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = uploadForm.querySelector('.img-upload__cancel');

const openUploadForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
};

imgUploadInput.addEventListener('change', () => {
  openUploadForm();
});

// Функция закрытыия модального окна формы и очистки выбора файла
const closeUploadForm = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscKeydown);
  imgUploadInput.value = '';
};

imgUploadCancel.addEventListener('click', () => {
  closeUploadForm();
});

export { openUploadForm, closeUploadForm };

