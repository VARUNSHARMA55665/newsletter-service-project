const Nodemailer = require('./config/nodemailer');
const Topic = require('./models/topic');
const Content = require('./models/content');
const Subscriber = require('./models/subscriber');
var cron = require('node-cron');

Topic.find({}, async function(err, topic){
    if(err){
        console.log('Error in sending mail: ' + err);
        return;
    }

    for(var top of topic){
        for(var cont of top.content){
            var eachCont = await Content.findById(cont)  // each content Element
            // console.log(eachCont);
            for(var sub of top.subscriber){
                var eachSub = await Subscriber.findById(sub);  // each subscriber
                mailing(top,eachCont,eachSub);
            }
        }
    }
});

var i = 1;
function mailing(top, eachCont, eachSub){
    cron.schedule('*/3 * * * *', () => {   // executes after every 3 minutes
        setTimeout(async () => {
            var mailOptions = {
                from: 'test55665@gmail.com',
                to: eachSub.email,
                subject: top.title,
                text: eachCont.contentText
            };
            
            Nodemailer.transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        },2000*i++)
    });
}

  module.exports = Nodemailer.transporter;