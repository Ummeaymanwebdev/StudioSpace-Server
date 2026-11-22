
import { MongoClient } from "mongodb";

let client;
let db;
let connectionPromise;

async function createIndexes(database) {
  await Promise.all([
    database.collection("studios").createIndex({
      ownerEmail: 1,
      createdAt: -1,
    }),

    database.collection("studios").createIndex({
      category: 1,
      rating: -1,
      createdAt: -1,
    }),

    database.collection("bookings").createIndex({
      studioId: 1,
      date: 1,
      status: 1,
    }),

    database.collection("bookings").createIndex({
      guestEmail: 1,
      createdAt: -1,
    }),
  ]);
}

export async function getDb() {
  if (db) return db;

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  if (!connectionPromise) {
    client = new MongoClient(process.env.MONGODB_URI);

    connectionPromise = client
      .connect()
      .then(async () => {
        const database = client.db("studiospace");

        await createIndexes(database);

        db = database;
        return db;
      })
      .catch(async (error) => {
        await client.close().catch(() => {});
        client = undefined;
        connectionPromise = undefined;
        throw error;
      });
  }

  return connectionPromise;
}
