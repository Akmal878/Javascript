// faulty calculation with 10% error


// let num1 = prompt("Enter the first number: ");
// let num2 = prompt("Enter the second number: ");

// let randNum = Math.random();

// let operation = prompt("Enter the operation: ");
// if(operation == "+")
//     {
//         if(randNum < 0.1)
//         {
//             console.log(parseInt(num1) - parseInt(num2));
//         }
//         else{
//             console.log(parseInt(num1) + parseInt(num2));
//         }
// }
// else if(operation == "-"){
//     if(randNum < 0.1)
//         {
//             console.log(parseInt(num1) * parseInt(num2));
//         }
//         else{
//             console.log(parseInt(num1) - parseInt(num2));
//         }
// }
// else if(operation == "*"){
//     if(randNum < 0.1)
//         {
//             console.log(parseInt(num1) / parseInt(num2));
//         }
//         else{
//             console.log(parseInt(num1) * parseInt(num2));
//         }
// }
// else if(operation == "/"){
//     if(randNum < 0.1)
//         {
//             console.log(parseInt(num1) ** parseInt(num2));
//         }
//         else{
//             console.log(parseInt(num1) / parseInt(num2));
//         }
// }
// else{
//     console.log("Invalid operation");
// }



// let boxes= document.getElementsByClassName("box")

// function getRandomColor(){
//         let val1 = Math.ceil(0 + Math.random()* 255);
//         let val2 = Math.ceil(0 + Math.random()* 255);
//         let val3 = Math.ceil(0 + Math.random()* 255);
//         return `rgb(${val1}, ${val2}, ${val3})`
// }

// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })


let heroes =["IronMan", "Thor", "Hulk", "Captain America", "Black Widow", "Spider-Man"];
console.log(heroes);
console.group(heroes.length);

for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}
console.group(heroes.length);

heroes.push("Green-lantern");
heroes.unshift("Flash");


for(let hero of heroes){
    console.log(hero);
}
console.log(heroes.length);

heroes.pop();
heroes.shift();

for(let hero of heroes){
    console.log(hero);
}

heroes.splice(2,3);


console.log(heroes.length);
for(let hero of heroes){
    console.log(hero);
}


console.log(heroes.length);

let intro = heroes.map(hero => "Hello My name is " + hero);
console.log(intro); 