const express = require("express")
const {createCompliantHandler,getComplaintsHandler,updateComplaintHandler} = require ("./complaint.controller.js")

const router = express.Router()

router.route("/").post(createCompliantHandler).get(getComplaintsHandler)
router.put("/:id",updateComplaintHandler)


module.exports = router