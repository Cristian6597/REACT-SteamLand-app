import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Users,
  Calendar,
  MapPin,
  Star,
  Zap,
  Heart,
  Brain,
  Shield,
} from "lucide-react";

const events = [
  {
    id: 1,
    name: "Professor Cogsworth's Science Academy",
    category: "Educational Workshop",
    targetAudience: "Children (6-12)",
    description:
      "Young inventors learn how steam power saved the world! Children build their own mini steam engines while learning about the heroes who defeated the Crimson Blight through science and innovation.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "45 minutes",
    capacity: "20 children",
    schedule: "Daily at 10:00 AM, 2:00 PM, 4:00 PM",
    location: "Inventor's Workshop",
    rating: 4.9,
    themes: ["Science Education", "Steam Technology", "Hero Stories"],
    educationalFocus:
      "Teaches children about scientific method, teamwork, and how innovation can solve big problems. Shows how steam purification worked without frightening details about the plague.",
    steamElements: [
      "Mini steam engines",
      "Pressure demonstrations",
      "Clockwork toys",
      "Safe steam experiments",
    ],
    ageAppropriate:
      "Focuses on heroes and innovation rather than disease, using colorful demonstrations and hands-on activities.",
  },
  {
    id: 2,
    name: "The Great Purification: A Living History",
    category: "Historical Reenactment",
    targetAudience: "Families (All Ages)",
    description:
      "Witness the dramatic recreation of the moment when Professor Cogsworth and Lady Steamheart first activated the Great Purification Engine. A 30-minute spectacular with steam effects, period costumes, and inspiring speeches.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "30 minutes",
    capacity: "200 guests",
    schedule: "Daily at 12:00 PM, 3:00 PM, 6:00 PM",
    location: "Grand Steam Theater",
    rating: 4.8,
    themes: ["Historical Drama", "Steam Technology", "Triumph Over Adversity"],
    educationalFocus:
      "Shows how scientific collaboration and determination can overcome seemingly impossible challenges. Demonstrates the power of steam technology in an inspiring, family-friendly way.",
    steamElements: [
      "Massive steam effects",
      "Working purification engine replica",
      "Period steam costumes",
      "Mechanical stage effects",
    ],
    ageAppropriate:
      "Focuses on triumph and heroism, with dramatic but not frightening portrayals of the historical events.",
  },
  {
    id: 3,
    name: "Radiation Detectives: The Electromagnetic Mystery",
    category: "Interactive Game",
    targetAudience: "Teens & Adults (13+)",
    description:
      "Use Victorian-era electromagnetic detection devices to solve puzzles around the park. Learn how electromagnetic fields helped purify contaminated areas and discover hidden secrets of the Steam Age.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "60-90 minutes",
    capacity: "Teams of 4-6",
    schedule: "Hourly from 10:00 AM - 6:00 PM",
    location: "Park-wide treasure hunt",
    rating: 4.7,
    themes: [
      "Electromagnetic Science",
      "Problem Solving",
      "Historical Investigation",
    ],
    educationalFocus:
      "Teaches electromagnetic principles, radiation detection, and how these technologies were crucial in fighting the plague. Includes real science concepts in an engaging game format.",
    steamElements: [
      "Brass electromagnetic detectors",
      "Steam-powered clue dispensers",
      "Clockwork puzzle boxes",
      "Pneumatic message tubes",
    ],
    ageAppropriate:
      "Presents radiation and electromagnetic concepts scientifically without graphic content, focusing on the detective/mystery aspect.",
  },
  {
    id: 4,
    name: "Memories of the Blight: Survivor Stories",
    category: "Documentary Theater",
    targetAudience: "Adults & Seniors (18+)",
    description:
      "A powerful theatrical presentation featuring the testimonies of Blight survivors (portrayed by actors). Learn about the human cost of the plague and the courage of those who lived through the dark years of 1885-1887.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "50 minutes",
    capacity: "80 guests",
    schedule: "Tuesday, Thursday, Saturday at 7:00 PM",
    location: "Memorial Theater",
    rating: 4.6,
    themes: ["Human Resilience", "Historical Testimony", "Memorial"],
    educationalFocus:
      "Provides mature, respectful examination of how communities survived crisis through cooperation and innovation. Shows the human side of historical events.",
    steamElements: [
      "Period-accurate steam heating",
      "Mechanical memory devices",
      "Steam-powered lighting effects",
      "Clockwork sound systems",
    ],
    ageAppropriate:
      "Mature content about loss and survival, but focuses on hope and human strength rather than graphic details.",
  },
  {
    id: 5,
    name: "The Clockwork Carnival",
    category: "Interactive Entertainment",
    targetAudience: "Children & Families (3+)",
    description:
      "A whimsical carnival featuring mechanical performers, steam-powered games, and clockwork animals. Children can operate simple steam devices and watch mechanical puppet shows about friendship and cooperation.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "Continuous (30-min rotations)",
    capacity: "50 guests per rotation",
    schedule: "Daily 11:00 AM - 7:00 PM",
    location: "Clockwork Pavilion",
    rating: 4.9,
    themes: ["Mechanical Arts", "Family Fun", "Steam Entertainment"],
    educationalFocus:
      "Introduces young children to basic mechanical principles through play. Shows how steam power can create joy and wonder, not just solve problems.",
    steamElements: [
      "Mechanical puppet theater",
      "Steam-powered carousel",
      "Clockwork game booths",
      "Pneumatic ball games",
    ],
    ageAppropriate:
      "Completely child-friendly, focusing on wonder and magic of mechanical devices.",
  },
  {
    id: 6,
    name: "Tesla's Lightning Laboratory Live",
    category: "Science Demonstration",
    targetAudience: "Teens & Adults (12+)",
    description:
      "Experience the power of electricity that helped defeat the Blight! Watch spectacular Tesla coil demonstrations while learning how electromagnetic fields disrupted the plague's spread through contaminated air.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "25 minutes",
    capacity: "40 guests",
    schedule: "Daily at 11:30 AM, 1:30 PM, 3:30 PM, 5:30 PM",
    location: "Tesla's Laboratory",
    rating: 4.8,
    themes: [
      "Electrical Science",
      "Tesla Technology",
      "Plague Countermeasures",
    ],
    educationalFocus:
      "Demonstrates real electromagnetic principles and their historical applications. Shows how scientific understanding led to practical solutions during the crisis.",
    steamElements: [
      "Working Tesla coils",
      "Steam-powered generators",
      "Electromagnetic field visualizers",
      "Clockwork electrical meters",
    ],
    ageAppropriate:
      "Scientific focus on electromagnetic phenomena, with historical context about air purification rather than disease details.",
  },
  {
    id: 7,
    name: "The Brass Band's Memorial Concert",
    category: "Musical Performance",
    targetAudience: "All Ages",
    description:
      "The SteamLand Mechanical Orchestra performs stirring compositions written during the Steam Age. Music tells the story of loss, hope, and ultimate triumph, featuring steam-powered instruments and clockwork harmonies.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "40 minutes",
    capacity: "300 guests",
    schedule: "Sunday at 2:00 PM, 5:00 PM",
    location: "Grand Amphitheater",
    rating: 4.7,
    themes: ["Musical History", "Memorial", "Steam-Powered Arts"],
    educationalFocus:
      "Uses music to convey historical emotions and experiences. Shows how art and culture helped people cope with and remember difficult times.",
    steamElements: [
      "Steam-powered organ",
      "Mechanical string section",
      "Pneumatic wind instruments",
      "Clockwork percussion",
    ],
    ageAppropriate:
      "Universal appeal through music, conveying historical themes through melody and harmony rather than explicit content.",
  },
  {
    id: 8,
    name: "Contamination Containment Challenge",
    category: "Team Building Game",
    targetAudience: "Adults (18+)",
    description:
      "Teams work together to 'contain contamination' using period-appropriate steam technology. Learn about quarantine procedures, air purification systems, and the logistics of fighting an invisible enemy.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "75 minutes",
    capacity: "Teams of 6-8",
    schedule: "Weekends at 10:00 AM, 2:00 PM",
    location: "Simulation Center",
    rating: 4.5,
    themes: ["Crisis Management", "Team Cooperation", "Historical Simulation"],
    educationalFocus:
      "Teaches crisis management, scientific method, and teamwork through historical simulation. Shows how communities organized to fight the plague.",
    steamElements: [
      "Steam purification simulators",
      "Pressure monitoring systems",
      "Clockwork communication devices",
      "Mechanical containment systems",
    ],
    ageAppropriate:
      "Adult-oriented strategic thinking about crisis response, focusing on logistics and teamwork rather than graphic content.",
  },
  {
    id: 9,
    name: "Grandparents' Steam Stories",
    category: "Storytelling Circle",
    targetAudience: "Seniors & Grandchildren (55+/5+)",
    description:
      "Senior visitors share stories with children about 'the old days' while surrounded by gentle steam effects and clockwork displays. A bridge between generations, celebrating wisdom and wonder.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "30 minutes",
    capacity: "15 pairs",
    schedule: "Daily at 11:00 AM, 3:00 PM",
    location: "Memory Garden",
    rating: 4.9,
    themes: ["Intergenerational Bonding", "Storytelling", "Living History"],
    educationalFocus:
      "Encourages intergenerational connection and oral history sharing. Shows how stories preserve important lessons and memories.",
    steamElements: [
      "Gentle steam fountains",
      "Clockwork story prompts",
      "Mechanical memory boxes",
      "Steam-powered rocking chairs",
    ],
    ageAppropriate:
      "Designed for gentle sharing between generations, focusing on wisdom, love, and family connections.",
  },
  {
    id: 10,
    name: "The Radiation Garden: Beauty from Adversity",
    category: "Art Installation & Tour",
    targetAudience: "Adults & Teens (14+)",
    description:
      "Explore a unique garden where plants 'glow' with safe LED effects, representing how life adapted and thrived after the electromagnetic treatments. Learn about resilience, adaptation, and finding beauty in change.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "20 minutes",
    capacity: "25 guests",
    schedule: "Every 30 minutes, 10:00 AM - 8:00 PM",
    location: "Electromagnetic Garden",
    rating: 4.6,
    themes: ["Environmental Adaptation", "Art & Science", "Resilience"],
    educationalFocus:
      "Shows how life adapts to change and how challenges can lead to unexpected beauty. Demonstrates electromagnetic effects on plant growth in a positive way.",
    steamElements: [
      "Steam-powered irrigation",
      "Electromagnetic field generators",
      "Clockwork garden sculptures",
      "Pneumatic plant displays",
    ],
    ageAppropriate:
      "Focuses on positive adaptation and beauty, using electromagnetic effects as artistic elements rather than threatening forces.",
  },
  {
    id: 11,
    name: "The Great Debate: Progress vs. Tradition",
    category: "Interactive Theater",
    targetAudience: "Adults (16+)",
    description:
      "Audience members participate in a Victorian-era town hall meeting debating whether to adopt the new steam technologies. Experience the social tensions and difficult decisions faced during the transition to the Steam Age.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "45 minutes",
    capacity: "60 guests",
    schedule: "Friday & Saturday at 7:30 PM",
    location: "Town Hall Theater",
    rating: 4.4,
    themes: ["Social Change", "Decision Making", "Historical Perspective"],
    educationalFocus:
      "Explores how societies adapt to technological change and the challenges of progress. Shows multiple perspectives on historical events.",
    steamElements: [
      "Period steam heating",
      "Mechanical voting systems",
      "Clockwork debate timers",
      "Steam-powered amplification",
    ],
    ageAppropriate:
      "Mature themes about social change and progress, but focuses on civic engagement and historical understanding.",
  },
  {
    id: 12,
    name: "Little Engineers' Steam Workshop",
    category: "Hands-on Workshop",
    targetAudience: "Children (4-8)",
    description:
      "Tiny tots build simple steam-powered toys and learn about 'helpful steam' through songs, stories, and gentle hands-on activities. Meet friendly mechanical characters who explain how steam helps people.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "30 minutes",
    capacity: "12 children",
    schedule: "Daily at 10:30 AM, 1:00 PM, 3:30 PM",
    location: "Little Engineers' Corner",
    rating: 4.8,
    themes: ["Early STEM", "Gentle Learning", "Mechanical Friends"],
    educationalFocus:
      "Introduces very young children to basic engineering concepts through play and storytelling. Builds positive associations with technology and problem-solving.",
    steamElements: [
      "Child-safe steam toys",
      "Mechanical puppet friends",
      "Simple pressure demonstrations",
      "Clockwork building blocks",
    ],
    ageAppropriate:
      "Specifically designed for very young children, with friendly characters and completely safe, gentle introduction to steam concepts.",
  },
];

