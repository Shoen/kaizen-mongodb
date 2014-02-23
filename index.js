var MongoClient = require('mongodb').MongoClient;

exports.connect = function(config) {
    var self = this;
    self.collection = config.collection || 'log';
    MongoClient.connect(config.uri, function(err, db) {
        if (err) throw err;
        self.db = db;
    });
};

exports.save = function(obj) {
    var self = this;
    this.db.collection(self.collection).save(obj, {
        w: 0
    });
};
