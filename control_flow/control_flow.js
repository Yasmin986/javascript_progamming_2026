let userRole = "Admin";
let accessLevel;

if(userRole === "Admin"){
    accessLevel = "Full Access";
}else if(userRole === "Manager"){
    accessLevel = "Limited access";
}else{
    accessLevel = "No Access";
}

console.log("Access = ",accessLevel);
let isLoggedIn = true;
let userMessage ;

if (isLoggedIn){
    if(userRole === "Admin"){
        userMessage = "Welcome, Admin!"
    } else{
        userMessage = "Welcome User!"
    }
}else{
    userMessage = "Please Login or contact Administrator!"
}

console.log("User Message = ",userMessage)

let userType = "Admin";
let userCategory;

switch (userType){
    case "Admin":
        userCategory= "Administrator"
        break;
    case "Manager":
        userCategory= "Manager"
        break;
    case "Subscriber":
        userCategory= "Subscriber"
        break;
    default:
        userCategory = "Unknown"
}

console.log("User Category = ",userCategory)