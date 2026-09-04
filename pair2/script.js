console.log('Happy developing ✨')
//
//
// let a, b;
// a = "1";
// b = 1;
//
// console.log(a == b);
// console.log(a === b);
//
// if (умова) {
//     команди;
// }
//
// let temp = prompt("");
// let result;
// if (temp <= 0) {
//     result = "холодно";
// }
// else if (temp >= 0 && temp <=10) {
//     result = "норм";
// }
// else if (temp > 10) {
//     result = "жарко";
// }
// alert(result)
//
//__________________
// let n = prompt("")
// let res;
//
// if (n % 2 === 0) {
//     res = "парне"
// }
// else {
//     res = "непарне"
// }
// alert(res)
// _______________________
// let login = "admin";
// let password = "12345";
//
// let userLogin = prompt("");
// let userPassword = prompt("");
//
// if (userLogin === login && userPassword === password) {
//     alert("allowed")
// } else {
//     alert("not allowed")
// }
//
// let deliver = prompt("what type")
//
// let cost;
//
// switch (deliver) {
//     case "courier":
//         cost = 200;
//         break;
//     case "mail":
//         cost = 100;
//         break;
//     case "pickup":
//         cost = 0;
//         break;
//     default:
//         cost = "n/a"
// }
// console.log(cost)
//
// _______________________________
// let day = prompt("what day")
//
// let result;
//
// switch (day) {
//     case "1":
//         result = "monday";
//         break;
//     case "2":
//         result = "tuesday";
//         break;
//     case "3":
//         result = "wednesday";
//         break;
//     case "4":
//         result = "thursday";
//         break;
//     case "5":
//         result = "friday";
//         break;
//     case "6":
//         result = "sat";
//         break;
//     case "7":
//         result = "sun";
//         break;
// }
// console.log(result)
// _____________________________________________

let productName = prompt("назва");
let productPrice = +prompt("ціна");
let productCount = +prompt("скіки");

let hasCard = confirm("є нема карта");

let deliveryType = prompt("яка доставка")
let deliveryCost;

let totalPrice, discount = 0, cardDiscount;

totalPrice = productPrice * productCount;

if (totalPrice > 2000) {
    discount = 0.1
} else if (totalPrice > 1000) {
    discount = 0.05
}

if (hasCard) {
    totalPrice = totalPrice - (totalPrice * discount) - (totalPrice * 0.1)
}
else {
    totalPrice = totalPrice - (totalPrice * discount)
}

switch (deliveryType) {
    case "mail":
        deliveryCost = 100;
        break;
    case "courier":
        deliveryCost = 200;
        break;
    case "pickup":
        deliveryCost = 0;
        break;
}
totalPrice = totalPrice + deliveryCost
alert(totalPrice)

