import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Clock, MapPin, Star, Users, Utensils, ChefHat, Flame } from "lucide-react"

const restaurants = [
  {
    id: 1,
    name: "The Brass Dragon",
    cuisine: "Chinese Steampunk Fusion",
    type: "Fine Dining",
    description:
      "Traditional Chinese cuisine prepared in steam-powered woks and pressure cookers. Our signature dishes are cooked using the original purification steam engines, infusing every meal with the essence of salvation.",
    image: "/placeholder.svg?height=300&width=400",
    priceRange: "$$$",
    rating: 4.9,
    capacity: "120 guests",
    hours: "11:00 AM - 10:00 PM",
    location: "Cogsworth Quarter",
    specialties: [
      "Steam-Powered Dim Sum",
      "Pressure-Cooked Peking Duck",
      "Clockwork Tea Ceremony",
      "Pneumatic Noodle Delivery",
    ],
    steamInfluence:
      "Our chefs use the original steam purification technology to create perfectly steamed dumplings and buns. The pneumatic delivery system brings hot dishes directly to your table through brass tubes.",
    atmosphere: "Victorian-Chinese fusion with brass dragons, steam vents, and mechanical tea servers",
  },
  {
    id: 2,
    name: "Maharaja's Steam Palace",
    cuisine: "Indian Steampunk",
    type: "Restaurant",
    description:
      "Authentic Indian spices meet Victorian innovation. Our tandoor ovens are powered by steam engines, and our curry pots are pressure-sealed for maximum flavor infusion.",
    image: "/placeholder.svg?height=300&width=400",
    priceRange: "$$",
    rating: 4.7,
    capacity: "80 guests",
    hours: "12:00 PM - 9:00 PM",
    location: "Steam Bazaar",
    specialties: [
      "Steam-Pressure Biryani",
      "Mechanical Tandoor Naan",
      "Clockwork Curry Service",
      "Pneumatic Spice Delivery",
    ],
    steamInfluence:
      "Traditional clay tandoors enhanced with steam injection systems create the perfect naan. Our spice grinding is done by clockwork mechanisms that ensure consistent flavor profiles.",
    atmosphere: "Ornate Indian décor with brass steam pipes, mechanical elephants, and automated spice dispensers",
  },
  {
    id: 3,
    name: "La Macchina Italiana",
    cuisine: "Italian Steampunk",
    type: "Trattoria",
    description:
      "Mama's recipes meet Professor Cogsworth's innovations. Our pasta is made by steam-powered machines, and our pizza ovens are heated by the park's central steam system.",
    image: "/placeholder.svg?height=300&width=400",
    priceRange: "$$",
    rating: 4.8,
    capacity: "60 guests",
    hours: "11:30 AM - 10:30 PM",
    location: "Little Steamtaly",
    specialties: [
      "Steam-Pressed Ravioli",
      "Mechanical Pizza Tossing",
      "Pressure-Infused Risotto",
      "Clockwork Gelato Machine",
    ],
    steamInfluence:
      "Our pasta machines are powered by the same steam technology that saved civilization. The pizza ovens use controlled steam injection for the perfect crust texture.",
    atmosphere: "Rustic Italian with exposed brass pipes, mechanical pasta makers, and steam-powered espresso machines",
  },
  {
    id: 4,
    name: "El Vapor Mexicano",
    cuisine: "Mexican Steampunk",
    type: "Fast Casual",
    description:
      "Spicy Mexican flavors enhanced by steam-pressure cooking. Our salsas are made in pressurized chambers, and our tortillas are pressed by steam-powered machines.",
    image: "/placeholder.svg?height=300&width=400",
    priceRange: "$",
    rating: 4.6,
    capacity: "40 guests",
    hours: "10:00 AM - 11:00 PM",
    location: "Fiesta Steam District",
    specialties: [
      "Pressure-Cooked Carnitas",
      "Steam-Pressed Tortillas",
      "Mechanical Guacamole Mixer",
      "Pneumatic Salsa Bar",
    ],
    steamInfluence:
      "Traditional slow-cooking methods accelerated by steam pressure technology. Our molcajetes are enhanced with vibrating steam mechanisms for perfect guacamole texture.",
    atmosphere: "Colorful Mexican décor with copper steam pipes, mechanical piñatas, and automated tortilla presses",
  },
  {
    id: 5,
    name: "The Clockwork Sushi Bar",
    cuisine: "Japanese Steampunk",
    type: "Sushi Bar",
    description:
      "Precision Japanese cuisine meets Victorian engineering. Our sushi is prepared by clockwork mechanisms, and our rice is steamed in the original purification chambers.",
    image: "/placeholder.svg?height=300&width=400",
    priceRange: "$$$",
    rating: 4.9,
    capacity: "30 guests",
    hours: "5:00 PM - 11:00 PM",
    location: "Zen Steam Garden",
    specialties: [
      "Clockwork Sushi Conveyor",
      "Steam-Perfect Sushi Rice",
      "Mechanical Wasabi Grater",
      "Pneumatic Sake Service",
    ],
    steamInfluence:
      "Our sushi rice achieves perfect texture through steam chambers calibrated to the exact specifications used in the Great Purification. Clockwork precision ensures every piece is identical.",
    atmosphere:
      "Minimalist Japanese design with brass accents, mechanical cherry blossoms, and steam-powered water features",
  },
  {
    id: 6,
    name: "Baguette & Brass",
    cuisine: "French Steampunk",
    type: "Bistro",
    description:
      "Classic French cuisine elevated by steam technology. Our bread is baked in steam-injected ovens, and our sauces are reduced using pressure techniques developed during the plague years.",
    image: "/placeholder.svg?height=300&width=400",
    priceRange: "$$$",
    rating: 4.8,
    capacity: "50 guests",
    hours: "7:00 AM - 10:00 PM",
    location: "Parisian Steam Quarter",
    specialties: [
      "Steam-Injected Croissants",
      "Pressure-Reduced Sauces",
      "Mechanical Soufflé Maker",
      "Clockwork Wine Service",
    ],
    steamInfluence:
      "Our ovens use the same steam injection technology that purified the air during the Crimson Blight. This creates the perfect crust on our artisanal breads and pastries.",
    atmosphere:
      "Elegant Parisian café with brass fixtures, steam-powered coffee machines, and mechanical accordion players",
  },
  {
    id: 7,
    name: "The Steaming Currywurst",
    cuisine: "German Steampunk",
    type: "Fast Food",
    description:
      "Hearty German fare powered by industrial steam technology. Our sausages are cooked in the same pressure systems used to defeat the plague, ensuring perfect texture and flavor.",
    image: "/placeholder.svg?height=300&width=400",
    priceRange: "$",
    rating: 4.5,
    capacity: "35 guests",
    hours: "11:00 AM - 9:00 PM",
    location: "Bavarian Steam Hall",
    specialties: [
      "Pressure-Cooked Bratwurst",
      "Steam-Powered Sauerkraut",
      "Mechanical Beer Taps",
      "Clockwork Pretzel Twister",
    ],
    steamInfluence:
      "Traditional German brewing and cooking methods enhanced with steam pressure technology. Our beer is served through pneumatic taps that maintain perfect temperature and carbonation.",
    atmosphere:
      "Traditional German beer hall with industrial steam pipes, mechanical oompah band, and steam-powered brewing equipment",
  },
  {
    id: 8,
    name: "Pharaoh's Steam Kitchen",
    cuisine: "Middle Eastern Steampunk",
    type: "Restaurant",
    description:
      "Ancient Middle Eastern recipes meet modern steam innovation. Our tagines are pressure-cooked, and our flatbreads are baked in steam-enhanced ovens reminiscent of ancient Egyptian technology.",
    image: "/placeholder.svg?height=300&width=400",
    priceRange: "$$",
    rating: 4.7,
    capacity: "70 guests",
    hours: "12:00 PM - 10:00 PM",
    location: "Steam Oasis",
    specialties: [
      "Pressure-Cooked Tagines",
      "Steam-Enhanced Hummus",
      "Mechanical Shawarma Spit",
      "Clockwork Tea Service",
    ],
    steamInfluence:
      "Our cooking methods combine ancient Middle Eastern techniques with steam technology. The pressure tagines concentrate flavors while the steam ovens create perfectly fluffy pita bread.",
    atmosphere:
      "Exotic Middle Eastern décor with brass steam pipes designed like ancient Egyptian hieroglyphs and mechanical palm trees",
  },
  {
    id: 9,
    name: "The Brass Burger Works",
    cuisine: "American Steampunk",
    type: "Fast Food",
    description:
      "Classic American burgers with a steampunk twist. Our patties are grilled on steam-heated plates, and our fries are cooked in pressure fryers developed during the industrial revolution.",
    image: "/placeholder.svg?height=300&width=400",
    priceRange: "$",
    rating: 4.4,
    capacity: "50 guests",
    hours: "10:00 AM - 11:00 PM",
    location: "Liberty Steam Plaza",
    specialties: [
      "Steam-Grilled Burgers",
      "Pressure-Fried Potatoes",
      "Mechanical Milkshake Mixer",
      "Pneumatic Condiment Dispenser",
    ],
    steamInfluence:
      "Our grills use steam heating for even cooking, while our fryers employ pressure technology for crispy exteriors and fluffy interiors. Milkshakes are mixed by clockwork mechanisms.",
    atmosphere:
      "1950s American diner meets Victorian industrial design with chrome and brass fixtures, mechanical jukeboxes, and steam-powered soda fountains",
  },
  {
    id: 10,
    name: "Babushka's Steam Kitchen",
    cuisine: "Russian Steampunk",
    type: "Restaurant",
    description:
      "Traditional Russian comfort food enhanced by steam technology. Our borscht is pressure-cooked for maximum flavor, and our blini are made on steam-heated griddles.",
    image: "/placeholder.svg?height=300&width=400",
    priceRange: "$$",
    rating: 4.6,
    capacity: "45 guests",
    hours: "11:00 AM - 9:00 PM",
    location: "Siberian Steam District",
    specialties: [
      "Pressure-Cooked Borscht",
      "Steam-Heated Blini",
      "Mechanical Vodka Chiller",
      "Clockwork Caviar Service",
    ],
    steamInfluence:
      "Traditional Russian slow-cooking methods are accelerated using steam pressure technology. Our vodka is chilled using steam-powered refrigeration systems developed during the plague years.",
    atmosphere:
      "Cozy Russian dacha with ornate brass samovars, mechanical matryoshka dolls, and steam-powered heating systems",
  },
]

