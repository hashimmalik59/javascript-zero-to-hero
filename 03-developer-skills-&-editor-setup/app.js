// Challenge # 1
// const temperature = [17, 21, 23];
// let emptyStr = "";
// const printForecast = function (arr) {
//     for (let i = 0; i < temperature.length; i++) {
//         emptyStr = `...${temperature[i]} C in ${i + 1} days`;
//         console.log(emptyStr);
//     }
// }
// console.log(printForecast());
const temperature = [17, 21, 23];

const printForecast = function (arr) {
    let str = ""; // Function ke andar rakha takay har bar fresh start ho
    for (let i = 0; i < arr.length; i++) {
        // '+=' use kiya takay string barhti jaye
        str += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(str + "..."); // Aakhri dots add kar diye
}

printForecast(temperature);