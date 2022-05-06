const Topic = require('../models/topic');

// function to create topic
module.exports.add = function(req,res){
    try{
        Topic.create({
            title: req.body.title
        },  function(err, topic){
            if(err){
                console.log('Problem in adding topic: ', err);
            }
        })

        // return res.redirect('back');
        return res.json(200, {
            message: "Topic Added Successfully"
        })

    }catch(err){
        console.log('Error in adding topic: ', err);
        return res.json(500, {
            message: "Internal Server Error"
        })
    }

};