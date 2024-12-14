// Daily Code Entries

// Entry added at 2024-12-14T07:16:08.445Z
// Topic: Blockchain

// Simple blockchain block structure
class Block {
    constructor(timestamp, data, previousHash = '') {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
}

// Entry added at 2024-12-14T07:16:15.319Z
// Topic: AI

// Simple neural network activation function
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

// Entry added at 2024-12-14T07:16:20.770Z
// Topic: Blockchain

// Simple blockchain block structure
class Block {
    constructor(timestamp, data, previousHash = '') {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
}

// Entry added at 2024-12-14T07:16:26.857Z
// Topic: Blockchain

// Simple blockchain block structure
class Block {
    constructor(timestamp, data, previousHash = '') {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
}

// Entry added at 2024-12-14T07:16:30.325Z
// Topic: Blockchain

// Simple blockchain block structure
class Block {
    constructor(timestamp, data, previousHash = '') {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
}

// Entry added at 2024-12-14T07:16:33.524Z
// Topic: Prime Numbers

// Function to check if a number is prime
function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
