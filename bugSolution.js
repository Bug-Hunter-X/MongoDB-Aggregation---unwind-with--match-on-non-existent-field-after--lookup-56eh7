```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocs",
    },
  },
  {
    $match: {
      relatedDocs: { $ne: [] }, // Ensure relatedDocs is not empty
      "relatedDocs.0.foreignKey": { $exists: true }, //Check if foreignKey exists in at least one doc
    }
  },
  {
    $unwind: "$relatedDocs",
  },
  {
    $match: {
      "relatedDocs.someField": {
        $exists: true, //Explicitly check for existence
      },
    },
  },
];

Await db.collection('collectionA').aggregate(pipeline);
```