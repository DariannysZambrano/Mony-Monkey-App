const btnOpenWimdow = document.getElementById("Open-window")
const btnCloseWindow = document.getElementById("Close-Window")
const Open_window = document.getElementById("Window")

btnOpenWimdow.addEventListener("click", () => {
    Open_window.showModal();
});

btnCloseWindow.addEventListener("click", () => {
    Open_window.close();
});