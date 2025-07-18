function buscarReceta(recetas, nombre) {
return recetas.filter(r => r.titulo === nombre);
}

module.exports = { buscarReceta };

