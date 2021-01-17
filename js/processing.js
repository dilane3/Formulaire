// ce fichier permettra de traiter les informations envoye par l'utilisateur


var users = [
	{login: "dilane", password: "1234"},
	{login: "danilix", password: "1235"},
	{login: "raissa", password: "1236"},
	// tu pourras ajouter d'autres
]

//document.write(users[1].login);

// TO DO: il faudra gerer l'evenement de clique sur le button valider avant toute action

let button = document.getElementById('button-id');
let login = document.getElementById('login-id');
let passWord = document.getElementById('password-id');

let loginError = document.getElementById('loginError');
let passWordError = document.getElementById('passWordError');

button.addEventListener('click', f_valid);

function f_valid(e)
{
	if (login.value == '' && passWord.value == '')
	{
		e.preventDefault();
		loginError.innerHTML = "Ce champs est obligatoire!";
		loginError.style.color = "red";
		passWordError.innerHTML = "Ce champs est obligatoire!";
		passWordError.style.color = "red";
	}
	else if(login.value == '')
	{
		e.preventDefault();
		loginError.innerHTML = "ce champs est obligatoire!"
		loginError.style.color = "red";
	}
	else if(passWord.value == '')
	{
		e.preventDefault();
		passWordError.innerHTML = "Ce champs est obligatoire!"
		passWordError.style.color = "red";
	}
	else
	{
		let testeur =0;
		for(let i=0; i<users.length; ++i)
		{
			if(login.value == users[i].login && passWord.value == users[i].password)
			{
				alert(login.value + "  vous etes connecté....");
				break;
			}
			testeur +=1;
		}

		if(testeur == users.length)
		{
			e.preventDefault();
			loginError.innerHTML = "Le login ou mot de pass est incorect, essayez a nouveau";
			loginError.style.color = "red";
			passWordError.innerHTML = "Le login ou mot de pass est incorect, essayez a nouveau";
			passWordError.style.color = "red";

		}
	}
}


























