import  TodoModel  from "../../database/Model";
import Connectdatabse from "../../database/connection";
import nc from "next-connect";

const app = nc()

Connectdatabse()

app.get(async (req, res) => {
    try {
        const data = await TodoModel.find()
        res.send(data);
    }
    catch (err) {
        res.status(404).send("Invalid request");
    }
})

app.post(async (req, res) => {
    const { title , description, status } = req.body
    try {
        const data = await TodoModel.create({title:title, description: description, status: status})
        res.send("task created successfully")
    }
    catch (err) {
        res.status(404).send(err.message)
    }
})

app.patch(async (req, res) => {
    try{
        const data = await TodoModel.findOneAndUpdate({_id:req.body._id},{$set:req.body})
        res.send("successfully updated")
    }
    catch(err){ 
        res.status(404).send(err.message)
    }
})

app.delete(async (req, res) => {
    const _id = req.body
    try{
        const data = await TodoModel.findOneAndDelete({_id: _id})
        res.status(200).send("delete successfully")
    }
    catch(err) {
        res.status(500).send(err.message)
    }
})
export default app 