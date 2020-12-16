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
