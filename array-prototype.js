const myArrFunc = function (){
    
    const sum = this.reduce((prev, curr)  => prev + curr, 0);

    return sum;
}

Array.prototype.mySum = myArrFunc;

const myArr = [1, 2, 3];

const sum = myArr.mySum();

console.log(sum);