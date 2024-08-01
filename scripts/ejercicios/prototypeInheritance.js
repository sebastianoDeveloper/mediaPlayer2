function Hero(name) {
  this.name = name;
}

Hero.prototype.saludar = function () {
  console.log(`Hola, soy ${ this.name }`);
};

const zelda = new Hero('Zelda');

// propiedades de la instancia
console.log('Name',zelda.name);
// propiedades de la "clase"
console.log('Name',zelda.saludar);
// propiedades heredadas ej: toString
console.log('Name',zelda.toString);
// hasOwnProperty (de dónde sale toString o esto?)
console.log('zelda.hasOwnProperty(name)',zelda.hasOwnProperty('name') );
console.log('zelda.hasOwnProperty(saludar)',zelda.hasOwnProperty('saludar') );

// inspeccionemos el prototipo del zelda

// inspeccionemos el prototipo del Hero

// inspeccionemos el prototipo del Object
