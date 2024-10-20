const About = require('../Models/aboutModel');

exports.addNewAbout = async (req, res) => {
    try
    {
        const about = await About.findOne({});
        if (!about) {
            let img = "http://localhost:3000/images/";
            if(req.file?.filename){
                img += req.file?.filename;
            }else{
                img += 'muhammad.JPG';
            }
            const newAbout = {
                description: req.body.description,
                cv: req.body.cv,
                image: img
            };
            const result = await About.create(newAbout);
            return res.status(201).json(result);
        }

        let img = "http://localhost:3000/images/";
        if(req.file?.filename){
            img += req.file?.filename;
        }else{
            img = about.image;
        }
        
        const newAbout = {
            description: req.body.description || about.description,
            cv: req.body.cv || about.cv,
            image: img 
        }
        const result = await About.findOneAndUpdate({},newAbout,{new:true});
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

exports.getAbout = async (req, res) => {
    try
    {
        const about = await About.findOne({});
        if (!about) {
            return res.status(404).send('No About Found');
        }
        res.status(200).json(about);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

