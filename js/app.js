const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

const sale = new Swiper('.sale', {
	// Optional parameters
	slidesPerView: 2,
	spaceBetween: 140,
	loop: true,


})

const reviews = new Swiper('.reviews', {
	// Optional parameters
	slidesPerView: 2,
	spaceBetween: 140,
	loop: true,
})

const equipment = new Swiper('.equipment', {
	// Optional parameters
	slidesPerView: 3,
	spaceBetween: 5,
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
