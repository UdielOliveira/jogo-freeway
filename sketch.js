
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}




