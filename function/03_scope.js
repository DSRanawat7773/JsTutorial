// let a = 5;
// const b = 8;
// var c = 10;

if(true){
    let a = 5;
    const b = 8;
    var c = 10;
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Dalpat"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    //GIVES ERROR

    two()
}

one();

