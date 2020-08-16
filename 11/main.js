const convertirHorasEnSegundos = (horas) => {
    const minutos = horas * 60
    const segundos = minutos * 60

    return segundos    
}

convertirHorasEnSegundos(1)
console.log(convertirHorasEnSegundos(1))

convertirHorasEnSegundos(3)
console.log(convertirHorasEnSegundos(3))

convertirHorasEnSegundos(4.5)
console.log(convertirHorasEnSegundos(4.5))

// ``