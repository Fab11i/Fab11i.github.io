const colorPrimario = ["Red", "Blue", "Yellow"];
const colorSecundario = ["Purple", "Green", "Orange"];
const colorTerciario = ["#FF8000", "#FFBF00", "#80FF00", "#00FF80", "#0080FF", "#8000FF"];

primario.addEventListener("click", function () {
    cambiarColor(colorPrimario);
});

secundario.addEventListener("click", function () {
    cambiarColor(colorSecundario);
});

terciario.addEventListener("click", function () {
    cambiarColor(colorTerciario);
});

reset.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
    color.innerHTML = "White";
});

function cambiarColor(arrayColores) {
    const randomNumber = getRandomNumber(arrayColores);
    document.body.style.backgroundColor = arrayColores[randomNumber];
    color.innerHTML = arrayColores[randomNumber];
}

function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
}
const color = document.querySelector(".color");
