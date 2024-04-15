const { app } = require('@azure/functions');


app.http('get_notification', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        let fs = require('fs');
        console.log('get_notification function is called');
        fs.readFile('notification.json', 'utf8', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
});
