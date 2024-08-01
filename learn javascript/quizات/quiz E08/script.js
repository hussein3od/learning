let day = "  wednesday  ";
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1)
switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointment Available");
    break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
    break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
    break;
    default:
        console.log("It Is Not A Valid Day")
}