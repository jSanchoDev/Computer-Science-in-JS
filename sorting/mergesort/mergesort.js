// test input
const test = [5,7,31,2,12,1,11,23,6,22,13,4,9,10,8,3];

/**
 * Merge helper
 * merges two arrays into one, ordered
 */
function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        result.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    return result.concat(left).concat(right);
}

/**
 * Merge sort
 */
function mergeSort(input) {
    let sublists = input.map(item => [item]); // split input list into array of smallest sublists

    // merge till 1 sublist left
    while (sublists.length > 1) {
        let next = [];
        for (let i = 0; i < sublists.length; i += 2) {
            next.push(merge(sublists[i], i < sublists.length - 1 ? sublists[i + 1] : []));
        }
        sublists = next; // move on to the next level
    }

    return sublists.pop(); // first and only item left is a sorted array
}

// check
console.log(mergeSort(test));