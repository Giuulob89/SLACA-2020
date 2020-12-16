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