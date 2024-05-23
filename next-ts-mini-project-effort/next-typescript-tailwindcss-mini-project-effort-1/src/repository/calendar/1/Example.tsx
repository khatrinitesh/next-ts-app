

interface CalendarProps {
    year: number;
    month: number;
  }

const Example: React.FC<CalendarProps> = ({year ,month}) => {

    const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Generate an array of days in the month
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  // Generate an array of days in the previous month for padding
  const previousMonthDays = Array.from(
    { length: firstDayOfMonth },
    (_, index) => -firstDayOfMonth + index + 1
  );

  // Generate an array of days in the next month for padding
  const nextMonthDays = Array.from(
    { length: 42 - (daysArray.length + firstDayOfMonth) },
    (_, index) => index + 1
  );

  return (
    <>
      <div className="flex flex-col items-center">
      <div className="font-semibold text-xl mb-4">{`${year} - ${month + 1}`}</div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-gray-600 font-semibold">
            {day}
          </div>
        ))}
        {/* Previous month days */}
        {previousMonthDays.map(day => (
          <div key={day} className="text-center text-gray-400">
            {day}
          </div>
        ))}
        {/* Current month days */}
        {daysArray.map(day => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
        {/* Next month days */}
        {nextMonthDays.map(day => (
          <div key={day} className="text-center text-gray-400">
            {day}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Example;
