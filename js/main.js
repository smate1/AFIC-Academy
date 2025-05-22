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
			{ breakpoint: 1350, settings: { slidesToShow: 4 } },
			{ breakpoint: 968, settings: { slidesToShow: 3 } },
			{ breakpoint: 768, settings: { slidesToShow: 2 } },
			{ breakpoint: 490, settings: { slidesToShow: 1 } },
		],
	})
})

// Burger menu toggle

document.addEventListener('DOMContentLoaded', function () {
	const burger = document.getElementById('burger')
	const header = document.getElementById('header')
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

// Counter animation

document.addEventListener('DOMContentLoaded', function () {
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
					observer.disconnect()
				}
			})
		},
		{ threshold: 0.5 }
	)

	const resultsSection = document.querySelector('.results')
	if (resultsSection) {
		observer.observe(resultsSection)
	}
})

// Accordion toggle

// Обробка кліку по таб-кнопках
document.querySelectorAll('.tab-button').forEach(button => {
	button.addEventListener('click', () => {
		if (button.classList.contains('buy')) {
			alert('Переход на покупку')
			return
		}

		document
			.querySelectorAll('.tab-button')
			.forEach(btn => btn.classList.remove('active'))
		button.classList.add('active')

		const index = button.getAttribute('data-index')
		const allItems = document.querySelectorAll('.accordion__item')

		allItems.forEach((item, i) => {
			const content = item.querySelector('.accordion__content')
			if (i == index) {
				item.classList.add('active')
				content.style.maxHeight = content.scrollHeight + 'px'
			} else {
				item.classList.remove('active')
				content.style.maxHeight = null
			}
		})
	})
})

// Додаємо можливість відкривати/закривати при кліку на .accordion__header
document.querySelectorAll('.accordion__header').forEach((header) => {
	header.addEventListener('click', () => {
		const item = header.closest('.accordion__item')
		const content = item.querySelector('.accordion__content')
		const isActive = item.classList.contains('active')

		if (isActive) {
			item.classList.remove('active')
			content.style.maxHeight = null
		} else {
			// Закриваємо всі інші
			document.querySelectorAll('.accordion__item').forEach(i => {
				i.classList.remove('active')
				i.querySelector('.accordion__content').style.maxHeight = null
			})

			// Відкриваємо поточний
			item.classList.add('active')
			content.style.maxHeight = content.scrollHeight + 'px'
		}
	})
})




// Professional button toggle

document
	.getElementById('professional-btn')
	?.addEventListener('click', function () {
		this.classList.toggle('active')
	})
	body.classList.toggle('no-scroll') // під час відкриття
	body.classList.remove('no-scroll') // під час закриття
	