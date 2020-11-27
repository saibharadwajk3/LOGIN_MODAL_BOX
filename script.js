openModel = document.getElementById("modalBtn");
model = document.getElementById("simpleModal");
closeModel = document.querySelector(".closeBtn");

openModel.addEventListener("click", () => {
    openModel.style.display = "none";
    model.style.display = "block";
});

closeModel.addEventListener("click", () => {
    openModel.style.display = "block";
    model.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == model) {
        model.style.display = "none";
    }
});