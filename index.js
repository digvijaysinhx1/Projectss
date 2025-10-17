function mul(x){
    return function multi(y){
        return x * y;
    }
}

let multiply = mul(2)

console.log(multiply(5))