const getTypeColor = (type) => {
  switch (type) {
    case "Fine Dining":
      return "bg-purple-500"
    case "Restaurant":
      return "bg-blue-500"
    case "Trattoria":
      return "bg-green-500"
    case "Fast Casual":
      return "bg-orange-500"
    case "Sushi Bar":
      return "bg-red-500"
    case "Bistro":
      return "bg-pink-500"
    case "Fast Food":
      return "bg-yellow-500"
    default:
      return "bg-gray-500"
  }
}

const getPriceColor = (price) => {
  switch (price) {
    case "$":
      return "text-green-600 dark:text-green-400"
    case "$$":
      return "text-yellow-600 dark:text-yellow-400"
    case "$$$":
      return "text-red-600 dark:text-red-400"
    default:
      return "text-gray-600 dark:text-gray-400"
  }
}

function Restaurants() {
  return (
    (<div className="min-h-screen bg-muted p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Steampunk Culinary District
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Where global cuisines meet Victorian innovation. Each restaurant tells the story of how the Steam Age
            revolutionized cooking, using the same technology that saved civilization from the Crimson Blight.
          </p>
        </div>

        {/* Featured Section */}
        <div
          className="mb-12 p-8 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-orange-800 dark:text-orange-200">
              The Culinary Revolution of 1887
            </h2>
            <p
              className="text-lg text-orange-700 dark:text-orange-300 max-w-4xl mx-auto">
              When steam technology saved us from the plague, it also transformed how we cook. Pressure systems, steam
              injection, and clockwork precision brought new flavors and techniques to cuisines from around the world.
              Every meal is a celebration of human ingenuity and cultural diversity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {restaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-background border-2">
              <div className="relative">
                <img
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getTypeColor(restaurant.type)} text-white`}>{restaurant.type}</Badge>
                </div>
                <div
                  className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{restaurant.rating}</span>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-1">{restaurant.name}</CardTitle>
                    <p className="text-lg font-medium text-orange-600 dark:text-orange-400">{restaurant.cuisine}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${getPriceColor(restaurant.priceRange)}`}>
                      {restaurant.priceRange}
                    </p>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {restaurant.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Restaurant Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{restaurant.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                    <MapPin className="w-4 h-4" />
                    <span>{restaurant.location}</span>
                  </div>
                </div>

                <Separator />

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <ChefHat className="w-4 h-4 text-orange-500" />
                    Steam-Enhanced Specialties
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {restaurant.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs justify-start">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Steam Influence */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-red-500" />
                    Steam Technology Integration
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{restaurant.steamInfluence}</p>
                </div>

                <Separator />

                {/* Atmosphere */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-blue-500" />
                    Atmosphere
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{restaurant.atmosphere}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    className="flex-1 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
                    Make Reservation
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    View Menu
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="mt-16 p-8 bg-background rounded-lg border">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Dining in the Steam Age</h3>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              All our restaurants use the revolutionary cooking technologies developed during the fight against the
              Crimson Blight. From pressure cooking that intensifies flavors to steam injection that creates perfect
              textures, every meal is a testament to human innovation. Our pneumatic delivery systems ensure your food
              arrives at the perfect temperature, while clockwork precision guarantees consistent quality.
            </p>
          </div>
        </div>
      </div>
    </div>)
  );
}

export default Restaurants
