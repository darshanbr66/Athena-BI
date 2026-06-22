import { MongoClient } from "mongodb";

let collection;

export const connectDB = async () => {

  if (collection) return collection;

  const client = new MongoClient(
    process.env.MONGO_URI
  );

  await client.connect();

  const db = client.db(
    process.env.DB_NAME
  );

  collection = db.collection(
    process.env.COLLECTION_NAME
  );

  return collection;
};

export const executePipeline = async (
  pipeline
) => {

  const collection =
    await connectDB();

  const result =
    await collection
      .aggregate(pipeline)
      .toArray();

  return result;
};