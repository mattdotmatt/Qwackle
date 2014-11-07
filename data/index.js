/**
 * Created by myoung on 07/11/14.
 */
(function(data) {

    var database = require("./database");

    data.getGames = function(next){
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

    data.createNewGame = function (gameName, next){
        database.getDb(function (err ,db){
            if(err){
                next(err,null);
            } else{
                var game = {
                    name: gameName
                };
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
})(module.exports);
