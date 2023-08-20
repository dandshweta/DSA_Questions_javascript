// Write a program to convert days into years, weeks and days.{Hint: Input-373
//     days Output-1Year,1Weak,1day}

function convertDays(days) {
  let years = days / 365;
  let remainingdays = days % 365;

  let weeks = remainingdays / 7;
  let day = (days % 365) % 7;
  return `years ${years},weeks ${weeks}, day ${day}`;
}
console.log(convertDays(537));
