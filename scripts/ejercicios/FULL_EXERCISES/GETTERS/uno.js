const persona = {
  nombre: 'Jose',
  apellido: 'Reyes',
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  },
  set nombreCompleto(value) {
    const data = value.split(' ')
    this.nombre = data[0] || ''
    this.nombre = data[1] || ''
  },
}

// se utilizan  con el operador de asignacion. Como si fuera una variable dentro del objeto
console.log(persona.nombreCompleto);
persona.nombreCompleto = 'Pedro Suarez'
console.log(persona.nombreCompleto);
console.log(persona.nombre);
console.log(persona.apellido);
