import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm />
        <div className="mt-6 text-center text-sm text-gray-600">
          Want to <span className="font-medium text-indigo-600 hover:underline cursor-pointer">
            <a href="/auth">log in</a>
          </span> to save your shortened URLs and create custom links?
        </div>
      </div>
    </div>
  )
}

export default HomePage
