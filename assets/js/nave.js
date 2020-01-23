
let posicaoNaveX = {
  posicaoInicialAbsoluta: 0,
  posicaoFinalMaxima: 0,
  posicaoAtual: 0,
};

let touchPosicao = {
  touch: 0,
  deslizamento: 0,
}

const containerNave = document.querySelector('.container-nave');
const nave = document.querySelector('.container-nave .icon-nave');
let marginLeft;
function initNave(){

  nave.style.left = '50%';  

  posicaoNaveX.posicaoInicialAbsoluta = containerNave.getBoundingClientRect().left;
  posicaoNaveX.posicaoFinalMaxima = ((containerNave.clientWidth - nave.clientWidth) * 100) / containerNave.clientWidth; 
    

  containerNave.addEventListener('touchstart', handleStart, false)
  // containerNave.addEventListener("touchend", handleEnd, false);
  // containerNave.addEventListener("touchcancel", handleCancel, false);
  // containerNave.addEventListener("touchleave", handleEnd, false);
  containerNave.addEventListener("touchmove", handleMove, false);
    
  
  marginLeft = nave.style.left.replace('%', '').trim();

}

export default initNave;

function handleStart(evt) {
  evt.preventDefault();
  touchPosicao.touch = evt.touches[0].pageX;
  touchPosicao.deslizamento = evt.touches[0].pageX;
}

function handleMove(evt) {
    evt.preventDefault();

    let touch = evt.touches[0];
    
    

    touchPosicao.deslizamento = touch.pageX;

    

    
    marginLeft = nave.style.left.replace('%', '').trim();
    
    
    if( touchPosicao.touch > touchPosicao.deslizamento && marginLeft > 0 ){
      //para esquerda
      nave.style.left = `${+marginLeft-1}%`;
      touchPosicao.touch = touch.pageX;
      console.log(marginLeft-1);
      console.log('esquerda');
    }else if( touchPosicao.touch < touchPosicao.deslizamento && marginLeft < posicaoNaveX.posicaoFinalMaxima  ){
      //para direita
      nave.style.left = `${+marginLeft+1}%`;
      touchPosicao.touch = touch.pageX;
    }else{
      touchPosicao.touch = touch.pageX;
    }
    
    
  }