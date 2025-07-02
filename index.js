const http = require('http');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send a response
    res.end('<h1>Hello World!</h1><p>This is a basic Node.js server.</p>');
});

// Set the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});