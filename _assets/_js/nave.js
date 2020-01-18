
let posicaoNaveX = {
    posicaoInicialAbsoluta: 0,
    posicaoFinalMaxima: 0,
    posicaoAtual: 0
};

let touchPosicao = {
    touchPageXInicial: 0,
    touchPageXDeslizamento: 0
}

const containerNave = document.querySelector('.container-nave');
const nave = document.querySelector('.container-nave .icon-nave');

function initNave(){

    posicaoNaveX.posicaoInicialAbsoluta = containerNave.getBoundingClientRect().left;
    posicaoNaveX.posicaoFinalMaxima = containerNave.clientWidth - nave.clientWidth;
    
    console.log('containerNave.clientWidth ' + containerNave.clientWidth);
    console.log('nave.clientWidth ' + nave.clientWidth);

    console.log('posicaoNaveX.atual ' + posicaoNaveX.atual);
    console.log('posicaoNaveX.posicaoInicialAbsoluta ' + posicaoNaveX.posicaoInicialAbsoluta);
    console.log('posicaoNaveX.posicaoFinalMaxima ' + posicaoNaveX.posicaoFinalMaxima);

    containerNave.addEventListener('touchstart', handleStart, false)
    // containerNave.addEventListener("touchend", handleEnd, false);
    // containerNave.addEventListener("touchcancel", handleCancel, false);
    // containerNave.addEventListener("touchleave", handleEnd, false);
    containerNave.addEventListener("touchmove", handleMove, false);
    
    

}

export default initNave;

function handleStart(evt) {
  evt.preventDefault();
  console.log("touchstart.");
  console.clear();
  //console.log('evt.touches[0].pageX' + evt.touches[0].pageX);
  touchPosicao.touchPageXInicial = evt.touches[0].pageX;
  console.log('touchPosicao.touchPageXInicial ' + touchPosicao.touchPageXInicial);

}

function handleMove(evt) {
    evt.preventDefault();
    console.clear();
    console.log("touchmove.");
    // console.log('evt.touches[0].pageX' + evt.touches[0].pageX);
    touchPosicao.touchPageXDeslizamento = evt.touches[0].pageX >= 0 ? evt.touches[0].pageX : '' ;
    console.log('touchPosicao.touchPageXInicial ' + touchPosicao.touchPageXInicial);
    console.log( 'touchPosicao.touchPageXDeslizamento ' + touchPosicao.touchPageXDeslizamento);
    let movimento;
    //para esquerda
    if ( touchPosicao.touchPageXInicial > touchPosicao.touchPageXDeslizamento && nave.getBoundingClientRect().left > posicaoNaveX.posicaoInicialAbsoluta ) {
        
        nave.style.marginLeft = posicaoNaveX.posicaoAtual - 2 + 'px';
        touchPosicao.touchPageXInicial = touchPosicao.touchPageXDeslizamento;
        posicaoNaveX.posicaoAtual = posicaoNaveX.posicaoAtual - 3;

    //para direita
    }else if ( touchPosicao.touchPageXInicial < touchPosicao.touchPageXDeslizamento && nave.getBoundingClientRect().left < posicaoNaveX.posicaoFinalMaxima) {
        
        nave.style.marginLeft = posicaoNaveX.posicaoAtual + 1 + 'px';
        touchPosicao.touchPageXInicial = touchPosicao.touchPageXDeslizamento;
        posicaoNaveX.posicaoAtual = posicaoNaveX.posicaoAtual + 3;
    }
    
    
  }