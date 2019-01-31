var express = require('express');
var app = express();

var homeRouter = express.Router();
var roomsRouter = express.Router({mergeParams: true});

homeRouter.use('/:homeId/rooms', roomsRouter);

homeRouter.route('/')
    .get(function (req, res) {
        res.status(200)
            .send('hello homes');
    });

homeRouter.route('/:homeId')
    .get(function (req, res) {
        res.status(200)
            .send('hello home ' + req.params.homeId);
    });

roomsRouter.route('/')
    .get(function (req, res) {
        res.status(200)
            .send('rooms from home id ' + req.params.homeId);
    });

roomsRouter.route('/:itemId')
    .get(function (req, res) {
        res.status(200)
            .send(' room: ' + req.params.itemId + ' from home id ' + req.params.homeId);
    });

app.use('/home', homeRouter);

app.listen(3003);
