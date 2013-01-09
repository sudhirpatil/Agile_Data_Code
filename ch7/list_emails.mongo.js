use agile_data;
show collections;
db.emails.findOne();
db.emails.find();
db.emails.find().sort({date: 1});
// error: {
//  "$err" : "too much data for sort() with no index.  add an index or specify a smaller limit",
//  "code" : 10128
}
db.emails.getIndexes();
// [
//  {
//    "v" : 1,
//    "key" : {
//      "_id" : 1
//    },
//    "ns" : "agile_data.emails",
//    "name" : "_id_"
//  }
// ]
db.emails.ensureIndex({date: 1}); // Add an index on date
db.emails.getIndexes();
// [
//  {
//    "v" : 1,
//    "key" : {
//      "_id" : 1
//    },
//    "ns" : "agile_data.emails",
//    "name" : "_id_"
//  },
//  {
//    "v" : 1,
//    "key" : {
//      "date" : 1
//    },
//    "ns" : "agile_data.emails",
//    "name" : "date_1"
//  }
// ]
db.emails.find().sort({date: 1});
// ... lots of sorted emails ...
