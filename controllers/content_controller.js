const Content = require('../models/content');
const Topic = require('../models/topic');

// function to create content
module.exports.add = async function(req,res){
    let topic = await Topic.findById(req.body.topic);
    try{
        if(topic){
            let content = await Content.create({
                topic: req.body.topic,
                contentText: req.body.contentText,
                sendTime: Date.parse(req.body.sendTime)
            })
            topic.content.push(content);  // updating in ram
            topic.save();  // saving in database

            // return res.redirect('back');
            return res.json(200, {
                message: "Content Added Successfully"
            })

        }

    }catch(err){
        console.log('Error in adding content: ', err);
        return res.json(500, {
            message: "Internal Server Error"
        })
    }

};