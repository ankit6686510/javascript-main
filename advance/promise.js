// First promise
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("promise consumed");
});

// Second promise
const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("async task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("async 2 resolved");
});

// Third promise
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "chai", email: "ankit6686510@gmail.com"});
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user);
});


// Fourth promise
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username: "ankit", password: "123"});
        } else {
            reject('ERROR: something went wrong');
        }
    }, 2000);
}).then((user) => {
    console.log(user);
}).catch(function(error) {
    console.log(error);
}).finally(()=>{"the promise is either resolved or rejected"})

// Incorrect code below
// promsieFour.then((user) =>{
//     console.log(user);
//     return user.username
// })
// console.log(username)

// Promise definition
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR:js went wrong');
        }
    }, 1000);
});

// Asynchronous function to consume the promise
async function cosumepromisefive() {
    // const response = await promiseFive; // Waiting for promiseFive to resolve or reject
    // console.log(response); // Logging the response after the promise is settled
    //TRY AND CATHCH HANDLE THE ERROR GRACEFULLY
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

cosumepromisefive(); // Calling the async function

// async function getalluser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
//     const data = await response.json()
//     console.log(data)
//    } catch (error) {
//     console.log("E:",error);
//    }
// }
// getalluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))