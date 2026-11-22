import "dotenv/config";
import { getDb } from "./db.js";

try {
  const db = await getDb();
  await db.command({ ping: 1 });

  console.log("✅ MongoDB Connected Successfully!");
  console.log("Database:", db.databaseName);
  process.exit(0);
} catch (error) {
  console.error("❌ MongoDB Connection Failed!");
  console.error(error.message);
  process.exit(1);
}