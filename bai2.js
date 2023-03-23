const findNthFibonacci = n => {
    if (n < 0) return -1;
    if (n <= 1) return n;
    let f0 = 0,
        f1 = 1,
        fn;
    for (let i = 2; i <= n; ++i) {
        fn = f0 + f1;
        f0 = f1;
        f1 = fn;
    }
    return fn;
};

const ans = findNthFibonacci(5);
if (ans === -1) console.log("No fibonacci");
else console.log("ans: ", ans);
