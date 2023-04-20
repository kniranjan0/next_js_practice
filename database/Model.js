import mongoose  from "mongoose"

const TodoSchema = new mongoose.Schema({
    title : String,
    description : String,
    status : Boolean,
})

const TodoModel = mongoose.models.Apppa ||  mongoose.model("Apppa", TodoSchema)

module.exports =TodoModel ;