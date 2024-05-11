export const formatUnixDateString = (unixString: string): string => {
  // Your Unix timestamp in milliseconds
  const timestamp = parseInt(unixString);

  // Create a new Date object and pass the timestamp as an argument
  const date = new Date(timestamp);

  // Use the various Date methods to get the components of the date (year, month, day, etc.)
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Month is zero-based, so add 1
  const day = date.getDate();

  let dayString;
  let monthString;

  if (day <= 9) {
    dayString = "0" + day;
  }

  if (month <= 9) {
    monthString = "0" + month;
  }

  // Create a readable string using the obtained components
  const dateString = dayString + "/" + monthString + "/" + year;

  return dateString;
};
