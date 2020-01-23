
let posicaoFinalMaximaNave;

let touchPosicao = {
  touch: 0,
  deslizamento: 0,
}

const containerNave = document.querySelector('.container-nave');
const nave = document.querySelector('.container-nave .icon-nave');
let marginLeft;
function initNave(){

  nave.style.left = '50%';  

  posicaoFinalMaximaNave = ((containerNave.clientWidth - nave.clientWidth) * 100) / containerNave.clientWidth; 
  marginLeft = nave.style.left.replace('%', '').trim();
    

  containerNave.addEventListener('touchstart', handleStart, false)
  // containerNave.addEventListener("touchend", handleEnd, false);
  // containerNave.addEventListener("touchcancel", handleCancel, false);
  // containerNave.addEventListener("touchleave", handleEnd, false);
  containerNave.addEventListener("touchmove", handleMove, false);

  containerNave.addEventListener('touchstart', touchStartDoubleClick, false)
    
  let clickTimer = null;

  // function touchStartDoubleClick() {
  //     if (clickTimer == null) {
  //         clickTimer = setTimeout(function () {
  //             clickTimer = null;
  //             alert("single");

  //         }, 500)
  //     } else {
  //         clearTimeout(clickTimer);
  //         clickTimer = null;
  //         alert("double");

  //     }
  // }

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
    
    
    if( touchPosicao.touch > touchPosicao.deslizamento && marginLeft > 2 ){
      //para esquerda
      nave.style.left = `${+marginLeft-2}%`;
      touchPosicao.touch = touch.pageX;
    }else if( touchPosicao.touch < touchPosicao.deslizamento && marginLeft < posicaoFinalMaximaNave-2  ){
      //para direita
      nave.style.left = `${+marginLeft+2}%`;
      touchPosicao.touch = touch.pageX;
    }else{
      touchPosicao.touch = touch.pageX;
    }
    
    
  }