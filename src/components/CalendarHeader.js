import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center justify-between	bg-black mb-4">
    <span  className="px-4 py-2 flex items-center justify-evenly	">  <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-slate-100 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-slate-100 mx-2">
          chevron_right
        </span>
      </button>
     
      <h2 className="ml-4 text-xl text-slate-300 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
      </span>
   <h1 className="mr-10 text-xl text-gray-400 font-extrabold	">
        Calendar
      </h1>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5 text-gray-400"
      >
       Reset
      </button>
    
    </header>
  );
}