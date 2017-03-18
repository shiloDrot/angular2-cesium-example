let express = require('express');
let app = express();
let http = require('http');
let httpServer = http.createServer(app);
let io = require('socket.io')(httpServer);
let bodyParser = require('body-parser');
let cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

httpServer.listen(3000, function () {
  console.log('listening on *:3000');
});

let numOfEntities = 30;
let interval = 500;
let intervalId;
let numOfEntitiesInOneSocket = 15;
let socket;

io.on('connection', function (connectionSocket) {
  socket = connectionSocket;
  intervalId = sendEntities();
});

app.get('/data', function (req, res) {
  res.send({
    numOfEntities: numOfEntities,
    interval: interval,
    numOfEntitiesInOneSocket: numOfEntitiesInOneSocket
  });
});

app.post('/change', function (req, res, next) {
  console.log(`change to: ${JSON.stringify(req.body)}`);

  numOfEntities = req.body.numOfEntities;
  interval = req.body.interval;
  numOfEntitiesInOneSocket = req.body.numOfEntitiesInOneSocket;
  intervalId = sendEntities();
  res.send('changed successfully');
});

function sendEntities() {
  let counter = 0;
  clearInterval(intervalId);
  const newIntervalId = setInterval(() => {
    let startId = counter % numOfEntities;
    counter += numOfEntitiesInOneSocket;
    let data = createCollection(startId);
    io.emit('lines', data);
  }, interval);

  return newIntervalId;
}

function createCollection(startId) {
  let data = [];
  for (let i = startId; i < numOfEntities && i < startId + numOfEntitiesInOneSocket; i++) {
    let getSign = Math.random() > 0.5 ? 1 : -1;
    data.push({
      id: i,
      action: 'ADD_OR_UPDATE',
      entity: {
        id: i,
        name: 'line' + i,
        position: {
          lat: 60 * Math.random() * getSign,
          long: 100 * Math.random() * getSign
        }
      }
    });
  }
  return data;
}
