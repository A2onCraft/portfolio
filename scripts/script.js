if(window.innerWidth > 720){
	$('.js-tilt-scale').tilt({
		scale: 1.1
	});
}

if(window.innerWidth > 720){
	$('.js-tilt').tilt();
}

$(document).ready(function() {
	const divCible = $('#confetti');

	let isMouseDown = false;
	let lastSpawnTime = 0;
	let spawnInterval;

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function randomColor(colors) {
		return colors[Math.floor(Math.random() * colors.length)];
	}

	function generateConfetti(e) {
		const currentTime = Date.now();
		const timeSinceLastSpawn = currentTime - lastSpawnTime;
		const cooldown = 30;

		if (timeSinceLastSpawn < cooldown) {
			return;
		}

		lastSpawnTime = currentTime;

		const confettiCount = getRandomInt(2, 6);
		const colors = ['#36A6FF', '#53C0EC', '#FFFFFF'];

		for (let i = 0; i < confettiCount; i++) {
			const confetti = $('<div class="confetti"></div>');

			const clickX = e.clientX + $(window).scrollLeft();
			const clickY = e.clientY + $(window).scrollTop();

			confetti.css({
				left: clickX + 'px',
				top: clickY + 'px',
				backgroundColor: randomColor(colors)
			});

			$('body').append(confetti);

			const speed = getRandomInt(50, 100);
			const angle = getRandomInt(0, 360);

			const radians = angle * (Math.PI / 180);

			const vx = Math.cos(radians) * speed;
			const vy = Math.sin(radians) * speed;

			confetti.animate(
			{
				top: `+=${vy}px`,
				left: `+=${vx}px`,
				opacity: 0
			},
			1000,
			function() {
				confetti.remove();
			}
			);
		}
	}

	divCible.on('mousedown', function(e) {
		isMouseDown = true;
		spawnInterval = setInterval(function() {
			if (isMouseDown) {
				generateConfetti(e);
			}
		}, 100);
	});

	divCible.on('mouseup', function() {
		isMouseDown = false;
		clearInterval(spawnInterval);
	});

	divCible.on('mouseleave', function() {
		isMouseDown = false;
		clearInterval(spawnInterval);
	});

	divCible.on('mousemove', function(e) {
		if (isMouseDown) {
			generateConfetti(e);
		}
	});

	$('.email').click(function() {
		event.preventDefault();
		window.location.href = 'mailto:' + atob('YW50b2luZWRpb24wNjA2QGdtYWlsLmNvbQ==');
	});
});

/*{
	title: "Tati",
	tags: ["Refonte"],
	date: "2022-03-01",
	description: "Tati, une icône du bazar bon marché était le sujet notre rebranding pour relancer et moderniser l’image de marque",
	link: "tati.html",
	etat: "actif"
},*/

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
	title: "Étais La Sauvin",
	tags: ["Développement Web"],
	date: "2021-06-06",
	description: "A l'occasion d'un projet de fin d'année, la mairie d’Étais la Sauvin nous a proposé de leur créer un site web pour l'occasion",
	link: "etais-la-sauvin.html",
	etat: "inactif"
},
{
	title: "PicWicToys",
	tags: ["Refonte", "UX Design"],
	date: "2022-06-15",
	description: "Un projet phygital alliant gamification pour les enfants et la facilité d'accès pour les parents lors des courses",
	link: "picwictoys.html",
	etat: "inactif"
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
	title: "Netflix",
	tags: ["Refonte", "UX Design"],
	date: "2023-02-10",
	description: "Une refonte Netflix en proposant un côté plus communautaire",
	link: "netflix.html",
	etat: "inactif"
},
{
	title: "Petit Futé",
	tags: ["Refonte", "UX Design", "UI Design", "Développement Web"],
	date: "2099-01-10",
	description: "Étant webmaster à Petit Futé, j'ai eu l'occasion de travailler sur une multitude de projets concernant l'UX, l'UI et le développement web",
	link: "petitfute.html",
	etat: "inactif"
},
{
	title: "Sliming Away",
	tags: ["UX Design", "Jeu Vidéo"],
	date: "2023-07-13",
	description: "Sliming Away est un jeu foddian game où le but est d'arriver à la sortie le plus vite possible avec comme seul mouvement : le saut",
	link: "sliming-away.html",
	etat: "actif"
},
{
	title: "RobberGame",
	tags: ["UX Design", "Jeu Vidéo"],
	date: "2023-10-01",
	description: "RobberGame est un concept de jeu qui s'inspire du jeu \"The Very Organized Thief\" créé avec KiroTheBlueFox",
	link: "robbergame.html",
	etat: "actif"
},
{
	title: "Dis-Le",
	tags: ["UX Design", "UI Design"],
	date: "2023-10-06",
	description: "Dis-Le est le projet vainqueur du Hackathon 2023 de #SupDeWeb et qui lutte contre le harcèlement scolaire",
	link: "dis-le.html",
	etat: "actif"
}
];

function filterProjectsByTagAndDate(projects, tag) {
	let filteredProjects;

	if(tag == "Tous les projets"){
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

$(".filter-button").on("click", function() {
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

	if(regexPatternPage = /pages\/projets\.html/){
		if (regexPatternPage.test(url)){
			return 'pages';
		}
	}

	if(regexPatternPage = /index.html/){
		if (regexPatternPage.test(url)){
			return 'index';
		}
	}

	if(regexPatternPage = /pages\//){
		if (regexPatternPage.test(url)){
			return 'pages/';
		}
	}
}

$(document).ready(function() {
	const currentURL = window.location.href;

	let currentYear = new Date().getFullYear();
	$("#copyright span").text("Antoine DION");
	$("#copyright").append(" © " + currentYear);

	let headerMobile = $('.mobile-header');

	window.addEventListener('scroll', function() {
		let maxWidth = 728;
		let header = $('header');
		
		let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

		if (window.innerWidth <= maxWidth && scrollPosition > 0) {
			header[0].classList.add('scrolled');
			headerMobile.css('top','60px');
		} else {
			header[0].classList.remove('scrolled');
			headerMobile.css('top','100px');
		}
	});

	headerMobile.hide();

	if(window.innerWidth > 720){
		$('#burgerMenu').hide();
	}

	$(window).resize(function() {
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

	$('#burgerMenu').click(function(){
		if(headerMobile.is(':hidden')){
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

			paramsPairs.forEach(function(pair) {
				let keyValue = pair.split("=");
				let key = keyValue[0];
				let value = keyValue[1];

				if(key == 'filter'){
					switch(value){
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
			loop: true,
			center: true,
			margin: 16,
			lazyLoad: true,
			dots: true,
			responsive: {
				0: {
					items:2
				},
				600: {
					items:3
				},
				1000: {
					items:5
				}
			}
		});
	}
});