const calcularFPS = (fps, minutos) => {
    const segundos = minutos * 60
    const frames = fps * segundos

    return frames    
}

calcularFPS(1, 1)
console.log(calcularFPS(1, 1))

calcularFPS(10, 2)
console.log(calcularFPS(10, 2))

calcularFPS(2, 3)
console.log(calcularFPS(2, 3))

// ``