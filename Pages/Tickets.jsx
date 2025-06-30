import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Clock,
  Users,
  CalendarIcon,
  Star,
  Ticket,
  Plus,
  Minus,
  ShoppingCart,
  CreditCard,
} from "lucide-react";
import { format } from "date-fns";

const ticketTypes = [
  {
    id: "general",
    name: "General Admission",
    description: "Access to all attractions and basic events",
    price: 45,
    includes: [
      "All Attractions",
      "Basic Events",
      "Park Map",
      "Steam Show Access",
    ],
    restrictions: "Some premium events require additional booking",
  },
  {
    id: "premium",
    name: "Premium Steam Pass",
    description: "Full access including premium events and fast-track",
    price: 75,
    includes: [
      "All Attractions",
      "All Events",
      "Fast-Track Access",
      "Premium Dining Discount",
      "Souvenir Photo",
    ],
    restrictions: "Limited availability",
  },
  {
    id: "family",
    name: "Family Package (4 people)",
    description: "Perfect for families with children",
    price: 160,
    includes: [
      "4 General Admissions",
      "Family Events Priority",
      "Kids Workshop Access",
      "Group Photo",
    ],
    restrictions: "Must include at least 2 children under 12",
  },
  {
    id: "senior",
    name: "Senior Citizen",
    description: "Special pricing for visitors 65+",
    price: 35,
    includes: [
      "All Attractions",
      "Senior Events",
      "Comfortable Seating Priority",
      "Memory Garden Access",
    ],
    restrictions: "ID required, 65+ only",
  },
];

const attractions = [
  {
    id: 1,
    name: "The Clockwork Coaster",
    duration: "3 min",
    capacity: 24,
    times: [
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
    ],
  },
  {
    id: 2,
    name: "Airship Adventure",
    duration: "8 min",
    capacity: 16,
    times: [
      "10:15",
      "10:45",
      "11:15",
      "11:45",
      "12:15",
      "12:45",
      "13:15",
      "13:45",
      "14:15",
      "14:45",
      "15:15",
      "15:45",
      "16:15",
      "16:45",
      "17:15",
      "17:45",
    ],
  },
  {
    id: 3,
    name: "Steam Hammer Drop",
    duration: "2 min",
    capacity: 12,
    times: [
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45",
      "12:00",
      "12:15",
      "12:30",
      "12:45",
      "13:00",
      "13:15",
      "13:30",
      "13:45",
      "14:00",
      "14:15",
      "14:30",
      "14:45",
      "15:00",
      "15:15",
      "15:30",
      "15:45",
      "16:00",
      "16:15",
      "16:30",
      "16:45",
      "17:00",
      "17:15",
      "17:30",
      "17:45",
      "18:00",
    ],
  },
  {
    id: 4,
    name: "Tesla's Lightning Laboratory",
    duration: "7 min",
    capacity: 16,
    times: ["11:30", "13:30", "15:30", "17:30"],
  },
  {
    id: 5,
    name: "The Brass Carousel",
    duration: "4 min",
    capacity: 32,
    times: [
      "10:00",
      "10:20",
      "10:40",
      "11:00",
      "11:20",
      "11:40",
      "12:00",
      "12:20",
      "12:40",
      "13:00",
      "13:20",
      "13:40",
      "14:00",
      "14:20",
      "14:40",
      "15:00",
      "15:20",
      "15:40",
      "16:00",
      "16:20",
      "16:40",
      "17:00",
      "17:20",
      "17:40",
      "18:00",
    ],
  },
];

const events = [
  {
    id: 1,
    name: "Professor Cogsworth's Science Academy",
    duration: "45 min",
    capacity: 20,
    times: ["10:00", "14:00", "16:00"],
    audience: "Children (6-12)",
    price: 5,
  },
  {
    id: 2,
    name: "The Great Purification: A Living History",
    duration: "30 min",
    capacity: 200,
    times: ["12:00", "15:00", "18:00"],
    audience: "Families",
    price: 0,
  },
  {
    id: 3,
    name: "Radiation Detectives",
    duration: "90 min",
    capacity: 24,
    times: [
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ],
    audience: "Teens & Adults (13+)",
    price: 8,
  },
  {
    id: 4,
    name: "Memories of the Blight",
    duration: "50 min",
    capacity: 80,
    times: ["19:00"],
    audience: "Adults & Seniors (18+)",
    price: 12,
    days: ["Tuesday", "Thursday", "Saturday"],
  },
  {
    id: 5,
    name: "The Clockwork Carnival",
    duration: "30 min",
    capacity: 50,
    times: [
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
    ],
    audience: "Children & Families (3+)",
    price: 3,
  },
  {
    id: 6,
    name: "Tesla's Lightning Laboratory Live",
    duration: "25 min",
    capacity: 40,
    times: ["11:30", "13:30", "15:30", "17:30"],
    audience: "Teens & Adults (12+)",
    price: 6,
  },
  {
    id: 7,
    name: "The Brass Band's Memorial Concert",
    duration: "40 min",
    capacity: 300,
    times: ["14:00", "17:00"],
    audience: "All Ages",
    price: 0,
    days: ["Sunday"],
  },
  {
    id: 8,
    name: "Grandparents' Steam Stories",
    duration: "30 min",
    capacity: 15,
    times: ["11:00", "15:00"],
    audience: "Seniors & Grandchildren (55+/5+)",
    price: 4,
  },
];

