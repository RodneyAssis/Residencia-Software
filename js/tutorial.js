function abrirModal() {
    const modal = document.getElementById("janela-modal")
    modal.classList.add("abrir")

    if (modal.style.display === "none") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
}
