import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-muted-foreground mb-6">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link
        href="/"
        className="text-primary underline hover:opacity-80 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
