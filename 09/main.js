// obtenerNombreCompleto()
const obtenerNombreCompleto = (nombre, apellido) => {
    
    return `${nombre} ${apellido}`
}

obtenerNombreCompleto('Ada', 'Lovelace')
//console.log(obtenerNombreCompleto('Ada', 'Lovelace'))

// saludar()
const saludar = (nombre) => {
    
    return `¡Hola ${nombre}, un gusto conocerte!`
}

saludar('Ada')
//console.log(saludar('Ada'))

// gritar()
const gritar = (str) => {
    
    return `¡${str}!` 
}

gritar('HOLA')
//console.log(gritar('HOLA'))




// saludarGritando()
const saludarGritando = (nombre, apellido) => {
    const nombreCompleto = obtenerNombreCompleto(nombre, apellido)
    const saludo = saludar(nombreCompleto)
    const grito = gritar(saludo)

    return grito 
}

saludarGritando('Ada', 'Lovelace')
console.log(saludarGritando('Ada', 'Lovelace'))


// ``

