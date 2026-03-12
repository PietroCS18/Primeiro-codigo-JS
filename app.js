// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // selecionando elementos
    const root = document.documentElement;
    const btn = document.getElementById("btnTema");
    const ano = document.getElementById("ano")

    // preenchendo ano atual
    if (ano) {
        ano.textContent = new Date().getFullYear()
    }

    // tema light/dark
    if (btn) {
        btn.addEventListener("click", () => {
            const escuro = root.getAttribute("data-tema") === 'escuro'

            if (escuro) {
                root.removeAttribute("data-tema")
            } else {
                root.setAttribute("data-tema", "escuro")
            }
        })
    }
});