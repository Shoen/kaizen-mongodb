var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

exports.connect = function(config) {
    var self = this;
    self.collection = config.collection || 'log';
    MongoClient.connect(config.uri, function(err, db) {
        if (err) throw err;
        self.db = db;
    });
};

exports.update = function(obj) {
    var self = this;
    this.db.collection(self.collection).update({
        _id: new ObjectId(obj._id.toString())
    }, {
        $set: {
            res: obj.res
        }
    }, {
        w: 0
    });
};

exports.save = function(obj) {
    var self = this;
    this.db.collection(self.collection).insert(obj, {
        w: 0,
    });
};
