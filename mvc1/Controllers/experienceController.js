const Experience = require('../Models/experienceModel');
const months = require('../Utili/educationData')

exports.addNewExperience = async (req, res) => {
    try {
        if( req.body.company === undefined || req.body.title === undefined || req.body.description === undefined || req.body.startDate === undefined || req.body.endDate === undefined){
            return res.status(400).send('All data are required');
        }
        const data = req.body;
        let startDate = new Date(req.body.startDate);
        data.startDate = months[startDate.getMonth() - 1] + ' ' + startDate.getFullYear();
        let endDate ;
        if(req.body.endDate != 'present'){
            endDate = new Date(req.body.endDate);
            if(endDate < startDate){
                return res.status(400).send('End date must be greater than start date');
            }
            data.endDate = months[endDate.getMonth() - 1] + ' ' +endDate.getFullYear();
        }else{
            endDate = 'present';
        }
        const experience = await Experience.create(data);
        res.status(201).json(experience);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getExperience = async (req, res) => {
    try {
        const experience = await Experience.find();
        res.status(200).json(experience);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteExperience = async (req, res) => {
    try {
        const experience = await Experience.findByIdAndDelete(req.params.id);
        if (!experience) {
            return res.status(404).send('Experience not found');
        }
        res.status(200).json(experience);
    } catch (error) {
        res.status(500).send(error.message);
    }
}