// definindo constantes
const canvasEl = document.querySelector("canvas"), 
      canvasCtx = canvasEl.getContext("2d");

// definindo variaveis
let linhaBranca = 15;

// função que inicia o canvas
function setup(params) {
    // capturando as dimenções da tela
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
    canvasCtx.width = window.innerWidth;
    canvasCtx.height = window.innerHeight;
    
}

// função que desenha os elementos
function draw(params) {
    
    //desenhando campo
    canvasCtx.fillStyle = "#286047";
    canvasCtx.fillRect(0 , 0 , window.innerWidth, window.innerHeight);

    // desenhando linha central do campo
    let linhaCentralX = window.innerWidth / 2 - linhaBranca / 2;
    let linhaCentralY = 0;
    let linhaCentralLargura = linhaBranca;
    let linhaCentralAltura = window.innerHeight;
    canvasCtx.fillStyle = "#FFFFFF";
    canvasCtx.fillRect(linhaCentralX, linhaCentralY, linhaCentralLargura, linhaCentralAltura);

}

setup();
draw();