const getCategoryColor = (category) => {
  switch (category) {
    case "Educational Workshop":
      return "bg-blue-500";
    case "Historical Reenactment":
      return "bg-purple-500";
    case "Interactive Game":
      return "bg-green-500";
    case "Documentary Theater":
      return "bg-red-500";
    case "Interactive Entertainment":
      return "bg-yellow-500";
    case "Science Demonstration":
      return "bg-orange-500";
    case "Musical Performance":
      return "bg-pink-500";
    case "Team Building Game":
      return "bg-indigo-500";
    case "Storytelling Circle":
      return "bg-teal-500";
    case "Art Installation & Tour":
      return "bg-cyan-500";
    case "Interactive Theater":
      return "bg-violet-500";
    case "Hands-on Workshop":
      return "bg-lime-500";
    default:
      return "bg-gray-500";
  }
};

const getAudienceIcon = (audience) => {
  if (audience.includes("Children")) return <Heart className="w-4 h-4" />;
  if (audience.includes("Seniors")) return <Shield className="w-4 h-4" />;
  if (audience.includes("Adults")) return <Brain className="w-4 h-4" />;
  if (audience.includes("Teens")) return <Zap className="w-4 h-4" />;
  return <Users className="w-4 h-4" />;
};

function Events() {
  return (
    <div className="min-h-screen bg-muted p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Steam Age Events & Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Immersive events that tell the complete story of our Steam Age -
            from the dark days of the Crimson Blight to the triumph of human
            innovation. Each experience is carefully crafted for different
            audiences, ensuring everyone can connect with our shared history.
          </p>
        </div>

        {/* Educational Mission Statement */}
        <div className="mb-12 p-8 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-orange-800 dark:text-orange-200">
              Learning Through Experience
            </h2>
            <p className="text-lg text-orange-700 dark:text-orange-300 max-w-4xl mx-auto">
              Our events teach the complete story of the Steam Age - the
              challenges of the Crimson Blight, the effects of electromagnetic
              radiation, and the triumph of steam technology. Each experience is
              age-appropriate, ensuring that children learn about heroism and
              innovation, while adults can explore the deeper complexities of
              our alternative history.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-background border-2"
            >
              <div className="relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${getCategoryColor(event.category)} text-white`}
                  >
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{event.rating}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {event.name}
                </CardTitle>
                <div className="flex items-center gap-2 mb-3">
                  {getAudienceIcon(event.targetAudience)}
                  <span className="font-medium text-orange-600 dark:text-orange-400">
                    {event.targetAudience}
                  </span>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {event.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Event Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{event.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Separator />

                {/* Themes */}
                <div>
                  <h4 className="font-semibold mb-3">Event Themes</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.themes.map((theme, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {theme}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Educational Focus */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-500" />
                    Educational Focus
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.educationalFocus}
                  </p>
                </div>

                <Separator />

                {/* Steam Elements */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-500" />
                    Steam Technology Features
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {event.steamElements.map((element, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs justify-start"
                      >
                        {element}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Age Appropriate Content */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    Age-Appropriate Design
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.ageAppropriate}
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
                    Reserve Spot
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Educational Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <CardHeader>
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <CardTitle>For Young Minds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Children's events focus on heroes, innovation, and wonder. We
                teach about steam technology and scientific thinking through
                positive stories and hands-on activities.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardHeader>
              <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>For Curious Adults</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Adult experiences explore the full complexity of our history -
                the challenges of the Blight, the effects of radiation, and the
                social changes brought by steam technology.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardHeader>
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <CardTitle>For Wise Elders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Senior-focused events honor memory and wisdom, providing
                opportunities to share stories and connect with younger
                generations about resilience and hope.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Events;
