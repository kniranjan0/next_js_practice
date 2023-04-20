import mongoose from "mongoose";

const Connectdatabse = async () => {
    await mongoose.connect(process.env.Mongo_DB_Connection)
    console.log("connection established")
}
export default Connectdatabse