import { uploadForm } from './upload-form.js';
import { imgUploadPreview, sliderOptions, sliderOptionsUpdate } from './no-ui-slider.js';

const effectsList = uploadForm.querySelector('.effects__list');

const DEFAULT_START_VALUE = 100;

//Функция присвоения текущего класса
const currentClassFilter = (className) => {
  imgUploadPreview.classList = '';
  imgUploadPreview.classList.add(className);
};

// Функция сброса фильтра
const resetFilter = () => {
  imgUploadPreview.classList = '';
  imgUploadPreview.style.filter = '';

  sliderOptionsUpdate(sliderOptions.NONE, DEFAULT_START_VALUE, 'none');
};

const filters = (evt) => {
  const filter = evt.target;
  const filterEffect = filter.value.toUpperCase();

  if (filter.value === 'none') {
    resetFilter();
    sliderOptionsUpdate(sliderOptions[filterEffect], DEFAULT_START_VALUE, 'none');
  }
  if (filter.value === 'chrome') {
    currentClassFilter('effects__preview--chrome');

    sliderOptionsUpdate(sliderOptions[filterEffect], DEFAULT_START_VALUE, 'block');
  }
  if (filter.value === 'sepia') {
    currentClassFilter('effects__preview--sepia');

    sliderOptionsUpdate(sliderOptions[filterEffect], DEFAULT_START_VALUE, 'block');
  }

  if (filter.value === 'marvin') {
    currentClassFilter('effects__preview--marvin');

    sliderOptionsUpdate(sliderOptions[filterEffect], DEFAULT_START_VALUE, 'block');
  }

  if (filter.value === 'phobos') {
    currentClassFilter('effects__preview--phobos');

    sliderOptionsUpdate(sliderOptions[filterEffect], DEFAULT_START_VALUE, 'block');
  }

  if (filter.value === 'heat') {
    currentClassFilter('effects__preview--heat');

    sliderOptionsUpdate(sliderOptions[filterEffect], DEFAULT_START_VALUE, 'block');
  }
};

effectsList.addEventListener('change', filters);
