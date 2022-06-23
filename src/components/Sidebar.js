import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64 bg-indigo-300 text-black ">
      <SmallCalendar />
      <CreateEventButton />
    </aside>
  );
}
