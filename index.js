const server = require("./server");

const PORT = 5000;

server.listen(PORT, () => {
    console.log("Login server running on port", PORT);
})