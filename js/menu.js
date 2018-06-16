// Lance la fonction quand on scroll
window.addEventListener( "scroll" , scrollmenu);

// Lance la fonction quand on réduit la taille du browser
window.addEventListener( "resize", scrollmenu);


// Fonction pour le menu
function scrollmenu()
{
	// On va chercher dans le css le ".navbar"
	var navbar = document.querySelector(".navbar");

	// On prend la valeur de la position ou l'on se trouve dans la page
	var y = window.scrollY;

	// On va chercher dans le css tout les "..navcontent__item__link" pour en faire un tableau
	var links = document.querySelectorAll('.navcontent__item__link');

	// Le menu n'apparait qu'à partir d'un certains moment
	if(y >= 950)
	{
		// On ajoute un css à l'élément .navbar
		navbar.classList.add('js__navbar--fixed');

		// Ajout ou Retrait du css par rapport ou l'on se trouve dans la page
		for (var j = 0; j < links.length; j++) {
            links[j].classList.remove('navcontent__item__link--active');
		}
		links[1].classList.add('navcontent__item__link--active');
		if(y >= 2033)
		{
			links[1].classList.remove('navcontent__item__link--active');
			links[2].classList.add('navcontent__item__link--active');
		}

		// La navbar ne s'affichera plus au delà de cette valeur
		if(y >= 3183)
		{
			navbar.classList.remove('js__navbar--fixed');
		}
	}else{
		navbar.classList.remove('js__navbar--fixed');
		for (var j = 0; j < links.length; j++) {
            links[j].classList.remove('navcontent__item__link--active');
		}
		links[0].classList.add('navcontent__item__link--active');
	}
}