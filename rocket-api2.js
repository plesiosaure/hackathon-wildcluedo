/* Post mesaage on room in chat
function postMessage (msg){
rocketChatApi.sendMsg ("asdfasfd", msg, function(err, body){
if (err)
console.log(err);
else
console.log (body);

});
}

const RocketChatApi = require ('rocketchat').RocketChatApi;

}  ``
rocket.chat
Rocket.Chat Docs - REST API
Rocket.Chat Docs
    ``const request = require('request');

// https://rocket.chat/docs/developer-guides/rest-api/

/*request.get('https://demo.rocket.chat/api/v1/info', function (error, response, body) {
console.log('error:', error); // Print the error if one occurred
console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
console.log('body:', body); // Print the HTML for the Google homepage.
});*/



request.post({
    url: 'https://chat.wildcodeschool.fr/api/v1//login',
    form: {
        "user": "cams_00@hotmail.com",
        "password": "****"
    }
}, function (error, response, body) {

    const json = JSON.parse(body);

    const authToken = json.data.authToken;
    const userId = json.data.userId;

    setInterval(function () {

        request.get({


            //changer URL POUR GET

            url: 'https://chat.wildcodeschool.fr/api/v1/chat.postMessage',
            headers: {
                'X-Auth-Token': authToken,
                'X-User-Id': userId
            }
        }, function (error, response, body) {

            if (error) {
                console.log(error);
            }
            else {
                var objBody = JSON.parse(body).messages;
                for (let index in objBody) {
                    let msg = objBody[index].msg;
                    let author = objBody[index].u.name;
                    let msgId = objBody[index]._id;

                    for (let i in objBody) {



                    }
                    //(??)TODO: Custom regex for get only spotify song id(?) let regex = /spotify\.com\
                    // if (regex.test(msg)) {
                    // console.log(regex.exec(msg)[1])
                    // unreadMessages.push({
                    // 'idMsg': msgId,
                    // 'idSong': id,
                    // 'author': author, 
                    //
                    //});
                    //}

                }
            }
        })

    }, 1000);

    setInterval(function () {

        request.post({
            url: 'https://chat.wildcodeschool.fr/group/hackathon1-musikbot/api/v1/chat.postMessage',
            headers: {
                'X-Auth-Token': authToken,
                'X-User-Id': userId
            },
            form: {
                "channel": "#general",
                "text": "||||||BLIP BLOP BOT|||||"
            }


        },

            function (error, response, body) {
            })


    });

}, 3000);

/* Post mesaage on room in chat
function postMessage (msg){
rocketChatApi.sendMsg ("asdfasfd", msg, function(err, body){
if (err)
console.log(err);
else
console.log (body);

});
}

const RocketChatApi = require ('rocketchat').RocketChatApi;

}  `*/
 
