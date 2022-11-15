// IMAGENS DO JOGO E SONS DO JOGO

// IMAGENS
let imagemDoAtor;
let imagemDoCarro;
let imagemDaEstrada;
let imagemDoCarro2;
let imagemDoCarro3;
let imagensCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2,imagemDoCarro3]

//  SONS DO JOGO
let somDaTrilha
let somDaColisao
let somDoPonto

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagensCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2,imagemDoCarro3]
  
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDaColisao = loadSound("sons/colidiu.mp3")
  somDoPonto = loadSound("sons/pontos.wav")
}

