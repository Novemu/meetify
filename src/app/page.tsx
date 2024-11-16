"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const App: React.FC = () => {
  // State for selected dates
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  // Function to handle date selection
  const handleDateClick = (date: Date) => {
    // Check if the date is already selected
    const isAlreadySelected = selectedDates.some(
      (selectedDate) => selectedDate.toDateString() === date.toDateString()
    );

    if (isAlreadySelected) {
      // Remove the date if already selected
      setSelectedDates(
        selectedDates.filter(
          (selectedDate) => selectedDate.toDateString() !== date.toDateString()
        )
      );
    } else {
      // Add the new date to the selection
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <div>
      <h1 className="flex justify-center text-7xl bold">Meetify</h1>
      <div className="ml-20 mt-20">
        <Calendar
          onClickDay={handleDateClick}
          key={selectedDates.length}
          tileClassName={({ date }) =>
            selectedDates.some(
              (selectedDate) =>
                selectedDate.toDateString() === date.toDateString()
            )
              ? "selected-date"
              : undefined
          }
        />
        <p>Selected Dates:</p>
        <ul>
          {selectedDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>

        {/* Add custom styles for selected dates */}
        <style>
          {`
          .react-calendar__tile.selected-date {
            background-color: #0078d7;
            color: white;
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default App;
