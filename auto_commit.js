const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const FILE_PATH = 'daily_entries.js';
const COMMIT_COUNT = 10; // Number of commits per day

// Array of possible code snippets and comments
const codeSnippets = [
    {
        topic: 'Prime Numbers',
        content: () => `
// Function to check if a number is prime
function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}`,
    },
    {
        topic: 'Blockchain',
        content: () => `
// Simple blockchain block structure
class Block {
    constructor(timestamp, data, previousHash = '') {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
}`,
    },
    {
        topic: 'AI',
        content: () => `
// Simple neural network activation function
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}`,
    }
];

// Function to generate random entry
function generateEntry() {
    const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    const timestamp = new Date().toISOString();
    return `\n// Entry added at ${timestamp}\n// Topic: ${snippet.topic}\n${snippet.content()}\n`;
}

// Function to make a commit
function makeCommit(index) {
    return new Promise((resolve, reject) => {
        // Add new entry to file
        fs.appendFileSync(FILE_PATH, generateEntry());

        // Git commands
        const commands = [
            'git add .',
            `git commit -m "Daily update ${index + 1} - ${new Date().toISOString()}"`,
            'git push'
        ];

        // Execute git commands
        exec(commands.join(' && '), (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error}`);
                reject(error);
                return;
            }
            console.log(`Success: Commit ${index + 1} completed`);
            resolve();
        });
    });
}

// Main function to make multiple commits
async function makeMultipleCommits() {
    try {
        for (let i = 0; i < COMMIT_COUNT; i++) {
            await makeCommit(i);
            // Add random delay between commits (1-5 seconds)
            await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 4000));
        }
        console.log('All commits completed successfully!');
    } catch (error) {
        console.error('Error in commit process:', error);
    }
}

// Create file if it doesn't exist
if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, '// Daily Code Entries\n');
}

// Run the script
makeMultipleCommits();
