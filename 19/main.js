const calcularPuntaje = (fácil, normal, difícil) => {
    const faciles = fácil * 3
    const normales = normal * 5
    const dificiles = difícil * 10

    return faciles + normales + dificiles
    
}

calcularPuntaje(3, 0, 0)
console.log(calcularPuntaje(3, 0, 0))

calcularPuntaje(0, 2, 1)
console.log(calcularPuntaje(0, 2, 1))

calcularPuntaje(5, 1, 2)
console.log(calcularPuntaje(5, 1, 2))

// ``