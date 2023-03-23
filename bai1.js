const a = [5, 4, 1, 2, 3];

const isPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); ++i) {
        if (n % i) continue;
        return false;
    }
    return n > 1;
};

const ans = a.filter(n => isPrime(n));
ans.sort((n1, n2) => n1 - n2);
console.log(ans);
