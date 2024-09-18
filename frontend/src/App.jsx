import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">🌍 Go Quest</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-md bg-transparent border border-current">Community Trips</button>
            <button className="px-4 py-2 rounded-md bg-transparent border border-current">Sign In</button>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-transparent border border-current">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Your Next Journey, Optimized 🚀</h1>
        <p className="text-xl mb-8">
          Build, personalize, and optimize your itineraries with our free AI trip planner. Designed for vacations, workations, and everyday adventures. 🏖️🏙️🏔️
        </p>
        <button className="px-6 py-3 bg-teal-500 text-white rounded-md text-lg font-semibold">
          📝 Create a new trip
        </button>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Trip Planner AI is now part of Layla 🎉</h2>
          <p className="text-lg">
            Trip Planner AI, the original AI trip planner trusted by millions, is now part of Layla.
          </p>
        </div>
      </main>
    </div>
  )
}