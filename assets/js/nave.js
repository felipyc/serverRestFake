
let posicaoNaveX = {
  posicaoInicialAbsoluta: 0,
  posicaoFinalMaxima: 0
};

let touchPosicao = {
  touch: 0,
  deslizamento: 0
}

const containerNave = document.querySelector('.container-nave');
const nave = document.querySelector('.container-nave .icon-nave');

function initNave(){

    
  posicaoNaveX.posicaoInicialAbsoluta = containerNave.getBoundingClientRect().left;
  posicaoNaveX.posicaoFinalMaxima = containerNave.clientWidth - nave.clientWidth; 
    

    containerNave.addEventListener('touchstart', handleStart, false)
    // containerNave.addEventListener("touchend", handleEnd, false);
    // containerNave.addEventListener("touchcancel", handleCancel, false);
    // containerNave.addEventListener("touchleave", handleEnd, false);
    containerNave.addEventListener("touchmove", handleMove, false);
    
    

}

export default initNave;

function handleStart(evt) {
  evt.preventDefault();
  console.clear();
  console.log("touchstart.");
  
  touchPosicao.touch = evt.touches[0].pageX;

}

function handleMove(evt) {
    evt.preventDefault();
    console.clear();
    console.log("touchmove.");


    touchPosicao.deslizamento = evt.touches[0].pageX >= 0 ? evt.touches[0].pageX : '';

    console.log('posicaoNaveX.posicaoInicialAbsoluta: ' + posicaoNaveX.posicaoInicialAbsoluta);
    console.log('posicaoNaveX.posicaoFinalMaxima: ' + posicaoNaveX.posicaoFinalMaxima);
    console.log('touchPosicao.touch: ' + touchPosicao.touch);
    console.log('touchPosicao.deslizamento: ' + touchPosicao.deslizamento);
    console.log(evt);

    //para esquerda
    if( touchPosicao.touch > touchPosicao.deslizamento ){
      // nave.style.marginLeft = `${nave.getBoundingClientRect().left-1}px`;
      // touchPosicao.touch = evt.touches[0].pageX;
      // console.log('esquerda');
    //para direita
    }else if( touchPosicao.touch < touchPosicao.deslizamento  ){
      // nave.style.marginLeft = `${nave.getBoundingClientRect().left+1}px`;
      // touchPosicao.touch = evt.touches[0].pageX;
      console.log('direita');
    }else{
      console.log(nave.getBoundingClientRect().left);
    }

    if( touchPosicao.touch < touchPosicao.deslizamento && nave.getBoundingClientRect().left < posicaoNaveX.posicaoFinalMaxima ){
      nave.style.marginLeft = `${nave.getBoundingClientRect().left+1}px`;
      touchPosicao.touch = evt.touches[0].pageX;
      console.log('direita');
    }else {

    }
    
  }