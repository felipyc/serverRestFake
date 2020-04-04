
class Nave{

  constructor(){
    this.naveConfig = {
      posicaoAtual: 0,
      limiteAteCantoDireito: 0,
    }
    this.movimentoTouch = {
      inicial: 0,
      movimento: 0,
      movimentoFinal: 0,
    }
    this.containerNave = document.querySelector('.container-nave');
    this.nave = document.querySelector('.container-nave .icon-nave');
    this.skinNave = './assets/images/nave.gif';
    this.nave.style.backgroundImage = `url(${this.skinNave})`;
    this.init();
  }

  onStart(event){
    event.preventDefault();
    this.containerNave.addEventListener('touchmove', this.onMove);
    this.containerNave.addEventListener('touchend', this.onEnd);
    this.movimentoTouch.inicial = event.changedTouches[0].clientX;
  }

  onMove(event){
    const clientX = event.changedTouches[0].clientX;
    this.movimentoTouch.movimento = this.calculoDoMovimento( clientX );
    this.movimentaNave( this.movimentoTouch.movimento );
    debugger;
  }
  
  onEnd(){
    this.containerNave.removeEventListener('touchmove', this.onMove);
    this.naveConfig.posicaoAtual += this.movimentoTouch.movimentoFinal;
    this.movimentoTouch.movimentoFinal = 0;
  }

  calculoDoMovimento(clientX){
    const velocidadeNave = .8;
    // console.log(clientX);
    // console.log(this.movimentoTouch.inicial);
    // console.log(clientX - this.movimentoTouch.inicial);
    const movimento = (clientX - this.movimentoTouch.inicial)*0.7;
    // movimento = Number.parseInt(movimento);
    // this.naveConfig.posicaoAtual = Number.parseInt(this.naveConfig.posicaoAtual);
    // console.log(this.naveConfig.posicaoAtual);
    // console.log(movimento);
    // console.log(this.naveConfig.posicaoAtual + movimento);
    if( 
      this.naveConfig.posicaoAtual + movimento >= 0 && 
      this.naveConfig.posicaoAtual + movimento <= this.naveConfig.limiteAteCantoDireito 
    ){
      this.movimentoTouch.movimentoFinal = movimento;
      return movimento;
    }

    

    return this.movimentoTouch.movimentoFinal;
  }

  movimentaNave(movimento){
    this.nave.style.transform = `translate3d(${this.naveConfig.posicaoAtual+movimento}px,0,0)`;
  }

  bindEvents(){
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.eventosInicializacao = this.eventosInicializacao.bind(this);
  }

  eventosInicializacao(){
    this.containerNave.addEventListener('touchstart', this.onStart);
  }

  calculaLimiteAteCantoDireito(){
    const widthWrapperNave = this.containerNave.clientWidth;
    const widthNave = this.nave.clientWidth;
    this.naveConfig.limiteAteCantoDireito = widthWrapperNave - widthNave;
  }

  init(){
    this.bindEvents();
    this.calculaLimiteAteCantoDireito();
    this.eventosInicializacao();

  }

}

export default Nave;

