const ID_MIN = 1;
const ID_MAX = 25;
const IMAGE_MIN = 1;
const IMAGE_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const ID_MIN_COMMENTS = 0;
const ID_MAX_COMMENTS = 30;

const DESCRIPTIONS = ['Лето море жара', 'Ретро автомобиль', 'Кот', 'Пляж'];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо.', 'Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!',];
const NAMES = ['Александр', 'Светлана', 'Кирилл', 'Владимир', 'Ирина', 'Евгений', 'Алексей', 'Наталья'];

// Функция получение случайного целого числа в заданном интервале включительно

const getRandomNumbers = (min, max) => {
  const bellow = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const higher = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.floor(Math.random() * (higher - bellow + 1) + bellow);

  return result;
};

// Функция генератор случайных идентификаторов из указанного диапазона без повторений

const createRandomIdFromSpecifiedRange = (min, max) => {
  // Переменная (массив) для хранения всех созданных идентификаторов
  const valueStore = [];
  //
  return function () {
    // 1. Получить случайное целое положительное число
    let presentValue = getRandomNumbers(min, max);
    // Чтобы не зациклить проверку когда перебраны все идентификаторы нужно создать условие
    if (valueStore.length >= (max - min + 1)) {
      return 'Все идентификатры перебраны';
    }
    // 2. Проверить на уникальность. Повторить шаг 1 с помощью цикла, пока не получим уникальное число
    while (valueStore.includes(presentValue)) {
      presentValue = getRandomNumbers(min, max);
    }
    // 3. Запомнить полученное число
    valueStore.push(presentValue);
    // 4. Вернуть результат
    return presentValue;
  };
};

const idNumber = createRandomIdFromSpecifiedRange(ID_MIN, ID_MAX);
const idImages = createRandomIdFromSpecifiedRange(IMAGE_MIN, IMAGE_MAX);

// Функция создания карточки фотографии пользователя

const userPhotoCard = () => {

  const randomDescription = getRandomNumbers(0, DESCRIPTIONS.length - 1);
  const userCard = {
    id: idNumber(),
    url: `photos/${idImages()}.jpg`,
    description: DESCRIPTIONS[randomDescription],
    likes: getRandomNumbers(LIKES_MIN, LIKES_MAX),
  };
  return userCard;
};

const idComments = createRandomIdFromSpecifiedRange(ID_MIN_COMMENTS, ID_MAX_COMMENTS);

// Функция создания комментария

const userCommentCard = () => {
  const randomMessage = getRandomNumbers(0, MESSAGES.length - 1);
  const randomName = getRandomNumbers(0, NAMES.length - 1);
  const commentCard = {
    id: idComments(),
    avatar: `img/avatar-${getRandomNumbers(1, 6)}.svg`,
    message: MESSAGES[randomMessage],
    name: NAMES[randomName]
  };
  return commentCard;
};

// Создание массива пользовательских фотографий
// const photoCard =
Array.from({length: 25}, userPhotoCard);
// const commentsCard =
Array.from({length: 30}, userCommentCard);

// photoCard;
// commentsCard;

// console.log(photoCard);
// console.log(commentsCard);
