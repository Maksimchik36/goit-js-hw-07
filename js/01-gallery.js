import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:
// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// 5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки. Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div >
    
// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

// Закрытие с клавиатуры
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.

// console.log(galleryItems);

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
 
const galleryRef = document.querySelector(".gallery");

// Поэлементно перебирает старый массив и создает элементы для нового массива с необходимой разметкой и выдаёт строку разметки
function createMarkup(array){ return array.map((item) => {
    const newElement = `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
     <img
       class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}"
       alt="${item.description}"
     />
   </a>
 </div >`;
    return newElement;
}).join("")
}

//Создаёт галерею, преобразуя строку
function createGallery(parent, array){
  return parent.innerHTML = createMarkup(array);
}

createGallery(galleryRef, galleryItems);

// 2. Реализация делегирования на div.gallery и получение url большого изображения.

galleryRef.addEventListener("click", onImageClick);

function onImageClick(event){
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    // 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
    // 5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

    const modal = basicLightbox.create(`
    <img src=${event.target.dataset.source}>`, {
    closable: true,
    onShow: (modal) => { window.addEventListener('keydown', onModalPressEsc) },
    onClose: (modal) => {window.removeEventListener('keydown', onModalPressEsc)},
    })
    
        modal.show();

        function onModalPressEsc(event){
          if(event.code === "Escape"){
                  modal.close();
          }
        }
}

// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

// Добавил  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"> в html в head.

// Добавил <script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script> в конец body перед другими скриптами.







