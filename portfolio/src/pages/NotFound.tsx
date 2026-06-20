import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4">Page not found.</p>
      <Link to="/" className="mt-8 inline-block text-blue-600 hover:underline">
        Go home
      </Link>
    </div>
  )
}
