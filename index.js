// let num = parseInt(prompt("Enter a number: "));
// for(let i = 1; i<=num; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

// for(let i = 1; i <=100; i++){
//     if(i % 3 === 0 && i % 5 ===0){
//         console.log(`${i}-- this number is divisible by both 3 and 5.`)
//     }
// }

// for(let i = 1; i<=100; i++){
//     console.log(i);
//     if(i % 7 === 0){
//         break;
//     }
// }

// for(let i = 1; i <= 20; i++){
//     if(i % 3 === 0){
//         continue;
//     }
//     console.log(i);
// }
let count = 0;
for(let i = 1; i<= 100; i++){
    if(i % 2 !==0){
        count++;
        console.log(i);
    }
    
    if(count === 5) break;
}