import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "./logo"
import { NavMenu } from "./nav-menu"
import { ThemeToggle } from "./theme-toggle"

export const NavigationSheet = () => {
  return (
    (<Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <ThemeToggle />
        </div>
        <NavMenu orientation="vertical" className="mt-4" />
        <div className="mt-8 space-y-3">
          <Button variant="outline" className="w-full bg-transparent">
            Sign In
          </Button>
          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
            Buy Tickets
          </Button>
        </div>
      </SheetContent>
    </Sheet>)
  );
}
