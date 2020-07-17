console.log("Hello this is Day 3 assignment");

//Q.1 even odd using function & also taking input form user
var num = Number(prompt("Enter a number to check even and odd","2"));

function ev_od(num){
    if(num%2==0){
        console.log("Its an even number.");
    }
    else{
        console.log("Its an odd number.");
    }
}
ev_od(num);


//Q.2. OS name and version name

let OS_Ver = prompt("Enter your OS name followed by its version : ");

var Output
Output = OS_Ver.split(' ');
console.log(Output);
console.log(`The OS name is ${Output['0']} and version is ${Output['1']}`);


//Q.3 Grade calculator
var per = Number(prompt("Enter the percentage : ","35"));
if(per>=80){
    console.log("'O' Grade.");
}
else if(per<80 && per>=75){
    console.log(`Marks are ${per} and grade is A`);

}
else if (per<75 && per>=65){
    console.log(`Marks are ${per} and grade is B`);
}
else if(per<65 && per>=55){
    console.log(`Marks are ${per} and grade is C`);
}
else if(per<55 && per>=45){
    console.log(`Marks are ${per} and grade is D`);
}
else if(per<45 && per>=35){
    console.log(`Marks are ${per} and grade is E`);
}
else {
    console.log(`Marks are ${per} and grade is F`);
}


// same program with switch
var gra = Number(prompt("Enter the percentage between 0-100 : ","35"));
switch(gra/10)
{
    case 10:
        case 9:
            case 8:
            console.log(` Using switch Marks are ${gra} and grade is A`);
    break;
    case 7:
        console.log(` Using switch Marks are ${gra} and grade is B`);
        break;
        case 6:
            console.log(` Using switch Marks are ${gra} and grade is C`);
            break;
            case 5:
                console.log(` Using switch Marks are ${gra} and grade is D`);
                break;
                case 4:
                    console.log(` Using switch Marks are ${gra} and grade is E`);
                    break;
                    default:
                        console.log(` Using switch Marks are ${gra} and grade is F`)


        }
