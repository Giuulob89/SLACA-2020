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