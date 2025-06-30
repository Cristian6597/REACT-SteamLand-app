import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Users,
  MapPin,
  Calendar,
  Zap,
  Shield,
  Cog,
  Beaker,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Badge className="bg-orange-500 text-white text-lg px-4 py-2 mb-4">
              Est. 1887 - The Age of Steam Salvation
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
            SteamLand
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-orange-100">
            Where Victorian Innovation Meets Modern Wonder
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-orange-200">
            Step into a world where steam-powered marvels were born from
            humanity's greatest struggle - the fight against the Great
            Pestilence of 1885
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              Purchase Tickets
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-100 hover:bg-orange-500/20 px-8 py-4 text-lg bg-transparent"
            >
              Explore Our Story
            </Button>
          </div>
        </div>
      </section>
      {/* The Great Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              The Chronicles of Steam Salvation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In the year 1885, when darkness threatened to consume
              civilization, brilliant minds forged a new path through steam and
              steel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Victorian Steam Laboratory"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-500" />
                <h3 className="text-3xl font-bold">The Great Pestilence</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The year 1885 brought forth a plague unlike any seen before - a
                pestilence that made the Black Death of 1347 seem like a mere
                whisper. This new scourge, known as the{" "}
                <strong>Crimson Blight</strong>, spread faster than wildfire and
                proved resistant to all traditional remedies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As cities fell and hope dwindled, the greatest minds of the
                Victorian era gathered in secret. Led by the brilliant Professor
                Cogsworth and the enigmatic Lady Steamheart, they discovered
                that high-pressure steam and electromagnetic fields could purify
                the very air we breathe.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Cog className="w-8 h-8 text-orange-500" />
                <h3 className="text-3xl font-bold">The Steam Revolution</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What began as a desperate fight for survival evolved into the
                greatest technological revolution in human history.
                Steam-powered purification systems, clockwork medical devices,
                and pneumatic transportation networks transformed society.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By 1887, the plague was defeated, but the world had changed
                forever. The <strong>Age of Steam</strong>
                had begun, bringing with it wonders that previous generations
                could never have imagined.
              </p>
            </div>
            <div className="md:order-1">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Steam-powered city"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="SteamLand construction"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Beaker className="w-8 h-8 text-blue-500" />
                <h3 className="text-3xl font-bold">Birth of SteamLand</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SteamLand was conceived as more than just an amusement park. It
                stands as a monument to human ingenuity and resilience - a
                celebration of the steam-powered innovations that saved
                civilization.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every attraction tells the story of our triumph over adversity.
                From the Clockwork Coaster that mimics the great purification
                engines, to Tesla's Lightning Laboratory that honors the
                electromagnetic discoveries that helped defeat the plague.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Here, families gather not just for entertainment, but to
                remember and honor the heroes who forged our steam-powered
                future.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Park Information Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Experience the Wonder</h2>
            <p className="text-xl text-muted-foreground">
              Immerse yourself in the marvels of the Steam Age
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <CardTitle>10 Unique Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From thrilling steam-powered coasters to educational workshops
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Family Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Adventures for all ages, from toddlers to grandparents
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Educational</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn about Victorian innovation and steam technology
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Immersive Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Live steam effects, mechanical shows, and period atmosphere
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Park Hours & Info */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <CardTitle>Operating Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-medium">9:00 AM - 10:00 PM</span>
                </div>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground">
                  Extended hours during Steam Festival season
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <CardTitle>Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">New Victorian District</p>
                <p className="text-muted-foreground">
                  1887 Cogsworth Avenue
                  <br />
                  Steamheart City, SC 18870
                </p>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground">
                  Accessible via Pneumatic Tube Network
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-orange-500" />
                  <CardTitle>Special Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <p className="font-medium">Steam Festival</p>
                  <p className="text-sm text-muted-foreground">Every October</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Inventor's Fair</p>
                  <p className="text-sm text-muted-foreground">
                    Monthly workshops
                  </p>
                </div>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground">
                  Check our events calendar for details
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Steam Age?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join us for an unforgettable journey through the marvels of
            Victorian innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 text-lg"
            >
              Buy Tickets Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <Link to="/attractions">Explore Attractions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
