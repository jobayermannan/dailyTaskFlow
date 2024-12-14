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
