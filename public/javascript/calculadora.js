
/*
const funcionPredeterminada2 = () => {
    const formulario = document.getElementById('formulario');
    
    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
      
      const valorPorHora = document.getElementById('valorPorHora').value;
      const horasElementos = document.getElementsByClassName('horas');
      
      let totalHoras = 0;
      for (let i = 0; i < horasElementos.length; i++) {
        totalHoras += parseFloat(horasElementos[i].value);
      }
      
      const valorTotal = totalHoras * parseFloat(valorPorHora);
      document.getElementById('valorTotal').textContent = valorTotal;
    });
  }
  
  funcionPredeterminada2();
*/
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

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