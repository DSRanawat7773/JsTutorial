
//for loop

const arr = ["Dalpat", "Ranjeet", "Rishabh", "Punit", "Rohit"];
let i = 1;
for(let index = 0; index < arr.length; index++) {

    const element = arr[index];;
    if(element=="Rishabh"){
        continue;
    }

    console.log(`${i} : ${element}`);
    i++;
}
