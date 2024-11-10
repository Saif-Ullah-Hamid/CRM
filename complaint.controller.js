const Complaint = require("./complaint.model.js")

// Creating complaints
async function createCompliantHandler(req, res) {
    const { title, description } = req.body
    if (!(title || description)) {
        return res.status(400).json({ message: "title or description missing" })
    }
    try{
        await Complaint.create({
            title: title,
            description: description,
        })
        return res.status(201).json({ message: "complaint registred successfully" })
    }
    catch{
        return res.status(500).json({message:"Error creating complaint "})
    }
}

// Getting complaints 
async function getComplaintsHandler(req, res) {
    try {
        const complaints = await Complaint.find({})
        res.send(complaints)
    }
    catch{
        return res.status(500).json({message:"Error retrieving complaints"})
    }
    
}


// Updating complaints
async function updateComplaintHandler(req, res) {

    const { description } = req.body
    if (!(req.params.id && description)) return res.status(400).json({message:"id or description missing"})

    try {
        const updatedComplaint = await Complaint.findByIdAndUpdate(req.params.id, { description: description })
         res.status(201).json({ message: "updated successfully" })
    }
    catch{
        return res.status(404).json({ message: "Not found" })
}
}



module.exports = {
    createCompliantHandler,
    getComplaintsHandler,
    updateComplaintHandler
}