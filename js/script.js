// definindo constantes
const canvasEl = document.querySelector("canvas"), 
      canvasCtx = canvasEl.getContext("2d");

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
    
    canvasCtx.fillStyle = "#286047";
    canvasCtx.fillRect(0 , 0 , window.innerWidth, window.innerHeight);

}

setup();
draw();