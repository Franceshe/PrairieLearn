var ERR = require('async-stacktrace');
var _ = require('lodash');

module.exports = function(req, res, next) {
    res.locals.urlPrefix = '/pl/' + req.params.course_instance_id;
    next();
};
