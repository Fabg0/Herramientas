function enviarComentario(comentario) {
if (!comentario || typeof comentario !== "string" || comentario.trim() === "") {
throw new Error("Comentario inválido.");
}

return {
texto: comentario.trim(),
fecha: new Date()
};
}

module.exports = { enviarComentario };

