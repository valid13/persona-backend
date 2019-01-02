const { server } = require('./server.js');
const environement = require('./environment.json');

server.listen(environement.serverPort, () => {
    console.log('Test app on ', environement.serverPort)
})
