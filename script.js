document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const opcs = document.getElementById("opcs");

    btn.addEventListener("click", () => {
        opcs.style.display = opcs.style.display === "none" ? "flex" : "none";
    });
});
