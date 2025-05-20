export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Perfil no encontrado</h1>
      <p className="text-muted-foreground">
        Este perfil no existe o ha sido eliminado.
      </p>
    </div>
  );
}
