export function getPreveiousYearData() {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 1);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const previousYearDate = `${year}-${month}-${day}`;
  // Output: "2022-06-26" (assuming current date is 2023-06-26)
  console.log(previousYearDate);
  return previousYearDate;
}

export function formatDate(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero if needed
  const day = ('0' + date.getDate()).slice(-2); // Add leading zero if needed
  const hours = ('0' + date.getHours()).slice(-2); // Add leading zero if needed
  const minutes = ('0' + date.getMinutes()).slice(-2); // Add leading zero if needed
  const seconds = ('0' + date.getSeconds()).slice(-2); // Add leading zero if needed
  const formattedDate = `${day}/${month}/${year}`; // Format the date as DD/MM/YYYY
  const formattedTime = `${hours}:${minutes}:${seconds}`; // Format the time as HH:MM:SS
  console.log(unixTimestamp, `${formattedDate} ${formattedTime}`);
  return `${formattedDate} ${formattedTime}`; // Combine the date and time
}
