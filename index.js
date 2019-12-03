let costo = document.getElementById('costo');
let price = document.getElementById('precio');
let cant = document.getElementById('cant');

function calculaGananciaXKilo() {
  gankg.innerHTML= price.value-costo.value
}

costo.addEventListener('input', function() {
calculaGananciaXKilo()
})

price.addEventListener('input', function() {
calculaGananciaXKilo()
})

cant.addEventListener('input', function() {
  console.log(cant.value)
})

let gankg = document.getElementById('gkg')






// console.log(costo, price, cant)
