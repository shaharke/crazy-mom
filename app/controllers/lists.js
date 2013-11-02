/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    async = require('async'),
    List = mongoose.model('List'),
    _ = require('underscore');


/**
* Find list by id
*/
exports.list = function(req, res, next, id) {
    List.load(id, function(err, list) {
        if (err) return next(err);
        if (!list) return next(new Error('Failed to load list ' + id));
        req.list = list;
        next();
    });
};

/**
* Create a list
*/
exports.create = function(req, res) {
    var list = new List(req.body);
    list.user = req.user;

    list.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                list: list
            });
        } else {
            res.jsonp(list);
        }
    });
};

/**
* Update a list
*/
exports.update = function(req, res) {
    var list = req.list;

    list = _.extend(list, req.body);

    list.save(function(err) {
        res.jsonp(list);
    });
};

/**
* Delete an list
*/
exports.destroy = function(req, res) {
    var list = req.list;

    list.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(list);
        }
    });
};

/**
* Show an list
*/
exports.show = function(req, res) {
    res.jsonp(req.list);
};

/**
* List of Lists
*/
exports.all = function(req, res) {
    List.find().sort('-created').populate('user', 'name username').exec(function(err, lists) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(lists);
        }
    });
};