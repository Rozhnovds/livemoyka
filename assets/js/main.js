/* ===== HAMBURGER MENU ===== */

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


/* ===== ACCORDION ===== */

const accordHeaders = document.querySelectorAll("[data-name='accordion-title']");
const accordBodies = document.querySelectorAll("[data-name='accordion-body']");
const accordIconWrappers = document.querySelectorAll("[data-name='accordion-icon-wrapper']");
const accordIcons = document.querySelectorAll("[data-name='accordion-icon']");

accordHeaders.forEach(function (item) {
	item.addEventListener('click', function() {
		
		if(this.nextElementSibling.classList.contains('hidden')) {

		/* скрываем все accordBodies */
		accordBodies.forEach(function (item) {
			item.classList.add('hidden');
		})
		/* меняем все иконки на down */
		accordIcons.forEach(function (item) {
			item.classList.remove('svg-arrow--up');
		})

		accordIconWrappers.forEach(function (item) {
			item.classList.remove('questions__item-icon--up');
		})

		this.nextElementSibling.classList.remove('hidden');

		const currentWrapper = this.querySelector("[data-name='accordion-icon-wrapper']");
		const currentIcon= this.querySelector("[data-name='accordion-icon']");
		
		currentWrapper.classList.add('questions__item-icon--up');
		currentIcon.classList.add('svg-arrow--up');

		} else {

			this.nextElementSibling.classList.add('hidden');
			const currentWrapper = this.querySelector("[data-name='accordion-icon-wrapper']");
			const currentIcon= this.querySelector("[data-name='accordion-icon']");
			currentWrapper.classList.remove('questions__item-icon--up');
			currentIcon.classList.remove('svg-arrow--up');
		}
	})
}) 





