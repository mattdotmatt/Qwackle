/**
 * Created by myoung on 07/11/14.
 */
(function (database){
    var mongodb = require("mongodb");
    var mongoUrl = "mongodb://localhost:27017/Qwackle";
    var theDb = null;

    database.getDb = function (next){
        if (!theDb){
            // Connect to the database
            mongodb.MongoClient.connect(mongoUrl, function (err, db){
                if (err){
                    next(err,null);
                } else {
                    theDb = {
                        db: db,
                        games:db.collection("games"),
                        users:db.collection("users")
                    };
                    next(null,theDb);
                }
            })
        } else {
            next(null,theDb);
        }
    }
})(module.exports);
