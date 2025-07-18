const Receta = require('../models/Receta');

async function crearRecetaV1(data) {
const nuevaReceta = new Receta({
titulo: data.titulo,
descripcion: data.descripcion
});
return await nuevaReceta.save();
}

module.exports = { crearRecetaV1 };