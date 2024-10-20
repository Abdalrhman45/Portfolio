const Services = require('../Models/servicesModel');

exports.addNewService = async (req, res) => {
    try {
        if(req.body.title === undefined || req.body.description === undefined){
            return res.status(400).send('Title and Description are required');
        }
        const service = await Services.create(req.body);
        res.status(201).json(service);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getServices = async (req, res) => {
    try {
        const services = await Services.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteService = async (req, res) => {
    try {
        const service = await Services.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).send('Service not found');
        }
        res.status(200).json(service);
    } catch (error) {
        res.status(500).send(error.message);
    }
}