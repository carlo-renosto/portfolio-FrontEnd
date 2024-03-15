
// Mostrar la pagina al salir del login
function showElements() {
    var sectionMain = document.getElementById("section-main");
    var sectionRoot = document.getElementById("root");
    var sectionLogin = document.getElementById("section-login");

    if(sectionMain != null) {
        sectionMain.classList.remove("section-main-hide");
        sectionMain.classList.add("section-main");
    }
    if(sectionRoot != null) {
        sectionRoot.style.display = "block";
    }
    if(sectionLogin != null) {
        sectionLogin.style.display = "none";
    }
     
    changeLogin();
}

function showLogin() {
    var sectionMain = document.getElementById("section-main");
    var sectionRoot = document.getElementById("root");
    var sectionLogin = document.getElementById("section-login");

    if(sectionMain != null) {
        sectionMain.classList.remove("section-main");
        sectionMain.classList.add("section-main-hide");
    }
    if(sectionRoot != null) {
        sectionRoot.style.display = "none";
    }
    if(sectionLogin != null) {
        sectionLogin.style.display = "block";
    }    
}

function changeLogin() {
    var buttonLogin = document.getElementById("header-login");

    if(buttonLogin != null) {
        if(localStorage.getItem('login') == '1') {
            changeLoginButton(buttonLogin, "login", "logout", "Log out");
            changeEditButtons("initial");
            changeViewButtons("initial");
        }
        else {
            changeLoginButton(buttonLogin, "logout", "login", "Log in");
            changeEditButtons("none");
            changeViewButtons("none");
        }
    }  
}

// Cambiar el estilo del boton login (login o logout)
function changeLoginButton(buttonLogin: HTMLElement, classAdd: string, classRemove: string, elementText: string) {
    buttonLogin.classList.remove(classRemove);
    buttonLogin.classList.add(classAdd);
    buttonLogin.textContent = elementText;
}

// Cambiar el estado de los botones editar-eliminar (visibles u ocultos)
function changeEditButtons(display: string) {
    var buttonEdit = document.getElementsByClassName("btn-edit") as HTMLCollectionOf<HTMLElement>;
    var buttonEditS = document.getElementsByClassName("btn-edit-skill") as HTMLCollectionOf<HTMLElement>;
    var buttonEditP = document.getElementsByClassName("btn-edit-project") as HTMLCollectionOf<HTMLElement>;

    if(buttonEdit != null) {
        for(var i=0, length=buttonEdit.length; i<length; i++) {
            buttonEdit[i].style["display"] = display;
        }
    }
    if(buttonEditS != null) {
        for(var i=0, length=buttonEditS.length; i<length; i++) {
            if(display == "initial") {
                buttonEditS[i].style["display"] = "inline-block";
            }
            else {
                buttonEditS[i].style["display"] = display;
            }
            
        }
    }
    if(buttonEditP != null) {
        for(var i=0, length=buttonEditP.length; i<length; i++) {
            buttonEditP[i].style["display"] = display;
        }
    }
}

// Cambiar el estado de los botones mostrar-ocultar (visibles u ocultos)
function changeViewButtons(display: string) {
    var buttonShow = document.getElementById("button-show");
    var buttonHide = document.getElementById("button-hide");

    if(buttonShow != null && buttonHide != null) {
        buttonShow.style.display = display;
        buttonHide.style.display = display;
    }
}

export default { showElements, showLogin, changeEditButtons };