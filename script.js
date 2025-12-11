document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const opcs = document.getElementById("opcs");

    btn.addEventListener("click", () => {
        const atual = getComputedStyle(opcs).display;
        opcs.style.display = atual === "none" ? "flex" : "none";
    });
});

