

  const funcionPredeterminada = () => {
    
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let valorPorHora = document.getElementById('valorPorHora').value;
        let interfazHoras = document.getElementById('interfazHoras').value;
        let estructuraHoras = document.getElementById('estructuraHoras').value;
        let logicaHoras = document.getElementById('logicaHoras').value;
        let cssHoras= document.getElementById('cssHoras').value;
        let adicionalesHoras = document.getElementById('adicionalesHoras').value;


        let resultado = (valorPorHora * interfazHoras) + (valorPorHora * estructuraHoras) + (valorPorHora* logicaHoras) + (valorPorHora* cssHoras) + (valorPorHora *  adicionalesHoras)
        document.getElementById('valorTotal').value= resultado

      })
    //console.log('Función predeterminada invocada');
  }
  
  funcionPredeterminada(); 