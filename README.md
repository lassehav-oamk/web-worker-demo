# Web Worker Demonstration

This project demonstrates the use of web worker and how to communicate between threads.
The demo case is random number generation and their distribution. Large amount of random numbers are generated and then the distribution of the generated numbers is updated in specified (in code) chunks. 

Most browsers require web server for the web worker to start. Dependency to npm http-server is included. 

## How to get started
Clone and execute the following commands
```
npm install
npx http-server .
```
Then open your browser at the presented address (default) 127.0.0.1:8080


