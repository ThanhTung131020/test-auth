var arr = [7, 10, 2, 3, 5];
//sort array in ascending order
arr.sort((a, b) => a - b)
// funcion minimum
const sumMin = (array) => {
    var min = 0;
    for (let index = 0; index < 4; index++) {
        min += array[index];
    }
    console.log('sum min : ' + min);
    return min;
}
// funcion maximum
const sumMax = (array) => {
    var max = 0;
    for (let index = 1; index < 5; index++) {
        max += array[index];
    }
    console.log('sum max: ' + max);
    return max;
}
//funcion sum element in array
const sumArr = (array) => {
    var sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    console.log('sum of elements: ' + sum);
    return sum;
}
// function to count even numbers
const even = (array) => {
    console.log('even numbers: ');
    for (let index = 0; index < array.length; index++) {
        if (arr[index] % 2 === 0) {
            console.log(arr[index]);
        }
    }
}
// function to count odd numbers
const odd = (array) => {
    console.log('odd numbers');
    for (let index = 0; index < array.length; index++) {
        if (arr[index] % 2 != 0) {
            console.log(arr[index]);
        }
    }
}
//print out the elements in the array
const element = (array) => {
    console.log('Elements in the array : ' + array[0] + ' ' + array[1] + ' ' + array[2] + ' ' + array[3] + ' ' + array[4]);
}
//call the function
sumMin(arr);
sumMax(arr);
sumArr(arr);
element(arr)
console.log('The smallest element in the array: ' + arr[0]);
//print the largest element in the array
console.log('The largest element in the array: ' + arr[4]);
even(arr)
odd(arr)

console.log('unit test ');


// Unit test using chai library (Chai.js)
const assert = chai.assert;
//unit test sumMin
describe('unit test sumMin', function () {
    it('must return the minimum sum of 4 elements in a 5-element array', function () {
        // Test case 1
        const array1 = [1, 2, 3, 4, 5];
        const result1 = sumMin(array1);
        assert.strictEqual(result1, 10);

        // test case 2
        const array2 = [2, 4, 6, 8, 10];
        const result2 = sumMin(array2);
        assert.strictEqual(result2, 20);
    });


});
//unit test sumMax
describe('unit test sumMax', function () {
    it('must return the maxisum of 4 elements in a 5-element array', function () {
        // Test case 1
        const array1 = [1, 2, 3, 4, 5];
        const result1 = sumMax(array1);
        assert.strictEqual(result1, 14);

        // test case 2
        const array2 = [2, 4, 6, 8, 10];
        const result2 = sumMax(array2);
        assert.strictEqual(result2, 28);
    });


});
//unit test sumArr
describe('unit test sumArr', function () {
    it('must return the sum of the 5 element array', function () {
        // Test case 1
        const array1 = [1, 2, 3, 4, 5];
        const result1 = sumArr(array1);
        assert.strictEqual(result1, 15);

        // test case 2
        const array2 = [2, 4, 6, 8, 10];
        const result2 = sumArr(array2);
        assert.strictEqual(result2, 30);
    });


});