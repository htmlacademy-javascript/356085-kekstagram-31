import { getRandomNumbers, createRandomIdFromSpecifiedRange } from './util.js';

const ID_MIN = 1;
const ID_MAX = 25;
const IMAGE_MIN = 1;
const IMAGE_MAX = 25;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_ID_MIN = 0;
const COMMENTS_ID_MAX = 30;

const DESCRIPTIONS = ['Лето море жара', 'Ретро автомобиль', 'Кот', 'Пляж'];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо.', 'Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!',];
const NAMES = ['Александр', 'Светлана', 'Кирилл', 'Владимир', 'Ирина', 'Евгений', 'Алексей', 'Наталья'];

const idNumber = createRandomIdFromSpecifiedRange(ID_MIN, ID_MAX);
const idImages = createRandomIdFromSpecifiedRange(IMAGE_MIN, IMAGE_MAX);
const idComments = createRandomIdFromSpecifiedRange(COMMENTS_ID_MIN, COMMENTS_ID_MAX);

// Функция создания комментария

const userCommentCard = () => {
  const randomMessage = getRandomNumbers(0, MESSAGES.length - 1);
  const randomName = getRandomNumbers(0, NAMES.length - 1);
  const commentCard = {
    id: idComments(),
    avatar: `img/avatar-${getRandomNumbers(AVATAR_MIN, AVATAR_MAX)}.svg`,
    message: Array.from({ length: (1) }, () => MESSAGES[randomMessage]).join(' '),
    name: NAMES[randomName]
  };
  return commentCard;
};

// Функция создания карточки фотографии пользователя

const userPhotoCard = () => {

  const randomDescription = getRandomNumbers(0, DESCRIPTIONS.length - 1);
  const userCard = {
    id: idNumber(),
    url: `photos/${idImages()}.jpg`,
    description: DESCRIPTIONS[randomDescription],
    likes: getRandomNumbers(LIKES_MIN, LIKES_MAX),
    comments: Array.from({length: getRandomNumbers(COMMENTS_ID_MIN, COMMENTS_ID_MAX)}, userCommentCard)
  };
  return userCard;
};
// Создание массива пользовательских фотографий
const photoCard = Array.from({length: IMAGE_MAX}, userPhotoCard);

export {photoCard};
