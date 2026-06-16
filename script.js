const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const continueBtn = document.getElementById("continueBtn");

const fotoPrincipal = document.getElementById("fotoPrincipal");
const introScreen = document.getElementById("introScreen");
const mainContent = document.getElementById("mainContent");

const fotos = [
    "fotoflor.jpg",
    "foto1.jpg",
    "foto2.jpg",
    "gato1.jpg",
    "gorda.jpg",
    "djvan.jpg",
    "emoji.jpg"
];

let fotoAtual = 0;
let scale = 1;
let contador = 0;
let popupMostrado = false;

const frases = [
    "Acho que você clicou errado Carol",
    "Todo mundo erra!",
    "Não é possível Carol!!!",
    "Se você clicar aqui de volta, vai ver só",
    "Não vai se perder outra vez nesse desespero🎶",
    "Você nem enxerga mais o botão cara"
];

continueBtn.addEventListener("click", () => {
    introScreen.style.display = "none";
    mainContent.style.display = "block";
});

noBtn.addEventListener("click", () => {

    fotoAtual++;

    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }

    fotoPrincipal.src = fotos[fotoAtual];

    scale += 0.2;
    yesBtn.style.transform = `scale(${scale})`;

    noBtn.innerText = frases[contador % frases.length];

    contador++;

    if (contador === 3 && !popupMostrado) {
        popupMostrado = true;
        mostrarConvencimento();
    }
});

yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `
        <div class="success">
            <h1>Que bom que aceitou de primeira😍</h1>

            <p>
                Por favor, escolha uma que você esteja disponível
            </p>

            <br>

            <input
                type="date"
                id="meetingDate"
                class="date-input">

            <br><br>

            <button id="confirmDate" class="yes">
                Pronto Cabeção
            </button>
        </div>
    `;

    document
        .getElementById("confirmDate")
        .addEventListener("click", confirmarData);
});

function confirmarData() {

    const data = document.getElementById("meetingDate").value;

    if (!data) {
        alert("Por favor, escolha uma data que você esteja disponível");
        return;
    }

    const dataFormatada =
        new Date(data).toLocaleDateString("pt-BR");

    document.body.innerHTML = `
        <div class="success">
            <h1> Date marcado, espero que tenha gostado!</h1>

            <p>
                Nosso date será dia
                <strong>${dataFormatada}</strong>
            </p>

            <p>
                já pode ficar ansioso?
            </p>
        </div>
    `;

    criarCoracoes();
}

function criarCoracoes() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * window.innerWidth + "px";

        heart.style.top =
            window.innerHeight + "px";

        heart.style.fontSize =
            (20 + Math.random() * 40) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);

    }, 200);
}

function mostrarConvencimento() {

    const popup = document.createElement("div");

    popup.classList.add("popup");

    popup.innerHTML = `
        <div class="popup-content">

            <h2>Talvez eu precise te convencer...</h2>

            <p>
                Cabelos castanhos <br><br>

                Olhos pretos <br><br>

                Todos os dentes na boca 😁<br><br>

                Tento cozinhar,
                fome você não passa 🍝<br><br>

                Faço você rir
                (ou quase) <br><br>

                Jogo Clash Royale há 9 anos 🤓<br><br>

                Se não abandonei esse jogo até agora,
                imagina você então <br><br>

                Estou fazendo literalmente um site
                para você...<br><br>

                Dá uma chance,
                desgraça 🥰
            </p>

            <button id="fecharPopup">
                Espero ter conseguido 👺
            </button>

        </div>
    `;

    document.body.appendChild(popup);

    document
        .getElementById("fecharPopup")
        .addEventListener("click", () => {
            popup.remove();
        });
}
