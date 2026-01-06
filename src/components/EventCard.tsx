import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TEvent } from "../../types/events";


type Props = {
  event?: TEvent;
};

export default function EventCard({ event }: Props) {
  if (!event) return null;

  return (
    <Card className="overflow-hidden">
      <Image
        src={event.image || "/placeholder.jpg"}
        alt={event.title}
        width={400}
        height={250}
        className="h-48 w-full object-cover"
      />

      <CardContent className="p-4">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {event.description}
        </p>

        <div className="mt-3 text-sm">
          <p>📍 {event.location}</p>
          <p>📅 {event.date}</p>
        </div>
      </CardContent>
    </Card>
  );
}
