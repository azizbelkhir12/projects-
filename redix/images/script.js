function login() {
    //recuperation des donnnées
    var email = getElementById("emailLogin");
    var password = getElementById("passwordLogin");
    //recuperer tous les utililasateurs déja enregistrés
    var usersTab = getTabFromLsByKey("users");
    var findedUser;
    for (var i = 0; i < usersTab.length; i++) {
        if ((usersTab[i].email == email) && (usersTab[i].pwd == password)) {
            findedUser = usersTab[i];
            break;
        }
    }
    //l'utilisateur est bien trouvé
    if ((findedUser)) {
        if (findedUser.role == "client") {
            localStorage.setItem("connectedUser", JSON.stringify(findedUser.id));
            location.replace("index.html");

        } 
        } else {
            //le propriétaire est  vérifié
            document.getElementById("login Error").innerHTML = "";
            localStorage.setItem("connectedUser", JSON.stringify(findedUser.id));
            location.replace("admin.html");
        
        //l'utilisateur n'est pas trouvé
    } else {
        //affichage d'un msg d'erreur en cas ou l'utilisateur soit non trouvé ou donnée erronée
        document.getElementById("login Error").innerHTML = "";

        document.getElementById("login Error").innerHTML = "incorrect login";
        document.getElementById("login Error").style.color = "#f2b0a5";


    }
}
