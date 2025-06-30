import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Zap, Star } from "lucide-react"

const attractions = [
  {
    id: 1,
    name: "The Clockwork Coaster",
    description:
      "A massive roller coaster powered by giant steam engines and clockwork mechanisms. Experience the thrill as you race through copper pipes and brass gears.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Thrill Ride",
    duration: "3 min",
    capacity: "24 riders",
    intensity: "High",
    rating: 4.8,
    features: ["Steam Effects", "Copper Track", "Gear Tunnels"],
  },
  {
    id: 2,
    name: "Airship Adventure",
    description:
      "Board a Victorian-era airship and soar above the park. Navigate through floating islands and steam clouds in this gentle aerial journey.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Family Ride",
    duration: "8 min",
    capacity: "16 riders",
    intensity: "Low",
    rating: 4.6,
    features: ["Panoramic Views", "Steam Clouds", "Victorian Design"],
  },
  {
    id: 3,
    name: "The Mechanical Maze",
    description:
      "Navigate through a labyrinth of moving gears, steam vents, and clockwork puzzles. Find your way to the center where the Great Engine awaits.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Interactive",
    duration: "15 min",
    capacity: "Unlimited",
    intensity: "Low",
    rating: 4.4,
    features: ["Puzzle Solving", "Moving Parts", "Hidden Passages"],
  },
  {
    id: 4,
    name: "Steam Hammer Drop",
    description:
      "Experience the power of industrial machinery as you're lifted 200 feet by a massive steam-powered hammer, then dropped at lightning speed.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Thrill Ride",
    duration: "2 min",
    capacity: "12 riders",
    intensity: "Extreme",
    rating: 4.9,
    features: ["200ft Drop", "Steam Power", "Industrial Design"],
  },
  {
    id: 5,
    name: "Inventor's Workshop",
    description:
      "Step into Professor Cogsworth's laboratory and help create fantastic contraptions. A hands-on experience perfect for young engineers.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Educational",
    duration: "20 min",
    capacity: "20 visitors",
    intensity: "Low",
    rating: 4.3,
    features: ["Hands-on Building", "Educational", "Interactive Exhibits"],
  },
  {
    id: 6,
    name: "The Brass Carousel",
    description:
      "Ride magnificent mechanical creatures crafted from brass and copper. Each mount features intricate clockwork animations and steam effects.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Family Ride",
    duration: "4 min",
    capacity: "32 riders",
    intensity: "Low",
    rating: 4.5,
    features: ["Mechanical Animals", "Brass Craftsmanship", "Steam Effects"],
  },
  {
    id: 7,
    name: "Pneumatic Tube Transport",
    description:
      "Travel across the park in style through a network of transparent pneumatic tubes. Feel the rush of compressed air propelling your capsule.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Transportation",
    duration: "5 min",
    capacity: "4 riders",
    intensity: "Medium",
    rating: 4.7,
    features: ["Park Transportation", "Pneumatic Power", "Glass Tubes"],
  },
  {
    id: 8,
    name: "The Difference Engine Theater",
    description:
      "Watch spectacular shows featuring mechanical performers, steam-powered special effects, and Victorian-era entertainment.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Show",
    duration: "25 min",
    capacity: "200 guests",
    intensity: "Low",
    rating: 4.6,
    features: ["Live Shows", "Mechanical Performers", "Steam Effects"],
  },
  {
    id: 9,
    name: "Gear Grinder Rapids",
    description:
      "Navigate treacherous waters through a course of spinning gears and steam geysers. Get ready to get soaked in this aquatic adventure!",
    image: "/placeholder.svg?height=300&width=400",
    category: "Water Ride",
    duration: "6 min",
    capacity: "8 riders",
    intensity: "Medium",
    rating: 4.4,
    features: ["Water Ride", "Spinning Gears", "Steam Geysers"],
  },
  {
    id: 10,
    name: "Tesla's Lightning Laboratory",
    description:
      "Experience the power of electricity in this electrifying dark ride through Nikola Tesla's secret laboratory filled with crackling energy.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Dark Ride",
    duration: "7 min",
    capacity: "16 riders",
    intensity: "Medium",
    rating: 4.8,
    features: ["Electrical Effects", "Dark Ride", "Tesla Coils"],
  },
]

const getIntensityColor = (intensity) => {
  switch (intensity) {
    case "Low":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "High":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    case "Extreme":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

const getCategoryColor = (category) => {
  switch (category) {
    case "Thrill Ride":
      return "bg-red-500"
    case "Family Ride":
      return "bg-blue-500"
    case "Water Ride":
      return "bg-cyan-500"
    case "Dark Ride":
      return "bg-purple-500"
    case "Show":
      return "bg-pink-500"
    case "Interactive":
      return "bg-green-500"
    case "Educational":
      return "bg-indigo-500"
    case "Transportation":
      return "bg-orange-500"
    default:
      return "bg-gray-500"
  }
}

export const AttractionsList = () => {
  return (
    (<div className="min-h-screen bg-muted p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Steampunk Attractions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the wonders of Victorian engineering and industrial innovation. Each attraction combines the
            elegance of the steam age with modern thrills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <Card
              key={attraction.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-background border-2">
              <div className="relative">
                <img
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(attraction.category)} text-white`}>{attraction.category}</Badge>
                </div>
                <div
                  className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{attraction.rating}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">{attraction.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{attraction.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {attraction.duration}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {attraction.capacity}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Zap className="w-4 h-4" />
                      <Badge variant="outline" className={getIntensityColor(attraction.intensity)}>
                        {attraction.intensity}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {attraction.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>)
  );
}
