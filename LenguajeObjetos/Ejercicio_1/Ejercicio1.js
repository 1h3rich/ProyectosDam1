var alumno = {
    nombre: "Rodrigo",    
    apellido: "Diaz",
    edad: 25,
}

var curso = {
    asignatura_1: "ingles",
    nota_1: 8,
    asignatura_2: "Lenguaje_de_marcas",
    nota_2: 7,
    asignatura_3: "programacion",
    nota_3: 9,  
}
var promedio  = (curso.nota_1 + curso.nota_2 + curso.nota_3) / 3;
    console.log("El promedio del alumno " + alumno.nombre + " " + alumno.apellido + " es: " + promedio);
