document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openButton");
    const closeButton = document.getElementById("closeButton");
    const overlay = document.getElementById("overlay");

    openButton.addEventListener("click", function () {
        overlay.classList.add("is-open");
    });

    closeButton.addEventListener("click", function () {
        overlay.classList.remove("is-open")
    });
});