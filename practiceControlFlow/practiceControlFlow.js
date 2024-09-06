let person = prompt("Who are you?(Employee, Enrolled Member, Subscriber, Non-Subscriber)");

switch (person) {
    case "Employee":
        console.log("You are authorized to have access to \"Dietary Services\"");
        break;
    case "Enrolled Member":
        console.log("You are authorized to have access to \"Dietary Services\" and one-on-one interaction with a deitician");
        break;
    case "Subscriber":
        console.log("You are authorized to have partial access to facilitate \"Dietary Services\" only");
        break;
    case "Non-Subscriber":
        console.log("You need to enroll or at least subscribe first to avail this facility");
        break;
    default:
        console.log("Please input a valid answer: ");
        break;
}


     