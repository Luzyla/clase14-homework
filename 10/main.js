const obtenerDatosDeCiudad = (nombre, población, país) => {
    
    return `La ciudad de ${nombre} tiene una población de ${población} habitantes y está ubicada en ${país}.`
}

obtenerDatosDeCiudad('Buenos Aires', 2000000, 'Argentina')
console.log(obtenerDatosCiudad('Buenos Aires', 2000000, 'Argentina'))

obtenerDatosDeCiudad('St. Johns', 100000, 'Canada')
console.log(obtenerDatosCiudad('St. Johns', 100,000, 'Canada'))

obtenerDatosDeCiudad('Londres', 2500000, 'United Kingdom')
console.log(obtenerDatosCiudad('Londres', 2500000, 'United Kingdom'))


// ``