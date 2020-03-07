var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Photos = require ('../models/photos');

const photosRouter = express.Router();

photosRouter.use(bodyParser.json());

photosRouter.route('/')
.get((req,res,next) => {
    Photos.find({})
    .then((photos) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(photos);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Photos.create(req.body)
    .then((photo) => {
        console.log('Photo Uploaded ', photo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(photo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /photos');
})
.delete((req, res, next) => {
    Photos.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

dishRouter.route('/:photoId')
.get((req,res,next) => {
    Photos.findById(req.params.photoId)
    .then((photo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(photo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /photos/'+ req.params.photoId);
})
.put((req, res, next) => {
    Photos.findByIdAndUpdate(req.params.photoId, {
        $set: req.body
    }, { new: true })
    .then((photo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(photo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Photos.findByIdAndRemove(req.params.photoId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});






module.exports = photosRouter;