function CriarTopico() {
    var introducaoantes = document.getElementById("introducao-antes");
    var introducaodepois = documento.getElementById("introducao-depois");
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
