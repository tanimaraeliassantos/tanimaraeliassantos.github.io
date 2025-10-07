document.addEventListener('DOMContentLoaded', function (event) {
	// =======================================================
	// Menu Hamburguer
	// =======================================================
	const hamburgerCheckbox = document.querySelector(
		'.hamburger-menu input[type="checkbox"]'
	);
	const links = document.querySelectorAll('.sidebar .link');

	function closeMenu() {
		hamburgerCheckbox.checked = false;
	}

	links.forEach((link) => {
		link.addEventListener('click', closeMenu);
	});

	// =======================================================
	// Overlays
	// =======================================================
	const projectSlides = document.querySelectorAll('.carouselSlide');

	projectSlides.forEach((slide) => {
		const image = slide.querySelector('img');
		const overlay = slide.querySelector('[class^="overlay"]');
		const closeButton = slide.querySelector('[class^="closeOverlay"]');

		if (image && overlay && closeButton) {
			// Usar 'image' para abrir
			image.addEventListener('click', () => {
				overlay.classList.add('active');
			});

			// Usar 'closeButton' para cerrar
			closeButton.addEventListener('click', () => {
				overlay.classList.remove('active');
			});
		}
	});

	// =======================================================
	// Carousel
	// =======================================================

	jQuery(document).ready(function ($) {
		const owl = $('.carouselTrack').owlCarousel({
			center: true,
			items: 2,
			loop: true,
			margin: 10,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
			},
		});

		$('.projectsCarousel .carouselButton:first-child').on('click', function () {
			owl.trigger('prev.owl.carousel');
		});
		$('.projectsCarousel .carouselButton:last-child').on('click', function () {
			owl.trigger('next.owl.carousel');
		});
	});

	// =======================================================
	// Scroll
	// =======================================================
	let mybutton = document.getElementById('myBtn');

	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			mybutton.style.display = 'block';
		} else {
			mybutton.style.display = 'none';
		}
	}

	// topFunction debe ser global para el atributo onclick en HTML
	window.topFunction = function () {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	// =======================================================
	// AOS
	// =======================================================
	AOS.init();
});
