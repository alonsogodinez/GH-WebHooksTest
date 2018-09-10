const express = require('express');
const router = express.Router();
const { IncomingWebhook } = require('@slack/client');

const url = "https://hooks.slack.com/services/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";
const webhook = new IncomingWebhook(url);



router.get('/', (req, res, next) => res.render('index', { title: 'Express' }));

router.post('/whtest', WHTest);



function WHTest (req, res, next) {
  console.log(req.body)
  res.json(req.body)
  // webhook.send({
  //   "text": "Te amo sayda ❤️❤️",
  //   "attachments": [
  //     {
  //       "fallback": "Plan a vacation",
  //       "author_name": "Owner: rdesoto",
  //       "title": "Plan a vacation",
  //       "text": "I've been working too hard, it's time for a break.",
  //       "actions": [
  //         {
  //           "name": "action",
  //           "type": "button",
  //           "text": "Complete this task",
  //           "style": "",
  //           "value": "complete"
  //         },
  //         {
  //           "name": "tags_list",
  //           "type": "select",
  //           "text": "Add a tag...",
  //           "data_source": "static",
  //           "options": [
  //             {
  //               "text": "Launch Blocking",
  //               "value": "launch-blocking"
  //             },
  //             {
  //               "text": "Enhancement",
  //               "value": "enhancement"
  //             },
  //             {
  //               "text": "Bug",
  //               "value": "bug"
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }, (err, res) => {
  //   if (err) {
  //     console.log('Error:', err);
  //   } else {
  //     console.log('Message sent: ', res);
  //   }
  // });
  
}
module.exports = router;
