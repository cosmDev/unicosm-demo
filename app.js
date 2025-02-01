const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const port = 8420;
// Use the whole root as static files to be able to serve the html file and
// the build folder
app.use(express.static(path.join(__dirname, '/')));
// Send html on '/'path

// Single routing
const router = express.Router();
 
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '/index.html'));
})
 
app.use(router);
 
// Create the server and listen on port
http.createServer(app).listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});