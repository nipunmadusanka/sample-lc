export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">Sorry, the page you’re looking for was not found.</p>
      <a href="/" className="text-blue-600 underline">
        Go back home
      </a>
    </div>
  );
}
