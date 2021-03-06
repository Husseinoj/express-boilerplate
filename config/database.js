import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const databaseUrl  = process.env.DATABASE_URL
const databasePort = process.env.DATABASE_PORT;
const databaseName = process.env.DATABASE_NAME;

mongoose.connect(`mongodb://${databaseUrl}:${databasePort}/${databaseName}`)

export default mongoose;