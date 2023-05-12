function criptografar() {
    let texto = document.getElementById("texto").value;
    // let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");
    let textoCifrado = texto
      .replace(/e/gi, "entrar")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    titulo-mensagem.textContent = "Texto encriptado com êxito";
    paragrafo.textContent = "";
    document.getElementById("boneco").src = "./img/encriptado.jpg";
} else {
    boneco.src ="./img/boneco.png";
    tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
    paragrafo.textContent = "Insira o texto que deseja criptografar ou descriptografar";
    alert("Insira algum texto");
}
}


function descriptografar() {
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textoContent = "Texto descriptografado com êxito";
        paragrafo.textContent = "";
        boneco.src = "./img/descriptografado.jpg";
    } else {
        boneco.src ="./img/boneco.png";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Insira o texto que deseja criptografar ou descriptografar";
        alert("Insira algum texto");
    }
}