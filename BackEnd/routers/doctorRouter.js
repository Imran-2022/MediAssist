const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint to get doctor recommendation based on symptoms
const getDoctorRecommendation = async (req, res) => {
    try {
        const { symptoms } = req.body;
        if (!symptoms) return res.status(400).send('Symptoms are required');
        
        // Call FastAPI backend for AI-based doctor recommendation
        const response = await axios.post(`${process.env.AI_MODEL}/predict`, { symptoms });
        // console.log(response.data.recommended_specialist,"specialist");
        return res.status(200).send(response.data);
    } catch (error) {
        console.error('Error fetching doctor recommendation:', error);
        return res.status(500).send('Server error');
    }
};

router.post('/get-recommendation', getDoctorRecommendation);

module.exports = router;
