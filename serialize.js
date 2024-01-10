function serialize(numbers) {
  return numbers.map((num) => String.fromCharCode(num)).join('');
}

function deserialize(serialized) {
  const chars = serialized.split('');
  return chars.map((char) => char.charCodeAt(0));
}

// Тесты
const tests = [
  [1, 2, 3, 4, 5],
  [10, 20, 30, 40, 50],
  Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 100 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 500 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300) + 1),
  Array.from({ length: 1000 }, (_, index) => (index % 10) + 1), // Все числа 1 знака
  Array.from({ length: 1000 }, (_, index) => (index % 90) + 10), // Все числа из 2х знаков
  Array.from({ length: 900 }, (_, index) => (index % 300) + 100), // Каждое число по 3 знака
];

tests.forEach((numbers) => {
  const serialized = serialize(numbers);
  const deserialized = deserialize(serialized);
  const compressionRatio = serialized.length / (numbers.length * 2); // Коэффициент сжатия

  console.log('Исходная строка:', numbers);
  console.log('Сжатая строка:', serialized);
  console.log('Десериализованная строка:', deserialized);
  console.log('Коэффициент сжатия:', compressionRatio.toFixed(2));
  console.log('==============================');
});
