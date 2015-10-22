var mongoose = require('mongoose');
var restify = require('express-restify-mongoose');
var _ = require('lodash');

module.exports = function (router){
  _.each(mongoose.models, (m, key) => {
    restify.serve(router, m);
  });
};
