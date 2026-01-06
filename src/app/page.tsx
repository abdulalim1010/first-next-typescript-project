"use client";

import Banner from "@/components/Banner";
import EventCard from "@/components/EventCard";
import useEvents from "../../hooks/useEvents";


export default function Home() {
  const { events, loading, error } = useEvents();

  return (
    <div>
      <Banner />

      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>

        {loading && <p>Loading events...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
