const hamburger = document.querySelector('.header1 .nav-bar1 .nav-list .hamburger');
const mobile_menu = document.querySelector('.header1 .nav-bar1 .nav-list ul');
const menu_item = document.querySelectorAll('.header1 .nav-bar1 .nav-list ul li a');
const header1 = document.querySelector('.header1.container1');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header1.style.backgroundColor = '#29323c';
	} else {
		header1.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
