import request from 'request';

export const handler = (event,context, callback){
    let key = process.env.restdbKey;
    var options = {
        method: 'GET',
        url: 'https://hinklegame-175e.restdb.io/rest/highscore',
        headers: 
        { 'cache-control': 'no-cache',
        'x-apikey': key}
    };
   request(options, 
    function(error, response, body){
        callback(null, {
            statusCode: 200,
            body,
        });
    });
};