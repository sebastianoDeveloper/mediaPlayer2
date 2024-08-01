// this en el scope global
console.log('This ' + this);
// this en el scope de una funcion
console.log('whoIsThis ' + whoIsThis());
function whoIsThis() {
  return this
}
// this en el scope de una funcion en strict mode
console.log('whoIsThisStrict ' + whoIsThisStrict());
function whoIsThisStrict() {
  'use strict'
  return this
}
// this en el contexto de un objeto
const person = {
  name: 'Gabriel',
  saludar: function () {
    console.log('Hola soy '+ this.name);
  }
}
person.saludar()

// this cuando sacamos a una funcion de un objeto
const accion = person.saludar
accion()
// this en el contexto de una 'clase'
class Person {
  constructor(name) {
    this.name = name
  }
  saludar() {
    console.log('Me llamo '+ this.name);

  }

}
const angela = new Person('Angela')
angela.saludar()