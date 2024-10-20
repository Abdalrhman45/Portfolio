const Education = require('../Models/educationModel');
const months = require('../Utili/educationData')

exports.addNewEducation = async (req, res) => {
    try {
        if( req.body.school === undefined || req.body.title === undefined || req.body.description === undefined || req.body.startDate === undefined || req.body.endDate === undefined){
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
        const education = await Education.create(data);
        res.status(201).json(education);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getEducation = async (req, res) => {
    try {
        const education = await Education.find();
        res.status(200).json(education);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteEducation = async (req, res) => {
    try {
        const education = await Education.findByIdAndDelete(req.params.id);
        if (!education) {
            return res.status(404).send('Education not found');
        }
        res.status(200).json(education);
    } catch (error) {
        res.status(500).send(error.message);
    }
}