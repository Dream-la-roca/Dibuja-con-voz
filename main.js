function setup() {
    canvas = createCanvas(screen.width, 500);
    background("green");
}

var voz = window.webkitSpeechRecognition;
var comando = new voz();
comando.lang = "es-MX";
var texto = "";

function iniciar() {
    comando.start();
}

comando.onresult = function (resultado) {
    texto = resultado.results[0][0].transcript;
    document.getElementById("texto").innerHTML = texto;
}

function draw() {
    fill("red")
    switch (texto) {
        case "cuadrado":
            square(Math.random() * screen.width, Math.random() * 500, 100);
            texto = "";
            break;
        case "círculo":
            circle(Math.random() * screen.width, Math.random() * 500, 200);
            texto = "";
            break;
        case "borrar":
            background("green");
            break;
        case "manzana":
            image(manzana, Math.random() * screen.width, Math.random() * 500, 100, 100)
    }
}

function preload() {
    manzana = loadImage("https://i.postimg.cc/fy688rNX/apple.png");
}