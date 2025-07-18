const { emitirComentario } = require("../src/ComentarioService.v3");

function testComentarioValido() {
const mockIO = { emit: (evento, payload) => console.log("Emitió:", evento, payload) };
const data = emitirComentario(mockIO, "¡Me encanta!", "Eva");
console.assert(data.usuario === "Eva");
console.log(" Comentario válido emitido correctamente");
}

testComentarioValido();

