const accountId = 3820804922 //can't change
let accountEmail = "ankit@gmail.com" //we can change
var accountpassword = "12345"//never use var as it changes value from everwhere
accountcity = "delhi"//reserve memory for varia
let accountstate;//undefined value

// accountId = 2
accountEmail = "aj54@gmail.com"
accountpassword = "1518"
accountcity = "bengaluru"
console.log(accountId);
console.table([accountId,accountEmail,accountpassword,accountcity,accountstate])

/*NOTE:prefer not use var it do not support block scope{} &,functional scope*/