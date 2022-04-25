const hamb = document.querySelector("#hamb");
const nav = document.querySelector("#nav");
const body = document.body;
 
// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);
 
// Выполняем действия при клике ..
function hambHandler(evt) {
  evt.preventDefault();
  // Переключаем стили элементов при клике
  nav.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
}
 
// Код для закрытия меню при нажатии на ссылку
const links = Array.from(nav.children);
 
// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
 
// Закрытие попапа при клике на меню
function closeOnClick() {
  nav.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}