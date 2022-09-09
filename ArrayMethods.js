//push
const arr1 = [10, 20, 30];
const push = arr1.push(50);
// console.log(typeof push); // =>4(array length)
// console.log(arr1); // => [ 10, 20, 30, 50 ] modified main array

//pop
// pop method remove last index of the array
// it manupulate original array
// const arr2 = [10, 20, 30];
// const pop = arr2.pop();
// const pop1 = arr2.pop();
// console.log(pop); // =>30(removed elem fo array)
// console.log(pop1); // =>20(removed elem fo array)
// console.log(arr2); // =>[10]modified main array

const arr3 = [10, 20, 30];
const unshift = arr3.unshift(80);
const unshift1 = arr3.unshift(90);
console.log(unshift); // =>4 (array length)
console.log(unshift1); // =>5(array length)
console.log(arr3); // =>[ 90, 80, 10, 20, 30 ] modified main array
