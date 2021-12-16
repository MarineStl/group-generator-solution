

function addParticipant (event)
{
// j'empêche le fonctionnement par défaut du bouton pour éviter de recharger la page
event.preventDefault();

//je récupère l'input du participant
const nameInputElt = document.getElementById('nameInput');
// alternative pour récupérer l'inpiut à partir de son name
//const nameInputElt2 = document.querySelecto('input[name="nameInput"]');


// je créee mon prénom
const participantName = nameInputElt.value.trim();


//si le nom est vide, j'affiche un message d'erreur
if (participantName === '') {
    alert('Le nom est obligatoire');
    return;
}

// je crée un élément li qui contient mon prénom
const participantElt = `
<li>${participantName}</li>
`;
// je récupère l'élément ul qui contient la liste des participants
const participantListElt = document.getElementById("participantList");
// j'ajoute mon élément li à l'élément ul
participantListElt.innerHTML = participantListElt.innerHTML + participantElt;

// je vide l'input nameInput
nameInputElt.value="";
}

// je récupère le formulaire d'ajout de nom
const addNameFormElt = document.getElementById("addNameform");
// quand je soumets le formulaire je veux que la fonction addParticipant soit appelée

addNameFormElt.addEventListener("submit" , addParticipant) ;