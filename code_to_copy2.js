use new_db
db.products.insertMany( [
      { item: "card", qty: 15 , name: "card_1"},
      { item: "card", qty: 12,  name: "card_2"},
      { item: "envelope", qty: 20,  name: "envelope_1"},
      { item: "stamps" , qty: 30,  name: "stamps_1"},
      { item: "stamps" , qty: 15, name: "stamps_2" }
      ]);

db.products.countDocuments();

db.products.countDocuments({ item: "card" });

db.products.distinct("item");




db.products.aggregate([{"$match": {"qty": {"$in": [15,12]}}}]);

db.products.aggregate([
{"$group": {
    "_id": {"item": "$item"},
    "summary": {"$sum": "$qty"}}}
]);

db.products.aggregate([{"$sort": {"qty": -1}},]);

db.products.aggregate([
    {"$project": {"_id": 0, "qty": "$qty",
              "new_name": "$name"}}
              ]);