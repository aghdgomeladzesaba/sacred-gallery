import { HashRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Analytics from './components/Analytics'

export default function App() {
  return (
    <HashRouter>
      <div
        data-theme="sacredgallery"
        className="min-h-screen bg-base-100 text-base-content"
      >
        <Analytics />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
