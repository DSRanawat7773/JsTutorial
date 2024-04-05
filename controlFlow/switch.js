
const day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

        case 2:
            console.log("Tuesday");
            break;
        
        case 3:
            console.log("Wednesday");
            break;
        
        case 4:
            console.log("Thursday");
            break;

        case 5:
            console.log("Friday");
            break;
        
        case 6:
            console.log("Saturday");
            break;

        case 7:
            console.log("Sunday");
            break;

        default:
            console.log("Not Matched.")
}

//FALSY VALUES

//false, 0, -0, BigIny 0n, "", null, undefined, NaN

//TRUTHY VALUES

//"0", 'false', " ", [], {}, function(){}


//terniary operator 

//condition ? true : false

const iceTea = 100;
iceTea <= 80 ? console.log("Less than 80") : console.log("More than 80")