function calculateAndDisplay() {
    // Получаем значение x из формы
    let x = parseFloat(document.getElementById('inputX').value);

    // Вызываем функцию расчета из внешнего файла
    let result = calculateY(x);

    // Если результат не null (т.е. нет ошибки), выводим на страницу
    if (result !== null) {
        document.getElementById('result').innerHTML = `При x = ${x}, значение y = ${result}`;
    } else {
        document.getElementById('result').innerHTML = ''; // Очищаем результат в случае ошибки
    }
}
function calculateY(x) {
    // Константы для формулы
    const a = 4;
    const b = 0;
    const c = 3;
    const d = 2;

    try {
        // Проверка на деление на ноль
        if (3 * x + 2 === 0) {
            throw "Ошибка: знаменатель равен нулю. Деление на ноль невозможно.";
        }

        // Расчет значения y по формуле
        let y = (a * x) / (c * x + d);

        // Возвращаем результат расчета
        return y;

    } catch (error) {
        // Обработка исключительных ситуаций
        alert(error);
        return null; // Возвращаем null в случае ошибки
    }
}
function processStrings() {
    // Строковые переменные
    let s1 = "Я люблю Беларусь";
    let s2 = "Я учусь в Политехническом колледже";

    // 1. Определение длины строки s2
    let lengthS2 = s2.length;

    // 2. Выделение n-ого символа в строке s1 и определение его ASCII-кода
    let n = 15; // Пример: выделение 7-го символа (индекс 6)
    let charS1 = s1[n];
    let asciiCode = s1.charCodeAt(n);

    // 3. Замена в строке s1 слова "Беларусь" на "Минск"
    let replacedS1 = s1.replace("Беларусь", "Минск");

    // Формируем результаты для вывода в абзац
    let outputText = `Длина строки s2: ${lengthS2}<br>`;
    outputText += `n-ый символ в строке s1: ${charS1}, его ASCII-код: ${asciiCode}<br>`;
    outputText += `Строка s1 после замены: ${replacedS1}`;

    // Выводим результаты в абзац с id="output"
    document.getElementById("output1").innerHTML = outputText;
}