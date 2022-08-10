var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "FakeStore",
    "dataSource": "ClusterADSI2364481",
    "documents":[{"title":"PC gamer PRO", "price":89.99}, 
    {"title":"Lucecitas LED", "price":20.25}]
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-qlmwt/endpoint/data/v1/action/insertMany',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'FBoN8VVFxhEG3AL9FZvEDV8rnfQRfnm0DH3VtoV5jwaMnvkS3T5vRfCmUWDHnTnv',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
