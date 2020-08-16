const calcularPorcentaje = (numero, porcentaje) => {
    const porciento = (numero * porcentaje) / 100

    return porciento
}

calcularPorcentaje(100, 15)
//console.log(calcularPorcentaje(100, 15))

const restarPorcentaje = (numero, porcentaje) => {
  const porcentual = calcularPorcentaje(numero, porcentaje)  
  const resta = numero - porcentual
  
  return resta
}

restarPorcentaje(100, 15)
console.log(restarPorcentaje(100, 15))

restarPorcentaje(10, 40)
console.log(restarPorcentaje(10, 40))

restarPorcentaje(200, 10)
console.log(restarPorcentaje(200, 10))

// ``