function Tickets() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTickets, setSelectedTickets] = useState({});
  const [selectedAttractions, setSelectedAttractions] = useState({});
  const [selectedEvents, setSelectedEvents] = useState({});
  const [currentStep, setCurrentStep] = useState("tickets");

  const updateTicketQuantity = (ticketId, change) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [ticketId]: Math.max(0, (prev[ticketId] || 0) + change),
    }));
  };

  const toggleAttractionTime = (attractionId, time) => {
    setSelectedAttractions((prev) => ({
      ...prev,
      [`${attractionId}-${time}`]: !prev[`${attractionId}-${time}`],
    }));
  };

  const toggleEventTime = (eventId, time) => {
    setSelectedEvents((prev) => ({
      ...prev,
      [`${eventId}-${time}`]: !prev[`${eventId}-${time}`],
    }));
  };

  const calculateTotal = () => {
    let total = 0;

    // Ticket prices
    Object.entries(selectedTickets).forEach(([ticketId, quantity]) => {
      const ticket = ticketTypes.find((t) => t.id === ticketId);
      if (ticket) total += ticket.price * quantity;
    });

    // Event prices
    Object.entries(selectedEvents).forEach(([key, selected]) => {
      if (selected) {
        const eventId = key.split("-")[0];
        const event = events.find((e) => e.id === Number.parseInt(eventId));
        if (event && event.price) total += event.price;
      }
    });

    return total;
  };

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((sum, qty) => sum + qty, 0);
  };

  const getSelectedDay = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[selectedDate.getDay()];
  };

  const isEventAvailable = (event) => {
    if (!event.days) return true;
    return event.days.includes(getSelectedDay());
  };

  return (
    <div className="min-h-screen bg-muted p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Book Your Steam Age Adventure
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reserve your tickets and plan your perfect day at SteamLand. Choose
            from our attractions, events, and experiences to create
            unforgettable memories.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Booking Section */}
          <div className="lg:col-span-2">
            <Tabs
              value={currentStep}
              onValueChange={setCurrentStep}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="tickets">1. Tickets</TabsTrigger>
                <TabsTrigger value="date">2. Date</TabsTrigger>
                <TabsTrigger value="attractions">3. Attractions</TabsTrigger>
                <TabsTrigger value="events">4. Events</TabsTrigger>
              </TabsList>

              {/* Step 1: Ticket Selection */}
              <TabsContent value="tickets" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ticket className="w-5 h-5 text-orange-500" />
                      Choose Your Tickets
                    </CardTitle>
                    <CardDescription>
                      Select the number and type of tickets you need
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {ticketTypes.map((ticket) => (
                      <div key={ticket.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-lg font-semibold">
                              {ticket.name}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {ticket.description}
                            </p>
                            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-2">
                              ${ticket.price}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() =>
                                updateTicketQuantity(ticket.id, -1)
                              }
                              disabled={!selectedTickets[ticket.id]}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">
                              {selectedTickets[ticket.id] || 0}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateTicketQuantity(ticket.id, 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Includes:</h4>
                          <div className="flex flex-wrap gap-1">
                            {ticket.includes.map((item, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                          {ticket.restrictions && (
                            <p className="text-xs text-muted-foreground mt-2">
                              <strong>Note:</strong> {ticket.restrictions}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Step 2: Date Selection */}
              <TabsContent value="date" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-orange-500" />
                      Select Your Visit Date
                    </CardTitle>
                    <CardDescription>
                      Choose when you'd like to visit SteamLand
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        className="rounded-md border"
                      />
                    </div>
                    {selectedDate && (
                      <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <p className="text-center">
                          <strong>Selected Date:</strong>{" "}
                          {format(selectedDate, "EEEE, MMMM do, yyyy")}
                        </p>
                        <p className="text-center text-sm text-muted-foreground mt-1">
                          Some events are only available on specific days
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Step 3: Attraction Reservations */}
              <TabsContent value="attractions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-orange-500" />
                      Reserve Attraction Times
                    </CardTitle>
                    <CardDescription>
                      Book specific time slots for popular attractions (Optional
                      but recommended)
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {attractions.map((attraction) => (
                      <div
                        key={attraction.id}
                        className="border rounded-lg p-4"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">
                              {attraction.name}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {attraction.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {attraction.capacity} riders
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm mb-3">
                            Available Times:
                          </h4>
                          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                            {attraction.times.map((time) => (
                              <Button
                                key={time}
                                variant={
                                  selectedAttractions[
                                    `${attraction.id}-${time}`
                                  ]
                                    ? "default"
                                    : "outline"
                                }
                                size="sm"
                                className="text-xs"
                                onClick={() =>
                                  toggleAttractionTime(attraction.id, time)
                                }
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Step 4: Event Reservations */}
              <TabsContent value="events" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      Reserve Event Experiences
                    </CardTitle>
                    <CardDescription>
                      Book your spots for special events and shows
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {events.map((event) => (
                      <div
                        key={event.id}
                        className={`border rounded-lg p-4 ${
                          !isEventAvailable(event) ? "opacity-50" : ""
                        }`}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">
                              {event.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {event.audience}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {event.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {event.capacity} guests
                              </span>
                              {event.price > 0 && (
                                <span className="font-medium text-orange-600 dark:text-orange-400">
                                  +${event.price}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {!isEventAvailable(event) ? (
                          <p className="text-sm text-muted-foreground">
                            Not available on {getSelectedDay()}s
                            {event.days &&
                              ` (Available: ${event.days.join(", ")})`}
                          </p>
                        ) : (
                          <div>
                            <h4 className="font-medium text-sm mb-3">
                              Available Times:
                            </h4>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                              {event.times.map((time) => (
                                <Button
                                  key={time}
                                  variant={
                                    selectedEvents[`${event.id}-${time}`]
                                      ? "default"
                                      : "outline"
                                  }
                                  size="sm"
                                  className="text-xs"
                                  onClick={() =>
                                    toggleEventTime(event.id, time)
                                  }
                                >
                                  {time}
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-orange-500" />
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Selected Date */}
                {selectedDate && (
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <p className="font-medium text-sm">Visit Date</p>
                    <p className="text-sm text-muted-foreground">
                      {format(selectedDate, "EEEE, MMM do, yyyy")}
                    </p>
                  </div>
                )}

                {/* Tickets Summary */}
                <div>
                  <h4 className="font-medium mb-2">
                    Tickets ({getTotalTickets()})
                  </h4>
                  {Object.entries(selectedTickets).map(
                    ([ticketId, quantity]) => {
                      if (quantity === 0) return null;
                      const ticket = ticketTypes.find((t) => t.id === ticketId);
                      return (
                        <div
                          key={ticketId}
                          className="flex justify-between text-sm"
                        >
                          <span>
                            {ticket.name} x{quantity}
                          </span>
                          <span>${ticket.price * quantity}</span>
                        </div>
                      );
                    }
                  )}
                </div>

                {/* Events Summary */}
                {Object.keys(selectedEvents).some(
                  (key) => selectedEvents[key]
                ) && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-2">Events</h4>
                      {Object.entries(selectedEvents).map(([key, selected]) => {
                        if (!selected) return null;
                        const [eventId, time] = key.split("-");
                        const event = events.find(
                          (e) => e.id === Number.parseInt(eventId)
                        );
                        return (
                          <div key={key} className="text-sm mb-1">
                            <div className="flex justify-between">
                              <span className="text-xs">{event.name}</span>
                              {event.price > 0 && <span>${event.price}</span>}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              at {time}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}

                <Separator />

                {/* Total */}
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-orange-600 dark:text-orange-400">
                    ${calculateTotal()}
                  </span>
                </div>

                {/* Checkout Button */}
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
                  disabled={getTotalTickets() === 0}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Proceed to Checkout
                </Button>

                {/* Info */}
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Free cancellation up to 24 hours before visit</p>
                  <p>• Attraction reservations are optional but recommended</p>
                  <p>• Some events have age restrictions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
