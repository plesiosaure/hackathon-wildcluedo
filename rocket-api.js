const request = require('request');

// https://rocket.chat/docs/developer-guides/rest-api/

/*request.get('https://demo.rocket.chat/api/v1/info', function (error, response, body) {
console.log('error:', error); // Print the error if one occurred
console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
console.log('body:', body); // Print the HTML for the Google homepage.
});*/

const domain = 'https://wildcluedo.herokuapp.com/api/v1/';

request.post({
    url: domain + 'login',
    form: {
        "user": "cgibert+heroku@gmail.com",
        "password": "Wildcluedo!"
    }


}, function (error, response, body) {
    const json = JSON.parse(body);

    const authToken = json.data.authToken;
    const userId = json.data.userId;

    setInterval(function () {

        request.get({
            url: domain + 'chat.postMessage',
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
                    console.log(index);
                    /* for (let i in objBody) {
                        console.log(i);
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
                    //} */

                }
            }
        })

    }, 1000);

    /* setInterval(function () {

        request.post({
            url: domain + 'chat.postMessage',
            headers: {
                'X-Auth-Token': authToken,
                'X-User-Id': userId
            },
            form: {
                "channel": "#general",
                "text": "BLIP BLOP BOT"
            }


        },

            function (error, response, body) {
            })


    }, 3000); */

});

