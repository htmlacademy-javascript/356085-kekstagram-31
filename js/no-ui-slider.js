import { uploadForm } from './upload-form.js';

const sliderContainer = uploadForm.querySelector('.effect-level');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const imgUploadPreview = uploadForm.querySelector('.img-upload__preview img');
const effectLevelValue = uploadForm.querySelector('.effect-level__value');
const imgUploadEffectLevel = uploadForm.querySelector('.img-upload__effect-level');

let currentEffectImg = '';
let unitEffectMeasure = '';

//Объект с опциями для фильтрации
const sliderOptions = {
  'NONE': {
    RANGE: {
      MIN: 0,
      MAX: 100,
    },
    START: 100,
    STEP: 1,
    CURRENT_EFFECT_IMG: '',
    UNIT_EFFECT_MEASURE: '',
  },
  'CHROME': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 1,
    STEP: 0.1,
    CURRENT_EFFECT_IMG: 'grayscale',
    UNIT_EFFECT_MEASURE: '',
  },
  'SEPIA': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 1,
    STEP: 0.1,
    CURRENT_EFFECT_IMG: 'sepia',
    UNIT_EFFECT_MEASURE: '',
  },
  'MARVIN': {
    RANGE: {
      MIN: 0,
      MAX: 100,
    },
    START: 100,
    STEP: 1,
    CURRENT_EFFECT_IMG: 'invert',
    UNIT_EFFECT_MEASURE: '%',
  },
  'PHOBOS': {
    RANGE: {
      MIN: 0,
      MAX: 3,
    },
    START: 3,
    STEP: 0.1,
    CURRENT_EFFECT_IMG: 'blur',
    UNIT_EFFECT_MEASURE: 'px',
  },
  'HEAT': {
    RANGE: {
      MIN: 1,
      MAX: 3,
    },
    START: 3,
    STEP: 0.1,
    CURRENT_EFFECT_IMG: 'brightness',
    UNIT_EFFECT_MEASURE: '',
  },
};

// Обновление опций слайдера
const sliderOptionsUpdate = ({ RANGE: { MIN, MAX }, START, STEP, CURRENT_EFFECT_IMG, UNIT_EFFECT_MEASURE }, startValue, display) => {
  currentEffectImg = CURRENT_EFFECT_IMG;
  unitEffectMeasure = UNIT_EFFECT_MEASURE;

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: MIN,
      max: MAX,
    },
    start: START,
    step: STEP,
  });

  sliderElement.noUiSlider.set(startValue);
  sliderContainer.style.display = display;
};

//Начальные значения слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      } else {
        return value.toFixed(1);
      }
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

imgUploadEffectLevel.classList.add('hidden');

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  imgUploadPreview.style.filter = `${currentEffectImg}(${unencoded[handle]}${unitEffectMeasure})`;

  effectLevelValue.setAttribute('value', unencoded[handle]);
});

export { sliderElement, imgUploadPreview, sliderOptions, sliderOptionsUpdate };

