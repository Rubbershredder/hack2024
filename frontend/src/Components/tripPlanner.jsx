import { useState } from 'react'
import { Moon, Sun, Send } from 'lucide-react'

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [chatInput, setChatInput] = useState('')

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleChatSubmit = (e) => {
    e.preventDefault()
    console.log('Chat submitted:', chatInput)
    setChatInput('')
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="container mx-auto px-4 py-4">
        <nav className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2 w-full sm:w-auto mb-4 sm:mb-0">
            <span className="text-2xl font-bold whitespace-nowrap">🌍 Go Quest</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
              Community Trips
            </button>
            <button className={`px-4 py-2 rounded-md ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
              Sign In
            </button>
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-transparent border border-current hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Your Next Journey, Optimized 🚀</h1>
        <p className="text-lg sm:text-xl mb-8">
          Build, personalize, and optimize your itineraries with our free AI trip planner. Designed for vacations, workations, and everyday adventures. 🏖️🏙️🏔️
        </p>
        
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Trip Planner AI Chat is now available 🎉</h2>
          <p className="text-base sm:text-lg">
            
          </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
        <form onSubmit={handleChatSubmit} className="flex items-center">
  <input
    type="text"
    value={chatInput}
    onChange={(e) => setChatInput(e.target.value)}
    placeholder="Ask anything..."
    className={`flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
      isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-black placeholder-gray-500'
    }`}
    aria-label="Chat input"
  />
  <button
    type="submit"
    className="px-4 py-3 bg-teal-500 text-white rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
    aria-label="Send message"
  >
    <Send className="w-5 h-5" />
  </button>
</form>

          <p className="text-sm text-gray-500 mt-2">
            We'd love to hear your suggestions for improvement. Click to share any feedback.
          </p>
        </div>
      </main>
    </div>
  )
}