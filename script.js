const toggleButton = document.createElement("button");
toggleButton.innerText = "Modo Escuro";
toggleButton.style.position = "fixed";
toggleButton.style.top = "10px";
toggleButton.style.right = "10px";
toggleButton.style.padding = "10px";
toggleButton.style.cursor = "pointer";

document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.innerText = document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Escuro";
});

// Adicionando estilos para o modo escuro
const style = document.createElement("style");
style.innerHTML = `
    .dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
`;
document.head.appendChild(style);

const texto = "Meu Portfólio";
const titulo = document.querySelector("h1"); // Altere para o seletor correto do seu título
let index = 0;

function escreverTexto() {
    if (index < texto.length) {
        titulo.innerHTML += texto.charAt(index);
        index++;
        setTimeout(escreverTexto, 150);
    }
}

titulo.innerHTML = ""; // Limpa o título antes de começar
escreverTexto();

particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true, opacity: 0.5 },
        color: { value: "#3B82F6" }
    }
});
