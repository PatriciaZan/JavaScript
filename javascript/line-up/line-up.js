//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let response = "th";

  const lastTwoNumbers = number % 100;
  const lastNumber = number % 10;

  if (lastTwoNumbers < 11 || lastTwoNumbers > 13) {
    if (lastNumber === 1) response = "st";
    else if (lastNumber === 2) response = "nd";
    else if (lastNumber === 3) response = "rd";
  }

  return (
    name +
    ", you are the " +
    number +
    response +
    " customer we serve today. Thank you!"
  );
};

format("Mary", 1);
