import { Home as HomeIcon } from "lucide-react"; // Renamed Home import from lucide-react
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load components
const TripPlanner = lazy(() => import("./Components/TripPlanner"));
const HomePage = lazy(() => import("./Components/Home")); // Renamed lazy-loaded Home component
const QuestMode = lazy(() => import("./Components/QuestMode"));

function App() {
  return (
    <Router>
      <div className="App">
        {/* Main content */}
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/home" element={<HomePage />} />{" "}
              {/* Updated to HomePage */}
              <Route path="/tripPlanner" element={<TripPlanner />} />
              <Route path="/quest-mode" element={<QuestMode />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <footer>
          <p>&copy; 2024 Your App Name</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
