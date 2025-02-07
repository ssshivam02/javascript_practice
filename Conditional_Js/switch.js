const month = 5

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Febuary")
        break;   // break is important to return from here
    case 3:
        console.log("March")
        break;
    default:
        console.log("Invalid month",month)
        break;
}