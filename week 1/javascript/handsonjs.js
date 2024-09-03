function simpleint(p,r,n){
    const i= (p*r*n)/100;
    return `${i}`;
}

function ac(r){
    const pi=3.14;
    const area= pi*r*r;
    const c= 2*pi*r;
    return `Area: ${area} and circumference: ${c}`;
}

function table(){
    let ans=7;
    for(let i=1; i<=10; i++){
        // ans *= i;
        console.log(`${7*i}`);
    }
}

function fib(){
    const a=0;
    const b=1;
    for(let i=0; i<=10; i++){
        sum +=i;
        console.log(`${sum}`);
    }
}

console.log(`${simpleint(2,3,5)}`);
console.log(`${ac(4)}`);
table();
fib();