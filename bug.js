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
    $unwind: "$relatedDocs",
  },
  {
    $match: {
      "relatedDocs.someField": {
        $exists: false,
      },
    },
  },
];

Await db.collection('collectionA').aggregate(pipeline);
```