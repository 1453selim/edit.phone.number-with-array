
/* let numbers = "12345689456";
const phonenum =number.split('')
console.log(phonenum)
phonenum.unshift("+")
console.log(phonenum)
phonenum[2] =" (2"
phonenum[4]="4) "
console.log(phonenum)

phonenum.splice(8,4,"",9,4,5,6)
console.log(phonenum)
number = phonenum.join(" ")
console.log(number)


let phonenum = "123456";

const phoneArr1 = phonenum.split("").join("-");
console.log(phoneArr1)
phonenum = "12485245656";

const phoneArr = phonenum.split("");
console.log(phoneArr);

phoneArr.unshift("+")
console.log(phoneArr);

phoneArr.splice(2,0," (")
console.log(phoneArr);

phoneArr.splice(6,0,") ")
console.log(phoneArr);

phoneArr.splice(10,0," ")
console.log(phoneArr);

console.log(phoneArr.join(""));// */


let number ="902164294883"//+90 216 429 4883
var phoneNumber = number.split("");
console.log(phoneNumber);
phoneNumber.unshift("+");
console.log(phoneNumber) //['+', '9', '0', '2', '1', '6', '2', '4', '9', '4', '8', '8', '3']
phoneNumber.splice(3,0," (")
console.log(phoneNumber)// ['+', '9', '0', ' (', '2', '1', '6', '2', '4', '9', '4', '8', '8', '3']
phoneNumber.splice(7,0,") ");
console.log(phoneNumber)//['+', '9', '0', ' (', '2', '1', '6', ') ', '4', '2', '9', '4', '8', '8', '3']
phoneNumber.splice(11,0,"");
console.log(phoneNumber)
const phoneNumbers = phoneNumber.join(" ");
console.log(phoneNumbers)










