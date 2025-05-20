document.addEventListener('DOMContentLoaded', function () {
	const burger = document.getElementById('burger')
	const header = document.getElementById('header') // змінено з querySelector('.header')
	const closeBtn = document.getElementById('burger-menu')
	const menuLinks = document.querySelectorAll('.mobile__menu a')
	const body = document.body

	function toggleMenu() {
		header.classList.toggle('open')
		body.classList.toggle('no-scroll')
	}

	burger.addEventListener('click', toggleMenu)

	if (closeBtn) {
		closeBtn.addEventListener('click', () => {
			header.classList.remove('open')
			body.classList.remove('no-scroll')
		})
	}

	menuLinks.forEach(link => {
		link.addEventListener('click', () => {
			header.classList.remove('open')
			body.classList.remove('no-scroll')
		})
	})
})

const counters = document.querySelectorAll('.results__item-num')
let hasAnimated = false

const animateCounter = counter => {
	const target = +counter.getAttribute('data-target')
	let current = 0
	const duration = 2000
	const step = Math.ceil(target / (duration / 20))

	const update = () => {
		current += step
		if (current >= target) {
			counter.innerText = `${target}+`
		} else {
			counter.innerText = `${current}+`
			requestAnimationFrame(update)
		}
	}

	update()
}

const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting && !hasAnimated) {
				counters.forEach(counter => animateCounter(counter))
				hasAnimated = true
				observer.disconnect() // зупиняємо спостереження
			}
		})
	},
	{ threshold: 0.5 }
) // половина елемента у вікні

observer.observe(document.querySelector('.results'))

$(document).ready(function () {
	$('.feedbacks__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
	})
})
$(document).ready(function () {
	$('.trust__slider-partners').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,

		responsive: [

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	})
})

$(document).ready(function () {
	$('.news__slider').on(
		'init reInit afterChange',
		function (event, slick, currentSlide) {
			let current = currentSlide || 0

			$('.news__slider .slick-slide').removeClass('is-visible')

			for (let i = current; i < current + slick.options.slidesToShow; i++) {
				$('.news__slider .slick-slide[data-slick-index="' + i + '"]').addClass(
					'is-visible'
				)
			}
		}
	)

	$('.news__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: false,
		adaptiveHeight: true,
		prevArrow:
			'<button type="button" class="news-arrow news-arrow--prev"><img src="./images/news-arrow.svg"></button>',
		nextArrow:
			'<button type="button" class="news-arrow news-arrow--next"><img src="./images/news-arrow.svg"></button>',

		responsive: [
			{
				breakpoint: 968,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
	
})




