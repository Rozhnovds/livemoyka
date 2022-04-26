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

accordHeaders.forEach(function (item) {
	item.addEventListener('click', function() {
		this.nextElementSibling.classList.toggle('hidden');

		const accordImage = this.querySelector('.image');
		const imageSource  = accordImage.getAttribute('src');
		
		if(imageSource == 'assets/icons/up.svg'){
			accordImage.setAttribute('src', 'assets/icons/down.svg');

		} else {
			accordImage.setAttribute('src', 'assets/icons/up.svg');	
		}	
	})
}) 
