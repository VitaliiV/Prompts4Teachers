document.getElementById('generate').addEventListener('click', function() {
  var grade = document.getElementById('grade').value;
  var role = document.getElementById('role').value;
  var paragraphTopic = document.getElementById('paragraphTopic').value;
  var readingLevel = document.getElementById('readingLevel').value;
  var lessonDuration = document.getElementById('lessonDuration').value;

  // Сюда добавим генерацию текста на основе введенных данных
  var outputText = `Запрос: Подготовьте полный урок для моих учеников ${grade} класса. Роль: Вы учитель ${role}. Явные инструкции: Напишите три абзаца о ${paragraphTopic}. Включите в конце каждого абзаца вопрос с несколькими вариантами ответов. Создайте список всех предметно-специфичных слов с краткими определениями. Создайте пять вопросов на основе материала. Создайте одно групповое задание на основе материала. Создайте одно задание со сложным вопросом на основе материала. Параметры: Напишите текст с уровнем сложности чтения ${readingLevel} лет. Урок длится ${lessonDuration} минут. Пишите в профессиональном стиле.`;

  document.getElementById('output').textContent = outputText;
});

document.getElementById('copy').addEventListener('click', function() {
  var outputText = document.getElementById('output').textContent;
  // Создаем элемент textarea
  var textArea = document.createElement('textarea');
  textArea.value = outputText;
  // Устанавливаем невидимый текстовый элемент на страницу
  document.body.appendChild(textArea);
  // Выделяем содержимое текстового поля
  textArea.select();
  // Копируем текст в буфер обмена
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'успешно ' : 'не ';
    alert('Текст ' + msg + 'скопирован');
  } catch (err) {
    alert('Ошибка при копировании текста: ' + err);
  }
  // Удаляем временный элемент
  document.body.removeChild(textArea);
});
