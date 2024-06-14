const grades = [...Array(12)].map(function() {
    return Math.floor(Math.random()*100 + 1); 
}); 
console.log('Баллы студентов: ' + grades);
const average = grades.reduce(function (a, b) {
    return (a + b);
}) / 12;
console.log("Средний балл: " + average.toFixed(2));
console.log("Максимальный балл: " + Math.max.apply(null, grades));
console.log("Минимальный балл: " + Math.min.apply(null, grades));
const filteredGrades = grades.filter(el=>el >= 60);
console.log("Количество положительных оценок: " + filteredGrades.length);
const filteredLowGrades = grades.filter(el=>el < 60);
console.log("Количество отрицательных оценок: " + filteredLowGrades.length);
grades.forEach(function(grade) {
    if (grade > 80 && grade < 100) {
        console.log("A");
    } else if (grade > 60 && grade < 79) {
        console.log("B");
    } else if (grade > 40 && grade < 59) {
        console.log("C");
    } else if (grade > 20 && grade < 39) {
        console.log("D");
    } else {
        console.log("E");
    }
});




// Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().
// Рассчитайте и выведите средний балл студентов, используя методы массивов.
// Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
// Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
// Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
// Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
// Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
// Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
// Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
// Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
// Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
// Если оценка ниже 20, преобразуйте её в "E"
// Выведите все найденные значения на экран.