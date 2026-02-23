// 1. GLOBAL SCOPE (Must be accessible by the HTML buttons)
let translations = {};
let typedInstance = null;

// LANGUAGE SWITCHER
window.switchLanguage = function (lang) {
	if (!translations[lang]) return;

	// 1. Translate elements
	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const key = el.getAttribute('data-i18n');
		if (translations[lang][key]) {
			// Use innerHTML for the intro to support the <span> tags
			if (key === 'intro_p') {
				el.innerHTML = translations[lang][key];
			} else {
				el.textContent = translations[lang][key];
			}
		}
	});

	// 2. Update the Flag in the Navbar Button
	const flagImg = document.getElementById('current-flag');
	const flagMap = {
		en: 'https://flagcdn.com/w20/gb.png',
		es: 'https://flagcdn.com/w20/es.png',
		pt: 'https://flagcdn.com/w20/pt.png',
	};
	if (flagImg) flagImg.src = flagMap[lang];

	// 3. Update Typed.js
	updateTypedAnimation(lang);

	// 4. Persistence
	localStorage.setItem('prefLang', lang);
	document.documentElement.lang = lang;
};

// TYPED.JS LOGIC
function updateTypedAnimation(lang) {
	const stringsMap = {
		en: [' Tanimara.', ' a Developer.', ' a Programmer.', ' a Coder.'],
		es: [
			' Tanimara.',
			' una Desarrolladora.',
			' una Programadora.',
			' una Coder.',
		],
		pt: [
			' Tanimara.',
			' uma Desenvolvedora.',
			' uma Programadora.',
			' uma Coder.',
		],
	};

	if (typedInstance) {
		typedInstance.destroy();
	}

	const target = document.querySelector('#typed');
	// Ensure the library window.Typed exists and the target span exists
	if (target && typeof Typed !== 'undefined') {
		typedInstance = new Typed('#typed', {
			strings: stringsMap[lang] || stringsMap['en'],
			typeSpeed: 70,
			backSpeed: 70,
			loop: true,
		});
	}
}

// GITHUB API
async function fetchGitHubProjects() {
	const container = document.getElementById('github-projects-container');
	const username = 'tanimaraeliassantos';

	try {
		const response = await fetch(
			`https://api.github.com/users/${username}/repos?sort=updated`,
		);
		const repos = await response.json();

		let htmlContent = '';
		repos
			.filter((repo) => repo.description && repo.name !== username)
			.forEach((repo) => {
				htmlContent += `
                <li class="carouselSlide">
                    <div class="project-info">
                        <h3>${repo.name.replace(/-/g, ' ')}</h3>
                        <p>${repo.description}</p>
                        <div class="viewProject">
                            ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="button" data-i18n="view_live">view live</a>` : ''}
                            <a href="${repo.html_url}" target="_blank" class="button" data-i18n="github_btn">github</a>
                        </div>
                    </div>
                </li>`;
			});

		container.innerHTML = htmlContent;

		// Initialize Carousel
		$(container).owlCarousel({
			center: true,
			items: 2,
			loop: true,
			margin: 10,
			responsive: { 0: { items: 1 }, 600: { items: 2 } },
		});

		// Trigger translation again so the NEW GitHub buttons get translated
		const currentLang = localStorage.getItem('prefLang') || 'en';
		window.switchLanguage(currentLang);
	} catch (err) {
		console.error('GitHub Fetch Error:', err);
		container.innerHTML = '<p>Could not load projects at this time.</p>';
	}
}

// MAIN INITIALIZATION
document.addEventListener('DOMContentLoaded', async () => {
	// 1. Load translations
	try {
		const response = await fetch('./translations.json');
		translations = await response.json();

		// 2. DETECT LANGUAGE
		// Priority: 1. Saved in LocalStorage, 2. Browser Language, 3. Default 'en'
		const savedLang = localStorage.getItem('prefLang');
		const browserLang = navigator.language || navigator.userLanguage; // e.g., "en-US" or "pt-BR"
		const shortLang = browserLang.split('-')[0]; // Extract "en", "pt", or "es"

		let langToUse = 'en'; // Default fallback

		if (savedLang && translations[savedLang]) {
			langToUse = savedLang;
		} else if (translations[shortLang]) {
			langToUse = shortLang;
		}

		window.switchLanguage(langToUse);
	} catch (error) {
		console.error('Error loading translations:', error);
	}

	fetchGitHubProjects();
	if (typeof AOS !== 'undefined') AOS.init();
});

// Scroll Functionality
window.onscroll = function () {
	let mybutton = document.getElementById('myBtn');
	if (mybutton) {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			mybutton.style.display = 'block';
		} else {
			mybutton.style.display = 'none';
		}
	}
};

window.topFunction = function () {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};
