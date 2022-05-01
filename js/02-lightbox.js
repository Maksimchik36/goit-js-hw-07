import { galleryItems } from './gallery-items.js';
// Change code below this line

// Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox, которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна, а также пролистывание изображений при помощи клавиатуры. Посмотри демо видео работы галереи с подключенной библиотекой.

// Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

// <a class="gallery__item" href="large-image.jpg">
//  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//</a>

// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// 2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// 4. Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.


// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

// Создает строку разметки из исходного массива
function createMarkup(array){return array.map((item)=> {
    const newElement = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
    return newElement;})
    .join("")
}

//Создаёт галерею, преобразуя строку разметки
function createGallery(parent, array){
   return parent.innerHTML = createMarkup(array);
}

createGallery(galleryRef, galleryItems);

const modal = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay: 250});