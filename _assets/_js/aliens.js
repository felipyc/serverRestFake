
//função responsavel por cria todos os aliens
function aliens(){
    
    const containerAliens = document.querySelector('.container-aliens');
    const aliensName = [
        'icon-caranguejo-natural',
        'icon-polvo-pequeno-natural',
        'icon-polvo-grande-natural'
    ]

    for( let c = 1 ; c <= 10 ; c++ ){
        let divVerticalGrupoAliens = document.createElement('div');
        divVerticalGrupoAliens.classList.add('grupo-aliens-vertical');
        aliensName.forEach((alienName) => {
            let divAlien = document.createElement('div');
            divAlien.classList.add('div-alien');
            let spanAlien = document.createElement('span');
            spanAlien.classList.add(alienName,'span-alien'); 
            divAlien.appendChild(spanAlien);
            divVerticalGrupoAliens.appendChild(divAlien);
        });
        containerAliens.appendChild(divVerticalGrupoAliens);
    }

}

export default aliens;


