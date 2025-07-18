function emitirComentario(io, comentario, user) {
if (!comentario || comentario.trim().length === 0) {
throw new Error("Comentario vacío no permitido.");
}

const data = {
usuario: user || "anónimo",
mensaje: comentario.trim(),
timestamp: new Date().toISOString()
};

io.emit("nuevoComentario", data);
return data;
}

module.exports = { emitirComentario };
