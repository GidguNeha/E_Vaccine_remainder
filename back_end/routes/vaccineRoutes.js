const express = require("express");
const Vaccine = require("../models/Vaccine");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const vaccines = await Vaccine.find();

        res.json(vaccines);

    } catch (error) {
        res.status(500).json({
            message: "Error getting vaccines"
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const vaccine = new Vaccine(req.body);

        await vaccine.save();

        res.status(201).json(vaccine);

    } catch (error) {
        res.status(500).json({
            message: "Error adding vaccine"
        });
    }
});

module.exports = router;