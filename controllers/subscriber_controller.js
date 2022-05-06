const Subscriber = require('../models/subscriber');
const Topic = require('../models/topic');

// function to create subscriber
module.exports.add = async function(req,res){
    let topic = await Topic.findById(req.body.topic);
    try{
        if(topic){
            let subscriber = await Subscriber.create({
                name: req.body.name,
                email: req.body.email,
                topic: req.body.topic
            })

            topic.subscriber.push(subscriber);
            topic.save();
    
            // return res.redirect('back');
            return res.json(200, {
                message: "Subscriber Added Successfully"
            })
        }

    }catch(err){
        // console.log(req.body);
        console.log('Error in adding subscriber: ', err);
        return res.json(500, {
            message: "Internal Server Error"
        })
    }

};