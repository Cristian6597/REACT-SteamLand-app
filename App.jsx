import { Routes, Route } from "react-router-dom"
import Navbar01Page from "@/components/navbar-01"
import { ThemeProvider } from "@/components/theme-provider"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import Attractions from "./Pages/Attractions"

function App() {
  return (
    (<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div>
        <Navbar01Page />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attractions" element={<Attractions />} />
        </Routes>
      </div>
    </ThemeProvider>)
  );
}

export default App
