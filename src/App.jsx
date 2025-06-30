import Navbar01Page from "@/components/navbar-01";
import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import Attractions from "./Pages/Attractions";
import Home from "./Pages/Home";
import Restaurants from "./Pages/Restaurants";
import Events from "./Pages/Events";
import Tickets from "./Pages/Tickets";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div>
        <Navbar01Page />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/events" element={<Events />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
