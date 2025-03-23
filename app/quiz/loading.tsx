export default function Loading() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-indigo-950">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-white mb-4">NEBULA</div>
          <div className="w-16 h-16 border-t-4 border-purple-500 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-300">Chargement de votre expérience personnalisée...</p>
        </div>
      </div>
    )
  }
  
  