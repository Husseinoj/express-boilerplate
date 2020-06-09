import mongoose from 'mongoose';

// TODO: use env to handle all env in all project
const databaseUrl= '127.0.0.1'
const databasePort= '27017';
const databaseName = 'mydb';

mongoose.connect(`mongodb://${databaseUrl}:${databasePort}/${databaseName}`)

export default mongoose;