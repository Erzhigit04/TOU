// Поиск формы на странице
const form = document.getElementById('contact-form');
Swal.fire('Привет!', 'Добро пожаловать на наш сайт!', 'success');


// Добавление обработчика события submit
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Отменить перезагрузку страницы

  // Получение данных из формы
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');

  // Проверка корректности данных
  if (name.length < 2) {
    // Сообщение об ошибке через SweetAlert
    Swal.fire({
      icon: 'error',
      title: 'Ошибка',
      text: 'Имя должно содержать минимум 2 символа.',
    });
  } else if (!email.includes('@')) {
    Swal.fire({
      icon: 'error',
      title: 'Ошибка',
      text: 'Введите корректный Email.',
    });
  } else {
    // Успешное сообщение через SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Успешно!',
      text: 'Ваше сообщение отправлено!',
    });
     
    

    // Отобразить данные в консоли
    console.log(`Имя: ${name}, Email: ${email}`);
  }
});
