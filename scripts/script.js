const currentURL = window.location.pathname;

const projects = [
	{
		title: "Nomade",
		tags: ["UX Design", "UI Design"],
		date: "2022-10-01",
		description: "Nomade est une application de voyage humanitaire proposée lors du hackathon 2022 de #SupDeWeb, sur le thème du voyage \"original\"",
		link: "nomade.html",
		etat: "actif"
	},
	{
		title: "CloseMe",
		tags: ["UX Design", "UI Design"],
		date: "2022-09-01",
		description: "CloseMe est un concept d’application de rencontre qui se base sur la proximité",
		link: "closeme.html",
		etat: "actif"
	},
	{
		title: "The Wokies",
		tags: ["Refonte"],
		date: "2022-06-15",
		description: "The Wokies est un site B2B qui propose des solutions de teambuilding à la sensibilisation RSE",
		link: "the-wokies.html",
		etat: "actif"
	},
	{
		title: "Luna",
		tags: ["UX Design", "UI Design", "Développement Web"],
		date: "2022-01-01",
		description: "Luna est une application pour accompagner l’utilisateur sur sa consommation d’eau quotidienne",
		link: "luna.html",
		etat: "actif"
	},
	{
		title: "Pawsome",
		tags: ["UX Design", "UI Design"],
		date: "2023-03-01",
		description: "Pawsome est une application de réseau social spécialisé sur les animaux. Son processus de création était le design sprint",
		link: "pawsome.html",
		etat: "actif"
	},
	{
		title: "France Coquine",
		tags: ["Refonte", "UX Design", "UI Design", "Développement Web"],
		date: "2022-11-01",
		description: "France Coquine est un site d’article sur le thème du libertinage appartenant à Petit Futé",
		link: "france-coquine.html",
		etat: "actif"
	},
	{
		title: "BlockchainyourIP",
		tags: ["Refonte", "UX Design", "UI Design"],
		date: "2023-04-03",
		description: "BlockchainyourIP est une entreprise B2B qui propose d’utiliser la technologie de blockchain pour protéger ses données",
		link: "blockchainyoutip.html",
		etat: "actif"
	},
	{
		title: "Petit Futé",
		tags: ["Refonte", "UX Design", "UI Design", "Développement Web"],
		date: "2099-01-10",
		description: "Étant UX/UI Designer & Développeur Web à Petit Futé, j'ai eu l'occasion de travailler sur une multitude de projets concernant ces points",
		link: "petitfute.html",
		etat: "inactif"
	},
	{
		title: "Dis-Le",
		tags: ["UX Design", "UI Design"],
		date: "2023-10-06",
		description: "Dis-Le est le projet vainqueur du Hackathon 2023 de #SupDeWeb et qui lutte contre le harcèlement scolaire",
		link: "dis-le.html",
		etat: "actif"
	},
	{
		title: "Restitched",
		tags: ["Refonte", "UI Design"],
		date: "2023-12-04",
		description: "Restitched est un jeu créé par Trixel Creative. Ce projet non officiel à pour but la refonte de sa landing page en design émotionnel",
		link: "restitched.html",
		etat: "actif"
	},
	{
		title: "Sauveurs de Saveurs",
		tags: ["Refonte", "UX Design", "UI Design"],
		date: "2024-01-12",
		description: "Sauveurs de Saveurs est une entreprise qui propose des confitures anti-gaspi qui a souhaité une refonte design et stratégie de communication",
		link: "sauveurs-de-saveurs.html",
		etat: "actif"
	}
];


/*
	{
		title: "PicWicToys",
		tags: ["Refonte", "UX Design"],
		date: "2022-06-15",
		description: "Un projet phygital alliant gamification pour les enfants et la facilité d'accès pour les parents lors des courses",
		link: "picwictoys.html",
		etat: "inactif"
	},
	{
		title: "Sliming Away",
		tags: ["UX Design", "Jeu Vidéo"],
		date: "2023-07-13",
		description: "Sliming Away est un jeu foddian game où le but est d'arriver à la sortie le plus vite possible avec comme seul mouvement : le saut",
		link: "sliming-away.html",
		etat: "inactif"
	},
*/

if (window.innerWidth > 720) {
	$('.js-tilt-scale').tilt({
		scale: 1.1,
	});
}

if (window.innerWidth > 720) {
	$('.js-tilt').tilt();
}

$(document).ready(function () {
	$('.email').click(function () {
		event.preventDefault();
		window.location.href = 'mailto:' + atob('YW50b2luZWRpb24wNjA2QGdtYWlsLmNvbQ==');
	});
});

