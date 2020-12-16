/*---------------Função Ver Mais---------------*/

function Vermais() {
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnVermais=document.getElementById("btn-ver-mais");

    if(pontos.style.display === "none") {
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnVermais.innerHTML="ver mais";
    }
    else {
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnVermais.style.display="none";
    }
}

/*---------------Função Criar Tópico---------------*/

function CriarTopico() {
    var introducaoantes = document.getElementById("introducao-antes");
    var introducaodepois = document.getElementById("introducao-depois");
    var btnCriarTopico = document.getElementById("btn-criar-topico");

    if (introducaoantes.style.display === "none") {
        introducaoantes.style.display = "inline";
        introducaodepois.style.display = "none";
        btnCriarTopico.innerHTML = "criar tópico";
    }
    else {
        introducaoantes.style.display = "none";
        introducaodepois.style.display = "inline";
        btnCriarTopico.style.display = "none";
    }
}

/*---------------Função Criar Novo Tópico---------------*/

function CriarNovoTopico() {
    var introducaoaposenvio = document.getElementById("introducao-apos-envio");
    var introducaodepois = document.getElementById("introducao-depois");
    var btnCriarTopico2 = document.getElementById("btn-criar-topico2");
    var btnEnviar = document.getElementById("btn-enviar");

    if (introducaoaposenvio.style.display === "none") {
        introducaoaposenvio.style.display = "inline";
        introducaodepois.style.display = "none";
        btnCriarTopico2.innerHTML = "criar tópico";
    }
    else {
        introducaoaposenvio.style.display = "none";
        introducaodepois.style.display = "inline";
        btnCriarTopico2.style.display = "none";
        btnEnviar.style.display="inline"
    }
}

/*---------------Função Enviar---------------*/

function Enviar() {
    var introducaodepois = document.getElementById("introducao-depois");
    var introducaoaposenvio = document.getElementById("introducao-apos-envio");
    var btnEnviar = document.getElementById("btn-enviar");
    var btnCriarTopico2 = document.getElementById("btn-criar-topico2");

    if(introducaodepois.style.display === "none") {
        introducaodepois.style.display = "inline"
        introducaoaposenvio.style.display = "none"
        btnEnviar.innerHTML = "Enviar"
    }
    else {
        introducaodepois.style.display = "none"
        introducaoaposenvio.style.display = "inline"
        btnEnviar.style.display = "none"
        btnCriarTopico2.style.display = "inline";
    }
}

/*---------------Função Expandir Card---------------*/

function ExpandirCard() {
    var card21 = document.getElementById("card2-1");
    var card22 = document.getElementById("card2-2");
    var clicarcard = document.getElementById("div-card2");

    if(card21.style.display === "none") {
        card21.style.display = "inline"
        card22.style.display = "none"
        clicarcard.style.display = "inline"
    }
    else {
        card21.style.display = "none"
        card22.style.display = "inline"
    }
}

/*---------------Função Retrair Card---------------*/

function RetrairCard() {
    var card21 = document.getElementById("card2-1");
    var card22 = document.getElementById("card2-2");
    var clicarcard = document.getElementById("div-card22");

    if(card22.style.display === "none") {
        card22.style.display = "inline"
        card21.style.display = "none"
        clicarcard.style.display = "inline"
    }
    else {
        card22.style.display = "none"
        card21.style.display = "inline"
    }
}