
const HASHTAG = '#';
const MAX_QUANTITY_HASHTAG = 5;
const MIN_QUANTITY_SIMBOLS = 2;
const MAX_QUANTITY_SYMBOLS = 20;

const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = uploadForm.querySelector('.text__hashtags');
const textDescription = uploadForm.querySelector('.text__description');

let errorMessage = '';

// const spaces = textHashtags.oninput = () => {
//   if(textHashtags.value.charAt(1) === ' ') {
//     textHashtags.value = '';
//   }
// };

// Pristine валидация полей

const errors = () => errorMessage;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

// Валидация поля #
const validateHashtags = (value) => {
  // Переводим все символы к одному регистру и обрезаем пробелы по бокам
  const textInput = value.toUpperCase().trim();

  if (textInput === '') {
    return true;
  }
  // Опишем разрешенные символы через регулярные выражения
  const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
  // const spaces =
  // Разбиваю split строки в массив по первому параметру пробел
  const hashtagsArray = value.split(' ');
  const hashtagsSet = new Set(hashtagsArray);

  const commentsError = [
    {
      check: hashtagsArray.some((item) => item[0] !== HASHTAG),
      error: `Поле должно начинаться с символа ${HASHTAG}`,
    },
    {
      check: hashtagsArray.some((item) => item.length < 2),
      error: `Минимальное количество символов ${MIN_QUANTITY_SIMBOLS} включая ${HASHTAG}`,
    },
    {
      check: hashtagsArray.some((item) => item.length > 20),
      error: `Максимальное количество символов в одном хэштэге ${MAX_QUANTITY_SYMBOLS} включая символ ${HASHTAG}`,
    },
    {
      check: hashtagsArray.length !== hashtagsSet.size,
      error: 'Хэштеги не должны повторяться',
    },
    {
      check: hashtagsArray.length > MAX_QUANTITY_HASHTAG,
      error: `Максимальное количество ${MAX_QUANTITY_HASHTAG} хэштегов`,
    },
    {
      check: hashtagsArray.some((item) => !regexp.test(item)),
      error: 'Хэштег содержить недопустимые символы',
    },
    {
      check: hashtagsArray.some((item) => item.slice(1).includes(HASHTAG)),
      error: 'Между хэштегами допускается один пробел',
    },
  ];

  return commentsError.every((rule) => {
    const isValid = rule.check;
    if (isValid) {
      errorMessage = rule.error;
    }
    return !isValid;
  });
};

pristine.addValidator(
  textHashtags,
  validateHashtags,
  errors,
);

// Валидация поля формы комментарии

const validateComments = (value) => {
  if (value.length === '' || value.length <= 140) {
    return true;
  }
};

pristine.addValidator(
  textDescription,
  validateComments,
  'Максимальное количество символов в сообщении 140',
);

uploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

// Отмена закрытия окна с загрузкой при фокусе на текстовое поле
textDescription.addEventListener('keydown', (e) => e.stopPropagation());

// Отмена закрытия окна с загрузкой при фокусе на #
textHashtags.addEventListener('keydown', (e) => e.stopPropagation());
