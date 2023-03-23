const n = 3;
const a = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7];
const calFactorial = n => {
    let total = 1;
    for (let i = 2; i <= n; i++) {
        total *= i;
    }
    return total;
};
// function combination(n, k) {
//     if (k === 0 || k === n) {
//         return 1;
//     }
//     return calFactorial(n) / (calFactorial(k) * calFactorial(n - k));
// }

function combination(n, k) {
    if (k === 0 || k === n) {
        return 1;
    }
    return combination(n - 1, k - 1) + combination(n - 1, k);
}
const cntUniqueNumber = new Set(a).size;

if (cntUniqueNumber < n) {
    console.log("Ko tim dc dap an!!");
    return;
}
console.log(combination(cntUniqueNumber, n));
