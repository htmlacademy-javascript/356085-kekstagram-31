//Функция для проверки длины строки
const getLengthString = (string, maxLength) => {
  for(let i = 0; i < string.length; i++) {
    return (string.length <= maxLength);
  }
};

getLengthString('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом.
const gerPalindrome = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  let newLines = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    newLines += normalizedString.at(i);
  }
  return newLines === normalizedString;
};

gerPalindrome('топот');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
const getStringNumber = (string) => {
  let numbers = parseInt(string.toString().replace(/[^\d]/g, ''), 10);
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= 0 && string[i] <= 9) {
      numbers += Number.isNaN(string[i]);
    }
  }
  return numbers;
};

getStringNumber('2023 год');


