import React, { useContext } from "react";
// import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border bg-slate-400	 p-2 rounded-lg flex items-center shadow-md hover:shadow-2xl mt-10"
    >
      <span className="pl-3 pr-7 text-slate-100"> Add Event</span>
    </button>
  );
}
