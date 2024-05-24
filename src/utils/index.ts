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

export function formatPhoneNumber(
  event: React.KeyboardEvent<HTMLInputElement>,
) {
  const newValue: string = (event.target as HTMLInputElement).value.replace(
    /\D/g,
    "",
  );
  const formattedValue: string = newValue
    .replace(/^(\d\d)(\d)/g, "($1)$2")
    .replace(/(\d{5})(\d)/, "$1-$2");
  (event.target as HTMLInputElement).value = formattedValue;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed in JavaScript
  const year = date.getFullYear();

  const dayString = day < 10 ? `0${day}` : `${day}`;
  const monthString = month < 10 ? `0${month}` : `${month}`;

  return `${dayString}/${monthString}/${year}`;
}