function filterProjectsByTagAndDate(projects, tag) {
	let filteredProjects;

	if (tag == "Tous les projets") {
		filteredProjects = projects;
	} else {
		filteredProjects = projects.filter(project => project.tags.includes(tag));
	}

	return filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function displayProjects(projects) {
	const projectContainer = $("#project-container");
	projectContainer.empty(); // Clear previous projects
	let delay = 0;

	projects.forEach(project => {
		let projectElement = $("<div>").addClass("card");

		if (window.innerWidth > 720) {
			projectElement.addClass("js-tilt-scale");
		}

		projectElement.attr('data-aos', 'zoom-in-up');
		projectElement.attr('data-aos-delay', delay);
		delay += 50;

		if (delay % 300 == 0) {
			delay = 0;
		}

		let anchorElement;
		let imgElement = $("<div>").addClass("img-show").addClass(project.title.toLowerCase().replace(/\s/g, '-'));

		let soonSpan = $('<div class="inactif-soon"><span>Bientôt...</span></div>');

		if (project.etat == "inactif") {
			imgElement.append(soonSpan);
			anchorElement = projectElement;
		} else {
			anchorElement = $("<a>").attr("href", project.link);
		}

		const textElement = $("<div>").addClass("text");
		const titleElement = $("<div>").addClass("title");
		const projectTitle = $("<h3>").text(project.title);
		const tagsElement = project.tags.map(tag => $("<span>").addClass("pastille").addClass(tag.toLowerCase().replace(/\s/g, '-')).text(tag));
		const descriptionElement = $("<p>").text(project.description);

		titleElement.append(projectTitle, tagsElement);
		textElement.append(titleElement, descriptionElement);
		anchorElement.append(imgElement, textElement);
		projectElement.append(anchorElement);
		projectContainer.append(projectElement);

		if (project.etat != "inactif") {
			projectElement.addClass("actif");
		} else {
			projectElement.addClass("inactif");
		}

		AOS.refresh();

		if (window.innerWidth > 720) {
			$('.js-tilt-scale').tilt({
				scale: 1.1
			});
		}
	});
}

$(".filter-button").on("click", function () {
	const selectedTag = $(this).data("tag");

	let btn = $(this);

	if (btn.hasClass('btn-secondary')) {
		$(".filter-button").addClass('btn-secondary').removeClass('btn-primary');
		btn.removeClass('btn-secondary');
		btn.addClass('btn-primary');
	}

	const filteredProjects = filterProjectsByTagAndDate(projects, selectedTag);
	displayProjects(filteredProjects);
});

function URL(url) {
	let regexPatternPage;

	if (regexPatternPage = /pages\/projets\.html/) {
		if (regexPatternPage.test(url)) {
			return 'pages';
		}
	}

	if (regexPatternPage = /index.html/) {
		if (regexPatternPage.test(url)) {
			return 'index';
		}
	}

	if (regexPatternPage = /pages\//) {
		if (regexPatternPage.test(url)) {
			return 'pages/';
		}
	}
}

$(document).ready(function () {
	let currentYear = new Date().getFullYear();
	$("#copyright span").text("Antoine DION");
	$("#copyright").append(" © " + currentYear);

	let headerMobile = $('.mobile-header');

	window.addEventListener('scroll', function () {
		let maxWidth = 728;
		let header = $('header');

		let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

		if (window.innerWidth <= maxWidth && scrollPosition > 0) {
			header[0].classList.add('scrolled');
			headerMobile.css('top', '60px');
		} else {
			header[0].classList.remove('scrolled');
			headerMobile.css('top', '100px');
		}
	});

	headerMobile.hide();

	if (window.innerWidth > 720) {
		$('#burgerMenu').hide();
	}

	$(window).resize(function () {
		if (window.innerWidth > 720) {
			$('#burgerMenu').hide();
		} else {
			$('#burgerMenu').show();
		}
	});

	let srcCross = 'assets/Cross.png';
	let srcBurger = 'assets/Burger.png';

	if (URL(currentURL) != 'index') {
		srcCross = '../assets/Cross.png';
		srcBurger = '../assets/Burger.png';
	}

	$('#burgerMenu').click(function () {
		if (headerMobile.is(':hidden')) {
			$('#burgerMenu img').attr("src", srcCross);
			headerMobile.slideDown(300);
			headerMobile.show();
		} else {
			$('#burgerMenu img').attr("src", srcBurger);
			headerMobile.slideUp(300);
		}
	});



	if (URL(currentURL) == 'pages') {
		let paramsSection = currentURL.split("?")[1];
		let selectedTag = "Tous les projets"

		if (paramsSection) {
			let paramsPairs = paramsSection.split("&");

			paramsPairs.forEach(function (pair) {
				let keyValue = pair.split("=");
				let key = keyValue[0];
				let value = keyValue[1];

				if (key == 'filter') {
					switch (value) {
					case "UX_Design":
						selectedTag = 'UX Design';
						break;

					case "UI_Design":
						selectedTag = 'UI Design';
						break;

					case "Refonte":
						selectedTag = 'Refonte';
						break;

					case "Developpement_web":
						selectedTag = 'Développement Web';
						break;

					case "Jeu_video":
						selectedTag = 'Jeu Vidéo';
						break;


					default:
						break;
					}
				}
			});
		}

		let filteredProjects = filterProjectsByTagAndDate(projects, selectedTag);
		displayProjects(filteredProjects);
	}

	if (URL(currentURL) == 'pages/') {
		$(".owl-carousel").owlCarousel({
			margin: 16,
			lazyLoad: true,
			dots: true,
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 3
				}
			}
		});
	}

	if (URL(currentURL) == 'pages/') {
		const fancyboxScript = document.createElement('script');
		fancyboxScript.src = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js';

		fancyboxScript.onload = function () {
			Fancybox.bind();

			const imagesInMain = document.querySelectorAll('.main.project img:not(.header-img img):not(.retour img):not(img.no-fancybox)');

			imagesInMain.forEach(image => {
				image.setAttribute('data-fancybox', 'gallery');
			});
		};

		const fancyboxCssLink = document.createElement('link');
		fancyboxCssLink.rel = 'stylesheet';
		fancyboxCssLink.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css';

		document.head.appendChild(fancyboxCssLink);
		document.head.appendChild(fancyboxScript);
	}

	document.querySelectorAll('.scroll').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				const offset = 116;
				const elementPosition = targetElement.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.scrollY - offset;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});
			}
		});
	});

	if (URL(currentURL) == 'pages/') {
		const elements = document.querySelectorAll('.random-hue');

		elements.forEach(element => {
			// Générer une valeur de teinte aléatoire entre 0 et 360 degrés
			const randomHue = Math.floor(Math.random() * 360);

			// Appliquer le filtre hue-rotate avec la valeur générée
			element.style.filter = `hue-rotate(${randomHue}deg)`;
		});
	}
});