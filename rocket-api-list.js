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

    request.get({
            url: domain + 'im.list',
            headers: {
                'X-Auth-Token': authToken,
                'X-User-Id': userId
            }
        },

            function (error, response, body) {
                const json = JSON.parse(body);
               // console.log(body);
               // console.log(json.ims);
                json.ims.forEach(function(el){
                    console.log(el._id);
                    request.post({
                        url: domain + 'chat.getMessage',
                        headers: {
                            'X-Auth-Token': authToken,
                            'X-User-Id': userId
                        },
                        form: {
                            "msgId": el._id
                        }
            
            
                    },
            
                        function (error, response, body) {
                            console.log(response);
                        })

                });
               
            })
    

});

