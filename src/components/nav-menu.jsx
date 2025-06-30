import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const NavMenu = (props) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            to="/"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Home
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            to="/attractions"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Attractions
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            to="/tickets"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Tickets
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            to="/map"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Map
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            to="/restaurants"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Restaurants
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link
            to="/events"
            className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            Events
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
