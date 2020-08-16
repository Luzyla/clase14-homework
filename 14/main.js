const calcularPorcentaje = (numero, porcentaje) => {
    const porciento = (numero * porcentaje) / 100

    return porciento
}

calcularPorcentaje(100, 15)
//console.log(calcularPorcentaje(100, 15))

const sumarPorcentaje = (numero, porcentaje) => {
  const porcentual = calcularPorcentaje(numero, porcentaje)  
  const suma = numero + porcentual
  
  return suma
}

sumarPorcentaje(100, 15)
console.log(sumarPorcentaje(100, 15))

sumarPorcentaje(10, 50)
console.log(sumarPorcentaje(10, 50))

sumarPorcentaje(200, 10)
console.log(sumarPorcentaje(200, 10))

// ``