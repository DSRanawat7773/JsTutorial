
const user = {
    username: "Dalpat",
    id: 123
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and id is ${anyObject.id}`)
}

// handleObject(user);

handleObject({
    username: "Abhijeet",
    id: 399
})

handleObject.username;

