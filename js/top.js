// Lance la fonction quand on scroll
window.addEventListener( "scroll" , toparrow);

// Lance la fonction quand on réduit la taille du browser
window.addEventListener( "resize", toparrow);


// Fonction pour faire apparaitre la flèche pour remonter le document
function toparrow()
{
	// On va chercher dans le css le ".toparrow"
	var toparrow = document.querySelector(".toparrow");

	// On prend la valeur de la position ou l'on se trouve dans la page
	var y = window.scrollY;

	// La flèche n'apparait qu'à partir d'un certains moment
	if(y >= 552)
	{
		toparrow.classList.add('js__toparrow--display');
	}else{
		toparrow.classList.remove('js__toparrow--display');
	}
}