//function to print line break
function ln(){
    console.log("\n\n\n")
}

//Variables declaration
let nombre
let apellido
let edad



ln()
//Variable initialization
nombre = "Elmer"
apellido = "Gonzalez"
edad = 21



ln()
//If loop
if (edad >= 18)
    console.log(nombre + " " + apellido + " puedes pasar")
else
    console.log(nombre + " " + apellido + "Eres menor de edad")



ln()
//constants
const nacimiento = 1990



ln()
//Printing constant
console.log(nacimiento)



ln()
//Objects
let student = {
    name:"Elmer",
    lastName:"Gonzalez",
    edad:23,

    printStudent : function(){
        console.log(this.name + " " + this.lastName + " tiene " + this.edad + " años de edad")
    }
}



ln()
student.printStudent()
console.log("\n\n\n")



ln()
//Constant Objects
const constantes = {
    pi:3.1416,
    euler:2.7183,

    getPi:function(){
        return this.pi
    }
}
console.log(constantes.getPi())



ln()
//Objects of objects
let person = {
    name:null,
    age:null,
    students:{
        school:null,
    },

    getStudentSchool:function(){
        console.log(this.name + " is at " + this.students.school + " School")
    }
}

person.name = "Pedro"
person.age = 21
person.students.school = "Villa Catalina"

person.getStudentSchool()



ln()
//typeof
console.log("\n\n")
console.log(typeof person)



ln()
//Booleano
let status = false
console.log(status)



ln()
//Arreglos
let lista = ["Elmer", "Daniel", "Gonzalez", "Jimenez"]
console.log(lista)
console.log(lista.length + " elements: " + lista)



ln()
//Functions
function suma(x, y){
    return x + y
}

console.log(suma(23, 3))


ln()
