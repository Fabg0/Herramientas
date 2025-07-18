function buscarReceta(recetas, termino) {
const lower = termino.toLowerCase();
return recetas.filter(r =>
r.titulo.toLowerCase().includes(lower) ||
r.ingredientes.some(ing => ing.toLowerCase().includes(lower))
);
}

module.exports = { buscarReceta };

