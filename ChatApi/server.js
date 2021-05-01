var express = require('express');
var app = express();
var port = 3000;

app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const chatHistory = [];
const nickNames = [];

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  // Pass to next layer of middleware
  next();
});

// test
app.get('/', function (req, res, next) {
  res.json({ message: 'hsg chat-app api works...' });
});

// history
app.get('/history', function (req, res, next) {
  res.send(chatHistory);
});

app.post('/history', function (req, res, next) {
  const chatMessage = req.body?.message;
  const nickName = req.body?.nickName;

  if (!chatMessage || !nickName) {
    res.status(400).send('Bad request.');
    return;
  }

  const date = new Date();
  const message = {
    id: chatHistory.length + 1,
    message: chatMessage,
    nickName: nickName,
    createdAt: date,
  };

  chatHistory.push(message);

  res.json(message);
});

// nicknames
app.get('/nicknames', function (req, res, next) {
  res.send(nickNames);
});

app.get('/nicknames/:id', function (req, res, next) {
  // simple for loop
  //   for (var i = 0; nicknames.length > 0; i++) {
  //     var nickname = nicknames[i]

  //     if (nickname && nickname.id === req.params.id) {
  //       res.send({ username: nickname.username, id: nickname.id })
  //     }
  // }

  //   foreach in array
  //   nicknames.forEach((nickname) => {
  //     if (nickname && nickname.id === req.params.id) {
  //       res.send({ username: nickname.username, id: nickname.id })
  //     }
  //   })

  // build-in .find function
  const id = +req.params.id;
  const nickName = nickNames.find((e) => e.id === id);

  if (!nickName) {
    res.status(404).send('Not found.');
    return;
  }

  res.send(nickName);
});

app.post('/nicknames', function (req, res, next) {
  const userName = req.body?.userName;

  if (!userName) {
    res.status(400).send('Bad request.');
    return;
  }

  if (!isNicknameUnique(userName)) {
    res.status(400).send('Bad request.');
    return;
  }

  const date = new Date();
  const nickName = {
    id: nickNames.length + 1,
    userName: userName,
    createdAt: date,
  };

  nickNames.push(nickName);

  res.json(nickName);
});

function isNicknameUnique(nickName) {
  return !nickNames?.some((e) => e.userName === nickName);
}

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
