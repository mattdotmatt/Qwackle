/**
 * Created by myoung on 07/11/14.
 */
(function(data) {

    var database = require("./database");
    var ObjectId = require('mongodb').ObjectID;

    data.getGames = function(player, next){
        database.getDb(function (err ,db){
           if(err){
               next(err,null);
           } else{
               db.games.find().toArray(function(err, results){
                   if(err){
                       next(err,null);
                   } else {
                       next(null,results);
                   }
               });
           }
        });
    };

    data.getGame = function(id, next){
        database.getDb(function (err ,db){
            if(err){
                next(err,null);
            } else{
                db.games.findOne({ _id:new ObjectId(id)}, function(err, results){
                    if(err){
                        next(err,null);
                    } else {
                        next(null,results);
                    }
                });
            }
        });
    };

    data.createNewGame = function (game, next){
        database.getDb(function (err ,db){
            if(err){
                next(err,null);
            } else{
                db.games.insert(game, function(err){
                    if(err){
                        next(err);
                    } else {
                        next(null);
                    }
                })
            }
        });
    }

    data.addUser = function (user, next) {
        database.getDb(function (err, db) {
            if (err) {
                console.log("Failed to seed database: " + err);
            } else {
                db.users.insert(user, next);
            }
        });
    };

    data.getUser = function (username, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.users.findOne({ username: username }, next);
            }
        });
    };
})(module.exports);
