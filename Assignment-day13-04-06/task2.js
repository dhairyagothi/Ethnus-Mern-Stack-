function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generatePrimes() {
    const start = parseInt(document.getElementById('start').value, 10);
    const end = parseInt(document.getElementById('end').value, 10);
    let primes = [];

    if (isNaN(start) || isNaN(end) || start > end) {
        document.getElementById('result').value = "Please enter valid start and end values.";
        return;
    }

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) primes.push(i);
    }

    document.getElementById('result').value = primes.join(', ');
}