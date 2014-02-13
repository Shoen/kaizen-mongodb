var MongoClient = require('mongodb').MongoClient;

exports.connect = function(config) {
    var self = this;
    MongoClient.connect(config.uri, function(err, db) {
        if (err) throw err;
        self.db = db;
    });
    return 0;
};

exports.save = function(obj) {
    this.db.collection('log').insert(obj, {
        w: 1
    }, function(err) {
        if (err) console.warn(err.message);
        if (err && err.message.indexOf('E11000 ') !== -1) {}
    });
};
