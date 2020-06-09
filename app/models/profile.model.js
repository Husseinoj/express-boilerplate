import mongoose from '../../config/database';
import profileSchema from '../../db/db.schema';

const schema = mongoose.Schema(profileSchema);

export default mongoose.model('Profile', schema);