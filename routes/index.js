const express = require('express');
const router = express.Router();
const { IncomingWebhook, WebClient } = require('@slack/client');

const url = "https://hooks.slack.com/services/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";
const webhook = new IncomingWebhook(url);

const token = "xoxp-429168385154-429046675235-431106254775-803928ae74ccd314519fbf8c6e01ca9c";
const channelID = "CCMEC99S5";

const web = new WebClient(token);

router.get('/', (req, res, next) => res.render('index', { title: 'Express' }));

router.post('/whtest', WHTest);

router.get("/usuarios", (req, res, next) => {

})

function WHTest (req, res, next) {
  const { action, pull_request, sender, review, repository} = req.body;


   
  switch(action) {
    case "review_requested":
      console.log("review")
      break
    case "synchronize":
      console.log("actualize el PR")
      break
    case "submitted": {
      console.log("aprobado",review.state === 'approved')
      break;
      //TODO COMMENT CASE
    }
    case "closed": {
      console.log("PR cerrado")
    }
    case "opened":
      const repoName = repository.name;
      const { title, user, html_url, requested_reviewers, labels, head /*bug branch*/, base/*master o dev*/, mergeable/*diferente de null y recien comparar booleano*/ } = pull_request;
      console.log("creo PR", title, user, requested_reviewers, head, base)
      break
  }

  console.log(req.body)      
  //res.json(req.body)


  web.chat.postMessage({
  
    channel: channelID,
    text: "Probando",
    "attachments": [
      {
        "fallback": "Plan a vacation",
        "author_name": "Owner: rdesoto",
        "title": "Plan a vacation",
        "text": "I've been working too hard, it's time for a break.",
        "actions": [
          {
            "name": "action",
            "type": "button",
            "text": "Complete this task",
            "style": "",
            "value": "complete"
          },
          {
            "name": "tags_list",
            "type": "select",
            "text": "Add a tag...",
            "data_source": "static",
            "options": [
              {
                "text": "Launch Blocking",
                "value": "launch-blocking"
              },
              {
                "text": "Enhancement",
                "value": "enhancement"
              },
              {
                "text": "Bug",
                "value": "bug"
              }
            ]
          }
        ]
      }
    ]
  }, (err, res) => {
    if (err) return console.error(err)
    return console.log('Message sent: ', res);
  })  
}
module.exports = router;
