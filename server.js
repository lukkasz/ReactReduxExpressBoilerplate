const express = require('express');
const PORT = process.env.PORT || 1337;
const SERVER = process.env.IP || 'localhost';
// Create out app
const app = express();

app.use(express.static('public'));

app.listen(PORT, SERVER, function(){
   console.log('server running on port: ' + PORT );
});