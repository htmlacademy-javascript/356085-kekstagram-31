
const MAX_SCALE = 1;
const SCALE_STEP = 0.25;

const uploadForm = document.querySelector('.img-upload__form');
const ulpoadFormPreviewImg = uploadForm.querySelector('.img-upload__preview').querySelector('img');
const scaleControlSmaller = uploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = uploadForm.querySelector('.scale__control--bigger');
const scaleControlValue = uploadForm.querySelector('.scale__control--value');

let scale = 1;

const onScaleSmaller = () => {
  if (scale > SCALE_STEP) {
    ulpoadFormPreviewImg.style.transform = `scale(${scale -= SCALE_STEP})`;
    scaleControlValue.value = `${scale * 100}%`;
  }
};

const onScaleBigger = () => {
  if (scale < MAX_SCALE) {
    ulpoadFormPreviewImg.style.transform = `scale(${scale += SCALE_STEP})`;
    scaleControlValue.value = `${scale * 100}%`;
  }
};

scaleControlSmaller.addEventListener('click', onScaleSmaller);

scaleControlBigger.addEventListener('click', onScaleBigger);


