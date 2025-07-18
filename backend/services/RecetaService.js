describe('Registro de recetas (v3)', () => {
it('no debería permitir categoría inválida', async () => {
await expect(
crearRecetaV3({ titulo: 'Flan', ingredientes: ['huevo'], preparacion: 'Cocinar', categoria: 'pizza' }, 'usuario123')
).rejects.toThrow('Categoría no válida');
});
});

