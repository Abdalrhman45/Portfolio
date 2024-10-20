const Home = require('../Models/homeModel');

exports.addNewHome = async (req,res)=>{
    try
    {
        const home = await Home.findOne({});
        if (!home) {
            let img = "http://localhost:3000/images/";
            if(req.file?.filename){
                img += req.file?.filename;
            }else{
                img += 'emile.jpg';
            }
            const newHome = {
                name: req.body.name || 'Muhammad Khaled',
                title: req.body.title || 'Software Engineer',
                image: img
            };
            const result = await Home.create(newHome);
            return res.status(201).json(result);
        }

        let img = "http://localhost:3000/images/";
        if(req.file?.filename){
            img += req.file?.filename;
        }else{
            img = home.image;
        }
        
        const newHome = {
            name: req.body.name || home.name,
            title: req.body.title || home.title,
            image: img 
        }
        const result = await Home.findOneAndUpdate({},newHome,{new:true});
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

exports.getHome = async (req,res)=>{
    try
    {
        const home = await Home.findOne({});
        if (!home) {
            return res.status(404).send('No Home Found');
        }
        res.status(200).json(home);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};