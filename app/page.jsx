import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "../components/theme-provider"
import Navbar01Page from "../components/navbar-01/navbar-01"
import { AttractionsList } from "../components/attractions/attractions-list"

export default function Page() {
  return (
    (<BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="system">
        <div>
          <Navbar01Page />
          <AttractionsList />
        </div>
      </ThemeProvider>
    </BrowserRouter>)
  );
}
