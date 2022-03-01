

use gsy_db
db.gsy_coll.insertOne( { x: 1 } );
db.gsy_coll.createIndex( { y: 1 } );

db.createCollection("gsy_coll");

db.new_coll.insertMany([
  {
    "name": "Kamil",
    "my_age": 22
  },
  {
    "my_name": "Kamil",
    "my_age": 20
  },
  {
    "THisIsMyName": "johny",
    "my_age": 25,
    "SomethingElse": "colombo"
  }
]);


db.new_coll.find( { 'THisIsMyName' : 'johny' } );

db.new_coll.find(
  {
    my_age : {$lt : 23}
  }
);

db.new_coll.updateOne({name : "Kamil"}, {$set: {my_age: 30}});
db.new_coll.updateOne({THisIsMyName: "johny"}, {$unset: {"SomethingElse": null} } );


db.new_coll.deleteOne({name: "Kamil"});
db.new_coll.deleteMany({});
db.new_coll.drop();


