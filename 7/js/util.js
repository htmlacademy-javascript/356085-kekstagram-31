import { closeModalBigPhoto } from './modal-picture.js';
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
      // return 'Все идентификатры перебраны';
      return presentValue;
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

//Функция проверки нажатой клавиши

// const isEscapeKey = (evt) => {
//   return evt.key === 'Escape';
// };
const isEscapeKey = (evt) => evt.key === 'Escape';


//Функция закрытия окна по кнопке
const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalBigPhoto();
  }
};

export { getRandomNumbers, createRandomIdFromSpecifiedRange, isEscapeKey, onModalEscKeydown };
