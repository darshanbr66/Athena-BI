import "dotenv/config";

import { executePipeline }
from "./src/services/mongo.service.js";

const pipeline = [
  {
    $group: {
      _id: "$organization",
      attorneyCount: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      attorneyCount: -1
    }
  },
  {
    $limit: 5
  }
];

const result =
  await executePipeline(
    pipeline
  );

console.log(result);