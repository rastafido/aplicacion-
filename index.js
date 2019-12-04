let costo = document.getElementById('costo');
let price = document.getElementById('precio');
let cant = document.getElementById('cant');
let gankg = document.getElementById('gkg');
let gana = document.getElementById('ganan');

function calculaGananciaXKilo() {
  let resultado = price.value-costo.value
  let ganancia =resultado * cant.value
  gankg.innerHTML= resultado
  gana.innerHTML= ganancia

  if (resultado < 0) {
    gankg.classList.add('perdida')
  } else {
    gankg.classList.remove('perdida')
  }

  if (ganancia < 0) {
    gana.classList.add('perdida')
  } else {
    gana.classList.remove('perdida')
  }

}


costo.addEventListener('input',calculaGananciaXKilo)
price.addEventListener('input',calculaGananciaXKilo)
cant.addEventListener('input', calculaGananciaXKilo)








// console.log(costo, price, cant)
