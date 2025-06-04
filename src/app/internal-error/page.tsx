export default function InternalError() {
  return (
    <div className="p-8 text-center">
      <h2 className="mb-4 text-2xl font-bold text-red-500">
        Internal Error: Something went wrong!
      </h2>
      <p className="text-gray-600">
        Please try refreshing the page or contact support if the problem
        persists.
      </p>
    </div>
  )
}
